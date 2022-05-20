import axios from "axios";
import { useEffect, useState } from "react";

const CompleteStudentsList = () => {
  const [completeStudents, setCompleteStudents] = useState([]);

  useEffect(() => {
    listStudent();
  }, []);

  const listStudent = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/real/students`);
      setCompleteStudents(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Personnage</th>
            <th>Surnom</th>
            <th>Maison</th>
          </tr>
        </thead>
        <tbody>
          {completeStudents.map((completeStudents, index) => (
            <tr key={index}>
              <th>{completeStudents.character}</th>
              <th>{completeStudents.nickname}</th>
              <th>{completeStudents.hogwartsHouse}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CompleteStudentsList;
