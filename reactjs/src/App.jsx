import Calendar from "./components/Calendar"
import Clocks from "./components/Clocks"
import Hero from "./components/Hero"
import Layout from "./components/layouts/Layout"
import Summary from "./components/Summary"
import { calculateTimeLeft, getLifePercentageLived } from "./utils"


function App() {

  const birthDate = '1993-12-27'
  const lifeExpentancy = 80
  const data = calculateTimeLeft(birthDate, lifeExpentancy)
  console.log(data)
  const name = 'Kuot'

  const percentage = getLifePercentageLived(birthDate, lifeExpentancy)

  return (
    <Layout>
      <Hero name={name} data={data} percentage={percentage} />
      <Clocks data={data} />
      <Calendar />
      <Summary />
    </Layout>
  )
}

export default App
