interface BlogContentCardUsageProps {
  content: string
  text: string
}
const BlogContentCardUsage = ({
  content,
  text = 'short',
}: BlogContentCardUsageProps) => {
  return (
    <div className='font-medium text-gray-600 '>
      {text === 'short'
        ? content.split('').length > 200
          ? content.split('').slice(0, 200).join('') + '...'
          : content
        : content}
    </div>
  )
}

export default BlogContentCardUsage
