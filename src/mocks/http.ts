import { createMiddleware } from "@mswjs/http-middleware";
import express from "express";
import cors from "cors";
import { handlers } from "./handlers";

//msw가 next server와 매끄럽게 호환이 안 되기 때문에 노드서버 사용
const app = express();
const port = 9090;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log(`Mock server is ruuning on port: ${port}`));
