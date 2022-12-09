import React from 'react';
import s from './button.module.css'

type PropsType = {
    title: string
    onClickHandler: ()=>void
}

const Button = (props:PropsType) => {


    return (
        <div onClick={ props.onClickHandler} className={s.ButtonMain}>
            {props.title}
        </div>
    );
};

export default Button;