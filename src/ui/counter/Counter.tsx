import React from 'react';
import {Display} from "../Display/Display";
import {Button} from "../button/Button";

type CounterType = {
    count: number
    incButton: () => void
    resetButton: () => void
    maxCount:number
    startValue:number
    disabledInc: boolean
    disabledReset: boolean

}

export function Counter(props: CounterType) {
    return (
        <div className='container'>
            <Display
                startValue={props.startValue}
                maxCount={props.maxCount}
                count={props.count}/>
            <div className='containerButton'>
                <Button title={'inc'}
                        button={props.incButton}
                        disabled={props.disabledInc}/>
                <Button title={'Reset'}
                        button={props.resetButton}
                        disabled={props.disabledReset}/>
            </div>
        </div>
    )
}

