import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Alert} from 'react-native';
import Background from '~/components/Background';
import {Container, Title, List} from './styles';
import CheckIn from '~/components/CheckIn';
import api from '~/services/api';
import LogoTitle from '~/components/LogoTitle';
import Button from '~/components/Button';

function CheckIns({isFocused}) {
  const student = useSelector(state => state.student.profile);

  const [checkIns, setCheckIns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCheckIns() {
      setLoading(true);
      const response = await api.get(`students/${student.id}/checkins`);
      const {data} = response;
      let idx = 0;
      setCheckIns(
        data
          .map(item => {
            idx += 1;
            item.index = idx;
            return item;
          })
          .sort((a, b) => a.id < b.id)
      );
      setLoading(false);
    }
    loadCheckIns();
  }, [student]);

  async function handleAddCheckIn() {
    try {
      setLoading(true);
      const response = await api.post(`students/${student.id}/checkins`);
      const idx = checkIns.length + 1;
      setCheckIns([{...response.data, index: idx}, ...checkIns]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(error.response.data.error);
    }
  }

  return (
    <Background>
      <Container>
        <Button loading={loading} onPress={handleAddCheckIn}>
          New Check-in
        </Button>
        <List
          data={checkIns}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <CheckIn data={item} />}
        />
      </Container>
    </Background>
  );
}

CheckIns.navigationOptions = {
  headerTitle: () => <LogoTitle />,
};

export default withNavigationFocus(CheckIns);
