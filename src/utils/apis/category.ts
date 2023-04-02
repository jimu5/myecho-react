import axios from "../axios";
import baseReturn from "./baseReturn";

export interface category extends baseReturn {
  name: string;
  uid: string;
  father_uid: string;
  count: number;
}

export class categoryApi {
  static baseApiUrl = "/categories"
  static articleCategoryApiUrl = "/article/categories";
  static linkCategoryApiUrl = "/link/categories";

  static getArticleList(): Promise<category[]> {
    return axios.get(categoryApi.articleCategoryApiUrl + '/all');
  }
  static getLinkList(): Promise<category[]> {
    return axios.get(categoryApi.linkCategoryApiUrl + '/all')
  }
  static get(id: number) {
    return axios.get(`${categoryApi.baseApiUrl}/${id}`);
  }
  static createArticle(params: { name: string; father_uid: string | null }) {
    return axios.post(categoryApi.articleCategoryApiUrl, {...params});
  }
  static createLink(params: {name: string; father_uid: string | null}) {
    return axios.post(categoryApi.linkCategoryApiUrl, {...params});
  }
  static patch(id: number, params: { name: string; father_id: number | null }) {
    return axios.patch(`${categoryApi.baseApiUrl}/${id}`, params);
  }
  static delete(id: number) {
    return axios.delete(`${categoryApi.baseApiUrl}/${id}`);
  }
}