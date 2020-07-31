import React from 'react';

const DigitalNumber = (props) =>{
    let str = `${props.number}`;
    let ml = props.milli;
    let output = "";
    if(ml){
    output = str.split('').length===1?'00'+str:str.split('').length===2?'0'+str:str;
    }else{output = str.split('').length===1?'0'+str:str}
    return (
    <div className="digits">{output}</div>
    );
}
export default DigitalNumber;