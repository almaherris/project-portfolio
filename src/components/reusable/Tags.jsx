export const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <p className="montserrat" key={index}>
          {tag}
        </p>
      ))}
    </div>
  )
}
