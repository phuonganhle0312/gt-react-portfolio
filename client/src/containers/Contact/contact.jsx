import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

class Contact extends Component {
  render() {
    return (
        <form action="mailto:phuonganh.le0312@gmail.com" method="get" encType="text/plain">
        <section className="container" id="contactform">
          <section className="row justify-content-center">
            <section className="col-md-8">
              <section className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="name" className="form-control" id="nameFormControl" placeholder="John Smith" />
              </section>
              <section className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="email" className="form-control" id="emailFormControl" placeholder="example@gmail.com" />
              </section>
              <section className="form-group">
                <label htmlFor="Message">Message</label>
                <textarea className="form-control" id="messageFormControl" rows={6} defaultValue={""} />
              </section>
              <section className="col-auto my-1">
                <button type="submit" className="btn btn-dark" value="Send">Submit</button>
              </section>
            </section></section></section></form>
    );
  }
};

export default Contact;