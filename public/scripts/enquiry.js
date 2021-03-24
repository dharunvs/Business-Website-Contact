const form = document.getElementById('contact-form');
form.addEventListener('submit', submit)

function submit(e){
    e.preventDefault();
    addData()
}

function addData(){
    var name = getValues('name');
    var company = getValues('company');
    var email = getValues('email');
    var contactNo = getValues('contactNo');
    var message = getValues('message');
    var time = new Date()
    var timeString = time.getDate()+'/'+(parseInt(time.getMonth())+1)+'/'+time.getFullYear()+' '+time.getHours()+':'+time.getMinutes();

    saveValues(name, company, email,  contactNo, message, timeString);

    name = ""
    company = ""
    email = ""
    contact = ""
    message = ""

}

function getValues(id){
    return document.getElementById(id).value;
}

function saveValues(name, company, email,  contactNo, message, time){
    database.doc().set({
        name: name,
        company: company,
        email: email,
        contactNo: contactNo,
        message: message,
        time: time,
    }).then(() => {
        console.log('Data saved')
    }).catch((error) => {
        console.log(error)
    })
}

