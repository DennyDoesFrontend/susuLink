import SignInSection from "./components/SignInSection"
import SlideShow from "./components/SlideShow"

function App() {
  return (
    <div className="flex items-center h-screen">
      <SignInSection />
      <div className="flex-1 bg-clBlue h-full relative">
        <SlideShow />
      </div>
    </div>
  )
}

export default App
