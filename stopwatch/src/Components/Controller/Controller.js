import React, {Component} from 'react'

class Controller extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            start : true,
            pause : false,
            lap : false,
            reset : false
        }
    }

    startHandler()
    {
        this.setState({
            ...this.state,
            start : false,
            pause : true,
            lap : true
        })

        this.props.start()
    }

    pauseHandler()
    {
        this.setState({
            ...this.state,
            start : true,
            reset : true,
            pause : false,
            lap : false
        })
        this.props.pause()
    }

    lapHandler()
    {
        this.props.lap()
    }

    resetHandler()
    {
        this.setState({
            start : true,
            pause : false,
            lap : false,
            reset : false
        })
        this.props.reset()
    }
    getController()
    {
        let output = null

        if (this.state.start && !this.state.reset)
        {
            output=(
                <div  style={{
                    paddingTop: '50px'
                  }}>
                    <button 
                    className="btn btn-success btn-sm px-5 ml-5"
                    onClick={ event=>this.startHandler() }
                    > 
                    start</button>
                </div>
            )
        }

        else if (this.state.pause && this.state.lap)
        {
            output=(
                <div style={{
                    paddingTop: '50px',
                  }}>
                    <button 
                    className="btn btn-primary btn-sm px-5 ml-5"
                    onClick={ event=>this.pauseHandler()}
                    > 
                    pause</button>

                    <button 
                    className="btn btn-warning btn-sm px-5 ml-5"
                    onClick={ event=>this.lapHandler()}
                    > 
                    Lap</button>
                </div>
            )
        }

        else if (this.state.start && this.state.reset)
        {
            output=(
                <div style={{
                    paddingTop: '50px',
                  }}>
                    <button 
                    className="btn btn-success btn-sm px-5 ml-5"
                    onClick={ event=>this.startHandler()}
                    > 
                    Start</button>

                    <button 
                    className="btn btn-danger btn-sm px-5 ml-5"
                    onClick={ event=>this.resetHandler()}
                    > 
                    Reset</button>
                </div>
            )
        }

        return output
    }

    render() {
        return this.getController()
    }
}

export default Controller