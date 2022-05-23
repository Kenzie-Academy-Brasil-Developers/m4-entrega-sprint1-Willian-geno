import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    let token = req.headers.authorization

    if(!token){
        return res
        .status(401)
        .json({message:"Missing Autorizarion Token"})
    }

    jwt.verify(token, "SECRET_KEY", (error, decaded) => {
        if (error){
            return res
            .status(401)
            .json({message:"Unauthorized"})
        }
        next()
    })
}

export default verifyToken