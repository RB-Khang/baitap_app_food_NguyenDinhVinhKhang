import express from "express";
import { addRate } from "../controllers/rateController.js";



const rateRoute = express.Router()

rateRoute.post("/rating", addRate)


export default rateRoute