import listedUserServices from "../services/listedUser.services"

const listedUserController = (req, res) => {
    const token = req.headers.authorization

    const users = listedUserServices(token)

    return res.status(200).json(users)
}

export default listedUserController