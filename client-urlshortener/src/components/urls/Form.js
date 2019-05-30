import React, { Component } from "react";
import axios from "axios";

import ShortenUrl from "./ShortenUrl";
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

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      hash: "",
      isHidden: true
    };
  }

  createShortLink = async event => {
    event.preventDefault();
    const url = this.state.url;
    await axios
      .post("https://localhost:5000/api/urls", { url })
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

  handleFormSubmit = event => {
    event.preventDefault();
    const url = this.state.url;
    axios
      .post("https://localhost:5000/api/urls", { url })
      .then(res => {
        const hash = res.data.hash;
        this.setState({ url: "", hash: hash });
      })
      .then(this.toggleHidden())
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Wrapper>
        <FormWrapper>
          <Text> Simplify your links </Text>
          {/* <form onSubmit={this.handleFormSubmit}> */}
          <Input
            type="text"
            name="url"
            value={this.state.url}
            onChange={e => this.handleChange(e)}
          />
          <Button
            onClick={e => this.createShortLink(e)}
            type="submit"
            value="Shorten"
          />

          {!this.state.isHidden && <ShortenUrl hash={this.state.hash} />}
          {/* </form> */}
        </FormWrapper>

        <ListWrapper>
          <Text> Previous Urls</Text>
          <AllUrls>
            <OneUrl> First Example </OneUrl>
            <OneUrl> Second Example </OneUrl>
            <OneUrl> Third Example </OneUrl>
            <OneUrl> Forth Example </OneUrl>
            <OneUrl> Fifth Example </OneUrl>
          </AllUrls>
        </ListWrapper>
      </Wrapper>
    );
  }
}

export default Form;
