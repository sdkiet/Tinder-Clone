//rafce
import React from 'react'
import './Chats.css';
import Chat from "./Chat";
const Chats = () => {
    return (
        <div className="chats">
            <Chat
            name="Kriti"
            message="Hey! whatsUp ?"
            timestamp="25 minutes ago"
            profilePic="https://lh3.googleusercontent.com/proxy/Ih1i6EKta1deLHqqFzp1_Uy-hAQoOuiUyjg_um_3D1EqlXscL0msQRRs2GALA3W8--66INfM2X0e3Az7ePaFZIokS26mLxZ6P2WFxrk1ENGpQyJ-rVBNbG_60iB_FdD6KCmziw"
            />
             <Chat
            name="Neha"
            message="Hey! how r u 😁?"
            timestamp="55 minutes ago"
            profilePic="https://i.pinimg.com/originals/1c/24/25/1c2425a29f391a14b855dc0525ccca52.jpg"
            />
             <Chat
            name="Monica"
            message="Love you to the moon and back 🌕♥️"
            timestamp="35 minutes ago"
            profilePic="https://www.pixel4k.com/wp-content/uploads/2018/09/michelle-monaghan-8k_1536863102.jpg"
            />
             <Chat
            name="Rebecca"
            message="Whats up ♥️?"
            timestamp="10 minutes ago"
            profilePic="https://wallpapercave.com/wp/wp2214860.jpg"
            />
        </div>
    )
}

export default Chats
