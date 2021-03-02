import React from 'react';
import './Footer.css';

export class Footer extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <footer className="footer">

                    <div className="socialContainer">                    
                        <div className="spacing">
                            <p>Omcoin</p>
                        </div>
                        <div className="spacing">
                        <a href="http://ign.com">
                            <p>instagram</p>                       
                        </a>
                        </div>
                        <div className="spacing">
                            <p>facebook</p>
                        </div>
                        <div className="spacing">
                            <p>twitter</p>
                        </div>
                        <div className="spacing">
                            <p>linkdln</p>
                        </div>
                        <div className="spacing">
                            <p>reddit</p>
                        </div>
                    </div>
                    <div className="hrSpacing">
                        <hr></hr>
                    </div>
                    
                    <div>
                    
                        
                        <div className="container">
                            <div className ="spacing">
                                <p> Copyright &copy;{new Date().getFullYear()} Omcoin Inc. All rights reserved.</p>
                            </div>
                            <div className ="spacing" >
                                <p>Terms of Use</p>
                            </div>
                            <div className ="spacing">
                                <p>White paper</p>
                            </div>
                            <div className ="moreSpacing">
                                <p>Contact: meditation@oimcoin.cash</p>
                            </div>
                            <div>
                                <p>United States</p>
                            </div>
                            
                        </div>
                    </div>

                </footer>
            </div>

        )
    }
}

export default Footer;

