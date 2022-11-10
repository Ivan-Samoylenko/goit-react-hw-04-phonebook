import styled from 'styled-components';

export const Contacts = styled.ul`
  width: 312px;
  margin-right: auto;
  margin-left: auto;
  padding-top: ${p => p.theme.space[1]};
  padding-bottom: ${p => p.theme.space[1]};
`;

export const ContactsItem = styled.li`
  padding: ${p => p.theme.space[1]};

  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[1]};

  background-color: ${p => p.theme.colors.bcg.secondary};

  border-radius: ${p => p.theme.radii.main};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[1]};
  }
`;
