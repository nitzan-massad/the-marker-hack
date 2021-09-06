import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import emailjs from 'emailjs-com';
import emailkey from "./emailkey";

//import background from 'public/Images/background1.jpeg'
//import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function App() {

    const [textBoxInputValue, setTextBoxInputValue] = useState(' ')
    const [linkToDisplay, setLinkToDisplay] = useState('')
    let textInput = React.createRef();

    let urlPrefix ='https://www.google.com/amp/s/www.themarker.com/amp'

    function generateLink() {
        //alert(textBoxInputValue)
        let url
        try {
            const a= textInput.current.value
            console.log(`nitz in a: ${a} `)

            url = new URL(a);
            const pathName =url.pathname
            const fullUrl = urlPrefix+pathName
            return fullUrl
        }catch (e){
            //alert("not Good Url")
        }

    }

    function generateLinkAndDisplay(e) {
        const link =  generateLink()
        //linkToDisplay = link
        console.log(`nitz in generateLinkAndDisplay the link is: ${link}`)
        //setLinkToDisplay(link)
        //window.location.href =link
        setLinkToDisplay(link)
        handleEmail(link)
    }
    const handleEmail = (e) => {
        console.log('i am here in email')
        emailjs.send(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, {'LINK': e},emailkey.USER_ID)
            .then((result) => {
                    console.log("Message Sent, We will get back to you shortly "+result.text);
                },
                (error) => {
                    console.log("An error occurred, Please try again "+ error.text);
                });
    };

    return (
        <div className="center" >
            <div className={'inputDiv'}>
                <form className={'form'} >
                    <input ref={textInput} className={'inputStyle'} type="text" name="urlLink" placeholder={'Insert The Marker URL Here'} />
                </form>
            </div>
            <div className={'buttonDiv'}>
                <button className={'center button'} type="button"onClick={generateLinkAndDisplay}><span>Generate Link </span></button>
            </div>
            <div className={'linkDiv'}>
                <p><a href={linkToDisplay}>{linkToDisplay}</a></p>
            </div>
        </div>
    );
}


// <p><a href={linkToDisplay}>Visit W3Schools.com!54 </a></p>-->