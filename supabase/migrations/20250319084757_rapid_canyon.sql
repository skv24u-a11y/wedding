/*
  # Contact Form Submissions Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text) - For tracking follow-up status
  
  2. Security
    - Enable RLS
    - Add policies for inserting data and admin access
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert data
CREATE POLICY "Allow anonymous submissions" 
  ON contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Allow authenticated admin users to read all submissions
CREATE POLICY "Allow admins to read submissions" 
  ON contact_submissions 
  FOR SELECT 
  TO authenticated 
  USING (auth.role() = 'admin');