// import React from 'react'
//
// const App = () => {
//     return (
//         <main>
//             <User name ='Azima' age={17} hobbies={["Coding ","Dancing"]} userss={{name:"kik", age: 23}} little={[{name
//             :'jjj', id: 1}, {name:'lll', id: 2}]}/>
//         </main>
//     )
// }
// export default App
// const User = ({name, age, hobbies, little})=> {
//     console.log(name)
//     return (
//         <main>
//             <h1>My name is {name}</h1>
//             <h1>My age is {age}</h1>
//             <h1> My hobbies:{hobbies}</h1>
//             {/*<p>{userss.name}</p>*/}
//             {/*<p>{userss.age}</p>*/}
//             {little.map((item, index) => (
//                 <ul key = {index}>
//                     <li key={Math.random()}>Name: {item.name} id : {item.id}</li>
//                 </ul>
//             ))}
//         </main>
//     )
// }

import Person from './components/Person.jsx'
export const App = ()=>{
    return(
        <main>
            <Person name={'Azima'} age={17}/>
        </main>
    )
}