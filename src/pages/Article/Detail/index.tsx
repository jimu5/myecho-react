import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { Typography } from 'antd';
import Vditor from 'vditor';

import { ArticleApi, article } from '@/utils/apis/article';

import s from './index.module.scss';

const { Title } = Typography;


const Detail: React.FC = () => {
  const articleDetailElement = document.getElementById('articleDetail')!
  const outlineElement = document.getElementById('outline')!
  const { id } = useParams();
  const articleID = id ? parseInt(id) : 0;
  const { data } = useRequest(() => {
    if (articleID === 0) {
      // 跳转到404页面
    }
    return ArticleApi.get(articleID).then() as Promise<article>;
  });

  useEffect(() => {
    if (!data) return;

    Vditor.preview(
      articleDetailElement as HTMLDivElement,
      data!.detail.content,
    );
    ls()
  }, [data]);

  const ls = () => {
    articleDetailElement.addEventListener('click', function (e) {
      console.log(e.target)
      if (e.target instanceof HTMLImageElement) {
        Vditor.previewImage(e.target as any, 'zh_CN',
          outlineElement.classList.contains('dark') ? 'dark' : 'classic')
      }
    })
  }

  return (
    <div className={s.article}>
      <Title className={s.articleTitle}>{data?.title}</Title>
      <div id="articleDetail"></div>
      <div id="outline" className={s.outline}></div>
    </div>
  );
};

export default Detail;
