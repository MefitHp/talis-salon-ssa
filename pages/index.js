import styled from 'styled-components';

import Menu from 'components/shared/Menu';
import Navbar from 'components/shared/Navbar';
import Wrapper from 'components/shared/Wrapper';
import Button from 'components/shared/Button';

const Home = () => (
  <>
    <Wrapper>
      <Section>
        <Menu />
        <Navbar />
        <ArticleStyled>
          <div className="intro">
            <h2>Salón de Belleza + Barber</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aliquid eveniet? Nostrum
              beatae nesciunt consequatur quaerat dolores, laudantium maxime earum quia nihil autem
              ad error hic fugit cumque .
            </p>
            <Button type="secondary">Saber más</Button>
          </div>
        </ArticleStyled>
      </Section>
    </Wrapper>
  </>
);

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('/assets/images/duotone.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
`;

const ArticleStyled = styled.article`
  flex: 1;
  & .intro {
    h2 {
      color: var(--black);
      font-size: 2rem;
    }
    p {
      color: var(--gray);
    }
    max-width: 450px;
    padding: 120px 40px;
    margin: 1rem;
    text-align: center;
  }
`;

export default Home;
