import React, {useState} from 'react';
import {FullInput} from './Components/FullInput';
import './App.css'
import {Input} from './Components/Input';
import {Button} from './Components/Button';


function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title, setTitle] = useState('')

    const addTask = (title: string) => {
        let newMessage = {message: title};
            setMessage([newMessage, ...message])

    }

    const callBackButtonHandler = () => {
        addTask(title)
        setTitle('')
    }

    return (
        <div className="App">
            <Input title={title}
                   setTitle={setTitle}
            />
            <Button name={'+'} callback={callBackButtonHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;