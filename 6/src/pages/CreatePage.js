import { useState } from "react"


export default function CreatePage () {

    const [form, setForm] = useState({
        username: "",
        email: ""
    })

    const changeInput = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return(
        <from>
            <input 
            type="text"
            placeholder="username"
            name="username"
            onChange=""
            />
        
            
            <input 
            type="text"
            placeholder=""
            name="username"
            onChange=""
            />

            <button type="submit">create</button>
        </from>
    )
}