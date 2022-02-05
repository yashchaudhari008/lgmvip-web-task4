import { useState } from "react";
import "./App.css";
import EnrollmentForm from "./components/EnrollmentForm";
import Student from "./components/Student";
function App() {
  const [students, setStudents] = useState([]);

  return (
    <>
      <h1 className="AppHeading">Student Enrollment Portal</h1>
      <div className="App">
        <div className="AppContainer">
          <h2 className="subHeading">Enrollment New Student:</h2>
          <EnrollmentForm setStudents={setStudents} />

          {students.length !== 0 ? (
            <div className="studentsHolder">
              <h2 className="subHeading">Enrolled Students:</h2>
              {students.map((student, index) => (
                <Student key={index} student={student} />
              ))}
            </div>
          ) : (
            <h2 className="subHeading">No Enrolled Student Found !</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
