import {Component} from 'react'

export class Count extends Component {
    state = {
        count: 1,
    }

    handlClick = () => {
        this.setState({ count: this.state.count + 1 })
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    render() {
        console.log(this.props.count);
        return <>
            <p>Count props: {this.props.count}</p>
            <p>Count state: {this.state.count}</p>
                       <br />
            <button class="classBtn" onClick={this.handlClick} type="button">click</button>
        </>
    }
}
