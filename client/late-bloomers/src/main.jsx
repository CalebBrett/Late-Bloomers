import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './Dashboard.jsx'

createRoot(document.getElementById('root')).render(
	<div>
		<Dashboard />
	</div>,
)
