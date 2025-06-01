import express from "express";
import cors from "cors";
import { errorMiddleware } from "../../../packages/error-handler/error-middleware";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT ?? 6001;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send({ message: "Hello API" });
});

app.use(errorMiddleware);

const server = app.listen(PORT, () => {
  console.log(`[ ready ] http://localhost:${PORT}`);
});

server.on("error", (error) => {
  console.error("[Auth Service] Server error", error);
});
