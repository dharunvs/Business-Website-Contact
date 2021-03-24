var firebaseConfig = {
    apiKey: "AIzaSyCnL12Io88jjL85wimfjEB5MrVSTyIC_mQ",
    authDomain: "vibrant-dx.firebaseapp.com",
    projectId: "vibrant-dx",
    storageBucket: "vibrant-dx.appspot.com",
    messagingSenderId: "102853405585",
    appId: "1:102853405585:web:09d9f4bb27d6f203044830"
};

firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref('contactInfo')

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var name = getValues('name');
    var company = getValues('company');
    var email = getValues('email');
    var contactNo = getValues('contactNo');
    var message = getValues('message');

    saveValues(name, company, email,  contactNo, message);

})

function getValues(id){
    return document.getElementById(id).value;
}

function saveValues(name, company, email,  contactNo, message){

    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        company: company,
        email: email,
        contactNo: contactNo,
        message: message,
    })

    console.log("!!")

}

