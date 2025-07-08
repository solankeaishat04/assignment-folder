import React from "react";
import { createContext, useState, useContext } from "react";

const GlobalProvider= createContext()
export function ContextProvider({children}){
    const [name, setName]=useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("")
    const [welcome, setWelcome]=useState("")
    const [otp, setOtp] =useState("")
    const [board, setBoard] =useState("")
    return (
        <GlobalProvider.Provider value={{
            name, setName,email,setEmail, age, setAge, gender, setGender,phone, setPhone, welcome, setWelcome, otp, setOtp, board, setBoard
        }}>
            {children}
        </GlobalProvider.Provider>
    )
}
export const UseGlobal=()=> useContext(GlobalProvider)