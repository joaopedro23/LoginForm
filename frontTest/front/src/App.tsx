
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import AppForm from './form/app.form'
import PaginaClient from './pages/paginaClient.pages'
import PaginaAdmin from './pages/paginaAdmin'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/form" />}/>
        <Route path="/form" element={<AppForm/>}></Route>
        <Route path="/client" element={<PaginaClient/>}></Route>
        <Route path="/admin" element={<PaginaAdmin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App