import React, { useEffect } from "react";

import {
  getSmurfs,
  addSmurf,
  updateSmurf,
  deleteSmurf
} from "../actions/actions";

import { connect } from "react-redux";

const App = props => {

    useEffect(() => {
        props.getSmurfs();
      }, [])
    
      let currentlyEditing = true;
    
      let smurf;
    
      const setCurrent = id => {
        currentlyEditing = true;
        smurf = props.smurfs.filter((smurf) => smurf.id === id);
        // console.log(current, currentlyEditing);
      }
     
      const putSmurf = (id, smurf) => {
        props.updateSmurf(id, smurf);
      };

    return (
        <div className="App">
            <p>Testing</p>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
      smurfs: state.smurfs,
      fetchingSmurfs: state.fetchingSmurfs,
      error: state.error
    };
  };

export default connect(mapStateToProps, {
    getSmurfs,
    addSmurf,
    updateSmurf,
    deleteSmurf
  })(App);