import './recomended.css'
import { useEffect, useState } from 'react'
import {API_KEY,valueConverter} from '../../data'
import { Link } from 'react-router-dom';


const Recomended = ({ categoryId }) => {
  
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const relatedUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

    try {
      const response = await fetch(relatedUrl);
      const data = await response.json();
      setApiData(data.items);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className='recomended'> 
      {apiData.map((item, index) => {
        return (
          <Link className="side-video-list" key={index} to={`/video/${item.snippet.categoryId}/${item.id}`}>
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <div className="vid-info">
              <h4>{ item.snippet.title}</h4>
              <p>{item.snippet.channelTitle }</p>
          <p>{valueConverter(item.statistics.viewCount)} Views</p>
        </div>
      </Link>
        )
      })}
    </div>
  )
}

export default Recomended
