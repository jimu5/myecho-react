import { useRequest, useSafeState } from 'ahooks';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Pagination from '@/components/Pagination/Default';
import PostCard from '@/components/Card/PostCard';
import { storeState } from '@/redux/interface';
import { ArticleApi, article } from '@/utils/apis/article';
import { pageSize, staleTime } from '@/utils/config';
import { cacheKey } from '@/utils/cacheKey';

import s from './index.module.scss';


interface Props {
  articleSum?: number;
}

const Section: React.FC<Props> = ({ articleSum }) => {
  const navigate = useNavigate();
  const [page, setPage] = useSafeState(1);

  const { data, loading } = useRequest(
    () =>
      ArticleApi.getList({
        page,
        page_size: pageSize
      }),
    {
      retryCount: 3,
      refreshDeps: [page],
      cacheKey: `Section-${cacheKey.ArticleList}-${page}`,
      staleTime
    }
  );

  return (
    <section className={s.section}>
      {console.log(data)}
      {data?.data.map(({ id, title, detail, post_time }: article) => (
        <PostCard
          key={id}
          title={title}
          content={detail.content}
          date={post_time}
          // tags={} tags 功能还没有实现
          loading={loading}
          onClick={() => navigate(`/article/${id}?title=${encodeURIComponent(title)}`)}
        />
      ))}
      <Pagination
        current={page}
        defaultPageSize={pageSize}
        total={articleSum}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={document.body.clientHeight - 80}
      />
    </section>
  );
};

export default connect((state: storeState) => ({ articleSum: state.articleSum }))(Section);
