import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Video=(props)=>{
    return <div className="video">
      <img className="video-img" src={props.data.snippet.thumbnails.high.url}></img>
      <h3 className="title">{props.data.snippet.title}</h3>
      <p className="title">{props.data.snippet.channelTitle}</p>
      <p className="title">{props.data.statistics.viewCount} views</p>

    </div>
}
const VideoContainer=()=>{
  const [videoarray,setvideo]=useState([])
  async function youtube(){
    const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBHrYoyNLjFL5F6uQIIMth4lOkEXHyPoV8")
    const originaldata=await data.json()
    console.log(originaldata.items)
    setvideo(originaldata.items)

  }
  useEffect(()=>{
    youtube()

  },[])

    return <div className="video_container">{
      videoarray.map((x)=>{
        return <Link to ={"/videos/"+x.id} className="link"><Video data={x}/></Link>
      })
    }
      
      
    </div>
  }
  export default VideoContainer;