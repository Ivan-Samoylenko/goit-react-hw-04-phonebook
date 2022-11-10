import styled from 'styled-components';

export const Form = styled.form`
  width: 312px;
  margin-right: auto;
  margin-left: auto;
  padding-top: ${p => p.theme.space[1]};
  padding-bottom: ${p => p.theme.space[1]};

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]};

  background-color: ${p => p.theme.colors.bcg.secondary};

  border-radius: ${p => p.theme.radii.main};
`;

export const FieldWraper = styled.label`
  padding: ${p => p.theme.space[1]};

  display: flex;
  flex-direction: column;
`;

export const Field = styled.input`
  padding: ${p => p.theme.space[1]};

  font-size: ${p => p.theme.fontSizes.fields};

  background-color: ${p => p.theme.colors.bcg.input};

  border-radius: ${p => p.theme.radii.main};
`;

export const SubmitBtn = styled.button`
  margin-right: auto;
  margin-left: auto;
  border: ${p => p.theme.borders.invisible};
  padding: ${p => p.theme.space[1]} ${p => p.theme.space[3]};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.addBtn};

  background-color: transparent;

  border-radius: ${p => p.theme.radii.addBtn};
  box-shadow: inset -2px -2px 4px 0 currentColor;

  cursor: pointer;

  transition: color ${p => p.theme.transition},
    box-shadow ${p => p.theme.transition};

  svg {
    fill: currentColor;
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent.btn};
    box-shadow: inset -2px -2px 4px 0 ${p => p.theme.colors.accent.btn};
  }

  :active {
    box-shadow: inset 2px 2px 4px 0 ${p => p.theme.colors.accent.btn};
  }
`;
