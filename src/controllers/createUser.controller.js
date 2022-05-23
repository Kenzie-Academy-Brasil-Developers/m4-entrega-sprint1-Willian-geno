import createUserService from "../services/createUser.services"

const cretateUserController = async (req, res) =>{
    const user = req.body
    
    const newUser = await createUserService(user)

    return res.json(newUser)
}

export default cretateUserController;