// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import BooksList from './components/BooksList';


class App extends React.Component {

  books = [
    {id: 1, title: "Harry Potter", description: "A fairy tale about the boy who lived" },
    {id: 2, title: "The old man and the see", description: "A story about life" },
    {id: 3, title: "The lord of the rings", description: "Some story" }
  ];

  componentDidMount() {} // когда компонент был добавлен
  componentWillUnmount() {} // когда компонент был удалён

  render() {
    return (
    <div className="container">
        <Header />
        <BooksList list={this.books} />
    </div>
    )
  }
}

export default App;
