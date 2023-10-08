import express from "express";
import { getUserLike, likeRes, likeUser } from "../controllers/likeResController.js";


const likeRoute = express.Router()

//xử lý like/ unlike
likeRoute.get("/user", getUserLike)

//lấy danh sách người like theo nhà hàng (dùng params )
likeRoute.get("/like-res/:res_id", likeRes)

//lấy danh sách nhà hàng đã like theo user 
likeRoute.get("/like-user", likeUser)



export default likeRoute


