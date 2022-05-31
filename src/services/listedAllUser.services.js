import users from "../database"

const listedAllUserServices = () => {

    const usersSerializer = users.map((item) => {
        return {
            id: item.id,
            name: item.name ,
            email: item.email,
            isAdm: item.isAdm,
            createdOn: item.createdOn,
            updateOn: item.updateOn,
        }
    })
    return usersSerializer
   
}

export default listedAllUserServices