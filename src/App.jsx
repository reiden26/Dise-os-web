import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DemoViewer from './pages/DemoViewer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo/:slug" element={<DemoViewer />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
