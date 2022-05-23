import users from "../database"
import jwt from "jsonwebtoken"

const deleteUserServices = (id, token) => {
    const idUser = jwt.decode(token)
    const user = users.filter((item) => item.id === idUser.id)[0]
    const userIsDelete = users.filter((item) => item.id === id)[0]
    const userIndex = users.findIndex(element => element.id === id)

    if (user.isAdm === true){
        return    users.splice(userIndex, 1)
    }else{
        if (user.id === userIsDelete.id){
        return    users.splice(userIndex, 1)
        }
    }
    return false
}

export default deleteUserServices