import React, { useState,useEffect} from 'react';
import axios from './axios'
import "./Row.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const base_url = "https://image.tmdb.org/t/p/w200"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
          }      
    fetchData(); 
    }, [fetchUrl]);
    console.log(movies)
    const responsive = {
      desktop: {
        breakpoint: { max: 2024, min: 800 },
        items: 4.1,
        slidesToSlide: 4, 
      },
      tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 3.1,
        slidesToSlide: 3, 
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2.1,
        slidesToSlide: 2,
      },
    };
  
     return (
       <div className="row">
         <h2>{title}</h2>
         <div className="row_posters">
           <Carousel
             swipeable={true}
             draggable={false}
             responsive={responsive}
             minimumTouchDrag={10}
             removeArrowOnDeviceType='mobile'>
             {movies.map((movie) => {
               return (
                 <>
                   <img
                     key={movie.id}
                     className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                     src={`${base_url}${
                       isLargeRow ? movie.poster_path : movie.backdrop_path
                     }`}
                     alt={movie.name}
                   />
                   <div className="movie_title_wrapper">
                     <span className="movie_title">{movie.original_title ? movie.original_title :
                       (movie.original_name ? movie.original_name : "") }</span>
                   </div>
                 </>
               );
             })}
           </Carousel>
         </div>
       </div>
     );
}

export default Row