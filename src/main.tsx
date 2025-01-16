import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/main.scss'

const root = document.getElementById('root')

if (!root) {
    throw new Error('No root element found')
}
createRoot(root).render(
    <App/>
)
