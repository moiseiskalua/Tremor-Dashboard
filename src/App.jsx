import LeftColumn from './assets/components/LeftColumn'
import RightColumn from './assets/components/RightColumn'
import Navbar from './assets/components/NavBAR.JSX'
import { Sidebar } from './assets/components/Sidebar'

function App() {

  return (
    <main className='flex'>
      <Sidebar/>
      <div className='flex flex-col flex-1 relative'>
        <Navbar />
        <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
          <div className='col-span-2'>
            <LeftColumn />
          </div>
          <div className='w-full'>
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  )

}

export default App
