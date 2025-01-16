import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'

const TransactionsPage = React.lazy(() => import('./pages/TransactionList/page.tsx'))
const TransactionPage = React.lazy(() => import('./pages/Transaction/page.tsx'))

const App = () => (
  <Router>
    <Suspense fallback={''}>
      <Routes>
        <Route path="/" element={<TransactionsPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  </Router>
)

export default App
