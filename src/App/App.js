import React, {useState} from "react";
import './App.css';
import handleEmail from "../Services/EmailService/EmailService";
import {Trial} from "../Services/Trials/Trials";


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
            return [urlPrefix, hostName, ampPrefix, pathName].join('')
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

    function generateLinkAndDisplay() {
        const input= textInput.current.value
        console.log(`nitz in a: ${input}`)
        if (input === undefined || input ==='' || input === ' '){
            return
        }
        const sanitizeInput = sanitizeInputFunc(input)
        const link =  generateLink(sanitizeInput)

        console.log(`nitz in generateLinkAndDisplay the link is: ${link}`)

        setLinkToDisplay(link)

        //WriteToLocalStorageLinkArray(link)

        const trail =Trial()
        if (link !== undefined && link !=='' && link !== ' ' && process.env.NODE_ENV !=='development') {
            handleEmail(link +'trail info: '+trail)
        }
    }


    return (
        <div className="center" >
            <div className={'inputDiv'}>
                <form className={'form'} >
                    <input ref={textInput} className={'inputStyle'} type="text" name="urlLink" placeholder={'Insert The Marker URL Here'} />
                </form>
            </div>
            <div className={'buttonDiv'}>
                <button className={'center button'} type='button' onClick={generateLinkAndDisplay}><span>Generate Link </span></button>
            </div>
            <div className={'linkDiv'}>
                <p><a href={linkToDisplay}>{linkToDisplay}</a></p>
            </div>
        </div>
    );
}