import React, { useEffect } from 'react'
import {useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'


function Banner() {
    const [movie, setMovie]=useState([])
    var RandomNumber = Math.floor(Math.random() * 19) + 0
    
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[RandomNumber]);
            setMovie(response.data.results[ RandomNumber])
        })
        
    }, [])
    return (
        <div className='body'>
        <div className='banner' 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : null})`}}
        >
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : null}</h1>
                <div className='banner_buttons'>
                    <button className='button'>PlayNow</button>
                    <button className='button'>+MyList</button>
                </div>
                <h1 className='discription'>{movie ? movie.overview : null}</h1>
            </div>
        <div className='fade_bottom'></div>
        </div>        
        </div>
    )
}

export default Banner
