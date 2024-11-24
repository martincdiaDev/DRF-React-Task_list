import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {TaskPage} from "./pages/TaskPage";
import {TaskFormPage} from "./pages/TaskFormPage";
import {Navigation} from './components/Navigation';
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tareas" />} />
          <Route path="/tareas" element={<TaskPage />} />
          <Route path="/crear-tareas" element={<TaskFormPage />} />
          <Route path="/tareas/:id" element={<TaskFormPage />} />
        </Routes>  
        <Toaster />
      </div>
    </BrowserRouter>  
  )
}

export default App;