import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const model = initModels(sequelize)

//xử lý rating, nếu người dùng đã rate thì cập nhật, nếu chưa thì tạo mới bản ghi rate
const addRate = async (req, res) => {
    const { user_id, res_id, amount } = req.body
    const check = await model.rate_res.findOne({
        where: {
            user_id,
            res_id
        }
    })
    if (check) {
        let updateData = {
            amount,
            date_rate: new Date()
        }
        await model.rate_res.update(updateData, {
            where: {
                user_id,
                res_id
            }
        })
        res.send('Đã update rating ')
    }
    else {
        await model.rate_res.create({
            user_id,
            res_id,
            amount,
            date_rate:new Date()
        })
        res.send('Đã rate thành công')
    }
}


//lấy danh sách nhà hàng được đánh giá theo người dùng
const rateByUser = async (req, res) => {
    const { user_id } = req.params
    const ratedRes = await model.like_res.findAll({
        where: {
            user_id
        }
    })
    res.send(ratedRes)
}

//lấy danh sách người dùng đã đánh giá nhà hàng
const userLiked = async (req, res) => {
    const { res_id } = req.params
    const userLiked = await model.like_res.findAll({
        where: {
            res_id
        }
    })
    res.send(userLiked)
}
export { addRate, rateByUser, userLiked } 