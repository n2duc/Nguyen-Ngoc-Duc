const Heading = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className='flex items-center gap-2 text-gray-500'>
      {children}
      <span className='text-base uppercase font-medium'>{title}</span>
    </div>
  )
}

export default Heading