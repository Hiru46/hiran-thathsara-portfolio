import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import { portfolio } from './data.js';

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: process.env.CLIENT_URL ? [process.env.CLIENT_URL] : true }));
app.use(express.json({ limit: '32kb' }));

const contactLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false
});

app.get('/api/health', (_req, res) => res.json({ status: 'ok', mongo: mongoose.connection.readyState === 1 }));
app.get('/api/portfolio', (_req, res) => res.json(portfolio));
app.post('/api/contact', contactLimit, (req, res) => {
  const { name, email, subject, message } = req.body ?? {};
  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return res.status(400).json({ ok: false, message: 'Please provide a valid name, email and message.' });
  }
  return res.status(200).json({ ok: true, message: 'Thanks! Your message has been validated. Connect with Hiran by email for a direct reply.' });
});

const clientDist = path.resolve(__dirname, '../client/dist');
app.use(express.static(clientDist));
app.get('*', (_req, res) => res.sendFile(path.join(clientDist, 'index.html')));

async function start() {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected');
    } catch (error) {
      console.warn(`MongoDB unavailable: ${error.message}`);
    }
  }
  app.listen(port, () => console.log(`Portfolio server running on port ${port}`));
}

start();
