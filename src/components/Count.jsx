import {useState} from 'react'
import {React} from 'react';

export const Count = (props) => {
    const [count, setCount] = useState(1)
    // хук  чтобы не перерендовался, значение 1-по умолчанию, 
    // useState возвращает 2 аргумента  [каунт, функция, которая меняет наш каунт]

    // const handlClick = () => {
    //     setCount(count + 1)
    // }
    const handlClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return <>
        {/* <p>Count props: {this.props.count}</p> */}
        <p>{props.name}</p>
        <p>Count state: {count}</p>
        <button class="classBtn" onClick={handlClick} type="button">click</button>
    </>
}
// или можно сразу прописать НЭЙМ пропса 
// export const Count = (name) => {
//     const [count, setCount] = useState(1)
    
//     const handlClick = () => {
//         setCount((prevCount) => prevCount + 1)
//     }

//     return <>//         
//         <p>{name}</p>
//         <p>Count state: {count}</p>
//         <button class="classBtn" onClick={handlClick} type="button">click</button>
//     </>
// }