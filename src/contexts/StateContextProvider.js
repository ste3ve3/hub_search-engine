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
        'X-RapidAPI-Key': '6a2920e800mshe90d0a022f3aebbp1e4921jsn11eb95357e62',
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