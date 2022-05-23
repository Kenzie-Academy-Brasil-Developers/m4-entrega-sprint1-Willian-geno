import * as bycrypt from "bcryptjs"
import users from "../database"

const verifyLogin = (req, res, next) => {
    const data = req.body
    
    const user = users.find((element) => element.email === data.email)

    if (!user) {
        return res.status(401).json({message:"Wrong email/password"})
    }
   
    const passwordMarch = bycrypt.compareSync(data.password, user.password)

    if (!passwordMarch){
        return res.status(401).json({message:"Wrong email/password"})
    }
    next()
}

export default verifyLogin