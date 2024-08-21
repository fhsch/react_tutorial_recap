import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import ks from "./assets/katie-zaferes.png"
import data from "./data"
import './App.css'

export default function App() {
  // <Hero />
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
      />
    )
  })

  return (
      <div>
        <Navbar /> 
		<Hero />
        <section className="cards-list">
          {cards}
        </section>
      </div>
  )
}
	