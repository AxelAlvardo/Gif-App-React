import './card.css'

export const Card = ({title, img}) => {
  return (
    <div className='card'>
        <h2 className='title-card'>{title}</h2>
        <img src={img} alt="img" className='card-img' />
    </div>
  )
}
