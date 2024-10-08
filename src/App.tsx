import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import WeatherPage from './pages/weatherPage/WeatherPage'
import { getCurrentDate } from './utils/usefulFuncs'
import MessageModal from './components/messageModal/MessageModal'

function App() {
    return (
        <>
            <Routes>
                <Route path='/:selectedDate' element={ <WeatherPage /> } />
                <Route path='*' element={ <Navigate to={getCurrentDate()} /> } />
            </Routes>
            <MessageModal />
        </>
    )
}

export default App
