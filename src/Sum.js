import React from 'react';

export default (props) => {
let sum = props.nums.reduce((a,b) => a + b);
let product = props.nums.reduce((a,b) => a * b, 2);
return(
    <div>
        <h1>Sum of Numbers</h1>
            <ul>
            {
                props.nums.map((nums,index) => <li key={index}>{nums}</li>)
            }
            </ul>
            <p>
                {sum}
            </p>                       
    </div>
);
};