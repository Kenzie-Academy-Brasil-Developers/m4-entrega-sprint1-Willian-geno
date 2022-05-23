import users from "../database";

const verifyEmail = (req, res, next) => {
    const {email} = req.body

    const emailExixtent = users.find((user) => user.email === email)

    if (emailExixtent) {
        return res.status(400).json({message:"E-mail already registered"})
    }
    next()
}

export default verifyEmail;