import ClassComponent from './ClassComponent'
import FComponent from './FComponent'
import Header from './Header'
function App () {
  return (
    <div className='container'>
      <Header />
      <FComponent user='Makarand'></FComponent>
      <hr />
      <FComponent user='test'></FComponent>
      <hr />
      <FComponent user={1}></FComponent>
      <hr />
      <FComponent user={[]}></FComponent>
      <hr />
    </div>
  )
}

export default App;
