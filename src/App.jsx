import './App.css'
import MyForm from './assets/components/MyForm'

function App() {

  return (
    <div className='APP'>
      <h1>Form em React</h1>
      <MyForm userName="Carol" email="carol@teste.com" />
    </div>
  )
}

export default App
