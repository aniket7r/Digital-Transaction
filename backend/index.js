import express from "express";
import cors from "cors";
import rootRouter from "./routes/rootRouter.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000);