import React from "react";
import styled from "styled-components";
import CustomButton from "../Custom/CustomButton";
import {Person} from "@material-ui/icons";

const Container = styled.section`

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem;
`;

const Logo = styled.section`

`;

const Image = styled.img`
    width: 12rem;
`;


const RightNav = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileContainer = styled.div`
    background-color: green;
    margin-left: 1.5rem;
    border-radius: 2.5rem;
    cursor: pointer;
    color: white;
`;

const HeaderSection = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src="" alt="logo"/>
        </Logo>

        <RightNav>
          <CustomButton title="Title #1"/>
          <ProfileContainer>
            <Person style={{fontSize: 24}}/>
          </ProfileContainer>
        </RightNav>
      </Wrapper>
    </Container>
  );
}

export default HeaderSection;