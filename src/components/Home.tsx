
import { properties } from '../constants/Properties'
import Cards from './Cards'

const Home = () => {
  return (
    
      <div className='grid grid-cols-4 gap-8 mt-8'>

        {properties.map((property)=>(
          <Cards 
            id={property.id}
            image={property.image[0]}
            text={property.title}
            address={property.address}
          />
        ))}
        
      </div>
    
  )
}

export default Home
