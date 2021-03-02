import React from 'react';
import MockUp from './Assets/Omapp-Mock-2.png';
import Logo from './Assets/Omcoin-icon.png';
import './Features.css';

export class LandingSlide4 extends React.Component< {}, {} >
{
    render(){
        return(
            <div className = "Landing4">
                <div id = "OmappText">
                    <h1 className="whiteText">Omapp</h1>
                </div>
                <div>
                    <h2 className="whiteText">Releasing Spring 2021.</h2>
                </div>
                
                <p className="greyText">Available soon on IOS & Android.</p>
                <p className="greyText">Be the first to hear about Omcoin's release directly from us.</p>
                <div>
                    <p className="greyText">email input</p>
                    <p className="greyText">button</p>
                </div>
                <div id = "MockupDiv">
                    <img src={MockUp} alt="Mock Up"/>
                </div>
                <div>
                    <img src={Logo} alt=""/>
                </div>
                <h1 className="whiteText OmcoinText">Om<span className = "lightBlue">coin</span></h1>
                <p className="whiteText">Available for purchase March 2021.</p>
                <p className="greyText">Search for 'Omcoin' on the <span className = "blueText"> Poloniex </span>
                   exchange platform.
                </p>
                <p className="greyText">Available on Binance & more ASAP.</p>
                <p className="whiteText"> Button </p>
            </div>
        )
    }
} 

export default LandingSlide4;