import { Pagination, PaginationProps } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

import { setHeaderShow } from '@/redux/actions';

import s from './index.module.scss';

const MyPagination: React.FC<PaginationProps> = (PaginationProps) => {
  return (
    <div id="myPagination" className={s.pageBox}>
      <Pagination {...PaginationProps} />
    </div>
  );
};

export default connect(() => ({}), {
  setHeaderShow,
})(MyPagination);
