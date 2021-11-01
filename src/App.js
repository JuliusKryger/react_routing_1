import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
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


function App(props) {
  return (
<div>


{
console.log(props.bookFacade.getBooks)
}


  <Header />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/products">
      <Products bookFacade={props.bookFacade}/>
    </Route>
    <Route path="/company">
      <Company />
    </Route>
    <Route path="/add-book">
      <AddBook bookFacade={props.bookFacade} />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
</div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Header() {
  return (
  <div>
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
  </div>
  );
}

function Products(props) {
  let books = props.bookFacade.getBooks()
  return (
    <div>
      <h2>We've {books.length} number of books</h2>
      <ul>{books.map((book => <li key={book.id}> {book.title} <Link to={`${URL}`}/></li>))}</ul>
    </div>
  );
}

function Company() {
  return (
    <div>
      <h2>Company</h2>
    </div>
  );
}

function AddBook(props) {

  const [title, setTitle] = useState("")
  const [info, setInfo] = useState("")

  const newBook = {title: title, info: info}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newBook)
    props.bookFacade.addBook(newBook)
  }
  let [isBlocking, setIsBlocking] = useState(false);

  return (
    <div>
      <form onSubmit={handleSubmit} onSubmit={event => {
        event.preventDefault();
        event.target.reset();
        setIsBlocking(false);
      }}>
      <Prompt
        when={isBlocking}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }/>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} onChange={event => {setIsBlocking(event.target.value.length > 0);}}/>
        <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} onChange={event => {setIsBlocking(event.target.value.length > 0);}}/>
        <input type="submit" />
      </form> 
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>No Match - 404 Page not found.</h2>
    </div>
  );
}

export default App;
