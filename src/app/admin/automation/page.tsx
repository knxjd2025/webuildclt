'use client';

import { useEffect, useState, useCallback } from 'react';
import { AdminShell } from '@/components/admin/AdminShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Play, Clock, Calendar } from 'lucide-react';

interface AutoBlogLogEntry {
  id: string;
  type: string;
  keyword: string;
  status: string;
  created_at: string;
}

interface AutomationStatus {
  last_run: string | null;
  next_run: string | null;
}

const LOG_STATUS_COLORS: Record<string, string> = {
  success: 'bg-green-100 text-green-800',
  failed: 'bg-red-100 text-red-800',
  pending: 'bg-yellow-100 text-yellow-800',
  running: 'bg-blue-100 text-blue-800',
};

export default function AutomationPage() {
  const [logs, setLogs] = useState<AutoBlogLogEntry[]>([]);
  const [automationStatus, setAutomationStatus] = useState<AutomationStatus>({
    last_run: null,
    next_run: null,
  });
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [logsRes, statusRes] = await Promise.all([
        fetch('/api/admin/automation/logs'),
        fetch('/api/admin/automation/status'),
      ]);

      if (logsRes.ok) {
        setLogs(await logsRes.json());
      }
      if (statusRes.ok) {
        setAutomationStatus(await statusRes.json());
      }
    } finally {
      setLoading(false);
    }
  }

  const handleGenerateNow = useCallback(async () => {
    if (!confirm('Generate a new blog post now?')) return;

    setGenerating(true);
    try {
      const res = await fetch('/api/cron/weekly-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Generation failed' }));
        alert(err.message ?? 'Failed to generate blog post');
        return;
      }

      // Refresh data
      await fetchData();
    } finally {
      setGenerating(false);
    }
  }, []);

  function formatDate(dateStr: string | null): string {
    if (!dateStr) return 'Never';
    return new Date(dateStr).toLocaleString();
  }

  function getNextMonday9AM(): string {
    const now = new Date();
    const day = now.getDay();
    const daysUntilMonday = day === 0 ? 1 : 8 - day;
    const next = new Date(now);
    next.setDate(now.getDate() + daysUntilMonday);
    next.setHours(9, 0, 0, 0);
    return next.toLocaleString();
  }

  if (loading) {
    return (
      <AdminShell>
        <div className="text-center py-12 text-gray-500">Loading...</div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Blog Automation</h1>
        <p className="text-gray-500 mt-1">
          Manage automated blog post generation
        </p>
      </div>

      {/* Automation card */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Weekly Auto-Blog
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Last Run</p>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium">
                  {formatDate(automationStatus.last_run)}
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Next Run</p>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium">
                  {automationStatus.next_run
                    ? formatDate(automationStatus.next_run)
                    : getNextMonday9AM()}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Every Monday at 9:00 AM</p>
            </div>
            <div className="flex items-end">
              <Button onClick={handleGenerateNow} disabled={generating}>
                {generating ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Play className="h-4 w-4 mr-2" />
                )}
                Generate Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Log table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          {logs.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No automation activity yet
            </p>
          ) : (
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Keyword
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {logs.map((entry) => (
                    <tr key={entry.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {entry.type}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {entry.keyword || '—'}
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          className={
                            LOG_STATUS_COLORS[entry.status] ??
                            'bg-gray-100 text-gray-700'
                          }
                        >
                          {entry.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {new Date(entry.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </AdminShell>
  );
}
