import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./CourseVideo.module.css"
import ReactPlayer from 'react-player';

function CourseVideo() {
  return (
    <Carousel>
      <Carousel.Item>
      <iframe className={style.video}  src="https://www.youtube.com/embed/bBpKJccIdvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe className={style.video} src="https://youtube.com/embed/kXrFo4pq23Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe className={style.video} src="https://www.youtube.com/embed/3uaHXOqvo-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Carousel.Item>

    </Carousel>
  );
}

export default CourseVideo;