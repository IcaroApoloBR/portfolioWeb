import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:(12)98143-4005">(12)98143-4005</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:apoloraci@gmail.com">apoloraci@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project a time</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/IcaroApoloBR">
          <AiFillGithub size="3rem" />  
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/icaroapolo/">
          <AiFillLinkedin size="3rem" />  
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/icaro.apolo/">
          <AiFillInstagram size="3rem" />  
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
