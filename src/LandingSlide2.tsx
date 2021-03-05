import React from 'react';

export class LandingSlide2 extends React.Component<{}, {}>
{
    render() {
        return (
            <div id="Overview" className="Landing2">
                <div id="FirstMeditationText">
                    <h1>
                        <span className="blueText">First </span>
                        meditation app to use
                    </h1>
                    <h1 className="blueText">crypto incentives</h1>
                </div>
                <div id="VideoPadding">
                    <div className = "responsiveImage">
                        <iframe className = ""
                            height="480" width = "852" src="https://www.youtube.com/embed/IpCsTovc2N4">
                        </iframe>
                    </div>


                </div>

            </div>
        )
    }
}

export default LandingSlide2;
