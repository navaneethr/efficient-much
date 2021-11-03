import React from 'react';
import 'react-virtualized/styles.css'; // only needs to be imported once
import './App.css';
import * as _ from 'lodash';
import { Column, Table, AutoSizer } from "react-virtualized";
const DataTable = ({list}) => {
    const updatedList = list.map(({data}) => ({imageId: data.imageId, imageUrl: data.imageurls}))
    const [text, setText] = React.useState([]);
    const [image, setImage] = React.useState(null);

    const data = _.isEmpty(text) ? updatedList : updatedList.filter((row) => {
        if (row.imageId) {
            return row.imageId.startsWith(text);
        }
        return false;
    });

    const onClick = (url) => {
        setImage(url);
    }
    console.log(image)
    return (
        <div className="table-parent">
            <div className="input">
                <label>Filter by ID</label>
                <input onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="table-image-div">
                <div className="table-container">
                    {
                        data.map(({imageId, imageUrl}) => {
                            return (
                                <div className="id-img-container">
                                    <span className="imageColumn">{imageId}</span>
                                    <span className="hoverColumn" onClick={() => onClick(imageUrl)}>Hover</span>
                                </div>
                            )
                        })

                    }
                </div>
                <div className="modal">
                    {image &&
                    <img src={image} alt="img" height={400}/>}
                </div>
            </div>
        </div>
    );
}

export default DataTable;