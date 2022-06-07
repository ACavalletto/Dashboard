const Visitors = ({title, info}) => {
  return (
      <div className="visitors">
      <h3>{title}</h3>
      <div className= "visits">
        <h2>{info}</h2>
        <p>Vistitors Today</p> 
      </div>
          <div id="visitorsVisual">
              <img src="https://wpdatatables.com/wp-content/uploads/2020/12/Proof-of-concep-Chart.js-with-Background-Gradient.jpg"></img>
          </div>
    </div>
  )
}

export default Visitors