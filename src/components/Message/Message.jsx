import './message.css'

export const Message = ({children}) => {
  return (
    <div className='alert'>
        {children}
    </div>
  )
}
