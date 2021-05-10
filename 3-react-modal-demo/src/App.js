import './App.css';
import Modal from 'react-modal'
import { useState } from 'react';

Modal.setAppElement('#root')

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const OpenModel = () => {}

  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open model</button>
      <Modal 
          isOpen={modalIsOpen} 
          shouldCloseOnOverlayClick={false} 
          onRequestClose={() => setModalIsOpen(false)}
          style={
            {
              overlay: {
                backgroundColor: 'grey'
              },
              content: {
                color: 'orange'
              }
            }
          }
      >
        <h2>Model title</h2>
        <p>Model Body</p>
        <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
