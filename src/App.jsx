import ComingSoon from './views/ComingSoon/ComingSoon'
import './constants.scss'

function App() {
  //routing will be initialized here, for now we just show ComingSoon view
  return (
    <div className='wrapper'>
      <div className='layout'>
        <ComingSoon />
      </div>
    </div>
  )
}

export default App
