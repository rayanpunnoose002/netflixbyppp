import React from 'react'
import {useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import './RowPost.css'
function Rowpost(props) {
    const [rowpost,setRowpost]=useState([])
    const [trailer,setTrailer]=useState('')
    useEffect(() => {

        axios.get(props.url).then((res)=>{
            console.log(res.data.results);
            setRowpost(res.data.results)
        }).catch((err)=>{
           // alert('network error')
        })


    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const movieplay=(id)=>{
         console.log(id);
          setTrailer(id)
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
              if(res.data.results.length!==0){
                  setTrailer(res.data.results[0])
              }else{
                  alert('No Matches Found')
              }
          })


      }
    return (
        <div className='row'>
            <h2 >{props.title}</h2>
            
            
            <div className="posters">
                {rowpost.map((obj)=>
                <img onClick={()=>{movieplay(obj.id)}} className={props.isSmall ? "smallposters":"poster"} src={`${imageUrl+obj.backdrop_path}`} />
                 
                )}
               
                
                

            </div>
            { trailer && <YouTube opts={opts} videoId={trailer.key} />}
        </div>
    )
}

export default Rowpost
