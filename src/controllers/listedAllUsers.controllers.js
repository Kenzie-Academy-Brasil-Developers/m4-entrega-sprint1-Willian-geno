import listedAllUserServices from "../services/listedAllUser.services"

const listedAllUserControlles = (req, res) => {
    const token = req.headers.authorization
    
    const user = listedAllUserServices(token)

    if(!user){
        return res
        .status(401)
        .json({message:"Você não tem permição para acessar essa rota"})
    }
    return res.status(200).json(user) 
}

export default listedAllUserControlles
