import deleteUserServices from "../services/deleteUser.services"

const deleteUserController = (req, res) => {
    const {id} = req.params

    deleteUserServices(id)

    return res.status(200).json({message:"User deletado"})
}

export default deleteUserController