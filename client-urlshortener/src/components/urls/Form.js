import React, { Component } from "react";

import ShortenUrl from "./ShortenUrl";
import api from "../../api";
import {
  AllUrls,
  Button,
  FormWrapper,
  Input,
  ListWrapper,
  OneUrl,
  Text,
  Wrapper
} from "./StylesForForm";
const _ = require("lodash");

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUrls: [],
      url: "",
      hash: "",
      isHidden: true
    };
  }

  getAllUrls = () => {
    api
      .get("/urls")
      .then(response => {
        console.log(response);
        this.setState({ allUrls: response.data });
      })
      .catch(err => {
        console.log(err, "something went wrong");
      });
  };

  createShortLink = async event => {
    event.preventDefault();
    const url = this.state.url;
    await api
      .post("/urls", { url })
      .then(res => {
        const hash = res.data.hash;
        this.setState({ url: "", hash: hash });
        this.toggleHidden();
      })
      .catch(error => console.log(error));
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.getAllUrls();
  }
  render() {
    const lastUrls = _.slice(this.state.allUrls, [0, 5]);
    return (
      <Wrapper>
        <Text> Simplify your links </Text>
        <FormWrapper>
          <Input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
          />
          <Button
            onClick={this.createShortLink}
            type="submit"
            value="Shorten"
          />
        </FormWrapper>
        {!this.state.isHidden && <ShortenUrl hash={this.state.hash} />}

        <ListWrapper>
          <Text> Previous Urls</Text>
          <AllUrls>
            {lastUrls.map(oneRequest => {
              return <OneUrl key={oneRequest._id}> {oneRequest.url} </OneUrl>;
            })}
          </AllUrls>
        </ListWrapper>
      </Wrapper>
    );
  }
}

export default Form;
