import React, {Component, useState} from 'react';
import './App.css';
import './Analyze.css';
import Select from 'react-select';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Analyze() {

    const [rank, setRank] = useState('Bronze');

    const handleSelect=(e)=>{
        setRank(e);
    }


    return(
        <div>
            <hr />
            <h1 className="title"> Select your rank: </h1>
            <DropdownButton className="Rank-dropdown" title={rank} onSelect={handleSelect}>
                <Dropdown.Item eventKey="Bronze">Bronze</Dropdown.Item>
                <Dropdown.Item eventKey="Silver">Silver</Dropdown.Item>
                <Dropdown.Item eventKey="Gold">Gold</Dropdown.Item>
                <Dropdown.Item eventKey="Platinum">Platinum</Dropdown.Item>
                <Dropdown.Item eventKey="Diamond">Diamond</Dropdown.Item>
                <Dropdown.Item eventKey="Champion">Champion</Dropdown.Item>
                <Dropdown.Item eventKey="Grand Champion">Grand Champion</Dropdown.Item>
                <Dropdown.Item eventKey="Supersonic Legend">Supersonic Legend</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default Analyze;