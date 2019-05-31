import styled from "styled-components";

const Button = styled.input`
  font-size: 0.9em;
  letter-spacing: 0.025em;
  border-radius: 0.3125em;
  border: 1px solid #01c3a7;
  padding: 8px 15px;
  color: #fff;
  cursor: pointer;
  background-color: #01c3a7;
  background-image: none;
  border-bottom: 1px solid #01907c;
  box-shadow: 0 1px 1px -1px #8c9da1;
  margin-left: 12px;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  outline: 0;
  border-radius: 0.3125em;
  border: 1px solid #dce3e6;
  padding: 10px;
  text-align: left;
  background-color: #fff;
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
  padding: 0;
`;

const OneUrl = styled.li`
  font-size: 15px;
  color: #323e42;
  float: left;
  clear: both;
`;

const Text = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin: 15 0px;
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
