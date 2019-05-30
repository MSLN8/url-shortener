import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, FormWrapper, Input, Text } from "./StylesForForm";

class ShortenUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: this.props.hash,
      copied: false
    };
  }

  onChange({ target: { value } }) {
    this.setState({ value, copied: false });
  }

  onCopy() {
    this.setState({ copied: true });
  }

  render() {
    return (
      <FormWrapper>
        <Text> Your Shorten Url </Text>
        <Input
          value={this.state.hash}
          onChange={({ target: { value } }) =>
            this.setState({ value, copied: false })
          }
          type="text"
          name="shortenUrl"
        />
        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <Button type="submit" value="Copy" />
        </CopyToClipboard>

        {this.state.copied ? (
          <span style={{ color: "red" }}>Copied.</span>
        ) : null}
      </FormWrapper>
    );
  }
}
export default ShortenUrl;
