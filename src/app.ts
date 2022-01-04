import * as express from "express";
import { Request, Response } from "express";
import { Book } from "./entity/Book";

const port = 5000;

const app = express();
app.use(express.json());

app.get("/books", (req: Request, res: Response) => {});

app.get("/books:id", (req: Request, res: Response) => {});

app.post("/books", (req: Request, res: Response) => {});

app.put("/book:id", (req: Request, res: Response) => {});

app.delete("/books:id", (req: Request, res: Response) => {});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
