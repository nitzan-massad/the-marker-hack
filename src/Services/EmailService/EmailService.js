import emailJs from "emailjs-com";
import emailKey from "./emailkey";

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

export default handleEmail