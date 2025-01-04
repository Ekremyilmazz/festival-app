import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgramProvider } from './context/ProgramContext';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Artists from './pages/Artists';
import MyProgram from './pages/MyProgram';

function App() {
  return (
    <ProgramProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/my-program" element={<MyProgram />} />
          </Routes>
        </div>
      </Router>
    </ProgramProvider>
  );
}

export default App;
