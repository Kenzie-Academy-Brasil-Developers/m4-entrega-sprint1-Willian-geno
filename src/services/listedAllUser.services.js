import users from "../database"
import jwt from "jsonwebtoken"

const listedAllUserServices = (token) => {
    const idUser = jwt.decode(token)
    const user = users.filter((item) => item.id === idUser.id)[0]

    console.log(user.isAdm)

    if (user.isAdm){
        const usersSerializer = users.map((item) => {
            return {
                id: item.id,
                name: item.name ,
                email: item.email,
                isAdm: item.isAdm,
                createdOn: item.createdOn,
                updateOn: item.updateOn,
            }
        })
        return usersSerializer
    }
    return false
}

export default listedAllUserServices