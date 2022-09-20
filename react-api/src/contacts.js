import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contacts = ({contacts}) => {
    return (
        <div>
          <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.name}</h5>
                        <p class="card-subtitle text-muted" >{contact.email}</p>
                        <p class="card-text">{contact.company.catchPhrase}</p>
                    </div>
                </div>       
            ))}
        </div>
    )
};

export default Contacts;