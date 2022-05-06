import React from 'react';
import { useTitle } from 'ahooks';
import { connect } from 'react-redux';

import { setHeaderShow } from '@/redux/actions';
import { siteName } from '@/utils/config';
import useToTop from '@/utils/hooks/toTop';

import Section from './Section';
import s from './index.module.scss';

interface Props {
  setHeaderShow: Function;
}

const Home: React.FC<Props> = ({ setHeaderShow }) => {
  useTitle(siteName);
  useToTop(setHeaderShow);

  return (
    <div className={s.body}>
      <Section />
    </div>
  );
};

export default connect(() => ({}), { setHeaderShow })(Home);
