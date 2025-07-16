import Above90 from "./first-position";
import Above80 from "./second-position";
import Above70 from "./third-position";
import Above60 from "./fourth-posiiton";
import Above50 from "./fifth-position";



function ShowGrade() {
    let marks = +prompt("Enter Your Marks");
    if (marks >= 90 && marks <= 100) {
        return < Above90 />
    } else if (marks >= 80 && marks <= 89) {
        return <Above80 />
    } else if (marks >= 70 && marks <= 79) {
        return <Above70 />
    } else if (marks >= 60 && marks <= 69) {
        return <Above60 />
    } else if (marks >= 50 && marks <= 59) {
        return <Above50 />
    } else {
        <h1>F</h1>
    }
}

export default showGrade;