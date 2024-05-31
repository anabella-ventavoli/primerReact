import './style.css'
import HeaderLinks from './HeaderLinks'
import Cover from './Cover'
import Nav from './Nav'
import FooterRedes from './FooterRedes'
import FooterNav from './FooterNav'
import Copyright from './Copyright'

function App() {
  
  return (
    <>
      <div>

        <header>
          <HeaderLinks />
          <Cover />
          <Nav />
        </header>
        <main>
        
        
        </main>
        <footer>
          <FooterRedes/>
          <FooterNav/>
          <Copyright/>
        </footer>
        
              
      </div>
    </>
  )
}

export default App
