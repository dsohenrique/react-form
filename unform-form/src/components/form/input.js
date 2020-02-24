import React, {useEffect, useRef} from 'react';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }){
    const inputRef = useRef(null);
    const {fieldName, defaultValue, error, registerField} = useField(name);
    
    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    });

    return(
        <input type="text" ref={inputRef} defaultValue={defaultValue} {...rest} />
    );
}