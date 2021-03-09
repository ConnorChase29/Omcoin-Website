import React from 'react';
import Feature1 from './Assets/Future-cardRE.png';



export class LandingSlide3 extends React.Component<{}, {}>
{
    render() {
        return (
            <div id = "Features" className = "Landing3">
                <div className="Slide3Text">
                    <h1 className = "TitleText">Earning crypto has never</h1>
                    <h1 className = "TitleText">felt this <span className="blueText">rewarding.</span></h1>
                </div>
                <img className = "responsiveImage" src = {Feature1} alt = "Feature1" />
            </div>

        )
    }
}

export default LandingSlide3;