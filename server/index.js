import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { ApifyClient } from 'apify-client';
import pool from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize the ApifyClient with your API token
const client = new ApifyClient({
  token: process.env.APIFY_TOKEN,
});

app.get('/scrape', async (req, res) => {
  try {
    const run = await client.task('6zVvrIhemVOd6g0Sf').call();
    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    await pool.query('DELETE FROM parts'); // Optional: clear old data first

    for (const item of items) {
      const [category] = Object.keys(item); // e.g. 'cpu'
      const partsArray = item[category];    // the array of parts
    
      if (!Array.isArray(partsArray)) {
        console.warn(`⚠️ Skipping invalid category: ${category}`);
        continue;
      }
      for (const part of partsArray) {
        let name = part.name?.trim();
        name = name.replace(/\s*\([^)]*\)$/, '');
        const price = extractPrice(part.price);
        const url = part.url;
    
        if (!name || !price || !url) continue;
    
        await pool.query(
          'INSERT INTO parts (category, name, price, url) VALUES ($1, $2, $3, $4)',
          [category, name, price, url]
        );
      }
    }
    

    res.json({ message: '✅ Parts scraped and saved to database!' });
  } catch (error) {
    console.error('Scrape error:', error);
    res.status(500).json({ error: 'Failed to scrape and save' });
  }
});

// helper to clean price strings
function extractPrice(rawPrice) {
  const match = rawPrice?.match(/\$?([\d,.]+)/);
  return match ? parseFloat(match[1].replace(',', '')) : null;
}



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
