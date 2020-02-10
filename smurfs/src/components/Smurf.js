import React from 'react';

const Smurf = ({ smurf, deleteData }) => {
    // delete smurf on server if user clicks on 'x'
    const handleClick = e => {
        e.preventDefault();
        deleteData(smurf.id);
      }

    return (
        <div className='smurf'>
            {/* display smurf info and delete button */}
            <div className='btn-container'><button className='delete-button' onClick={handleClick}>X</button></div>
            <h3>{smurf.name}</h3>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
}

export default Smurf;