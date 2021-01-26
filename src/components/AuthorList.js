import React from 'react';
import AuthorsListItem from './AuthorsListItem';

export default class AuthorList extends React.Component {  

    render() {
        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.author.map(item => (
                      <AuthorsListItem key={item.id} data={item} />  
                    ))}
                    
                </tbody>
            </table>
        );
    }
}