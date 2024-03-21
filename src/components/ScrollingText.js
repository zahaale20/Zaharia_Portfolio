import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../styles/Theme';

const Marquee = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.5);
  background: ${theme.colors.dragonFire};
  position: fixed;
  top: 90px;
  left: 0;
  z-index: 1000;
`;

const scrollAnimation = css`
  @keyframes marquee {
    from { transform: translateX(0%); }
    to { transform: translateX(-50%); }
  }
`;

const Text = styled.div`
  display: inline-block;
  white-space: nowrap;
  color: ${theme.colors.vanillaMist};
  padding-top: 2px;
  padding-bottom: 2px;
  font-weight: bold;
  animation: marquee 120s linear infinite;
  ${scrollAnimation}
`;

const ScrollingText = ({ text }) => {
    const spacedText = text.split('. ').map((sentence) => `\u00A0\u00A0\u00A0\u2301${sentence.trim()}.`).join('\u00A0\u00A0\u00A0\u00A0');
    const duplicatedText = `${spacedText}\u00A0\u00A0\u00A0\u00A0`.repeat(10);
  
    return (
      <Marquee>
        <Text>{duplicatedText}</Text>
      </Marquee>
    );
  };
  
  export default ScrollingText;