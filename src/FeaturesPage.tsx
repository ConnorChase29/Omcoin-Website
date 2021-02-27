import React from 'react';
import LandingSlide1 from './LandingSlide1';
import LandingSlide2 from './LandingSlide2';

export class FeaturesPage extends React.Component<{}, {}>
{
    render() {
        return(
            <div>
                <LandingSlide1/>
                <LandingSlide2/>
            </div>
        )
    }
}

export default FeaturesPage;