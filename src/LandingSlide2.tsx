import React from 'react';
import Video from './Assets/test.mp4';

export class LandingSlide2 extends React.Component< {}, {} >
{
    render()
    {
        return(
            <div className = "Landing2">
                <div id = "FirstMeditationText">
                    <h1>
                        <span className = "blueText">First </span>
                        meditation app to use
                    </h1>
                    <h1 className = "blueText">crypto incentives</h1>
                </div>
                <div id = "VideoPadding">
                    <video controls src={Video}/>
                </div>
                
            </div>
        )
    }
}

export default LandingSlide2;
