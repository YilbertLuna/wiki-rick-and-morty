import { NavBar } from "./components/NavBar"
import { Routs } from "./routers/Routs"
import { ResponsiveMenu } from "./components/ResponsiveMenu"

function App() {

  return (
    <div>
      <NavBar/>
      <ResponsiveMenu/>
      <Routs/>
    </div>
  )
}

export default App