function BoilingVerdict({celsius})
{
if (celsius >=100)
{
    return <div className="alert alert-success "> L'eau bout </div>
}
return <div className="alert alert-info "> L'eau ne bout pas</div>
}
// ReactDOM.render(<BoilingVerdict celsius={150}/>, document.querySelector('#app'))



// calcuer la temperatuere et dire si l'eau bout ou pas.


//      }

// }
// function Calcels()
// {
//    return <div> <Calculator/> </div>
// }
// ReactDOM.render(<Calcels/>, document.querySelector('#app'))

const ScaleNames={
    c:'Celsius',
    f:'Fahrenheit'
}

function ToCelsius(fahrenheit)
{
  return (fahrenheit -32)*5/9

}

function Tofahrenheit(celsius)
{
  return (celsius* 9/ 5) +32

}

function tryconvert(temperature, convert)
{
    const value=parseFloat(temperature)
    if(Number.isNaN(value))
    {
        return ''
    }
     return (Math.round(convert(value) *100 )/100).toString()
}

class TempertureInput extends React.Component
{

    constructor(props)
    {
        super(props)
       // this.state ={ temperature: ''}
    
    this.handleChange=this.handleChange.bind(this)
}
handleChange(e) 
{
    this.props.onTemperatureChange(e.target.value)
}
render()
{  
    const {temperature} =this.props
    const name = 'scale' + this.props.scale 
    const ScaleName = ScaleNames[this.props.scale]    //<TempertureInput scale="f" />
    return <div>
    <div className="form-group">
   <label htmlFor={name}>  Température(  en {ScaleName }) </label>
   <input type="text" id={name}  value ={temperature} className="form-control" onChange={this.handleChange}/>

    {/* {JSON.stringify(this.state)} */}
   </div>
  </div>
}

}
class Calculator extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            scale:'c',
            temperature:20
        }
        //this.handleTemperatureChange=this.handleTemperatureChange.bind(this)
        this.handleCelsiusChange=this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this)
    }


    //  handleTemperatureChange(temperature)
    //  {
    //     this.setState({temperature})
    //  }
    handleCelsiusChange(temperature)
    {
        this.setState({
            scale:'c',
            temperature
        })
    }
    handleFahrenheitChange(temperature)
    {
        this.setState({
            scale:'f',
            temperature
        })
    }
     render ()
     {
         const {temperature , scale } =this.state // String
          const celsius = scale === 'c' ? temperature : tryconvert(temperature,ToCelsius)
          const fahrenheit=scale === 'f' ? temperature : tryconvert(temperature,Tofahrenheit)
        // const  fahrenheit=temperature
        // const celsius=ToCelsius(fahrenheit)
    return  <div >
       <TempertureInput scale="c"  temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
      <TempertureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
    {/* // <BoilingVerdict celsius={parseFloat(temperature)} /> */}
    <BoilingVerdict celsius={celsius} />
     </div>
     
}}
// function Calcels()
// {
//    return <div> <TemperatureInput/> </div>
// }
ReactDOM.render(<Calculator/>, document.querySelector('#app'))
