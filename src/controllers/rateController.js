import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const model = initModels(sequelize)


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
            amount
        })
        res.send('Đã rate thành công')
    }

}

export { addRate } 