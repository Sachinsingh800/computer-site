import React from 'react'
import style from "./RegisterUserHome.module.css"
import VideoCard from '../../component/VideoCard/VideoCard'
import {videoPlayerData} from "../../Recoil"
import { useRecoilState } from 'recoil';



function RegisterUserHome() {
  const [video,setvideo] = useRecoilState(videoPlayerData)
  
  return (
    <div className={style.main}>
      <div className={style.CourseAccodian}>
        <VideoCard />
      </div>
      <div className={style.container}>
      <iframe className={style.video}  src={video[0]?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default RegisterUserHome
