import React from 'react';
import styled from 'styled-components';
import { Title, Tab, Tabs } from 'components/shared';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida eget nisl non volutpat. Vestibulum finibus dignissim massa in suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, augue a iaculis volutpat, ligula dolor consequat eros, ac eleifend quam neque at felis. Suspendisse vestibulum viverra lorem, eu porta nunc eleifend eget. Praesent aliquet neque justo, quis sodales ex porttitor nec.';

const services = [
  {
    title: 'Service 1',
    desc: lorem,
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    title: 'Service 2',
    desc: lorem,
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    title: 'Service 3',
    desc: lorem,
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    title: 'Service 4',
    desc: lorem,
    image: 'https://source.unsplash.com/random/800x600',
  },
];

const WhatDoWeDo = () => {
  return (
    <WhatDoWeDoSection>
      <Title center>¿Que hacemos?</Title>
      <Tabs>
        {services.map((service, i) => {
          return (
            <li key={i} label={service.title}>
              {service.title}
            </li>
          );
        })}
      </Tabs>
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

export default WhatDoWeDo;
