import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import LophocComponent from './components/Lophoc/LophocComponent';
import Container from 'react-bootstrap/Container';
import HeaderComponent from './components/HeaderComponent';
import DiemConponent from './components/Diem/DiemConponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemLopComponent from './components/Lophoc/ThemLopComponent';
import ThemDiemComponent from './components/Diem/ThemDiemComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app_container'>
          <Container>

            <HeaderComponent />

            <Routes>
              <Route path='/lophoc' element={<LophocComponent />}></Route>


              <Route path='/' element={<DiemConponent />}></Route>

              <Route path='/add-diem' element={<ThemDiemComponent />}></Route>

            </Routes>

          </Container>
        </div>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
