import express from "express";
import likeRoute from "./likeRoute.js";
import rateRoute from "./rateRoute.js";


const rootRouter = express.Router()


rootRouter.use("/like", likeRoute)
rootRouter.use("/rate", rateRoute)


export default rootRouter