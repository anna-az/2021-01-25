import { Component } from 'react';

export default class BooksListItem extends Component {
    render() {
        const { data } = this.props;

        return (
            <tr> 
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
            </tr>
        );
    }
}