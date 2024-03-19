import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import LophocComponent from './components/Lophoc/LophocComponent';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <div className='app_container'>
        <Container>
          <LophocComponent />
        </Container>
      </div>


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
