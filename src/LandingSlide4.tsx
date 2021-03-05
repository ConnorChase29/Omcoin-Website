import React from 'react';
import MockUp from './Assets/Omapp-Mock-2.png';
import Logo from './Assets/Omcoin-icon.png';
import Button from 'react-bootstrap/Button';
import { InputGroup, FormControl } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Features.css';

export class LandingSlide4 extends React.Component<{}, {}>
{
    submitForm = (event: any) => {
        event.preventDefault();

        //sends email
        alert("Enetee");
        
        emailjs.sendForm('gmail', 'template_rjyxj03', event.target, "user_Es5RXdkMrmbS4UFtZfAhb")
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        //clear email field
        let EmailAddressField: HTMLInputElement = (document.getElementById("EmailAddressField") as HTMLInputElement);
        EmailAddressField.value = "";

    }
    render() {
        return (
            <div className="Landing4">
                <div id="OmappText">
                    <h1 className="whiteText">Omapp</h1>
                </div>
                <div>
                <style type="text/css">
                        {`
                        h2 {
                            font-size: 32px;
                            font-weight: normal;
                            }
                        `}
                    </style>
                    <h2 id = "ReleasingText" className="whiteText">Releasing Spring 2021.</h2>
                </div>
                <div className = "AvailableText">
                    <p className="greyText">Available soon on IOS & Android.</p>
                    <p className="greyText">Be the first to hear about Omcoin's release directly from us.</p>
                </div>
                

                <div className="emailInputField">
                    <form onSubmit={this.submitForm}>
                    <InputGroup className="mb-3" >
                        <FormControl
                            className = "form-control"
                            id = "EmailAddressField"
                            type="email"
                            placeholder="email"
                            aria-describedby="basic-addon2"
                            style={{ backgroundColor: "black", color: "#0000FF", border: "2px solid rgb(0,123,255)"}}
                        />
                        <div className = "emailButtonSpacing">
                            <Button type="submit" variant="outline-primary">enter</Button>
                        </div>
                    </InputGroup>
                    </form>
                    
                </div>
                <div id="MockupDiv">
                    <img src={MockUp} alt="Mock Up" />
                </div>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <h1 className="whiteText OmcoinText">Om<span className="lightBlue">coin</span></h1>
                <div id = "PurchaseText">
                    <h2 className="whiteText">Available for purchase March 2021.</h2>
                </div>
                <div className = "AvailableText">
                    <p className="greyText">Search for 'Omcoin' on the <a href="https://tronscan.org/#/" target="_blank" rel="noopener noreferrer">Tronscan </a>
                   exchange platform.
                    </p>
                    <p className="greyText">Available on Binance & more ASAP.</p>
                </div>
                

                <Button variant="outline-primary" onClick={() => { window.open("https://tronscan.org/#/") }}> Buy OMM </Button>
            </div>
        )
    }
}

export default LandingSlide4;