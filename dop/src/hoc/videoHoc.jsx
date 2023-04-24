
import React from 'react'
import scoreVideo from '../hoc/scoreVideo'
const ScoreVideo = ({dataVideo}) => {
  console.log(dataVideo);
  return (
    <div>{dataVideo.response.map((el)=>{
      return <div  dangerouslySetInnerHTML={{ __html: el.videos[0].embed }}></div>
    })}</div>
  )
}

export default scoreVideo(ScoreVideo)