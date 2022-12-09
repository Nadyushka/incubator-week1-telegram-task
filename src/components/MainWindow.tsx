import React, {useState} from 'react';
import {v1} from 'uuid';
import Button from './Button/Button';
import s from './mainWindow.module.css'


type messageType = {
    id: string
    message: string
}

const MainWindow = () => {

    const [messages, setMessages] = useState<Array<messageType>>([])
    const [inputValue, setInputValue] = useState<string>('')
    const addErrorMessage =  messages.length < 5 ? `You have ${5 - messages.length} messages` : 'Messages limit was exceeded'

    const allMessages = messages.map(t => {
        return (
            <div key={t.id}>{t.message}</div>
        )
    })

    const addValue =  (newMessage: string) => {
        if (messages.length < 5 && newMessage.trim()) {
            setMessages([{id: v1(), message: newMessage}, ...messages])
            setInputValue('')
        } else {
            setInputValue('')
        }
    }

    const clearValue = () => {
        setInputValue('')
    }

    const deleteLastValue = () => {
              setMessages(messages.slice(0,messages.length-1))

    }

    let fullClassName = messages.length === 5 ? s.messageError: ''

    return (
        <div>
            <div className={fullClassName}>{addErrorMessage}</div>
            <input value={inputValue}
                   onChange={(e) => setInputValue(e.currentTarget.value)}
                   onKeyDown={(e) => {
                       if (e.key === 'Enter') {
                           setInputValue(e.currentTarget.value)
                           addValue(inputValue)
                       }
                   }
                   }/>
            <span>
            <Button onClickHandler={()=>addValue(inputValue)} title={'ADD'}/>
            <Button onClickHandler={clearValue} title={'Clear'}/>
                </span>
            <Button onClickHandler={deleteLastValue} title={'Delete last message'}/>
            <div className={s.Messages}>{allMessages}</div>
        </div>
    );
};

export default MainWindow;