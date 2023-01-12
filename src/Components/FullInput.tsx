import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    addTask: (title: string) => void
}

export const FullInput = (props: PropsType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onClickButtonHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    )
}