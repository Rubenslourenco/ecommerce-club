import { FunctionComponent } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/home/home.page"

interface AppProps {
  message?: string
}
const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
