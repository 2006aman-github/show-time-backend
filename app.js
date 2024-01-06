import express from "express";

const app = express();
import { config } from "dotenv";

config();

let port = process.env.PORT || 3000;

app.get("/api/cookies", (req, res) => {
  const cookies = [
    {
      id: 1,
      name: "Britania Premium",
    },
    {
      id: 2,
      name: "Mom's Magic",
    },
    {
      id: 3,
      name: "Tiger Crunch",
    },
    {
      id: 4,
      name: "Patanjali Biscuits",
    },
    {
      id: 5,
      name: "Dark Fantasy",
    },
  ];
  res.send(cookies);
});

app.get("/chai", (req, res) => {
  res.send("<H1>PLEASE LOGIN!!</H1>");
});

app.listen(port, () => {
  console.log(`Show-Time-Backend listening on port ${port}`);
});
