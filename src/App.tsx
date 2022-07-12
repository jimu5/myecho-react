import { useLocalStorageState, useMount } from 'ahooks';
import React from 'react';
import { connect } from 'react-redux';

import HeaderContent from '@/components/Header';
import Main from './components/Main';

import { setMode } from './redux/actions';
import { storeState } from './redux/interface';
import 'vditor/src/assets/less/index.less';  // 全局引入vditor样式

import s from './App.module.scss';
import './App.css';

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
      <HeaderContent />
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
