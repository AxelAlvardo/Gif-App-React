import generatorId from '../../services/key'
import { CardSections } from './CardSections'

export const List = ({categories}) => {
  return (
    <div>
      {
        categories.map((categorie)=>{
          return <CardSections categorie={categorie} key={categorie}/>
        })
      }
    </div>
  )
}
