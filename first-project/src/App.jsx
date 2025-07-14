import React from "react";

export default Result;
// export {App};

/* normal function */

// function sum(x,y) {
//     return x + y
// }

/* component */

// function App() {

// let style = { color: "white", backgroundColor: "black"}
// return (

// ------------------------------

// <div>
//     <h1>Hello, World</h1>
//     <p>Kesa Diya..</p>
// </div>

//         ------------------------------

// <>
//     <h1 style={{ color: "white", backgroundColor: "black", textAlign: "center" }}>Hello, World</h1>
//     <p className="headingStyle">Kesa Diya..</p>
//     <button style={style}>Click Me</button>
// </>

//         ------------------------------

//         <React.Fragment>
//             <h1>Hello, World!!</h1>
//             <p>Kesa Diya..</p>
//         </React.Fragment>

//         ------------------------------

//         React.createElement("h1" , null , "Hello, World!!") -->  // ( tagName , attribute , content )
//     )
// }

// ----------------------------------------------------------------------------------------------------

// function App() {
//     return <ul>
//         <li>Abdullah</li>
//         <li>Ishtiaq</li>
//         <li>Khuram</li>
//     </ul>
// }

// ----------------------------------------------------------------------------------------------------

// function Result() {
//     let marks = 30;
//     if(marks >= 50 && marks <= 100) {
//         return <h1 style={{color: "green"}}>PASS</h1>
//     } else {
//         return <h1 style={{color: "red"}}>FAIL</h1>
//     }
// }

// --------------

// function Pass() {
//     return <h1 style={{ color: "green" }}>PASS</h1>
// }

// function Fail() {
//     return <h1 style={{ color: "red" }}>FAIL</h1>
// }

// function Result() {
//     let marks = 40;
//     if (marks >= 50 && marks <= 100) {
//         return < Pass />
//     } else {
//         return < Fail />
//     }
// }

// --------------

// import Pass from "./Pass";
// import Fail from "./Fail";

// function Result() {
//     let marks = 50;
//     if (marks >= 50 && marks <= 100) {
//         return < Pass />
//     } else {
//         return < Fail />
//     }
// }