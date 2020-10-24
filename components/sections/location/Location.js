import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Title } from 'components/shared';
import mediaQuery from 'utils/mediaQuery';

const Location = () => {
  return (
    <LocationSection>
      <Title>Ubicación</Title>
      <FlexWrapper>
        <LocationContainer>
          <div>
            <h4>Nos puedes encontrar en:</h4>
            <address>
              Calle Benito Juarez #505 <br />
              Colonia Venta Prieta <br />
              Pachuca, Hidalgo.
            </address>
            <br />
            <h4>O comunicate al número:</h4>
            <a
              href="https://api.whatsapp.com/send?phone=17717489789"
              style={{ textDecoration: 'underline' }}
              target="_blank"
              rel="noopener">
              <FontAwesomeIcon className="whatsapp" icon={['fab', 'whatsapp']} /> 7717489789
            </a>
          </div>
        </LocationContainer>
        <FrameContainer>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14988.574379155854!2d-98.7668842!3d20.0862834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c0964d395c26816!2sTalis%20Salon!5e0!3m2!1sen!2smx!4v1603470956114!5m2!1sen!2smx&language=es&hl=en"
            width="100%"
            height="100%"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen="true"
            aria-hidden="false"
            tabindex="0"
          />
        </FrameContainer>
      </FlexWrapper>
    </LocationSection>
  );
};

const LocationSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fcf0f0;
  padding: 1rem;
`;

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  padding: 1rem;
  h4 {
    font-size: 22px;
    font-weight: bold;
    margin: 12px 0px;
  }
  address {
    font-size: 18px;
  }

  .whatsapp {
    font-size: 18px;
  }
`;

const FlexWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 3fr;
  @media ${mediaQuery.md} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const FrameContainer = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
  opacity: 0.8;
  .map {
    filter: grayscale(50%);
  }
`;

export default Location;
