import './playvideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { useEffect, useState } from 'react'
import {API_KEY, valueConverter} from '../../data'
import moment from 'moment/moment'
import { useParams } from 'react-router-dom'

const PlayVideo = ({ showComment, setShowComment }) => {
    
    const { videoId } = useParams();
    const handle = () => {
        
        setShowComment(prev => prev === true ? false : true);
    }
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);
    const fetchVideoData = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setApiData(data.items[0]);
        } catch (e) {
            console.log(e);
        }
       

    }

    const fetchOtherData = async () => {
        const Chaurl = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=${apiData.snippet.channelId}&key=${API_KEY}`;

        try {
            const responseData = await fetch(Chaurl);
            const data = await responseData.json();
            setChannelData(data.items[0]);
        } catch (e) {
            console.log(e)
        }
        const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${API_KEY}`;

        try {
            const commentResponse = await fetch(commentUrl);
            const responseData = await commentResponse.json();
            setCommentData(responseData.items);
            
        } catch (e) {
            console.log(e)
        }


    }



    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        fetchOtherData();
    },[apiData])
    
  return (
    <div className='play-video'>
          <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <h3>{ apiData? apiData.snippet.title: 'Title Here' }</h3>
          <div className="play-video-info">
              <p>{apiData? valueConverter(apiData.statistics.viewCount) : '0'} Views &bull; {moment(apiData? apiData.snippet.publishedAt: 'A minuts ago').fromNow()}</p>
              <div>
                  <span><img src={like} alt="" /> {apiData?valueConverter(apiData.statistics.likeCount) : 1} </span>
                  <span><img src={dislike} alt="" />0</span>
                  <span><img src={share} alt="" /> Share</span>
                   <span><img src={ save} alt="" /> Save</span>
              </div>
          </div>
          <hr />
          <div className="publisher">
              <img src={channelData? channelData.snippet.thumbnails.default.url: ''} alt="" />
              <div>
                  <p>{apiData? apiData.snippet.channelTitle: '' }</p>
                  <span>1M Subscribers</span>
              </div>
              <button>Subscribe</button>
          </div>

          <div className="vid-description">
              <p> {apiData? apiData.snippet.description : 'Description'} </p>
              <p>Subscribe GreatStack to Watch More Tutorials on web development</p>
          </div>
          <hr />
          <div className='change'>
              <h4>{apiData? valueConverter(apiData.statistics.commentCount) : 0} Comments </h4>
              <button onClick={handle}>Show { showComment ? 'More' : 'Less' }</button>
          </div>
          <div className={`${showComment ? 'toggle' : 'show'}`}>
              {commentData.map((item, index) => {
                  return (
                     <div className="comment" key={index}>
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                              <p>{ item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className="comment-action">
                      <img src={like} alt="" />
                                  <span>{ valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                      <img src={dislike} alt="" />
                      <span>0</span>
                  </div>
              </div>
          </div>
                )
            })}
         
            </div>
    </div>
  )
}

export default PlayVideo
