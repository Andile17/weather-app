import React from 'react'
import './weather.css'
import sunny from '../assets/sunny.png'


//2. here we have a simple component that displays
//weather heading
//temperature and location on our page
//run application by typing npm run dev in your terminal
//
//lets style it up, make it look a bit better
//think of css as what adds color, fonts and styling consitency to your website
//its what can take your website from looking like this to looking like this
//lets go to index.css

//4. lets also import its file path, why? so that our weather.css passenger can also communicate with 
//other passengers on board to say 'you wearing that, you getting styled like this' etc
//okay so now lets style each of our passengers onboard
//first one being our div tag, lets give it the name weather
//so we will intrinsically give our div tag the classname weather
//go to weather.css


//6. now our tag containing our temparature, lets give him the name temperature
//lets go to weather.css to style him

//8.lets style our tag containing johannesburg, and give it the name city
//so we add classname = city to johannesburg 
//go to weather.css

//10. okay our passengers look okay but maybe weather.css can do a better job in styling them
//maybe if we add a nice font 
//and in addition to that maybe we add another passenger, namely a picture as well 
//so when we add a font we want it to apply to our whole application not just individual components
//in this individual passengers
//so for that we navigate to index.css instead of weather.css


//13. with it stored in another location we'll need to find a way to get this passenger on board
//how will we do that, same way we got weather.css on board, by importing its file path
//so lets help it to find its way onboard by importing its file path
//so we say import sunny from '../assets/sunny.png'
//now that sunny can find his way onboard lets sit him right on top of temperature
//sunny is a picture so he needs his own kinda seat
//so write <img></img>
//okay so lets specify who'll be sitting on this seat
// so write <img src = {sunny}></img>
//and if you look on your webpage you'll see that sunny is already there

//14. sunny also looks okay, lets allow weather.css our onboard stylist to make some adjustments
//and lets give sunny a name for when we style him, so that we can style him specifically
//so that the changes we make can apply to him specifically
//<img src = {sunny} className = "weather-icon"></img>
//and go to weather.css



const Weather = () => {
  return (
<>
    <div className='weather'>
        <img src = {sunny} className='weather-icon'></img>
          <p className='temperature'>16c</p>
          <p className='city'>Johannesburg</p>
          
        </div>
    </>
      

  )
}

export default Weather