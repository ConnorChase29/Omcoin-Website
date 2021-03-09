import React from 'react';
import './Features.css';

export class LandingSlide2 extends React.Component<{}, {}>
{
    render() {
        return (
            <div id="Overview" className="Landing2">
                <div className="TextPadding">
                    <h1 className = "TitleText">
                        <span className="blueText">First </span>
                        meditation app to use
                    </h1>
                    <h1 className="blueText TitleText">crypto incentives</h1>
                </div>
                <div id="VideoPadding">
                    <div className = "responsiveImage">
                        <iframe title = "Youtube"
                            height="480" width = "852" src="https://www.youtube.com/embed/IpCsTovc2N4">
                        </iframe>
                    </div>


                </div>

            </div>
        )
    }
}

export default LandingSlide2;
