import "./intro.scss"
import { init } from "ityped"
import { useEffect , useRef } from "react"



function Intro() {

    const textRef = useRef();

    useEffect(() => {
         init(textRef.current, {
             showCursor: false,
             strings: ["Python developer", "Web developer with React.js and Django", "Data analysis and Machine learning programmer with Python"],
             backDelay: 1500,
             backSpeed:20,
             typeSpeed:20,
         })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/yo.jpg" alt="martin" />
                </div>

            </div>
            <div className="right"> 
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Martin Teppa</h1>
                    <h3 ref={textRef}></h3>
                    <h3 ref={textRef}></h3>
                    <h3><span ref={textRef}></span></h3>
                    

                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="hola" />
                </a>
            </div>
        </div>
    )
}

export default Intro
