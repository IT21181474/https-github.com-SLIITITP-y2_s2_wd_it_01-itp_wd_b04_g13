import React from 'react';
import axios from 'axios';

const DeleteButton = ({ id, onDelete }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/employees/${id}`)
      .then(res => {
        onDelete();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <button onClick={handleDelete} style={{marginLeft:20,width:200,backgroundColor:"red"}}>Delete</button>
  );
};

export default DeleteButton;