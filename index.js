import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import petRoutes from "./routes/petRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adoptionRoutes from "./routes/adoptionRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("🐾 Pet Adoption API is running!");
});

app.use("/api/v1/pets", petRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/adoptions", adoptionRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
