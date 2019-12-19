import React from 'react';

import {Container, Logo, Title} from './styles';
import logo from '~/assets/logo_header.png';

export default function LogoTitle() {
  return (
    <Container>
      <Logo source={logo} />
      <Title>GYMPOINT</Title>
    </Container>
  );
}
