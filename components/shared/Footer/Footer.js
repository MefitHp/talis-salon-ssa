import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <span>
        <a className="icon facebook" title="Pagina de Facebook" href="https://www.facebook.com/talisbeautysalon" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
        <a className="icon instagram" title="Pagina de Facebook" href="https://www.facebook.com/talisbeautysalon" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
      </span>
      <span>Talis Beauty Salon, {currentYear}.</span>
      <span>
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
  margin-top: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  font-size: 14px;
  a {
    font-size: 14px;
    &:hover {
      color: white;
    }
  }
  .icon {
    font-size: 20px;
    margin: 0 5px;
  }

  .facebook {
    color: #4267B2;
  }
`;
export default Footer;
