import users from  '../database'
import {v4 as uuidv4} from "uuid"
import * as bycrypt from "bcryptjs" 

const createUserService = async (user) => {
    const hashPassword = await bycrypt.hash(user.password, 10)

    const newUser = {
        id: uuidv4(),
        name: user.name, 
        email: user.email,
        isAdm: user.isAdm,
        password: hashPassword,
        createdOn: new Date(),
        updateOn:  new Date(),
    }
    users.push(newUser)
    
    const userSerealizer = {
        id: newUser.id,
        name: newUser.name ,
        email: newUser.email,
        isAdm: newUser.isAdm,
        createdOn: newUser.createdOn,
        updateOn: newUser.updateOn,
    }
    return userSerealizer
}

export default createUserService