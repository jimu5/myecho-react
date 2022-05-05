import axios from '../axios';

class ArticleApi {
    // 获取文章列表
    static getList(params:any) {
        return axios.get('/articles', { params });
    }
}

export default ArticleApi;