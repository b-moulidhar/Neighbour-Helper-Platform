import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
