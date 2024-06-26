import { ArticleCard } from "./ArticleCard"
import "./Articles.css"

export const MyWords = () => {
  return (
    <>
      <div className="articles">
        <div className="wavy-line"></div>
        <div className="articles-container">
          <h2 className="title">My Words</h2>
          <ArticleCard />
        </div>
      </div>
    </>
  )
}
