import React, { useEffect } from "react";

import {
  getSmurfs,
  addSmurf,
  updateSmurf,
  deleteSmurf
} from "../actions/actions";

import { connect } from "react-redux";

import SmurfTable from "./SmurfTable";
import SmurfForm from "./SmurfForm";

const App = props => {

    useEffect(() => {
        props.getSmurfs();
      }, [])
    
      let currentlyEditing = false;
    
      let smurf;
    
      const setCurrent = id => {
        currentlyEditing = true;
        smurf = props.smurfs.filter((smurf) => smurf.id === id);
      }
     
      const putSmurf = (id, smurf) => {
        props.updateSmurf(id, smurf);
      };

    return (
        <div className="App">
            <SmurfTable {...props} current={setCurrent}/>
            <SmurfForm {...props} editing={currentlyEditing} current={smurf}/>
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