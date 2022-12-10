import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import './App.css';
import axios from "axios";
function App() {

  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime= async()=>{
    const temp=await axios.get(`https://api.jikan.moe/v4/anime?limit=5`)
    .then(res=>{
      // console.log(res);
    SetTopAnime(res.data.data)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const HandleSearch=e=>{
    e.preventDefault();
    // console.log(search);
    FetchAnime(search);
  }

  const FetchAnime=async(query)=>{
    const temp=await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&limit=10&order_by=title&sort=asc`)
    .then(res=>{
      // console.log(res.data.data);
      SetAnimeList(res.data.data)
    })
    .catch(err=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    GetTopAnime()
  },[]);
  
  useEffect(()=>{
    FetchAnime(search);
  },[search])
  // console.log(topAnime)
  return (
    <div>
      <Header></Header>
      <div className="content-wrap">
        <Sidebar
          topAnime={topAnime} />
          <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}/>
      </div>
    </div>
  );
}

export default App;
