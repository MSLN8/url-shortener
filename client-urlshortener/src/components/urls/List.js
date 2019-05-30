import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Form from "./Form";

class List extends Component {
  constructor() {
    super();
    this.state = { listOfUrls: [] };
  }

  getAllUrls = () => {
    axios.get(`http://localhost:5000/api/urls`).then(responseFromApi => {
      this.setState({
        listOfUrls: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllUrls();
  }

  render() {
    return (
      <div>
        <div style={{ width: "60%", float: "left" }}>
          {this.state.listOfUrls.map((oneUrl, index) => {
            return (
              <div key={oneUrl._id}>
                <Link to={`/urls/${oneUrl._id}`}>
                  <h3>{oneUrl.url}</h3>
                </Link>
                <p style={{ maxWidth: "400px" }}>{oneUrl.short_url} </p>
              </div>
            );
          })}
        </div>
        <div style={{ width: "40%", float: "right" }}>
          <Form getData={() => this.getAllUrls()} />
        </div>
      </div>
    );
  }
}

export default List;
