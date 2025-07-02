import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import scrapeAndStoreData from "./scrape-cron.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/update-scrape", async (req, res) => {
  await scrapeAndStoreData();
  res.send('Scraping complete');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
