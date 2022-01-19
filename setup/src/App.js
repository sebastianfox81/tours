import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [ loading, setLoading ] = useState(true);
  const [ tours, setTours ] = useState([]);

  const fetchTours = () => {
    setLoading(true);
    axios.get(url)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTours()
  }, []);


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
