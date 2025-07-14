import Button from "./components/Button"
import Logo from "./components/logo"
import SignInInput from "./components/SignInInput"
import SignInSection from "./components/SignInSection"
import SignInType from "./components/SignInType"

function App() {
  return (
    <div>
      {/* <Logo />
      <SignInType text='Google' imageLink="/google-icon.png"/>
      <SignInInput placeholder="Password" icon='ri-lock-2-line'/>
      <Button text="Log In"/> */}
      <SignInSection />
    </div>
  )
}

export default App
