'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { AdminShell } from '@/components/admin/AdminShell';
import { ProjectForm } from '@/components/admin/ProjectForm';
import type { Project } from '@/types/project';

export default function EditProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/admin/projects/${params.id}`);
      if (res.ok) {
        setProject(await res.json());
      } else {
        setError('Project not found');
      }
      setLoading(false);
    }
    load();
  }, [params.id]);

  return (
    <AdminShell>
      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center py-12 text-red-600">{error}</div>
      ) : project ? (
        <ProjectForm project={project} mode="edit" />
      ) : null}
    </AdminShell>
  );
}
