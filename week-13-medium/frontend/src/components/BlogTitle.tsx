const BlogTitle = ({
  title,
  font = 'small',
}: {
  title: string
  font: string
}) => {
  return (
    <div className={`${font === 'big' ? 'text-3xl' : 'text-xl'} font-bold`}>
      {title}
    </div>
  )
}

export default BlogTitle
