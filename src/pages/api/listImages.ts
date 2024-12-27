// pages/api/listImages.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@utils/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { bucket, folder } = req.query;

    if (!bucket || typeof bucket !== 'string') {
      return res.status(400).json({ error: 'Bucket name is required' });
    }

    const folderPath = folder ? `${folder}/` : '';
    const { data, error } = await supabase.storage.from(bucket).list(folderPath);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const urls = data.map((file) =>
      supabase.storage.from(bucket).getPublicUrl(`${folderPath}${file.name}`).data.publicUrl
    );

    res.status(200).json({ images: urls });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
