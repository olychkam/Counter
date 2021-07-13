import React, {ChangeEvent, useState} from 'react';
import {Display} from "../Display/Display";
import {Button} from "../button/Button";
import {Input} from "../../Input";

type CounterType = {
    count: number
    setCount: (value: number) => void
    maxValue: number
    setMaxCount: (value: number) => void
    setStartValue: (value: number) => void
    disabledInc: boolean
    disabledReset: boolean
    setDisabledInc: (value: boolean) => void
    setDisabledReset: (value: boolean) => void
    setDisabledSet: (value: boolean) => void
    disabledSet: boolean
    maxCount:number
}

export function SettingsCounter(props: CounterType) {
    let [maxValue, setMaxValue] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(0)
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        props.setDisabledInc(true)
        if (e.currentTarget.valueAsNumber === minValue || e.currentTarget.valueAsNumber <= 0 ||
            minValue < e.currentTarget.valueAsNumber || minValue < 0) {
            props.setDisabledSet(true)
        } else {
            props.setDisabledSet(false)

        }

    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.valueAsNumber)
        props.setDisabledInc(true)
        props.setDisabledReset(true)
        if (e.currentTarget.valueAsNumber === minValue || e.currentTarget.valueAsNumber >= maxValue ||
            e.currentTarget.valueAsNumber < 0) {
            props.setDisabledSet(true)
        } else {
            props.setDisabledSet(false)
        }
    }
    const setOnClick = () => {
        props.setCount(minValue)
        props.setMaxCount(maxValue)
        props.setDisabledInc(false)
        props.setStartValue(minValue)
    }


    return (
        <div className='container'>
            <div className='inputContainer'>
            Max value:<Input value={maxValue} onChange={onChangeMaxValue}/>
            Start value:<Input value={minValue} onChange={onChangeStartValue}/>
            </div>
            <div className='containerButton'>
                <Button title={'set'}
                        button={setOnClick}
                        disabled={props.disabledSet}/>
            </div>
        </div>
    )
}
