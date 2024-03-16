import React from 'react'
import Login from './Login'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Registration from './Registration'
import RegistrationPagePlayer from './Register'
import RegistrationPageCoach from './Register2'
import RegistrationPageAcademy from './Register3'



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/registration' element={<Registration/>}> </Route>
    <Route path='/register' element={<RegistrationPagePlayer/>}> </Route>
    <Route path='/register2' element={<RegistrationPageCoach/>}> </Route>
    <Route path='/register3' element={<RegistrationPageAcademy/>}> </Route>
    <Route path='/' element={<Login/>}> </Route>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
