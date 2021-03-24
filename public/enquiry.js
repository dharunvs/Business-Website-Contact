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
    database.doc().set({
        name: name,
        company: company,
        email: email,
        contactNo: contactNo,
        message: message,
    }).then(() => {
        console.log('Data saved')
    }).catch((error) => {
        console.log(error)
    })
}

