import React, { useState,useEffect} from 'react';
import axios from './axios'
import "./Row.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const base_url = "https://image.tmdb.org/t/p/original/"

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
    
    var settings = {
      infinite: false,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
    };

     return(        
         <div className="row">
            <h2>{title}</h2>
             <div className="row_posters">
                <Slider {...settings}>
                    {movies.map(movie => {
                        return(
                    <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow &&  "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} alt={movie.name}/>
                    )})}
                </Slider>
            </div>
        </div>
    )
}

export default Row