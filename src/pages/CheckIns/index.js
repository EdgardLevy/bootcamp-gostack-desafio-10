import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import {Container, Title, List} from './styles';
import CheckIn from '~/components/CheckIn';
import api from '~/services/api';
import LogoTitle from '~/components/LogoTitle';
import Button from '~/components/Button';

function CheckIns({isFocused}) {
  const student = useSelector(state => state.student.profile);

  const [checkIns, setCheckIns] = useState([]);

  useEffect(() => {
    async function loadCheckIns() {
      const response = await api.get(`students/${student.id}/checkins`);
      const {data} = response;
      setCheckIns(data.sort((a, b) => a.id < b.id));
    }
    loadCheckIns();
  }, [student]);

  async function handleAddCheckIn() {
    const response = await api.post(`students/${student.id}/checkins`);

    setCheckIns([response.data, ...checkIns]);
    // console.tron.log(response.data);
  }

  return (
    <Background>
      <Container>
        <Button onPress={handleAddCheckIn}>Novo check-in</Button>
        <List
          data={checkIns}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <CheckIn data={item} />}
        />
      </Container>
    </Background>
  );
}
/**
 * title: 'GYMPOINT',
  headerTintColor: '#ee4d64',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
 *
 *
 */
CheckIns.navigationOptions = {
  headerTitle: () => <LogoTitle />,
};

export default withNavigationFocus(CheckIns);
