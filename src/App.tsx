import { useLocalStorageState, useMount } from 'ahooks';
import React from 'react';
import Header from '@/components/Header';
import { connect } from 'react-redux';
import { storeState } from './redux/interface';
import { setMode } from './redux/actions';
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
    </div>
  );
};

export default connect(
  (state: storeState) => ({
    mode: state.mode,
  }),
  { setMode }
)(App);
