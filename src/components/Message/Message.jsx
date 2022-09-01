import { React } from 'react'
import style from './message.module.css'



export const Message = (props) => {
    const message = ''

    return <div className={style.message}>
        <p className='DZ'> Text for HW: {props.text}</p>

    </div>
}

