import React from 'react';

const Beer = ({ smurf }) => {
    return (
        <div className='smurf'>
                <h3>{smurf.name}</h3>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>            
        </div>
    )
}

export default Beer;