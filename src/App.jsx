import React from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import { useTranslation } from 'react-i18next'
import './styles/global.css'
import './styles/variables.css'

function App() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )
}

export default App