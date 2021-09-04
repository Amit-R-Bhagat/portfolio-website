import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <p>Designed by Amit Bhagat 🚀</p>
      <p>Copyright@2021.</p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  text-align: center;
  color: gray;
  font-size: 13px;
  margin-bottom: 40px;
`;
