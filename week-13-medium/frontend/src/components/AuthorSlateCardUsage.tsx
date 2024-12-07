interface AuthorSlateProps {
  authorName: string
  createdAt: string
}
const AuthorSlate: React.FC<AuthorSlateProps> = ({ authorName, createdAt }) => {
  const pastelColors = [
    '#AEC6CF', // Light Blue
    '#FFB347', // Light Orange
    '#77DD77', // Light Green
    '#FF6961', // Light Red
    '#F49AC2', // Light Pink
    '#FDFD96', // Light Yellow
    '#CFCFC4', // Light Gray
    '#B39EB5', // Light Purple
    '#FFCCCB', // Light Peach
    '#D1E231', // Lime Pastel
  ]
  const backgroundColor =
    pastelColors[Math.floor(Math.random() * pastelColors.length)]
  return (
    <div className='flex items-center gap-2 w-max'>
      <div
        className='relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full '
        style={{ backgroundColor }}
      >
        <span className='font-medium text-black '>{authorName[0] || 'A'}</span>
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
