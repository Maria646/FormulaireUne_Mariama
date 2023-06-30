import React from 'react'
import BsInput from "react-bootstrap/FormControl";

const input = ({id, value, type, onChange, ...rest}) => {
    const handleChange = (event) =>{
        const value = event.target.value;
        onChange(value, id);
    }
  return (
    <BsInput
    id={id}
    value={value}
    type={type}
    onChange={handleChange}
    {...rest}
    ></BsInput>
  )
}

export default input