import users from "../database"

const verifyId = (req, res, next) => {
    const {id} = req.params

    const user = users.find((item) => item.id === id)

    if (!user){
        return res.status(400).json({message:"Id não encontrado"})
    }
    next()
}

export default verifyId