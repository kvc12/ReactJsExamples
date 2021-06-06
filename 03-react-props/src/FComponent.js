import Header from './Header'
function FComponent (props) {
  return (
    <div className='container'>
      <Header />
      <h3>Properties in function component</h3>
      {props.user}
    </div>
  )
}
export default FComponent
