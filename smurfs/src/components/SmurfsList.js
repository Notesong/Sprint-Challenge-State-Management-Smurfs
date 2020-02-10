import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../actions/actions";

import Smurf from './Smurf';

const SmurfsList = props => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="smurfs-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} /> )
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
  { getData }
)(SmurfsList);