import React, { Component } from 'react';
import WreckItRalph2 from './images/WreckItRalph2.jpg';
import InfinityWar from './images/InfinityWar.jpg';
import Coco from './images/coco.jpg';
import Hexigon from './images/hexigon.svg';
import { Carousel } from 'react-responsive-carousel';
import './App.css';


class LayoutSection extends Component {
    render() {
        return (
            <div className="section" id={this.props.data.id}>
                <div className="description">
                    <h1>{this.props.data.title}</h1>
                    <p>{this.props.data.description}</p>
                </div>
                <div className="image">
                    <img src={this.props.data.image} alt="" />
                </div>
            </div>
        );
    }
}


class CarouselSlide extends Component {

    render() {
        let slides = [];
        for (let i = 0; i < this.props.data.length; i++) {
            slides.push(
                <div className="carouselSlide" style={{backgroundImage: "linear-gradient(rgba(176,176,176,0.95), rgba(176,176,176,0.95)), url(" + this.props.data[i].image + ")" }}>
                    <div className="carouselImage">
                        <img src={this.props.data[i].image} alt=""/>
                    </div>
                    <div className="carouselInformation">
                        <h1>{this.props.data[i].title}</h1>
                        <p>{this.props.data[i].description}</p>
                        <div className="url buyNow">
                            <img src={Hexigon} alt=""/>
                            <a href={this.props.data[i].buyUrl} target="_blank" rel="noopener noreferrer"> Buy Now</a>
                        </div>
                        <div className="url watchTrailer">
                            <a href={this.props.data[i].trailerUrl} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <Carousel showArrows={true} showThumbs={false} showIndicators={false} useKeyboardArrows={true} showStatus={false}>
                {slides}
            </Carousel>
        );
    }



}

class App extends Component {
  constructor(props) {
    super(props);
    this.layoutSectionData = [
        {
            id: "monsoon",
            title: "MONSOON III",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://i.vimeocdn.com/video/595198868_505x160.jpg",
        },
        {
            id: "beams",
            title: "BEAMS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://i.vimeocdn.com/video/589972810_530x315.jpg",
        },
        {
            id: "move2",
            title: "Move 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://i.vimeocdn.com/video/590587169_530x315.jpg",
        }
    ];
    this.carouselData = [
        {
            id: "wreckItRalph2",
            title: "Ralph Breaks the Internet",
            image: WreckItRalph2,
            buyUrl : "https://www.fandango.com/ralph-breaks-the-internet-201129/movie-times",
            trailerUrl : "https://vimeo.com/257998908",
            description: "Six years after the events of Wreck-It Ralph, Ralph and Vanellope, now friends, discover a wi-fi router in their arcade, leading them into a new adventure.",
        },
        {
            id: "avengersInfinityWar",
            title: "Avengers: Infinity War",
            buyUrl: "https://www.amazon.com/Avengers-Infinity-Plus-Bonus-Content/dp/B07CLGV76S",
            trailerUrl: "https://vimeo.com/245901050",
            image: InfinityWar,
            description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        },
        {
            id: "coco",
            title: "Coco",
            buyUrl: "https://www.amazon.com/dp/B0779KMWG1",
            trailerUrl: "https://vimeo.com/242485078",
            image: Coco,
            description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        }
    ];
  }
  render() {
    return (
        <div className="App">
            {
                this.layoutSectionData.map((section, index) => {
                    return <LayoutSection data={section} key={index}/>
                })
            }
            {
                <CarouselSlide data={this.carouselData}/>
            }
        </div>

    );
  }
}

export default App;
