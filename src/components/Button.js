import React from 'react'
import './Button.css'

const Button = ({imp, text, link}) => {
    return (
        <div id="button1" className={`button ${imp === 'secondary' ? 'button__white' : ''}`}>
            <a href={link}>
                {text}
            </a>  
        </div>
    )
}

export default Button;