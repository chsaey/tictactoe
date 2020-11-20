import React from 'react';

//Square doesn't need to hold state which is why we can use funcional component, it will take props from the board component.
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

  export default Square