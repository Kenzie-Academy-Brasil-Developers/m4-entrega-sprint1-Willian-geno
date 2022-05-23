import users from "../database"
import jwt from "jsonwebtoken"
import * as bycrypt from "bcryptjs" 


const updateUserServices = async (id, token, data) => {
    const idUser = jwt.decode(token)
    console.log(idUser)
    const user = users.filter((item) => item.id === idUser.id)[0]
    const userIsUpdate = users.filter((item) => item.id === id)[0]
    console.log(user)
    console.log(userIsUpdate)
    
    if (user.isAdm === true){
        console.log(user.isAdm)
        if (data.name){
            userIsUpdate.name = data.name
        } 
        if (data.email){
            userIsUpdate.email = data.email
        } 
        if (data.password){
            userIsUpdate.password = await bycrypt.hash(data.password, 10)
        } 
        userIsUpdate.updateOn = new Date()

        return {
            id: userIsUpdate.id,
            name: userIsUpdate.name ,
            email: userIsUpdate.email,
            isAdm: userIsUpdate.isAdm,
            createdOn: userIsUpdate.createdOn,
            updateOn: userIsUpdate.updateOn,
        }
    }else{
        if (user.id === userIsUpdate.id){
            if (data.name){
                userIsUpdate.name = data.name
            } 
            if (data.email){
                userIsUpdate.email = data.email
            } 
            if (data.password){
                userIsUpdate.password = await bycrypt.hash(data.password, 10)
            } 
            userIsUpdate.updateOn = new Date()
    
            return {
                id: userIsUpdate.id,
                name: userIsUpdate.name ,
                email: userIsUpdate.email,
                isAdm: userIsUpdate.isAdm,
                createdOn: userIsUpdate.createdOn,
                updateOn: userIsUpdate.updateOn,
            }
        }
    }
    return false
}

export default updateUserServices