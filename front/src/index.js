import './index.scss'
import './App'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App'

const root = createRoot(document.getElementById('app'))

root.render(<App />)