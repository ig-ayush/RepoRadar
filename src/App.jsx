import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Home />
      </div>
      <Footer />      
    </div>
  )
}

export default App
