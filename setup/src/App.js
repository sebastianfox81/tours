import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [ loading, setLoading ] = useState(true);
  const [ tours, setTours ] = useState([]);


  const fetchTours = async () => {
    setLoading(true)

    try {
      const res = await fetch(url);
      const tours = await res.json()
      setLoading(false);
      setTours(tours)
    } catch (err) {
      setLoading(false);
      console.log(err)
    }
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
      <Tours tours={tours} />
    </main>
  )
}

export default App
