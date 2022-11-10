import styled from 'styled-components';

export const FilterWraper = styled.label`
  width: 312px;
  margin-right: auto;
  margin-left: auto;
  padding-top: ${p => p.theme.space[1]};
  padding-bottom: ${p => p.theme.space[1]};

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[1]};

  border-radius: ${p => p.theme.radii.main};
`;

export const FilterName = styled.p`
  font-size: ${p => p.theme.fontSizes.fields};
`;

export const FilterField = styled.input`
  padding: ${p => p.theme.space[1]};

  font-size: ${p => p.theme.fontSizes.fields};

  background-color: ${p => p.theme.colors.bcg.input};

  border-radius: ${p => p.theme.radii.main};
`;
