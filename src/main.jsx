import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import the Redux store

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Wrap the App component in the Provider and pass the store */}
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
)
