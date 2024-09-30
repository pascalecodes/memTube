import React , { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from '../components/Card';
import axios from "axios"

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("/api/videos/random");
      //const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    }
    fetchVideos()
  }, []); //[type]

  return (
    <Container>
      {videos.map((video) => (
        <Card />
      ))}
      

    </Container>
  )
}

export default Home
