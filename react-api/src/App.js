import axios from 'axios';
import React from "react";
import Contacts from "./contacts";

class App extends React.Component {
   state = {
      contacts:[],
    }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const contacts = res.data;
      this.setState ({ contacts });
    })

  }
  /* componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        contacts:data 
      })
  })
    .catch(console.log);
  } */

  render() {
    return(
      <Contacts contacts={this.state.contacts} />

    )
  }
}
export default App;
