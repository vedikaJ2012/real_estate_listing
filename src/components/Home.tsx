import prop1 from '../assets/prop1.jpeg'
import prop2 from '../assets/prop2.jpeg'
import prop3 from '../assets/prop3.jpeg'
import prop4 from '../assets/prop4.jpeg'
import Cards from './Cards'

const Home = () => {
  return (
    
      <div className='flex grid-cols-4 gap-8 mt-8'>
        <Cards id={1} image={prop1} text="Diya Residency" address={"Infront of Bharati Vidyapeeth Kandalgoan Kolhapur"} />
        <Cards id={2} image={prop2}text="Diya Residency" address={"Infront of Bharati Vidyapeeth Kandalgoan Kolhapur"}/>
        <Cards id={3} image={prop3}text="Diya Residency" address={"Infront of Bharati Vidyapeeth Kandalgoan Kolhapur"}/>
        <Cards id={4} image={prop4}text="Diya Residency" address={"Infront of Bharati Vidyapeeth Kandalgoan Kolhapur"}/>
      </div>
    
  )
}

export default Home
