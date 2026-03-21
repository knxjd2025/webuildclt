/**
 * Project types for the portfolio admin system
 * Backed by Supabase Postgres
 */

import { z } from 'zod';

export interface ProjectImage {
  url: string;
  alt: string;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'commercial' | 'residential' | 'roof-coating';
  service_type: string;
  short_description: string;
  ai_content: string | null;
  ai_meta_title: string | null;
  ai_meta_description: string | null;
  address: string | null;
  city: string;
  state: string;
  zip: string | null;
  latitude: number | null;
  longitude: number | null;
  neighborhood: string | null;
  images: ProjectImage[];
  featured_image: string | null;
  square_footage: number | null;
  completion_date: string | null;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

export type ProjectInsert = Omit<Project, 'id' | 'created_at' | 'updated_at'>;

export const projectFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  category: z.enum(['commercial', 'residential', 'roof-coating']),
  service_type: z.string().min(1, 'Service type is required'),
  short_description: z.string().min(10, 'Description must be at least 10 characters'),
  address: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required').max(2),
  zip: z.string().optional(),
  latitude: z.coerce.number().min(-90).max(90).optional(),
  longitude: z.coerce.number().min(-180).max(180).optional(),
  neighborhood: z.string().optional(),
  square_footage: z.coerce.number().positive().optional(),
  completion_date: z.string().optional(),
});

export type ProjectFormData = z.infer<typeof projectFormSchema>;

export const SERVICE_TYPES = [
  'new-construction',
  'renovation',
  'upfit',
  'addition',
  'roof-coating',
  'design-build',
  'custom-home',
  'tenant-improvement',
] as const;
