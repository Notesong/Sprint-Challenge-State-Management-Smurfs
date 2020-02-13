import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData, deleteData } from "../actions/actions";

import Smurf from './Smurf';

const SmurfsList = props => {
  // get data to be displayed
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="smurfs-list">
      {/* display error message or data based on whether or not API call was successful */}
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} deleteData={props.deleteData} /> )
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData, deleteData }
)(SmurfsList);