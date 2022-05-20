import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Vditor from 'vditor';

import { ArticleApi } from '@/utils/apis/article';

const Detail: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    ArticleApi.getDetail(id)
      .then((res:any) => {
        console.log(res)
        Vditor.preview(document.getElementById('articleDetail')! as HTMLDivElement, res.detail.content);
      });
  }, [id]);
  return <div id="articleDetail"></div>;
};

export default Detail;
