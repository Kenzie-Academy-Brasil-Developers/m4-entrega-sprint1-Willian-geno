import updateUserServices from "../services/updateUser.sercive"

const updadeUserController = async (req, res) => {
    const data = req.body
    const {id} = req.params

    const user = await updateUserServices(id, data)
    
    return res.status(200).json(user)   
}

export default updadeUserController