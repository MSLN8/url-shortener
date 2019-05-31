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
      allUrls: [],
      url: "",
      hash: "",
      isHidden: true
    };
  }

  getAllUrls = () => {
    axios
      .get(`http://localhost:5000/api/urls`)
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
    await axios
      .post("http://localhost:5000/api/urls", { url })
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
    return (
      <Wrapper>
        <Text> Simplify your links </Text>
        <FormWrapper>
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
        </FormWrapper>
        {!this.state.isHidden && <ShortenUrl hash={this.state.hash} />}

        <ListWrapper>
          <Text> Previous Urls</Text>
          <AllUrls>
            {this.state.allUrls.slice(0, 5).map(oneUrl => {
              return <OneUrl key={oneUrl._id}> {oneUrl.url} </OneUrl>;
            })}
          </AllUrls>
        </ListWrapper>
      </Wrapper>
    );
  }
}

export default Form;
