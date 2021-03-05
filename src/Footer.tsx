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
                    <MDBContainer fluid>



                        <MDBCol md="12" className="leftSpacing">
                            <MDBRow >

                                <div className="spacing">
                                    <p>Omcoin</p>
                                </div>


                                <div className="spacing">
                                    <a href="https://www.instagram.com/omcoin.meditation/">
                                        <img src={Instagram} alt="Instagram" />
                                    </a>
                                </div>


                                <div className="spacing">
                                    <a href="https://www.facebook.com/omcoin.meditation">
                                        <img src={Facebook} alt="Facebook" />
                                    </a>

                                </div>


                                <div className="spacing">
                                    <a href="https://www.linkedin.com/company/omcoin/">
                                        <img src={Twitter} alt="Twitter" />
                                    </a>
                                </div>


                                <div className="spacing">
                                    <a href="https://www.linkedin.com/company/omcoin/">
                                        <img src={Linkedin} alt="Linkedin" />
                                    </a>

                                </div>


                                <div className="spacing">
                                    <a href="https://www.linkedin.com/company/omcoin/">
                                        <img src={Reddit} alt="Reddit" />
                                    </a>
                                </div>



                            </MDBRow>
                        </MDBCol>
                        <hr className="hrFix"></hr>
                        <MDBRow className="">

                            <MDBCol md="3">
                                <p> Copyright &copy;{new Date().getFullYear()} Omcoin Inc. All rights reserved.</p>
                            </MDBCol>
                            <MDBCol md="2">
                                <a href="/termsOfService">
                                    <div className="">Terms of Use</div>
                                </a>
                                

                            </MDBCol>
                            <MDBCol md="2">
                                <a href="https://drive.google.com/file/d/1AfbMaAE5oNiRPjyab-ao9xft6JZCCDdu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <div className=""> White paper</div>
                                </a>
                            </MDBCol>
                            <MDBCol md="3">

                                <p>Contact: <span> <a href="mailto:meditation@oimcoin.cash">meditation@oimcoin.cash</a>  </span></p>


                            </MDBCol >
                            <MDBCol md="2">
                                <p>United States</p>
                            </MDBCol>

                        </MDBRow>

                    </MDBContainer>
                </MDBFooter>
            </div>

        )
    }
}

export default Footer;

