import React from 'react';
import data from '../data.json';
import '../App.css';

class List extends React.Component {
    render() {
        return (
            <div className="App">
                <h2>Eeverything I read in 2020</h2>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating</th>
                        <th>Pages</th>
                    </tr>

                    {data.data.map((elem, i) => <tr key={i}>
                        <td>{elem.title}</td>
                        <td>{elem.author}</td>
                        <td>{elem.rating}/5</td>
                        <td>{elem.pages}</td>
                    </tr>)}
                </table>
            </div>
        )
    }
}

export default List;