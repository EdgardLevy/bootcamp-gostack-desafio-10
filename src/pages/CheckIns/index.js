import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import {Container, Title, List} from './styles';
import Appointment from '~/components/Appointment';
import api from '~/services/api';

function CheckIns({isFocused}) {
  const student = useSelector(state => state.student.profile);
  const [checkIns, setCheckIns] = useState([]);

  async function loadcheckIns() {
    const response = await api.get(`checkIns/${student.id}`);
    console.tron.log(response);
    setCheckIns(response.data);
  }

  useEffect(() => {
    loadcheckIns();
  }, [isFocused, loadcheckIns]);

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={checkIns}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

CheckIns.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(CheckIns);
