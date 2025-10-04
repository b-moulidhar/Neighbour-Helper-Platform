import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI|| "";

// Cache connections per database
const connections: { [key: string]: Connection } = {};

export const getConnection = async (dbName: string): Promise<Connection> => {
  if (!connections[dbName]) {
    const conn = await mongoose.createConnection(`${MONGO_URI}${dbName}?retryWrites=true&w=majority&appName=Cluster0`);

    conn.on("connected", () => console.log(`✅ Connected to DB: ${dbName}`));
    conn.on("error", (err) => console.error(`❌ Error connecting to DB ${dbName}:`, err));

    connections[dbName] = conn;
  }
  return connections[dbName];
};
