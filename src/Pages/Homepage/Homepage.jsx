import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import Search from '../../Component/Search'
import Offerings from '../../Component/Offerings'

const Homepage = () => {
  return (
    <div className=''>
        <Navbar/>
        <Search/>
        <div className='mt-4'>
            <h1>This is Homepage</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima libero, laboriosam maiores iure harum architecto saepe porro quos molestias ea illo eos, doloribus nihil neque eius iste id quisquam voluptas.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem similique eos temporibus quaerat corporis, placeat sunt repellat iusto, velit omnis modi? Quod doloremque vel quidem eligendi molestiae tempora, impedit porro.
            Neque consectetur ad pariatur illo debitis doloremque quas asperiores animi nihil nulla culpa repellat, quaerat, numquam et magni quam atque cupiditate placeat magnam molestiae accusantium minus dignissimos aut. Molestiae, est!</p>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
        </div>
        <Offerings/>
        <Footer/>
        
    </div>
  )
}

export default Homepage