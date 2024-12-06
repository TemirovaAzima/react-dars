import React from 'react'

const Salomlashish = ()=>{
    const title = 'Salom'
    const date = new Date()
    const name = 'john'
    return (
        <div>
            <h1>{title} {name}</h1>

            <p>todays date {date.getDate()}</p>

            </div>
    )
}
export default Salomlashish