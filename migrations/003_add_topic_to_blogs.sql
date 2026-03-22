-- Add topic column to blogs table (stores user's description for AI generation)
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS topic TEXT;
