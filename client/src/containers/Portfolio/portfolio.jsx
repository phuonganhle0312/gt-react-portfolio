import React, { Component } from "react";
import dinmo from "../../assets/images/dinmo.png";
import pwgenerator from "../assets/images/pwgen.png";
import codequiz from "../../assets/images/codequiz.png";
import monsterra from "../../assets/images/image.png";
import teamprofile from "../../assets/images/team.png";
import readme from "../../assets/images/readme.png";
import "../../styles/style.css";




class Portfolio extends Component{
    render() {
      return (
        // <div>
        // <meta charSet="UTF-8" />
        // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        // <title>My Portfolio</title>
        // <link rel="stylesheet" href="./assets/main.css" />
        // <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
        // {/* Bootstrap Navbar */}
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //   <a className="navbar-brand" href="#"><h2>Phuong Le</h2></a>
        //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //     <span className="navbar-toggler-icon" />
        //   </button>
        //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //     <ul className="navbar-nav mr-auto">
        //       <li className="nav-item">
        //         <a className="nav-link" href="index.html"><h6>About</h6><span className="sr-only">(current)</span></a>
        //       </li>
        //       <li className="nav-item">
        //         <a className="nav-link" href="./portfolio.html"><h6>Portfolio</h6></a>
        //       </li>
        //       <li className="nav-item">
        //         <a className="nav-link" href="./contact.html"><h6>Contact</h6></a>
        //       </li>
        //     </ul>
        //   </div>
        // </nav>
      
        <section className="container" id="portfolio-section">
          <section className="row justify-content-center">
            <section className="col" id="site title">
              <h4 id="portfolio-heading">Projects</h4>
              {/*Section Break*/}
              <hr className="sb" />
            </section>
          </section>
          {/*Projects*/}
          {/*Dinmo*/}
          <div className="container">
            <div className="row">
              <div className="col-xs">
                <h3>DinMo</h3>
                <img src={dinmo} alt="dinmo" className="img-thumbnail" id="dinmo" width={200} height={200} />
                <br />
                <a href="https://chayvw.github.io/gt-gp1-dinmo/" target="_blank"><h6 className="dinmoLink">Click To View</h6></a>
                <br />
                <a href="https://github.com/phuonganhle0312/gt-gp1-dinmo" target="_blank"><h6 className="dinmoLink">Github Repo</h6></a>
              </div>
              {/*PW Generator*/}
              <div className="col-xs">
                <h3>Password Generator</h3>
                <img src={pwgenerator} alt="pwgen" className="img-thumbnail" id="pwgen" width={200} height={200} />
                <br />
                <a href="https://phuonganhle0312.github.io/gt-password-generator-hw/" target="_blank"><h6 className="pwGen">Click To View</h6></a>
                <br />
                <a href="https://github.com/phuonganhle0312/gt-password-generator-hw" target="_blank"><h6 className="pwGen">Github Repo</h6></a>
              </div>
              {/*Code Quiz*/}
              <div className="col-xs">
                <h3>Code Quiz</h3>
                <img src={codequiz} alt="codequiz" className="img-thumbnail" id="codequiz" width={200} height={200} />
                <br />
                <a href="https://phuonganhle0312.github.io/gt-web-api-quiz-hw/" target="_blank"><h6 className="codeQuiz">Click To View</h6></a>
                <br />
                <a href="https://github.com/phuonganhle0312/gt-web-api-quiz-hw" target="_blank"><h6 className="codeQuiz">Github Repo</h6></a>
              </div>
              <div className="row">
                <div className="col-xs">
                  <h3>MonsTerra</h3>
                  <img src={monsterra} alt="monsterra" className="img-thumbnail" id="monsterra" width={200} height={200} />
                  <br />
                  <a href="https://agile-island-67083.herokuapp.com/" target="_blank"><h6 className="monsTerraLink">Click To View</h6></a>
                  <br />
                  <a href="https://github.com/phuonganhle0312/MonsTerra" target="_blank"><h6 className="monsTerraLink">Github Repo</h6></a>
                </div>
                {/*Team Generator*/}
                <div className="col-xs">
                  <h3>Team Profile Generator</h3>
                  <img src={teamprofile} alt="team" className="img-thumbnail" id="team" width={200} height={200} />
                  <br />
                  <a href="https://github.com/phuonganhle0312/gt-team-profile-generator-hw/blob/master/output/team.html" target="_blank"><h6 className="teamLink">Click To Install</h6></a>
                  <br />
                  <a href="https://github.com/phuonganhle0312/gt-team-profile-generator-hw/blob/master/output/team.html" target="_blank"><h6 className="teamLink">Github Repo</h6></a>
                </div>
                {/**/}
                <div className="col-xs">
                  <h3>Read Me Generator</h3>
                  <img src={readme} alt="readme" className="img-thumbnail" id="readme" width={200} height={200} />
                  <br />
                  <a href="https://github.com/phuonganhle0312/gt-readme-generator-hw" target="_blank"><h6 className="readmeLink">Click To Install</h6></a>
                  <br />
                  <a href="https://github.com/phuonganhle0312/gt-readme-generator-hw" target="_blank"><h6 className="readmeLink">Github Repo</h6></a>
                </div>
              </div>
            </div></div></section>
    //     {/*Footer*/}
    //     <section className="row" id="footer">
    //       <section className="col-12">
    //         <footer>© Copyright 2020
    //         </footer>
    //       </section>
    //     </section></div>
    // );
      )}
};
  export default Portfolio;
