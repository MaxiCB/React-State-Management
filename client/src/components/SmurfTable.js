import React from "react";
import { Table } from "reactstrap";
import SmurfRow from "./SmurfRow";

const SmurfTable = props => {

    const deleteSmurf = id => {
        props.deleteSmurf(id);
      };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {props.smurfs.map((smurf) => {
              return <SmurfRow {...smurf} deleteSmurf={deleteSmurf} current={props.current}/>
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default SmurfTable;