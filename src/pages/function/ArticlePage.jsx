// localhost:3000:
import { useParams } from "react-router-dom"
import articles from  "./ArticleContent"
export const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find(article => article.name === articleId);

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map(paragraph => (
        <p>{paragraph}</p>
      ))}
      </>
    
  )
}
