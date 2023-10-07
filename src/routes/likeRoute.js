import express from "express";
import { getUserLike, likeRes, likeUser } from "../controllers/likeResController.js";


const likeRoute = express.Router()
likeRoute.get("/user", getUserLike)
likeRoute.get("/like-res/:res_id", likeRes)
likeRoute.get("/like-res", likeUser)



export default likeRoute


