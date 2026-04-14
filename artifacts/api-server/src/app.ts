import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import path from "node:path";
import { existsSync } from "node:fs";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// âââ Rotas da API âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
app.use("/api", router);

// âââ Frontend estÃ¡tico (produÃ§Ã£o) âââââââââââââââââââââââââââââââââââââââââââââ
// Serve os arquivos do code-editor diretamente do servidor da API em produÃ§Ã£o.
// Isso garante que WebSocket e frontend ficam no MESMO serviÃ§o, sem problemas
// de roteamento de proxy entre serviÃ§os diferentes.
const STATIC_DIR = path.resolve(process.cwd(), "artifacts/code-editor/dist/public");
if (process.env["NODE_ENV"] === "production" && existsSync(STATIC_DIR)) {
  app.use(express.static(STATIC_DIR, { maxAge: "1d" }));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(STATIC_DIR, "index.html"));
  });
  logger.info({ dir: STATIC_DIR }, "Servindo frontend estÃ¡tico em produÃ§Ã£o");
}

export default app;
