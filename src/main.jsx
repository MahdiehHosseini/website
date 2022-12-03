//import pakages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import components
import App from './App'
import './index.css'
//import store
import { store } from './store/main'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store} >
			<App />
		</Provider>
	</React.StrictMode>
)