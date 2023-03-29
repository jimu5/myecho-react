import { usePagination, useSafeState } from 'ahooks';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Pagination from '@/components/Pagination/Default';
import PostCard from '@/components/Card/PostCard';
import { storeState } from '@/redux/interface';
import { ArticleApi, article } from '@/utils/apis/article';
import { pageSize, staleTime } from '@/utils/config';

import s from './index.module.scss';


const Section: React.FC = () => {
  const navigate = useNavigate();

  async function getArticleList(params: {
    current: number;
    pageSize: number;
  }): Promise<{ total: number; list: article[] }> {
    return ArticleApi.getList({
      page: params.current,
      page_size: params.pageSize,
    }).then((data: any) => {
      return { total: data.total, list: data.data };
    });
  }

  const { data, loading, pagination } = usePagination(getArticleList, {
    retryCount: 3,
    // refreshDeps: [],
    // cacheKey: `Section-${cacheKey.ArticleList}-${page}`,
    staleTime,
  });

  return (
    <section className={s.section}>
      {data?.list.map(({ id, title, detail, post_time, tags, read_count}: article) => (
        <PostCard
          key={id}
          title={title}
          content={detail?.content}
          date={post_time}
          tags={tags.map(({ name }) => name)}
          view_count={read_count}
          loading={loading}
          onClick={() =>
            navigate(`/article/${id}?title=${encodeURIComponent(title)}`)
          }
        />
      ))}
      <Pagination
        total={data?.total}
        current={pagination.current}
        defaultPageSize={pageSize}
        pageSize={pagination.pageSize}
        onChange={pagination.onChange}
      />
    </section>
  );
};

export default connect((state: storeState) => ({
  articleSum: state.articleSum,
}))(Section);
