import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AIEvaluation from './pages/AIEvaluation'
import ControlTower from './pages/ControlTower'
import DecisionMatrix from './pages/DecisionMatrix'
import ExecPack from './pages/ExecPack'
import IntelligenceLibrary from './pages/IntelligenceLibrary'
import LandingPage from './pages/LandingPage'
import RequirementsHub from './pages/RequirementsHub'
import SupplierWorkspace from './pages/SupplierWorkspace'
import VendorManagement from './pages/VendorManagement'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<ControlTower />} />
        <Route path="/requirements" element={<RequirementsHub />} />
        <Route path="/suppliers" element={<SupplierWorkspace />} />
        <Route path="/ai-evaluation" element={<AIEvaluation />} />
        <Route path="/decision-matrix" element={<DecisionMatrix />} />
        <Route path="/exec-pack" element={<ExecPack />} />
        <Route path="/library" element={<IntelligenceLibrary />} />
        <Route path="/vmo" element={<VendorManagement />} />
      </Route>
    </Routes>
  )
}

export default App
