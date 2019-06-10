import React from 'react';

import mockData from '../mock-data/collection.mock';

class MyCollection extends React.Component {
    render() {
        return(
            <div>
                <h1>My Collection</h1>
                <table className="table">
                    <tbody>
                    <tr>
                        <th>{"Favorite"}</th>
                        <th>{"ID"}</th>
                        <th>{"Category"}</th>
                        <th>{"Type"}</th>
                        <th>{"Year"}</th>
                        <th>{"Region"}</th>
                        <th>{"Label"}</th>
                        <th>{"Description"}</th>
                    </tr>
                    {
                        mockData.map(
                            bottle =>
                                <tr key={bottle.id}>
                                    <td>{bottle.favorite}</td>
                                    <td>{bottle.id}</td>
                                    <td>{bottle.category}</td>
                                    <td>{bottle.type}</td>
                                    <td>{bottle.year}</td>
                                    <td>{bottle.region}</td>
                                    <td>{bottle.label}</td>
                                    <td>{bottle.description}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyCollection;