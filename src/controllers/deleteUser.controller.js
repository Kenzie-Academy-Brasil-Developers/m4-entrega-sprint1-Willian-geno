import deleteUserServices from "../services/deleteUser.services"

const deleteUserController = (req, res) => {
    const token = req.headers.authorization
    const {id} = req.params

    const user = deleteUserServices(id, token)

    if(!user){
        return res
        .status(401)
        .json({message:"Você não tem permição para deletar esse ususario"})
    }
    return res.status(200).json({message:"User deletado"})
}

export default deleteUserController