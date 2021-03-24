let docRef = database.doc('9T2r7seL0pDgQkM7o4hE');

database
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        createElement(doc.data())
    });
})
.catch((error) => {
    console.log("Error getting documents: ", error);
});

function createElement(doc){

    const headTag = 'h2'
    const valueTag = 'h3'

    let enquiryContainer = document.createElement("div")
    enquiryContainer.classList.add("enquiry-container");

    let name_container = document.createElement("div")
    name_container.classList.add('sub-container');
    let name = document.createElement(headTag)
    name.innerText = "Name";
    let name_value = document.createElement(valueTag)
    name_value.innerText = doc.name;
    name_container.appendChild(name)
    name_container.appendChild(name_value)

    let company_container = document.createElement("div")
    company_container.classList.add('sub-container');
    let company = document.createElement(headTag)
    company.innerText = "Company";
    let company_value = document.createElement(valueTag)
    company_value.innerText = doc.company;
    company_container.appendChild(company)
    company_container.appendChild(company_value)

    let email_container = document.createElement("div")
    email_container.classList.add('sub-container');
    let email = document.createElement(headTag)
    email.innerText = "Email";
    let email_value = document.createElement(valueTag)
    email_value.innerText = doc.email;
    email_container.appendChild(email)
    email_container.appendChild(email_value)

    let contactNo_container = document.createElement("div")
    contactNo_container.classList.add('sub-container');
    let contactNo = document.createElement(headTag)
    contactNo.innerText = "Contact No";
    let contactNo_value = document.createElement(valueTag)
    contactNo_value.innerText = doc.contactNo;
    contactNo_container.appendChild(contactNo)
    contactNo_container.appendChild(contactNo_value)

    let message_container = document.createElement("div")
    message_container.classList.add('sub-container');
    let message = document.createElement(headTag)
    message.innerText = "Message";
    let message_value = document.createElement(valueTag)
    message_value.innerText = doc.message;
    message_container.appendChild(message)
    message_container.appendChild(message_value)

    let time_container = document.createElement("div")
    time_container.classList.add('sub-container');
    let time = document.createElement(headTag)
    time.innerText = "Time";
    let time_value = document.createElement(valueTag)
    time_value.innerText = doc.time;
    time_container.appendChild(time)
    time_container.appendChild(time_value)

    let button = document.createElement("button")
    button.innerText = "Delete";

    let mini_wrapper = document.createElement("div");
    mini_wrapper.classList.add('mini-wrapper');
    mini_wrapper.appendChild(time_container)
    mini_wrapper.appendChild(button)

    

    let wrapper1 = document.createElement("div");
    wrapper1.classList.add('wrapper1')
    wrapper1.appendChild(name_container)
    wrapper1.appendChild(company_container)

    let wrapper2 = document.createElement("div");
    wrapper2.classList.add('wrapper1')
    wrapper2.appendChild(email_container)
    wrapper2.appendChild(contactNo_container)

    let wrapper3 = document.createElement("div");
    wrapper3.classList.add('wrapper2')
    wrapper3.appendChild(message_container)
    wrapper3.appendChild(mini_wrapper)


    

    
    enquiryContainer.appendChild(wrapper1);
    enquiryContainer.appendChild(wrapper2);
    enquiryContainer.appendChild(wrapper3);

    button.addEventListener('click', deleteEnquiry);

    let admin = document.getElementById('admin');
    admin.appendChild(enquiryContainer)
}

function deleteEnquiry(){

}