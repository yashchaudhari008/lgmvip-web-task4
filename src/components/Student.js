import React from "react";

const imageLinks = {
  male: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  female: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
  unknown: "https://cdn-icons-png.flaticon.com/512/924/924874.png",
};

export default function Student({ student }) {
  return (
    <div className="Student">
      <div className="StudentImage">
        <img alt="studentImage" src={imageLinks[student.gender]}></img>
      </div>
      <div className="StudentDescription">
        <p className="name">{student.name}</p>
        <p className="gender">{student.gender}</p>
        <a className="email" href={`mailto:${student.email}`}>
          {student.email}
        </a>
        <a className="github" href={student.github}>
          {student.github}
        </a>
        <div className="skills">
          {Object.values(student.skills).reduce((a, b) => a + b, 0) !== 0 ? (
            <>
              <h3> Skills: </h3>
              {Object.keys(student.skills).map((skill, index) => {
                if (student.skills[skill]) {
                  return (
                    <p key={index} className="skill">
                      {skill}
                    </p>
                  );
                }
                return <React.Fragment key={index}></React.Fragment>;
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
