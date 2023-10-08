import express from "express";
import likeRoute from "./likeRoute.js";
import rateRoute from "./rateRoute.js";
import orderRoute from "./orderRoute.js";


const rootRouter = express.Router()


rootRouter.use("/like", likeRoute)
rootRouter.use("/rate", rateRoute)
rootRouter.use("/order", orderRoute)


export default rootRouter