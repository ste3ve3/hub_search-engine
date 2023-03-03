import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://front-page-search-engine.p.rapidapi.com';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1873f25a38msh9cc95f6b7849606p1b0f6ejsnc02cc8534669',
        'X-RapidAPI-Host': 'front-page-search-engine.p.rapidapi.com'
      }
    });

    const data = await res.json();
    console.log(data)
    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);