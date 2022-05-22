import React from 'react';
import { useState } from 'react';
import logo from '../../Blason_Gryffondor.svg.png';
import axios from "axios";

const FilteredHouse = () => {

    const [house, setHouse] = useState([]);

    const handleFilterdHouse = async (house) => {
        const result = await axios.get(`http://localhost:3000/real/studentAppeal`)
        console.log(result.data.data);
        const res = result.data.data.filter((e) => e.hogwartsHouse === house)
        setHouse(res);
    }



    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={() => handleFilterdHouse("Gryffindor")}>Gryffondor</button>
            <ul>
                {house.map((house, index) => (
                    <li key={`FilteredHouse${index}`}>
                        {house.character}
                    </li>
                ))}
            </ul> 
        </div>
    );
};

export default FilteredHouse;