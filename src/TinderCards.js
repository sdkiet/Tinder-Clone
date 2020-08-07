import React,{ useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase';
function TinderCards() {

    const[people,setPeople]=  useState([
        {
          name:'Rosamund Pike',
          url:
          "https://www.goldenglobes.com/sites/default/files/styles/og_metatag__600_x_315_/public/people/cover_images/gg_rosamund_pike.jpg?itok=iotgnjIq"

        },
        {
           name:'Rebecca Fergouson',
           url:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/13/13/rebecca-ferguson-0.jpg?w968h681"
        },
        {
            name:'Monica Bellucci',
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Monica_Bellucci%2C_Women%27s_World_Awards_2009_b.jpg/1200px-Monica_Bellucci%2C_Women%27s_World_Awards_2009_b.jpg"

         },

    ]);
    //Piece of code which runs based on conditions
    useEffect(()=>{
     //this is whre ethe code runs
      
     database
      .collection("people")
      .onSnapshot((snapshot)=>
       setPeople(snapshot.docs.map((doc)=>doc.data()))
       );
     //this will run ONCE when the components loads, and never again
    },[people]);
    //normal way
    //const people =[]
    //people/push('shivam','dwivedi')

    //react way
    // setPeople([...people,'shivam','dwivedi']);
    return(
        <div>
         <h1>Tinder Cards</h1>
          <div className="TinderCards__cardContainer">
          {people.map((person) =>(
            <TinderCard
             className="swipe"
             key={person.name}    // Always give keys in React  beacuse  it allows  REACT to effieicent re-render list
             preventSwipe={['up','down']}
            >
                 <div 
                 style={{ backgroundImage: `url(${person.url})` }}
                 className="card"
                 >
                 <h3>{person.name}</h3>
                
                 </div>
            </TinderCard>
          ))}     
          </div>
        </div>
    )
}
export default TinderCards