import React from "react";
import Contacts from "./contacts";

class App extends React.Component {
   state = {
      contacts:[],
    }
  
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        contacts:data 
      })
  })
    .catch(console.log);
  }

  render() {
    return(
      <Contacts contacts={this.state.contacts} />

    )
  }
}
export default App;
