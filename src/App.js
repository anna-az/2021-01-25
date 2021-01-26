// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import BooksList from './components/BooksList';
import AuthorList from './components/AuthorList';


class App extends React.Component {

  books = [
    {id: 1, title: "Harry Potter", description: "A fairy tale about the boy who lived", author_id: 4 },
    {id: 2, title: "The old man and the see", description: "A story about life", author_id: 5 },
    {id: 3, title: "The lord of the rings", description: "Some story", author_id: 6 }
  ];

  authors = [
    {id: 5, name: "Ernest Hemingway"},
    {id: 4, name: "Joanne Rowling"},
    {id: 6, name: "John Ronald Reuel Tolkien"}
  ];
  

  componentDidMount() {} // когда компонент был добавлен
  componentWillUnmount() {} // когда компонент был удалён

  render() {
    return (
    <div className="container">
        <Header />
        <BooksList list={this.books} author_name = {this.authors}/>
        <AuthorList author={this.authors}/>
    </div>
    )
  }
}

export default App;
