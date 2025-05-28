import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '6n2f6btb',   // 👈 Replace this!
  dataset: 'production',          // Or your actual dataset
  apiVersion: '2023-01-01',       // Can be any date in YYYY-MM-DD
  useCdn: true,                   // false = always fresh data, true = faster
});