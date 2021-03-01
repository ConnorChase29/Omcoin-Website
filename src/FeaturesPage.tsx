import React from 'react';
import LandingSlide1 from './LandingSlide1';
import LandingSlide2 from './LandingSlide2';
import LandingSlide3 from './LandingSlide3';
import LandingSlide4 from './LandingSlide4';
import LandingSlide5 from './LandingSlide5';

export class FeaturesPage extends React.Component<{}, {}>
{
    render() {
        return(
            <div>
                <LandingSlide1/>
                <LandingSlide2/>
                <LandingSlide3/>
                <LandingSlide4/>
                <LandingSlide5/>
            </div>
        )
    }
}

export default FeaturesPage;