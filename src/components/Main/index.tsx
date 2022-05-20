import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import s from './index.module.scss';

const Home = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Home'));
const Login = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Login'));
const ArticleDetail = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Article/Detail'));

const Main: React.FC = () => {
  return (
    <main className={s.main}>
      <div className={s.center}>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="article">
              <Route path=":id" element={<ArticleDetail  />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </main>
  );
};

export default Main;
