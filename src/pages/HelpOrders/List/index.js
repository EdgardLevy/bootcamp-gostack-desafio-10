import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import {Alert} from 'react-native';
import Background from '~/components/Background';
import {Container, List} from './styles';
import HelpOrder from '~/components/HelpOrder';
import api from '~/services/api';
import Button from '~/components/Button';

function HelpOrderList({navigation, isFocused}) {
  const student = useSelector(state => state.student.profile);

  const [helpOrders, setHelpOrders] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  /*
  useEffect(() => {
    async function loadHelpOrders() {
      setLoading(true);
      const response = await api.get(`students/${student.id}/HelpOrders`);
      const {data} = response;
      let idx = 0;
      setHelpOrders(
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
    loadHelpOrders();
  }, [student]);
  */

  async function handleAdd() {
    navigation.navigate('NewHelpOrder');
    /*
    try {
      setLoading(true);
      const response = await api.post(`students/${student.id}/helporders`);
      setHelpOrders([...response.data, ...helpOrders]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(error.response.data.error);
    }
    */
  }

  return (
    <Background>
      <Container>
        <Button loading={loading} onPress={handleAdd}>
          Novo pedido de auxílio
        </Button>
        <List
          data={helpOrders}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <HelpOrder data={item} />}
        />
      </Container>
    </Background>
  );
}

export default withNavigationFocus(HelpOrderList);
