import users from "../database"
import jwt from "jsonwebtoken"
import * as bycrypt from "bcryptjs" 


const updateUserServices = async (id, data) => {
    const userIsUpdate = users.filter((item) => item.id === id)[0]
    

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

export default updateUserServices