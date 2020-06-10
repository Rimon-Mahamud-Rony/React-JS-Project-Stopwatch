import React from 'react'

const Laps = (props) => 
{
    return (
        <ul className="list-group list-group-flash">

            { props.laps.map ( (lap , index)=> {
                    
                return (
                    <li key={index} className="list-group-item">
                        <h4>
                        <span className="text-dark "> Lap No: &nbsp; {index+1} &nbsp;&nbsp; Time passed: &nbsp;&nbsp;</span>
                        <span className="text-dark ">Minute: </span>
                        <span className="text-danger "> &nbsp;&nbsp;&nbsp; {lap.min} &nbsp;&nbsp;&nbsp;</span>

                        <span className="text-dark  ">Seconds: </span>
                        <span className="text-danger "> &nbsp;&nbsp;&nbsp; {lap.sec} &nbsp;&nbsp;&nbsp;</span>

                        <span className="text-dark  ">MiliSeconds: </span>
                        <span className="text-danger "> &nbsp;&nbsp;&nbsp; {lap.mili} &nbsp;&nbsp;&nbsp;</span>
                        </h4>
                            
                            <br></br>
                    </li>
                )
            }

            )}

        </ul>
    )
}
    


export default Laps