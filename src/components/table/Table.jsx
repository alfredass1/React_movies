import React from 'react';
import './table.scss';
import Search from "../search/Search";


function Table(props) {
    if (props.data.Response == 'False'){
        return (
            <div>
                <h2>Klaida šis filmas nerastas </h2>
            </div>
        )

    } else {
        return (
            <div className="table">
                <table>
                    <tr>
                        <th>Pavadinimas</th>
                        <th>Apie</th>
                        <th>Imdb</th>
                        <th>Trukme</th>
                        <th>Rezisierius</th>
                    </tr>
                    <tr>
                        <td>{props.data.Title}</td>
                        <td>{props.data.Plot}</td>
                        <td>{props.data.Rated}</td>
                        <td>{props.data.Runtime}</td>
                        <td>{props.data.Director}</td>
                    </tr>
                </table>
            </div>
        );

    }
}

export default Table;