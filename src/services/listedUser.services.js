import jwt from "jsonwebtoken"
import users from "../database"

const listedUserServices = (token) => {
    const {id} = jwt.decode(token)
    const user = users.filter((item) => item.id === id)
    
    const userSerealizer = {
        id: user[0].id,
        name: user[0].name ,
        email: user[0].email,
        isAdm: user[0].isAdm,
        createdOn: user[0].createdOn,
        updateOn: user[0].updateOn,
    }

    return userSerealizer
}

export default listedUserServices