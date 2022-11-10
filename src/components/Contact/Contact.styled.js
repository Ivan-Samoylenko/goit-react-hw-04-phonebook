import styled from 'styled-components';

export const Name = styled.p`
  width: 130px;

  font-size: ${p => p.theme.fontSizes.contact};
  text-align: start;
`;

export const Phone = styled.p`
  width: 128px;

  font-size: ${p => p.theme.fontSizes.contact};
  text-align: start;
  white-space: nowrap;
`;

export const DeleteBtn = styled.button`
  width: 45px;
  height: 45px;
  border: ${p => p.theme.borders.invisible};

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.mini};

  color: currentColor;
  background-color: transparent;

  border-radius: 50%;
  cursor: pointer;
  outline: none;

  transition: color ${p => p.theme.transition},
    box-shadow ${p => p.theme.transition}, transform ${p => p.theme.transition};

  svg {
    fill: currentColor;
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent.btn};
    box-shadow: 0 0 2px 2px ${p => p.theme.colors.accent.btn};
  }

  :active {
    transform: scale(0.94);
  }
`;
