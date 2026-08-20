
import Weather from './components/Weather'


//1. in our app.jsx file we removed everything and added this component
//its currently empty, 
//think of a component as a spaceship, and think of the html as its passenger
//and the destination our react page

//see all these files, think of app.jsx as the final destination before lift-off
//ensuring all the files we see on the side are properly merged and errorless
//so imagine before the ship takeoff, ensuring that everyone has a ticket
//and that everyone is in their seats

//lets go to Weather.jsx to see the contents of our spaceship, in other words our component

//16. now lets upload our code to github, github is what allows us developers to collaborate on a project
//think of a song that we are all collaborating on say, we have ____ rap verse ____ chorus ____guitar solo
//and ____on adlibs
//this are different contributions that at the end of the day will come together to create one song
//now say this is my song, you're gonna send me your guitar solo, youre gonna 
// send me your rap verse, and youre gonna send me your chorus etc
//since this is my song, im going to go ahead and approve changes in other words approve your contributions
//so thats what we gonna do now, you each gonna send me your code
//so to send your contributions to my song say git remote add origin https://github.com/Andile17/weather-app.git
//we call this cloning a repository

//now i dont want you adding to my song without me reviewing the changes first, im the owner
//so you'll each save your work to prototype branches
//this will allow you to save your changes to this branch and not the main song
//and then for me to  review it and say i like this rap verse let me add it to the song
//git checkout -b prototype/andile

//then we say git add . 
//and this saves all the changes you've done to your code so that when you send it, it can be sent up to date
//so for example its to save and ensure any new changes you made to your guitar solo wont be left behind upon submisson
//



const App = () => {
  return (
    <div className='app'>
      <Weather/>
    </div>
  )
}
export default App

