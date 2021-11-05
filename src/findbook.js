import React, { useEffect, useState, state} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch, 
  NavLink,
  Prompt
} from "react-router-dom";

export default function FindBook (props) {

  const [id, setId] = useState(0);
  const [book, setBook] = useState({ id: 0, title: "", info: "" });

  const books = props.bookFacade.getBooks()

  const handleInput = (evt) => {
    const target = evt.target
    setId(parseInt(target.value))
}

const handleFind = () => {
  const foundBook = books.find(b => b.id === id)
  setBook(foundBook)
}

return (
<div>

<h1>Find Book</h1>
<input type="text" onChange={handleInput}></input>
<button onClick={handleFind}>Find book</button>

<h3>Book found with id: {book.id}</h3>
<h3>Book Title: {book.title}</h3>
<h3>Book Info: {book.info}</h3>

<UpdateBook bookFacade={book}/>

</div>
);
}

class UpdateBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: 0, title: "", info: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleChange = (e) => {
    this.setState({title: e.target.value});
    //console.log(this.state)  
  }

  handleSubmit = (evt) => {
    alert('A new title was submitted: ' + this.state.title);
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Change Book Title:
          <input type="text" value={this.state.title} onChange={this.handleChange} /></label>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}