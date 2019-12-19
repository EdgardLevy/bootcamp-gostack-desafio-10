import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {signInSucess, signFailure} from './actions';
import api from '~/services/api';

export function* singIn({payload}) {
  try {
    const {userId} = payload;

    const response = yield call(api.get, `students/${userId}`);
    const {name, email} = response.data;
    const student = {id: userId, name, email};
    yield put(signInSucess(student));
  } catch (error) {
    Alert.alert(
      'Erro no login',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);
