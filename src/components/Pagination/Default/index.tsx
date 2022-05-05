import './pagination.custom.scss';

import { Pagination } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

import { setHeaderShow } from '@/redux/actions';

import s from './index.module.scss';

interface Props {
  current?: number;
  defaultPageSize?: number;
  total?: number;
  setPage?: Function;
  scrollToTop?: number;
  autoScroll?: boolean;
  setHeaderShow?: Function;
}

const MyPagination: React.FC<Props> = ({
  current,
  defaultPageSize = 8,
  total = 0,
  setPage,
  scrollToTop = 0,
  autoScroll = false,
  setHeaderShow
}) => {
  return (
    <>
      {total > defaultPageSize ? (
        <div id='myPagination' className={s.pageBox}>
          <Pagination
            current={current}
            total={total}
            defaultPageSize={defaultPageSize}
            showSizeChanger={false}
            showTitle={false}
            onChange={(page: number) => {
              setPage?.(page);
              setHeaderShow?.(false);
              autoScroll && window.scrollTo(0, scrollToTop);
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default connect(() => ({}), {
  setHeaderShow
})(MyPagination);
