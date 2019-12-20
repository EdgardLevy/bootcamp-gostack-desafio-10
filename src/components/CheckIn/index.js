import React, {useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';

import {Container, Title, Time} from './styles';

export default function CheckIn({data}) {
  const dateFormatted = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      addSuffix: true,
    });
  }, [data.created_at]);

  return (
    <Container>
      <Title>Check In #{data.index}</Title>
      <Time>{dateFormatted}</Time>
    </Container>
  );
}
