import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, User } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Meetapp" />
        </nav>
        <aside>
          <User>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button type="button">Sair</button>
          </User>
        </aside>
      </Content>
    </Container>
  );
}
