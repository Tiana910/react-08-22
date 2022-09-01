import { React } from 'react';


export const Child = ({ name, handlChangeCount }) => {
    const handlClickChild = () => {
        handlChangeCount((prevCount) => prevCount + 1)
    }

    return <>
        <p>{name}</p>
        <button onClick={handlClickChild} class="classBtn">Click for count change </button>
    </>
}