const element = (
  // Write your code here.
  <div className='congrates-card-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='inside-card-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='dp-image'
      />
      <h1 className='card-name'>Kiran V</h1>
      <p className='card-description'>
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch-image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
