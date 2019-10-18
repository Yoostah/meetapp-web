import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, User } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Meetapp" />
        </nav>
        <aside>
          <User>
            <div>
              <strong>Thulio Horta</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button type="button">Sair</button>
          </User>
        </aside>
      </Content>
    </Container>
  );
}
