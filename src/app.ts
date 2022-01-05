import * as express from "express";
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Book } from "./entity/Book";
import { v4 as uuidv4 } from "uuid";

const port = 5000;

const app = express();
app.use(express.json());
(async () => {
  // createConnection().then((connection) => {
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "typeormdemo",
    entities: [Book],
  });
  const userRepository = connection.getRepository(Book);

  app.get("/books", async (req: Request, res: Response) => {
    const books = await userRepository.find();
    res.json(books);
  });

  app.get("/books/:id", async (req: Request, res: Response) => {
    const result = await userRepository.findOne(req.params.id);
    return res.send(result);
  });

  app.post("/books", async (req: Request, res: Response) => {
    const data = { ...req.body, id: uuidv4() };
    const book = await userRepository.create(data);
    const results = await userRepository.save(book);
    return res.send(results);
  });

  app.put("/books/:id", async (req: Request, res: Response) => {
    const book = await userRepository.findOne(req.params.id);
    await userRepository.merge(book, req.body);
    const results = await userRepository.save(book);
    return res.send(results);
  });

  app.delete("/books/:id", (req: Request, res: Response) => {
    const results = userRepository.delete(req.params.id);
    return res.send(results);
  });

  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
})();
