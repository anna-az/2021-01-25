import { Component } from 'react';

export default class AuthorsListItem extends Component {
    render() {
        const { data } = this.props;

        return (
            <tr> 
                <td>{data.id}</td>
                <td>{data.name}</td>
            </tr>
        );
    }
}