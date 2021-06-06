function clickHandler1() {
  alert('Click Handler1 is Called')
}
function Contains() {
  function clickHandler2() {
    alert('Click Handler2 is Called')
  }
  return (
    <div>
      <table className='table'>
        <tr>
          <th>Event</th>
          <th>Source</th>
        </tr>
        <tr>
          <td>Click Event</td>
          <td>
            <button className='btn btn-outline-primary' onClick={clickHandler1}>
              Button1
            </button>
          </td>
        </tr>
        <tr>
          <td>Double Click Event</td>
          <td>
            <button
              className='btn btn-outline-primary' onDoubleClick={clickHandler2}>
              Button2
            </button>
          </td>
        </tr>
        <tr>
          <td>Mouse Event</td>
          <td>
            <button
              className='btn btn-outline-primary' onMouseOver={() => { alert('Click Handler3 is called') }} >
              Button3
            </button>
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Contains
