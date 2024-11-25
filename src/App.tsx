
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Home from "./app/Home"
import Result from "./app/Result"
import DosenDetail from "./app/detail/DosenDetail"
import DetailMataKuliahDosen from "./app/detail/DetailMataKuliahDosen"
import DetailJawaban from "./app/detail/DetailJawaban"



const App = () => {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:query" element={<Result />} />
        <Route path="/detail">
          <Route path="dosen/:id" element={<DosenDetail />} />
          <Route path="dosen/:id/mata-kuliah/:idMataKuliah" element={<DetailMataKuliahDosen />} />
          <Route path="dosen/:id/mata-kuliah/:idMataKuliah/jawaban/:idJawaban" element={<DetailJawaban />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
