import React from 'react';


type ButtonType = {
    title: string
    button: () => void
    disabled: boolean
}

export function Button(props: ButtonType) {

    return <button className='button'
                   onClick={props.button}
                   disabled={props.disabled}
    >{props.title}
    </button>

}

