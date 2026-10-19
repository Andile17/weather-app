import './weather.css'
import sunny from '../assets/sunny.png'

const Weather = () => {
 return (
<>
   <div className="weather">
    
<img src = {sunny} className='weather-icon'></img>
         <p className='temperature'>16c</p>
         <p className='city'>Johannesburg</p>
         
       </div>
   </>
     
 )
}
export default Weather