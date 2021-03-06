import React from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import Reddit from './Assets/Reddit.png';
import Linkedin from './Assets/Linkedin-icon.png';
import Instagram from './Assets/Instagram-icon.png';
import Twitter from './Assets/Twitter-icon.png';
import Facebook from './Assets/Facebook-icon.png';

export class Footer extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <MDBFooter className="footer">
                    <MDBContainer fluid className="container">



                        <MDBCol md="12" className="leftSpacing">
                            <MDBRow >

                                <div className="spacing">
                                    <div className="OmcoinFooterText">
                                        <p>Omcoin</p>
                                    </div>

                                </div>
                                <div className="spacing">
                                    <a href="https://www.instagram.com/omcoin_official/" target="_blank" rel="noopener noreferrer">
                                        <img src={Instagram} alt="Instagram" />
                                    </a>
                                </div>
                                <div className="spacing">
                                    <a href="https://www.facebook.com/omcoin.official" target="_blank" rel="noopener noreferrer">
                                        <img src={Facebook} alt="Facebook" />
                                    </a>

                                </div>


                                <div className="spacing">
                                    <a href="https://twitter.com/omcoin_official" target="_blank" rel="noopener noreferrer">
                                        <img src={Twitter} alt="Twitter" />
                                    </a>
                                </div>


                                <div className="spacing">
                                    <a href="https://www.linkedin.com/company/omcoin/" target="_blank" rel="noopener noreferrer">
                                        <img src={Linkedin} alt="Linkedin" />
                                    </a>

                                </div>


                                <div className="spacing">
                                    <a href="https://www.linkedin.com/company/omcoin/" target="_blank" rel="noopener noreferrer">
                                        <img src={Reddit} alt="Reddit" />
                                    </a>
                                </div>



                            </MDBRow>
                        </MDBCol>
                        <hr className="hrFix"></hr>
                        <MDBRow className="">

                            <MDBCol md="3">
                                <div className="FooterText">
                                    <p> Copyright &copy;{new Date().getFullYear()} Omcoin Inc. All rights reserved.</p>
                                </div>
                            </MDBCol>
                            <MDBCol md="2">
                                <a href="/termsOfService">
                                    <div className="FooterText">Terms of Use</div>
                                </a>


                            </MDBCol>
                            <MDBCol md="2">
                                <a href="https://drive.google.com/file/d/1AfbMaAE5oNiRPjyab-ao9xft6JZCCDdu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <div className="FooterText"> White paper</div>
                                </a>
                            </MDBCol>
                            <MDBCol md="3">
                                <style type="text/css">
                                    {`
                        a:hover {
                            color: #1D1D1F;
                            }
                        `}
                                </style>
                                <p> <span className="FooterText">Contact:</span>  <span> <a href="mailto:meditation@oimcoin.cash">meditation@oimcoin.cash</a>  </span></p>


                            </MDBCol >
                            <MDBCol md="2">
                                <p> <span className="FooterText">United States</span></p>
                            </MDBCol>

                        </MDBRow>

                    </MDBContainer>
                </MDBFooter>
            </div>

        )
    }
}

export default Footer;

