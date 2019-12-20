import React, {useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Status, Time, Header, Left, Question} from './styles';

export default function HelpOrder({data}) {
  /*
  const dateFormatted = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      addSuffix: true,
    });
  }, [data.created_at]); */

  return (
    <Container>
      <Header>
        <Left>
          <Icon name="check-circle" size={18} color="#42cb59" />
          <Status>Respondido</Status>
        </Left>
        <Time>Hoje as 14</Time>
      </Header>
      <Question>
        dasfdlkjsf askdjfa lskdfjaslkdfj aslkdfj asldkjf asdfj asldkfja sdlfkj
        alsdkfj asdlfkj alsdkfj jgfgdfgkjdf gdlfkgj dfgkj sjfh sdh slfjdf gjdsfh
        glsdkjfgh sdlfjgh sdlfjgh sdfljgh jjhhhhhh gggggg
      </Question>
    </Container>
  );
}
