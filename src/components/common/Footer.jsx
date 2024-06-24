
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <LogoSection>
                    <Logo>COVIMAP</Logo>
                    <Description>
                        These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.
                    </Description>
                    <SocialIcons>
                        <Icon href="#" className="fa fa-facebook"></Icon>
                        <Icon href="#" className="fa fa-twitter"></Icon>
                        <Icon href="#" className="fa fa-linkedin"></Icon>
                        <Icon href="#" className="fa fa-instagram"></Icon>
                    </SocialIcons>
                </LogoSection>
                <LinksSection>
                    <Column>
                        <ColumnTitle>Quick Links</ColumnTitle>
                        <LinkItem href="#">Prevention</LinkItem>
                        <LinkItem href="#">Quarantine</LinkItem>
                        <LinkItem href="#">About</LinkItem>
                        <LinkItem href="#">Help</LinkItem>
                    </Column>
                    <Column>
                        <ColumnTitle>About</ColumnTitle>
                        <LinkItem href="#">Hand Wash</LinkItem>
                        <LinkItem href="#">Social Distance</LinkItem>
                        <LinkItem href="#">Isolate</LinkItem>
                        <LinkItem href="#">Difference</LinkItem>
                    </Column>
                    <Column>
                        <ColumnTitle>About</ColumnTitle>
                        <LinkItem href="#">Hand Wash</LinkItem>
                        <LinkItem href="#">Social Distance</LinkItem>
                        <LinkItem href="#">Isolate</LinkItem>
                        <LinkItem href="#">Difference</LinkItem>
                    </Column>
                    <Column>
                        <ColumnTitle>Help</ColumnTitle>
                        <LinkItem href="#">Hand Wash</LinkItem>
                        <LinkItem href="#">Social Distance</LinkItem>
                        <LinkItem href="#">Isolate</LinkItem>
                        <LinkItem href="#">Difference</LinkItem>
                    </Column>
                </LinksSection>
            </FooterContent>
            <FooterBottom>
                <Copyright>© Copyright 2020. All Rights Reserved</Copyright>
                <Design>Design by DexignZone</Design>
            </FooterBottom>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
  background-color: #1b2a4e;
  padding: 40px 0;
  color: white;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const LogoSection = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;
`;

const LinksSection = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
`;

const ColumnTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const LinkItem = styled.a`
  display: block;
  color: white;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 5px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 20px auto 0;
  padding: 0 20px;
  border-top: 1px solid #333;
  padding-top: 20px;
`;

const Copyright = styled.div`
  font-size: 14px;
`;

const Design = styled.div`
  font-size: 14px;
`;

export default Footer;
