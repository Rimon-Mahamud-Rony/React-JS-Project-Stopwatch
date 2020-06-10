import React, {Component} from 'react'

import './title.css'

///class Title extends React.Component
class Title extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
           title: 'ENTER LAP NAME',
           isInput: false
        }
    }

    edit ()
    {
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputChange(event)
    {
        this.setState({
            ...this.state,
            title: event.target.value
        })
    }

    key(event)
    {
        if (event.key==='Enter')
        {
            this.setState({
                ...this.state,
                isInput: false
            })   
        }
    }

    blur (event)
    {
            this.setState({
                ...this.state,
                isInput: false
            })   
    }

    render()
    {
        let output=null

        if (this.state.isInput)
        {
           output= (
               <div>
                   <input 
                        className="form-control"
                        onChange = { (event)=> this.inputChange(event) }
                        onKeyPress = { (event)=> this.key(event)}
                        onBlur = { (event) =>this.blur(event) }
                        type="text"
                        value = { this.state.title} 
                   />

               </div>
           )
        } 
        else
        {
            output = (
                <div>
                    <h3 className="alert alert-primary">
                         {this.state.title}
                         <p className="bts">
                            <button className="btn btn-sm btn-danger" onClick={ ()=>this.edit() }> edit </button>
                         </p>
                    </h3>
                    
                </div> 
            )
        }
        return(
            <div className="container">
                { output }
            </div>
        )
    }
}

export default Title