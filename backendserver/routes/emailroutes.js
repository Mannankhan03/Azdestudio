import express from "express";
import { submitHeroForm } from "../controllers/emailcontroller.js";

const emailrouter = express.Router();

emailrouter.post("/contact", submitHeroForm);

export { emailrouter };
