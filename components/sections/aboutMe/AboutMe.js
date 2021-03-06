import styled from 'styled-components';

import mediaQuery from 'utils/mediaQuery';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeCard>
        <CardImageContainer>
          <CardImage />
        </CardImageContainer>
        <CardTextContainer>
          <h2>¿Quién es Talis?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste at soluta officiis
            temporibus tenetur aperiam officia quisquam obcaecati doloribus, culpa magni vitae
            deleniti sunt aspernatur! Voluptate aut excepturi ducimus nulla iure quidem cum,
            assumenda nesciunt alias repellendus ipsam itaque pariatur, repudiandae officia modi
            incidunt? Culpa modi quas laudantium vero quia delectus voluptatem, consectetur
            distinctio iusto ad assumenda deserunt natus at porro ratione labore.
          </p>
        </CardTextContainer>
      </AboutMeCard>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcf0f0;
  padding: 1rem;
`;

const AboutMeCard = styled.div`
  display: flex;
  background: #fffcfc;
  border-radius: 15px;
  max-width: 800px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media ${mediaQuery.xs} {
    min-width: 90%;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardTextContainer = styled.div`
  padding: 0 2rem;
  text-align: center;
`;

const CardImage = styled.div`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-k5hB51e1xdivDHOvV9ub1kFLQry2L9IBVjHd3YsY8gv7yd7m');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;
export default AboutMe;
