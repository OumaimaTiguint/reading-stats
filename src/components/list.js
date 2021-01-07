import React from 'react';
//import dt2020 from '../data/2020.json';
import { data } from './date-selection';
import '../App.css';

class List extends React.Component {
    render() {
        return (
            <div className="list">
                <h2>Everything I read this year</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating</th>
                        <th>Pages</th>
                        <th>Publication Date</th>
                        <th>Original Language</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.data.map((elem, i) => <tr key={i}>
                        <td>{elem.title}</td>
                        <td>{elem.author}</td>
                        <td>{elem.rating}/5</td>
                        <td>{elem.pages}</td>
                        <td>{elem["pub-date"]}</td>
                        <td>{elem["original-lang"]}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;