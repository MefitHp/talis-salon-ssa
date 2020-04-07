import styled from 'styled-components';

import Menu from 'components/shared/Menu';
import Navbar from 'components/shared/Navbar';
import Wrapper from 'components/shared/Wrapper';
import Intro from 'components/sections/Intro';
import AboutMe from 'components/sections/aboutMe';
import mediaQuery from 'utils/mediaQuery';

const Home = () => (
  <Wrapper hasShadow>
    <HeadSection>
      <Menu />
      <Navbar />
      <Intro />
    </HeadSection>
    <AboutMe />
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
