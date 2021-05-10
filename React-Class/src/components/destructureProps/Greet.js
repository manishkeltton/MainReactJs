import React from 'react'

// function Greet(){
//     return <h1>Hello Manish</h1>
// }

// export const Greet = () => <h1>Hello Rudra Sharma</h1>

// const Greet = ({name, heroName}) =>{
//     // console.log(props);
//     return  (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// } 

const Greet = props =>{
    //Destructuring props
    const {name, heroName} = props;
    // console.log(props);
    return  (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

// const Greet = () => {
//     return (
//         <div>
//             <h1>Hello Manish Kumar</h1>
//         </div>
//     )
// }

export default Greet
