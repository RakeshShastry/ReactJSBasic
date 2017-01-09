import React from 'react';

export default (props) => {
    let sum = props.nums.reduce((a,b)=>a+b,0);
    let product = props.nums.reduce((a,b)=>a*b,2);
    return(
        <div>
            <h1>Sum of Numbers</h1>
            <p>
            {sum}
            </p>
            <h1>Product of Numbers</h1>
            <p>
            {product}
            </p>
        </div>
    );
};