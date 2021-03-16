import React from 'react';
import MockUp from './Assets/Omapp-Mock-2.png';
import Logo from './Assets/Omcoin-icon.png';
import Button from 'react-bootstrap/Button';
import { InputGroup, FormControl } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './CSS/Features.css';

export class LandingSlide4 extends React.Component<{}, {}>
{
    submitForm = (event: any) => {
        event.preventDefault();        
        //sends email
        
        emailjs.sendForm('service_jlqh91p', 'template_rjyxj03', ".emailForm", "user_Es5RXdkMrmbS4UFtZfAhb")
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
                <div className="OmappText">
                    <h1 className="whiteText TitleText">Omapp</h1>
                    <h2 className="whiteText SecondTitleText">Releasing Spring 2021.</h2>
                </div>
                <div className = "ReleasingText"></div>
                <div className = "AvailableText">
                    <p className="greyText">Available soon on iOS & Android.<br/>Be the first to hear about Omcoin's release.</p>
                </div>
                

                <div className="emailInputField" id="emailSection">
                    <form onSubmit={this.submitForm} className = "emailForm ">
                    <InputGroup className="mb-3" >
                        <FormControl
                            className = "form-control"
                            id = "EmailAddressField"
                            type="email"
                            name = "email"
                            placeholder="email*"
                            aria-describedby="basic-addon2"
                            /*style={{ backgroundColor: "black", color: "#0000FF", border: "2px solid rgb(0,123,255)"}}*/
                        />
                        <div className = "emailButtonSpacing">
                            <Button type="submit" variant="outline-primary">enter</Button>
                        </div>
                    </InputGroup>
                    </form>
                    
                </div>
                <div className="MockupDiv">
                    <img src={MockUp} alt="Mock Up" />
                </div>
                <div>
                    <img src={Logo} alt="Omcoin logo" />
                </div>
                <h1 className="whiteText OmcoinText TitleText">Om<span className="lightBlue">coin</span></h1>
                <div className = "PurchaseText">
                    <h2 className="whiteText">Now available for purchase.</h2>
                </div>
                <div className = "AvailableText">
                    <p className="greyText">Buy directly on <span><a href="https://justswap.io/#/home" target="_blank" rel="noopener noreferrer">JustSwap.</a></span><br/>Available on Binance & more ASAP.</p>
                </div>
                

                <Button variant="outline-primary" onClick={() => { window.open("https://justswap.io/#/home") }}> Buy OMM </Button>
            </div>
        )
    }
}

export default LandingSlide4;