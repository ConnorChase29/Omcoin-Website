import React from 'react';
import Logo from './Assets/Ohmapp-icon.png';
import GooglePlayLogo from './Assets/Google-play.png';
import AppleLogo from './Assets/App-store.png';

class FeaturesPage extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <div>
                    <img id="omcoinLogo" src={Logo} alt="Omcoin Logo" />
                </div>
                <div>
                    <img id="googleLogo" src={GooglePlayLogo} alt="GooglePlay Logo" />
                    <img src={AppleLogo} alt="Apple Logo" />
                </div>
                <p>Button</p>
                <h1>A meditation experience with crypto rewards</h1>
            </div>
        )
    }
}