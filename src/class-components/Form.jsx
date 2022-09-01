import React from 'react'

export class Form extends React.Component {
    state = {
        name: 'Tiana',
        arr: ['ivanov', 'petrov', 'sidorov']
    }


    handlChangeName = (ev) => {
        this.setState({ name: ev.target.value })
       
    }
    handlSubmit = (ev) => {
        ev.preventDefault()
        console.log(this.state.name);
        console.log(ev.target.elements.password.value);
    }

    render() {
        return <form onSubmit={this.handlSubmit}>
            {this.state.arr.map((item , idx)=>{
                return <div key={idx}>{item}</div>
            })}
            <p> Name : {this.state.name}</p>
            <input type="text" onChange={this.handlChangeName} />
            <input type="text" name="password"/>
            <button class="classBtn"> send form</button>
        </form>
    }
}