import React from 'react';
import Logo from './Assets/Ohmapp-icon.png';
import GooglePlayLogo from './Assets/Google-play.png';
import AppleLogo from './Assets/App-store.png';
import MockUp from './Assets/Home-Mock.png';
import Button from 'react-bootstrap/Button';
import './Features.css';

export class LandingSlide1 extends React.Component<{}, {}>
{
    render() {
        return (
            <div className="Landing1">
                <div>
                    <img id="omcoinLogo" src={Logo} alt="Omcoin Logo" />
                </div>
                <div>
                    <img id="googleLogo" src={GooglePlayLogo} alt="GooglePlay Logo" />
                    <img src={AppleLogo} alt="Apple Logo" />
                </div>

                <div id="AMeditationText">
                    <style type="text/css">
                        {`
                        h1 {
                            font-size: 64px;
                            font-weight: bold;
                            }
                        `}
                    </style>
                    <h1>A meditation experience
                    <br></br>
                    with crypto rewards.
                    </h1>
                </div>

                <div id="buttonSpacing">
                    <style type="text/css">
                        {`

                    .btn-huge {
                        padding: 2rem 5rem;
                        font-size: 1.5rem;
                        }
                    `}
                    </style>
                    <Button id="buttonStyling" variant="primary" size="huge" className="rounded-pill shadow-box-example z-depth-5" onClick={() => { window.open("https://drive.google.com/file/d/1AfbMaAE5oNiRPjyab-ao9xft6JZCCDdu/view?usp=sharing") }}> Read our white paper </Button>
                </div>
                <div className = "MockUpImage">
                    <img src={MockUp} alt="MockUp" className="center" />
                </div>

            </div>
        )
    }
}

export default LandingSlide1;