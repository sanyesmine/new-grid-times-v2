import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <UserButton>
              <User size={24} />
            </UserButton>
            <Subscribe>Subscribe</Subscribe>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (min-width: 834px) {
    margin-left: 50px;
    margin-right: 50px;

    margin-top: 30px;
    background: var(--color-gray-100);
    color: black;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  svg {
    display: block; /* fix react-feather inline spacing */
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (min-width: 834px) {
    margin-top: -80px;
  }
`;

/* 👇 User button: visible on mobile, hidden on desktop */
const UserButton = styled.button`
  display: block;

  @media (min-width: 834px) {
    display: none;
  }
`;

/* 👇 Subscribe: hidden on mobile, visible on desktop */
const Subscribe = styled(Button)`
  display: none;

  @media (min-width: 834px) {
    display: flex;
  }
`;

export default Header;
