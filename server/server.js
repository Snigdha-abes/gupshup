import 'dotenv/config'; // This automatically loads env variables from .env
import { connectDB } from './db/connection1.db.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000; // Fallback port in case .env is missing

// Middleware (optional, like body parser)
// server.js
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // include both if needed
    credentials: true,
  })
);

console.log("CLIENT_URL:", process.env.CLIENT_URL);

app.use(express.json());
app.use(cookieParser()); // Parse cookies from requests

// Routes
import userRoute from './routes/user.route.js';
import messageRoute from './routes/message.route.js';
app.use('/api/v1/user', userRoute);
app.use('/api/v1/message', messageRoute);
//middlewares
import { errorMiddleware } from './middlewares/error.middleware.js';
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});
connectDB();
// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
