import React from 'react';
import Logo from './Assets/Ohmapp-icon.png';
import GooglePlayLogo from './Assets/Google-play.png';
import AppleLogo from './Assets/App-store.png';
import MockUp from './Assets/Home-screen-phone-mockup.png';

//import { PushButton } from "react-cupertino";
import './Features.css';

export class LandingSlide1 extends React.Component< {}, {} >
{
    render()
    {
        return(
            <div className = "Landing1">
                <div>
                    <img id="omcoinLogo" src={Logo} alt="Omcoin Logo" />
                </div>
                <div>
                    <img id="googleLogo" src={GooglePlayLogo} alt="GooglePlay Logo" />
                    <img src={AppleLogo} alt="Apple Logo" />
                </div>
                <p id ="buttonSpacing">Button</p>
                <div>
                    
                </div>
                <h1>A meditation experience  with crypto rewards. </h1>
                <h1> with crypto rewards.</h1>
                <img src={MockUp} alt="MockUp" />
            </div>
        )
    }
}

export default LandingSlide1;