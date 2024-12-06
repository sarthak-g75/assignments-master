interface AuthorSlateProps {
  authorName: string
  createdAt: string
}
const AuthorSlate: React.FC<AuthorSlateProps> = ({ authorName, createdAt }) => {
  return (
    <div className='flex items-center gap-2 w-max'>
      <div className='relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
        <span className='font-medium text-gray-600 dark:text-gray-300'>
          {authorName[0] || 'A'}
        </span>
      </div>
      <h4 className='font-medium'>{authorName || 'Anonymous'}</h4>
      <div className='flex items-center gap-1 text-gray-500'>
        <span className='flex flex-row justify-center opacity-50 w-max'>
          &#9679;
        </span>{' '}
        <h4 className='text-nowrap'>{createdAt.split('T')[0]}</h4>
      </div>
    </div>
  )
}

export default AuthorSlate
