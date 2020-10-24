import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mediaQuery from 'utils/mediaQuery';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <span>
        <a
          className="icon facebook"
          title="Pagina de Facebook"
          href="https://www.facebook.com/talisbeautysalon"
          target="_blank"
          rel="noopener">
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
        <a
          className="icon instagram"
          title="Pagina de Facebook"
          href="https://www.facebook.com/talisbeautysalon"
          target="_blank"
          rel="noopener">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a
          className="icon whatsapp"
          title="Enviar whatsapp"
          href="https://api.whatsapp.com/send?phone=17717489789"
          target="_blank"
          rel="noopener">
          <FontAwesomeIcon className="whatsapp" icon={['fab', 'whatsapp']} />
        </a>
      </span>
      <span>Talis Beauty Salon, {currentYear}.</span>
      <span className="made-by">
        Hecho por{' '}
        <a href="http://www.mefitdev.com/" target="_blank" rel="noopener">
          @mefitdev
        </a>
      </span>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  a {
    font-size: 14px;
    &:hover {
      color: var(--primary);
    }
  }
  .icon {
    font-size: 20px;
    margin: 0 5px;
  }
  @media ${mediaQuery.xs} {
    flex-wrap: wrap;
    .made-by {
      text-align: center;
      width: 100%;
      padding-top: 1rem;
    }
  }
`;
export default Footer;
