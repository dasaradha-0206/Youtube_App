import { useParams } from "react-router-dom";

const NextVideo=()=>{
    const {id}=useParams()
    const embedurl="https://www.youtube.com/embed/"
    return <div className="next_video">
        <iframe width="1000" height="515" src={embedurl+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    </div>
}
export default NextVideo;