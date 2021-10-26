import React, { useEffect, useState } from "react"
import { MainContext, useContext } from "../context"
function Header() {

    const {theme, appendMethods} = useContext(MainContext)
    const [logoText, setLogoText] = useState('bayram.net')

    useEffect(()=>{
        appendMethods({setLogoText})
    },[])   
    
    return (
        <div>
            <h3>{logoText}</h3>
            Current Theme = {theme}
        </div>
    )
}

export default Header
