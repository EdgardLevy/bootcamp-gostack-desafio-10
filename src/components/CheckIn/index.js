import React, {useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {Container, Title, Time} from './styles';

export default function CheckIn({data}) {
  const dateFormatted = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at]);

  return (
    <Container>
      <Title>Check In {data.id}</Title>
      <Time>{dateFormatted}</Time>
    </Container>
  );
}
