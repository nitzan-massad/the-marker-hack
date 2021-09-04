import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

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
            alert("not Good Url")
        }

    }

    function generateLinkAndDisplay() {
        const link =  generateLink()
        //linkToDisplay = link
        console.log(`nitz in generateLinkAndDisplay the link is: ${link}`)
        //setLinkToDisplay(link)
        //window.location.href =link
        setLinkToDisplay(link)
    }

    return (
        <div className="center">
            <div>
                <form >
                    <input ref={textInput} type="text" name="urlLink"/>
                </form>
            </div>
            <div>
                <button className={'center'} type="button" onClick={generateLinkAndDisplay}>Generate Link</button>
            </div>
            <div>
                <p><a href={linkToDisplay}>{linkToDisplay}</a></p>
            </div>
        </div>
    );
}


// <p><a href={linkToDisplay}>Visit W3Schools.com!54 </a></p>-->