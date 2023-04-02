import React from "react"

import Category from "@/components/Category";
import { categoryApi } from "@/utils/apis/category";
import { useNavigate } from "react-router-dom";


const ArticleCategory: React.FC = () => {
  const navigate = useNavigate()

  return <Category
    getAllMethod={categoryApi.getArticleList}
    CreateMethod={categoryApi.createArticle}
    treeProps={{
      defaultExpandAll: true,
      onClick: (_, data) => {
        navigate(`/category/article/${data.key}`)
      }
    }}
  ></Category>;
}

export default ArticleCategory;