import { useState, useEffect } from 'react';

const useFetch = (apiUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);

          const response = await fetch(apiUrl);
          const result = await response.json();
  
          setData(result.products);
          setLoading(false);
        } catch (error) {

          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

      fetchData();
    }, [apiUrl]); 

    return { data, loading };
}

export default useFetch