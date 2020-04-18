import styled from 'styled-components';

import { Menu, Navbar, Wrapper } from 'components/shared';
import { AboutMe, Intro, WhatDoWeDo } from 'components/sections';
import mediaQuery from 'utils/mediaQuery';

const Home = () => (
  <Wrapper hasShadow>
    <HeadSection>
      <Menu />
      <Navbar />
      <Intro />
    </HeadSection>
    <AboutMe />
    <WhatDoWeDo />
  </Wrapper>
);

const HeadSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('/assets/images/duotone.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  @media ${mediaQuery.md} {
    background-size: cover;
    background-position: center;
  }
`;

export default Home;
