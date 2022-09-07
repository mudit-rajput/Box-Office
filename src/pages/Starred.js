import React, { useEffect, useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {useShows} from '../misc/custom-hooks'
const Starred = () => {

  const[starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0){

    } else {
      setIsLoading(false);
    }
  }, [starred])
  


  return  <MainPageLayout>Starred</MainPageLayout>
  
}

export default Starred