import './App.css'
import Layout from "../Config/Layout/Layout"
import { useSnapshot } from 'valtio'
import state from '../Config/State/State'

function App() {
  const snap = useSnapshot(state)
  return (
    <Layout>
      <div className="app">
        {snap.title}
      </div>
    </Layout>
  )
}

export default App
