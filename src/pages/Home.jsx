import Header from '../components/Header'

import home from '../assets/home.svg'

const Home = () => {
  return (
    <>
      <Header title="Meu site" image={home} />
      <h1>Home</h1>
    </> 
  )
}

export default Home