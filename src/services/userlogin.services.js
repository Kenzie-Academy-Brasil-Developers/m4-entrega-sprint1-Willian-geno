import jwt from "jsonwebtoken"
import users from "../database"

const userLoginServises = (data) => {
    const user = users.find((item) => item.email === data.email)
    const token = jwt.sign({id:user.id}, "SECRET_KEY", {expiresIn:"24h"})

    return token
}

export default userLoginServises