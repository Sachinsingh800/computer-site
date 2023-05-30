import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./SlideShow.module.css"

function SlideShow() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?Laptop"
          alt="First slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h3>Nature</h3>
          <p>Images can help us understand the urgency many photographers feel to protect wild places</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?programer"
          alt="Second slide"
        />

        <Carousel.Caption className={style.Caption}>
          <h3>Sunset</h3>
          <p>You can never watch too many sunsets.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?computer"
          alt="Third slide"
        />

        <Carousel.Caption className={style.Caption}>
          <h3>Mountain</h3>
          <p>
          The hardest climb brings the best rewards.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?coder"
          alt="Third slide"
        />

        <Carousel.Caption className={style.Caption} >
          <h3>landscape</h3>
          <p>
          The woods offer a unique canvas for photographers, with an ever-changing landscape of light and shadow.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}

export default SlideShow;