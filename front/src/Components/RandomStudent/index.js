import { useEffect, useState } from "react";
import axios from "axios";

const RandomStudent = () => {
  const [champion, setChampion] = useState([]);

  const handleChampion = async () => {
    const res = await axios.get(`http://localhost:3000/real/randomStudents`);
    setChampion(res.data.data);
  };

  useEffect(() => {
    handleChampion();
  }, []);

  return (
    <div>
      <button onClick={handleChampion}>Choose a Champion</button>
      <p>
        {champion.character} is the new champion of Three Wizards Tournament
      </p>
    </div>
  );
};

export default RandomStudent;
