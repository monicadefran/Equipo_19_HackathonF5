import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './Api.css';

function Api() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const apiUrl = 'https://hackaton-fd4b0-default-rtdb.firebaseio.com/coders.json';

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(coder => coder.Nombre.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="social-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {/* Renderiza los datos filtrados */}
      {filteredData.map(coder => (
        <div className="social-card" key={coder.id}>
          <h3>{coder.Nombre}</h3>
          <p>{coder.Posicion}</p>
          <p>{coder.Ciudad}</p>
          <p>{coder.Habilidades.join(", ")}</p>
          <a href={coder.LinkedIn} className="project-link">
            LinkedIn
          </a>
          <a href={coder.GitHub} className="project-link">
            GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Api;