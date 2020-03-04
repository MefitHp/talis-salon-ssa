import styled from 'styled-components';

import Button from 'components/shared/Button';
import mediaQuery from 'utils/mediaQuery';

const Intro = () => {
  return (
    <ArticleStyled>
      <div className="intro">
        <h2>Salón de Belleza + Barber</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aliquid eveniet? Nostrum
          beatae nesciunt consequatur quaerat dolores, laudantium maxime earum quia nihil autem ad
          error hic fugit cumque .
        </p>
        <Button type="secondary">Saber más</Button>
      </div>
    </ArticleStyled>
  );
};

const ArticleStyled = styled.article`
  flex: 1;
  display: flex;
  align-items: center;
  & .intro {
    h2 {
      color: var(--black);
      font-size: 2rem;
    }
    p {
      color: var(--gray);
    }
    max-width: 450px;
    margin: 10%;
    text-align: center;
  }

  @media ${mediaQuery.md} {
    justify-content: center;
  }
`;
export default Intro;
