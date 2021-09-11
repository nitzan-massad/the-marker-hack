import React, {useState} from "react";
import emailJs from "emailjs-com";
import emailKey from "../emailkey";
import './App.css';
export default function App() {

    const [linkToDisplay, setLinkToDisplay] = useState('')
    let textInput = React.createRef();

    //let theMarkerUrlPrefix ='https://www.google.com/amp/s/www.themarker.com/amp'
    let urlPrefix ='https://www.google.com/amp/s/'
    let ampPrefix ='/amp'

    function generateLink(link) {
        //alert(textBoxInputValue)
        let url
        try {
            url = new URL(link);
            const pathName =url.pathname
            const hostName =url.hostname
            const joinedUrl = [urlPrefix,hostName,ampPrefix,pathName].join('')

            return joinedUrl
        }catch (e){
            //alert("not Good Url")
        }

    }

    const sanitizeInputFunc= (input)=> {
        const prefixForCut ="https://"
        const myArr = input.split(prefixForCut);
        console.log(`nitz the sanitize Input is : ${myArr[1]} `)
        return prefixForCut+myArr[1]
    }

    function generateLinkAndDisplay(e) {
        const input= textInput.current.value
        console.log(`nitz in a: ${input} `)

        const sanitizeInput = sanitizeInputFunc(input)
        const link =  generateLink(sanitizeInput)

        console.log(`nitz in generateLinkAndDisplay the link is: ${link}`)

        setLinkToDisplay(link)
        if (link !== undefined && link !=='' && link !== ' ' && process.env.NODE_ENV !=='development') {
            //console.log(`nitz process.env.NODE_ENV: ${process.env.NODE_ENV}`)
            handleEmail(link)
        }
    }
    const handleEmail = (e) => {
        console.log('i am here in email')
        emailJs.send(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, {'LINK': e},emailKey.USER_ID)
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