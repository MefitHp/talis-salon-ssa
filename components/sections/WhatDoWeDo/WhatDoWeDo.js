import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/shared';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida eget nisl non volutpat. Vestibulum finibus dignissim massa in suscipit. Lorem ipsum dolor sit amet';

const services = [
  {
    title: 'Cabello, color y estilizado',
    desc: lorem,
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Uñas, skincare.',
    desc: lorem,
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  },
  {
    title: `Men's`,
    desc: lorem,
    image:
      'https://images.unsplash.com/photo-1598887142717-f0289c743da0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
];

const WhatDoWeDo = () => {
  return (
    <WhatDoWeDoSection>
      <Title center>Nuestros servicios</Title>
      <Services>
        {services.map(service => (
          <ServiceCard src={service.image}>
            <Mask>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Mask>
          </ServiceCard>
        ))}
      </Services>
    </WhatDoWeDoSection>
  );
};

const WhatDoWeDoSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Services = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  min-width: 480px;
  padding: 20px;
  width: 100%;
  padding: 0 2rem;
`;

const ServiceCard = styled.div`
  border-radius: 4px;
  padding: 8px;
  height: 300px;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  text-shadow: 0 0 3px black;
  transition: all ease-in-out 200ms;
  &:hover {
    transform: scale(1.05);
    z-index: 2;
  } 
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    margin: 0px;
    text-align: center;
  }
`;

const Mask = styled.div`
  padding: 8px;
  position: absolute;
  background: hsla(6, 78%, 77%, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default WhatDoWeDo;
