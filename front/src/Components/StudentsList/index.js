import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

const StudentsList = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    listStudent();
  }, []);

  const listStudent = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/dummy/students`); // on fais un fetch de data depuis l'api sur la route dummy
      setStudent(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {student.map((student, index) => (   // on map dans les students pour les afficher
          <li key={`StudentList${index}`}>    
            {student.name} From {student.house}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default StudentsList;
