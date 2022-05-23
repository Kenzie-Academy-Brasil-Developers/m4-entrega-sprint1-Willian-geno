import updateUserServices from "../services/updateUser.sercive"

const updadeUserController = async (req, res) => {
    const data = req.body
    const token = req.headers.authorization
    const {id} = req.params


    const user = await updateUserServices(id, token, data)

    if(!user){
        return res
        .status(401)
        .json({message:"Você não tem permição para alterar esse ususario"})
    }
    return res.status(200).json(user)   
}

export default updadeUserController