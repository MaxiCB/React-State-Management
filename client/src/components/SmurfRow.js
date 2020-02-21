import React from "react";
import { Button } from "reactstrap";

const SmurfRow = props => {

  return (
    <tr onClick={e => props.current(props.id)}>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.height}</td>
      <Button onClick={() => props.deleteSmurf(props.id)}>X</Button>
    </tr>
  );
};

export default SmurfRow;