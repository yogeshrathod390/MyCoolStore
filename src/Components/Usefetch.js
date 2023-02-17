import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
        headers: {
          Authorization:'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
         
          "Content-Type":"application/json"
        },
      })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;