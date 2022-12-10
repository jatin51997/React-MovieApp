import React from 'react'

function AnimeCard({anime}) {
  return (
    <div className='anime-card'>
        <a href={anime.url} target="_blank">
            <img src={anime.images.jpg.image_url} alt="anime image"/>
        </a>
        <h3>{anime.title}</h3>
    </div>
  )
}

export default AnimeCard