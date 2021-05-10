import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';


const CustomToast = ({ closeToast }) => {
  return (
      <div>
          Something went wrong!
          <button onClick={closeToast}>Close</button>
      </div>
      )
  
}

toast.configure()
function App() {
  const notify = () => {
    toast('Basic notification!', { position: toast.POSITION.TOP_LEFT })
    toast.success('Success notification!', { 
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000 
    })
    toast.info(<CustomToast />, { position: toast.POSITION.TOP_CENTER })
    toast.warn('Warning notification!', { 
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 10000 
    })
    toast.error('Error notification!', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: false })
    toast('Basic notification!', { position: 
      toast.POSITION.BOTTOM_CENTER,
    })
  }
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
