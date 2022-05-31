import jwt from "jsonwebtoken"
import users from "../database"

const verifyAdim = (req, res, next) => {
    const token = req.headers.authorization
    const {id} = req.params

    const idUser = jwt.decode(token)
    const user = users.filter((item) => item.id === idUser.id)[0]
    const userIsUpdate = (id)?  users.filter((item) => item.id === id)[0] : false
  
  
    console.log(user.isAdm)
    console.log(user.isAdm === true)



    
    if (!user){
        return res.status(400).json("user nao encontrado")
    }

    if (user.isAdm === true){
        next()
    }
    if (userIsUpdate){
        if (user.id === userIsUpdate.id){
        next()
        }
    }else{
    return res.status(401)
        .json({message:"Você não tem permição para acessar essa rota"})
    }



}

export default verifyAdim;