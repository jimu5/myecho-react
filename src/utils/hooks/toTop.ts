import { useMount } from 'ahooks';

const useToTop = (setHeaderShow: Function) => {
  useMount(() => {
    window.scrollTo(0, 0);
    setHeaderShow?.(true);
  });
};


export default useToTop;