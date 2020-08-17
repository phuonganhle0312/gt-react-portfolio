import React, { Component } from "react";
import profile from "../../assets/images/102407027_253321116004141_5268368461943275520_n.jpg";
import "../../styles/style.css";


class Home extends Component{
    render() {
      return (
        // <div>
        //   <meta charSet="UTF-8" />
        //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        //   <title>Phuong D. Le</title>
        //   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
        //   {/* Bootstrap Navbar */}
        //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <a className="navbar-brand" href="#"><h2>Phuong Le</h2></a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //       <span className="navbar-toggler-icon" />
        //     </button>
        //     <section className="collapse navbar-collapse" id="navbarSupportedContent">
        //       <ul className="navbar-nav mr-auto">
        //         <li className="nav-item">
        //           <a className="nav-link" href="index.html"><h6>About</h6><span className="sr-only">(current)</span></a>
        //         </li>
        //         <li className="nav-item">
        //           <a className="nav-link" href="./portfolio.html"><h6>Portfolio</h6></a>
        //         </li>
        //         <li className="nav-item">
        //           <a className="nav-link" href="./contact.html"><h6>Contact</h6></a>
        //         </li>
        //       </ul>
        //     </section>
        //   </nav>
          
          <section className="container" id="intro">
            <section className="row">
              <section className="col" id="site title">
                <h4 id="heading">Hi, I'm Phuong.</h4>
                {/*Section Break*/}
                <hr className="sb" />
              </section>
            </section>
            {/*About Me Photo*/}
            <section id="About">
              <section className="row">
                <section className="col-xs-12 col-md-6">
                  <img src={profile} alt="My Photo" id="headshot" className="rounded-circle" width={250} height={250} />
                  {/*About Me Content*/}
                </section>
                <section className="col-xs-12 col-md-6">
                  <p id="bio">I am a web developer student in the Georgia Tech Full Stack Coding Bootcamp. I build interactive, accessible, and efficient digital experiences which you can inspect in my recent projects. I am currently based in Atlanta, Georgia but I also welcome remote work projects. Attached below is my LinkedIn profile, Github profile, resume. If you are a business seeking a web presence or an employer looking to hire immediately, please contact me through any of the resources listed and I will get in touch with you as soon as possible.  
                  </p>
                  <br />
                  {/*LinkedIn*/}
                  <a href="https://www.linkedin.com/in/phuong-le-381156163/" target="_blank"><h4 className="linkedin">LinkedIn</h4></a>
                  {/*GitHub*/}
                  <a href="https://github.com/phuonganhle0312" target="_blank"><h4 className="github">Github</h4></a>
                  {/*Resume*/}
                  <a href="./assets/files/Resume.pdf" target="_blank"><h4 className="resume">Resume</h4></a>
                  {/*Email*/}
                  <a href="mailto:phuonganh.le0312@gmail.com" target="_blank"><h4 className="email">phuonganh.le0312@gmail.com</h4></a>
                  {/*PhoneNumber*/}
                  <a href="tel:205-566-2320" target="_blank"><h4 className="phone">(205)566-2320</h4></a>
                </section>
              </section>
            </section>
          </section>
        
        //   <section className="row" id="footer">
        //     <section className="col-12">
        //       <footer>© Copyright 2020 
        //       </footer>
        //     </section>
        //   </section>
        // </div>
      );
    }
  }

  export default Home;