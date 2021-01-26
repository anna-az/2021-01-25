import { Component } from 'react';

export default class BooksListItem extends Component {
    author_name = null;

    getAuthorName(authors, data) {
        let name = authors.filter(item => item.id === data.author_id)
        this.author_name = name.length === 0 ? '-' : name[0]['name'];
    }

    render() {
        const { data, authors } = this.props;
        this.getAuthorName(authors, data);

        return (
            <tr> 
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{this.author_name}</td>
            </tr>
        );
    }
}

