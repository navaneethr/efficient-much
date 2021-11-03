import React from 'react';
import {CSVReader} from 'react-papaparse';
import DataTable from "./DataTable";
import './App.css';

const FileReader = () => {
    const [list, setList] = React.useState([]);
    const handleOnDrop = (data) => {
        console.log(data);
        setList(data);
    };

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err);
    };

    const handleOnRemoveFile = (data) => {
        console.log('---------------------------');
        console.log(data);
        console.log('---------------------------');
    };

    return (
        <div className="file-reader-parent">
            <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                addRemoveButton
                onRemoveFile={handleOnRemoveFile}
                config={{header: true}}
            >
                <span>Drop CSV file here or click to upload.</span>
            </CSVReader>
            {
                list.length > 0 && <DataTable list={list}/>
            }
        </div>
    );
}

export default FileReader;