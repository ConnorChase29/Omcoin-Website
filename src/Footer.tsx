import React from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

export class Footer extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <MDBFooter className="footer">
                    <MDBContainer fluid>



                        <MDBCol md="12">
                            <MDBRow className="hrSpacing">

                                <div className = "spacing"> 
                                    <p>Omcoin</p>
                                </div>


                                <div className = "spacing">
                                    <a href="http://ign.com">
                                        <p>instagram</p>
                                    </a>
                                </div>


                                <div className = "spacing">
                                    <p>facebook</p>
                                </div>


                                <div className = "spacing">
                                    <p>twitter</p>
                                </div>


                                <div className = "spacing">
                                    <p>linkdln</p>
                                </div>


                                <div className = "spacing">
                                    <p>reddit</p>
                                </div>



                            </MDBRow>
                        </MDBCol>
                        <hr className="hrFix"></hr>
                        <MDBRow className="hrSpacing">

                            <MDBCol md="3">
                                <p> Copyright &copy;{new Date().getFullYear()} Omcoin Inc. All rights reserved.</p>
                            </MDBCol>
                            <MDBCol md="2">
                                <div className="verticalLineRight">Terms of Use</div>

                            </MDBCol>
                            <MDBCol md="2">
                                <div className="verticalLineRight"> White paper</div>

                            </MDBCol>
                            <MDBCol md="3">
                                <p>Contact: meditation@oimcoin.cash</p>
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

