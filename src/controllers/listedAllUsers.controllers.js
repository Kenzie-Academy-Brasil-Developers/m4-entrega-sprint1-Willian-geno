import listedAllUserServices from "../services/listedAllUser.services"

const listedAllUserControlles = (req, res) => {    
    const user = listedAllUserServices()

    return res.status(200).json(user) 
}

export default listedAllUserControlles
