import users from "../database"

const deleteUserServices = (id) => {
    const userIndex = users.findIndex(element => element.id === id)
    
    return    users.splice(userIndex, 1)
}

export default deleteUserServices