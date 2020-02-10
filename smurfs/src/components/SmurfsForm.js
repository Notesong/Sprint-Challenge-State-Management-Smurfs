import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions/actions";

const SmurfsForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div className="smurfs-form">
      {props.isFetchingData ? (
        <div>**we are fetching data**</div>
      ) : (
        <button onClick={handleGetData}>get data</button>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfsForm);