import { useLocalStorageState, useMount } from 'ahooks';
import React from 'react';
import { connect } from 'react-redux';

import Header from '@/components/Header';
import Main from './components/Main';

import { setMode } from './redux/actions';
import { storeState } from './redux/interface';
import s from './App.module.scss';

interface Props {
  setMode?: Function;
}

const App: React.FC<Props> = ({ setMode }) => {
  const [localModel] = useLocalStorageState('localModel');

  useMount(() => {
    if (localModel !== undefined) {
      setMode?.(localModel);
    }
  });

  return (
    <div className={s.AppBox}>
      <Header />
      <Main />
    </div>
  );
};

export default connect(
  (state: storeState) => ({
    mode: state.mode,
  }),
  { setMode }
)(App);
