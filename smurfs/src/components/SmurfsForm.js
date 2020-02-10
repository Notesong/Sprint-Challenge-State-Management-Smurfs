import React, { useState } from 'react';
import { connect } from "react-redux";

import { postData } from "../actions/actions";

const SmurfsForm = props => {
    // local states for form
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [newHeight, setNewHeight] = useState('');

    const handleChangesName = e => {
        setNewName(e.target.value);
    };

    const handleChangesAge = e => {
        setNewAge(e.target.value);
    };

    const handleChangesHeight = e => {
        setNewHeight(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e)
        props.postData(newName, newAge, newHeight);
        setNewName('');
        setNewAge('');
        setNewHeight('');
    };

  return (
    <div className="smurfs-form">
      {props.isPostingData ? (
        <div>Submitting data...</div>
      ) : (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                onChange={handleChangesName}
                type='text'
                name='name'
                value={newName}
                maxLength='30'
            />
            <input
                placeholder="Age"
                onChange={handleChangesAge}
                type='number'
                name='age'
                value={newAge}
                maxLength='5'
            />
            <input
                placeholder="Height"
                onChange={handleChangesHeight}
                type='text'
                name='height'
                value={newHeight}
                maxLength='10'
            />
            <button>Add</button>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isPostingData: state.isPostingData
  };
};

export default connect(
  mapStateToProps,
  { postData }
)(SmurfsForm);