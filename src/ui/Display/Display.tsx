import React from 'react';


type DisplayType = {
    startValue:number
    count: number
    maxCount:number
}

export function Display(props: DisplayType) {
    return (
        <div className={props.count === 5 ? 'display active' : 'display'}>{props.startValue}</div>
    )
}
