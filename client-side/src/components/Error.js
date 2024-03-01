import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>
                Error
            </h1>
            <div style={{ textAlign: 'center' }}>
                    <h2>
                        <button style={{textAlign: "center" }} onClick={() => { navigate("/") }}>Home</button>
                    </h2>
             </div>
        </div>
    )
}
