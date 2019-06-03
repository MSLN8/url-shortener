import styled from "styled-components";
import { device } from "../../devices";

const Button = styled.input`
  font-size: 1rem;
  letter-spacing: 0.03rem;
  border-radius: 0.3rem;
  border: 0.1rem solid #01c3a7;
  padding: 0.5rem 0.9rem;
  color: #fff;
  cursor: pointer;
  background-color: #01c3a7;
  background-image: none;
  border-bottom: 0.1rem solid #01907c;
  box-shadow: 0 0.1rem 0.1rem -0.1rem #8c9da1;
  margin-left: 1.2rem;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  outline: 0;
  border-radius: 0.3rem;
  border: 0.01rem solid #dce3e6;
  padding: 0.6rem;
  text-align: left;
  background-color: #fff;
  @media ${device.tablet} {
    width: 22rem;
  }
  @media ${device.laptop} {
    width: 40rem;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;

const AllUrls = styled.ol`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0rem;
`;

const OneUrl = styled.li`
  font-size: 0.9rem;
  color: #323e42;
  float: left;
  clear: both;
`;

const Text = styled.h1`
  font-size: 1.25rem;
  font-weight: 25rem;
  margin: 1 0rem;
  color: #323e42;
`;

const Wrapper = styled.section`
  background-color: #f2f4f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: space-around;
`;

export {
  AllUrls,
  Button,
  FormWrapper,
  Input,
  ListWrapper,
  OneUrl,
  Text,
  Wrapper
};
