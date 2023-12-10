import { Routes, Route } from "react-router-dom"
import "./App.css"
import { Home } from "./pages/Home"
import { Create } from "./pages/Create"
import { Header } from "./components/Header"
import { AppProvider } from "./context"

function App() {
  return (
    <AppProvider>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/create" Component={Create}></Route>
        </Routes>
      </div>
    </AppProvider>
  )
}

export default App
