import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import fb from "../../services/fb";
import "./Admin.css";

function Admin() {
  const history = useHistory();
  const [messages, setMessages] = useState([]);

  var messagesData = fb.firestore.collection("Messages");

  messagesData.get().then((docs) => {
    var li = [];
    docs.forEach((doc) => {
      li.push(doc.data());
    });

    setMessages(li);
  });

  const MessageElement = ({
    keyName,
    company,
    contactNo,
    email,
    message,
    name,
    time,
  }) => (
    <div key={keyName} className="message">
      <div>
        <label>
          <p>Name</p>
          <h4>{name}</h4>
        </label>
        <label>
          <p>Company</p>
          <h4>{company}</h4>
        </label>
      </div>
      <div>
        <label>
          <p>Email</p>
          <h4>{email}</h4>
        </label>
        <label>
          <p>Contact No</p>
          <h4>{contactNo}</h4>
        </label>
      </div>

      <div>
        <label className="messageMessage">
          <p>Message</p>
          <h4>{message}</h4>
        </label>
      </div>
      <button
        className="deleteButton"
        onClick={() => {
          messagesData.doc(keyName).delete();
          window.location.reload();
          console.log(keyName);
        }}
      >
        Delete
      </button>
      <p className="time">{time}</p>
    </div>
  );

  return (
    <div className="Admin">
      <div className="adminLogo">
        <h1>Vibrant DX</h1>
      </div>
      <div className="logout">
        <button
          onClick={() => {
            fb.auth.signOut();
            localStorage.clear();
            history.push("/");
          }}
        >
          Logout
        </button>
      </div>
      <div className="adminHeight"></div>
      <div className="messages">
        {messages.map((message) => (
          <MessageElement
            key={message.MessageID}
            keyName={message.MessageID}
            company={message.company}
            contactNo={message.contactNo}
            email={message.email}
            message={message.message}
            name={message.name}
            time={message.time}
          />
        ))}
      </div>
      <div className="adminHeight"></div>
    </div>
  );
}

export default Admin;
