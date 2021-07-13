import React, {useState} from 'react';
import logo from '../logo.svg';
import './App.css';
import {Counter} from "./counter/Counter";
import {SettingsCounter} from "./Settings/SettingsCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {incValueAC} from "../bll/counter-reducer";


function App() {
    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()
    const incHandler = () => {
        dispatch(incValueAC())
    }
    let [maxCount, setMaxCount] = useState<number>(0)
     let [startValue, setStartValue] = useState<number>(0)
     let [count, setCount] = useState<number>(0);
     let [disabledInc, setDisabledInc] = useState<boolean>(true)
     let [disabledReset, setDisabledReset] = useState<boolean>(true)
     let [disabledSet, setDisabledSet] = useState<boolean>(true)

     const incButton = () => {
         let newValue = startValue + 1;
         setStartValue(newValue);
         if (newValue === maxCount) {
             setDisabledInc(true)
         }
         setDisabledReset(false)
     }

     const resetButton = () => {
         setStartValue(count)
         setDisabledInc(false)
         setDisabledReset(true)
     }

    return (
        <div className="App">
           <Counter count={count}
                     incButton={incButton}
                     resetButton={resetButton}
                     disabledInc={disabledInc}
                     disabledReset={disabledReset}
                     maxCount={maxCount}
                     startValue={startValue}/>
            <SettingsCounter
                maxValue={maxCount}
                count={count}
                setCount={setCount}
                setStartValue={setStartValue}
                setMaxCount={setMaxCount}
                disabledInc={disabledInc}
                disabledReset={disabledReset}
                setDisabledInc={setDisabledInc}
                setDisabledReset={setDisabledReset}
                setDisabledSet={setDisabledSet}
                disabledSet={disabledSet}
                maxCount={maxCount}
            />
        </div>
    );
}

export default App;


