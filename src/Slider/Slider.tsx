import { Component } from "react"
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/1img.jpg";
import img2 from "../images/2img.jpg";
import img3 from "../images/3img.jpg";
import "../styles/main1.scss";


export default class Slider extends Component{
    render(){
        return(
            <Carousel className="slider">
              <Carousel.Item>
                <img className="slider-img" src={img1} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="slider-img" src={img2} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="slider-img" src={img3} />
              </Carousel.Item>
            </Carousel>
        )
    }
}