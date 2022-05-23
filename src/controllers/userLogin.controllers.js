import userLoginServises from "../services/userlogin.services"

const userLoginController = (req, res) => {
    const user = req.body
    const token = userLoginServises(user)

    return res.json(token)
}

export default userLoginController