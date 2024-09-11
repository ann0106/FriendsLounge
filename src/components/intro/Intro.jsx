import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <img src="assets/introBg." alt="" />
      <div className="left">
        <div className="imgContainer">
          <img src="assets/intro1.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome To </h2>
          <h1>Friends Lounge</h1>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
        </div>  
    </div>
  )
}
