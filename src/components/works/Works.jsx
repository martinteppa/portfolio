import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "App Laravel",
      desc:
        "Laravel providers app proyect using mysql, using Docker. The client was a minimarket business.",
      link:
        "https://www.youtube.com/watch?v=FDyPa6NF7w0",
      imagen:
        "assets/laravel.png",
       
    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                 
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}>{d.link}</a>
                </div>
              </div>
              <div className="right">
                <img src={d.imagen} alt="assets/laravel.png"/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}