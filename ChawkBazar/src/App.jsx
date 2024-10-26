
import { Route, Routes } from 'react-router-dom'
import Header from './component/header/Header'
import { PageRoute } from './routePage/PageRoute'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {
          PageRoute.map(({path , element} , index) =>{
            return(<Route key={index} path={path} element={element}/>)
          })
        }
      </Routes>
    </div>
  )
}

export default App
