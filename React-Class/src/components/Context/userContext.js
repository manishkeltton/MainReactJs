import React from 'react'

// const UserContext = React.createContext()

//provide default value 
const UserContext = React.createContext("Rudra Sharma")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

//Now working on ContextType

export default UserContext