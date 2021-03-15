import React from 'react';
import './CSS/Features.css';

export class LandingSlide2 extends React.Component<{}, {}>
{
    render() {
        return (
            <div id="Overview" className="Landing2">
                <div className="TextPadding">
                    <h1 className = "TitleText">
                        <span className="blueText">First </span>
                        meditation app with
                    </h1>
                    <h1 className="blueText TitleText">crypto incentives.</h1>
                </div>
                <div className="VideoPadding">
                    <div className="container">
                        <div className = "responsiveImage">
                            <iframe title = "Youtube"
                                height="572" width = "100%" src="https://www.youtube.com/embed/8ew2ZHoYgcg" allowFullScreen>
                            </iframe>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default LandingSlide2;
