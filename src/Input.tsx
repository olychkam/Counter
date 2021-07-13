import React, {ChangeEvent, useState} from 'react';

type InputType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


export function Input(props: InputType) {

    return (
        <div>
            <input type='number' onChange={props.onChange} value={props.value}/>
        </div>
    )
}