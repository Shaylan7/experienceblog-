import express from "express";

import * as db from "./db.mjs";

const experienceRouter = express.Router();

experienceRouter.get("/", async (request, response) => {
  const entries = await db.getExperienceEntries();
  response.json(entries);
});

experienceRouter.use(express.json());
experienceRouter.post("/", async (request, response) => {
  const entry = await db.addExperienceEntry(request.body);
  response.status(201).json(entry);
});

export default experienceRouter;
