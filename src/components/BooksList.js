import React from 'react';
import BooksListItem from './BooksListItem';

export default class BooksList extends React.Component {   
    render() {
        console.log(this.books);
        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list.map(item => (
                      <BooksListItem key={item.id} data={item} />  
                    ))}
                    
                </tbody>
            </table>
        );
    }
}