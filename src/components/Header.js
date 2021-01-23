import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogo.svg'

const header = () => {
    return (
        <div className ='header'>
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla Logo"></img>
            </div>

            <div className="header__center">
                <a href ="https://www.tesla.com/models" className="header__tabs">Model S</a>
                <a href ="https://www.tesla.com/model3" className="header__tabs">Model 3</a>
                <a href ="https://www.tesla.com/modelX" className="header__tabs">Model X</a>
                <a href ="https://www.tesla.com/modelY" className="header__tabs">Model Y</a>
                <a href ="https://www.tesla.com/solarroof" className="header__tabs">Solar Roof</a>
                <a href ="https://www.tesla.com/solarpanels" className="header__tabs">Solar Panel</a>

            </div>

            <div className="header__right">
                <a href ="https://shop.tesla.com/?tesref=true" className="header__tabs">Shop</a>
                <a href ="https://auth.tesla.com/oauth2/v1/authorize?client_id=teslaweb&response_type=code&scope=openid%20email%20profile&redirect_uri=https%3A//www.tesla.com/openid-connect/generic&state=Q9yZQcc8p8Kvo9A3h9xK1FccDq1MAXzsMMzs2iMNtJk&locale=en-US" className="header__tabs">Tesla Account</a>
            </div>
        </div>
    )
}

export default header;