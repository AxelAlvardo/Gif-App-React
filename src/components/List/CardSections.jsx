import { useEffect, useState } from 'react'
import { getGifs } from '../../services/useAPI'
import './cardSection.css'
import { Card } from './Card';

export const CardSections = ({ categorie }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(categorie);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, [])


  return (
    <div className='section'>

      <h2 className='title-cate'>{categorie}</h2>

      {
        images.map((imgItem) => {
          const { key, title, img } = imgItem;
          return <Card  key={key} title={title} img={img}/>
        })
      }
    </div>
  )
}
