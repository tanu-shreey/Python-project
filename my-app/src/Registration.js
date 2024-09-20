import React from 'react';

const Registration = (e) => {
    e.preventDefault()
    const {name}=e?.target;
   console.log(name)
};
export default Registration;
