export const useLinkList = () => {
  const linkArr = [
    { name: '文章', path: '/article' },
    { name: '分类目录', path: '/category/article'},
    { name: '小伙伴们', path: '/friend' },
    { name: '实验室', path: '/lab' },
  ];
  const mobileLinkArr = [
    { name: '主页', path: '/' },
    { name: '文章', path: '/article' },
    { name: '分类目录', path: '/category/article'},
    { name: '小伙伴们', path: '/friend' },
    { name: '实验室', path: '/lab' },
  ];
  return {
    linkArr,
    mobileLinkArr
  }
};
