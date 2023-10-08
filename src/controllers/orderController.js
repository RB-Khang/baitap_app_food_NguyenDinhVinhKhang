import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const model = initModels(sequelize)


//tạo thôi chưa cập nhật
// require từ FE phải gửi theo body : 
/**
 * {
    "user_id": number,
    "order": [
        {
            "food_id": number,
            "amount": number
        },
        {
            "food_id": number,
            "amount": number
        }
    ],
    "code": string
}
 */



const addOrder = async (req, res) => {
    const { user_id, order, code } = req.body
    
    //bóc tách order để tạo nhiều bản ghi
    order.forEach(async (item) => {
        const { food_id, amount } = item
        await model.orders.create({
            user_id,
            food_id,
            amount,
            code
        })
    })
    res.send('Đã đặt món thành công')
}


export { addOrder }