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
      
    ]);
    //Piece of code which runs based on conditions
    useEffect(()=>{
     //this is whre ethe code runs
      
     const unsubscribe=database
      .collection("people")
      .onSnapshot((snapshot)=>
       setPeople(snapshot.docs.map((doc)=>doc.data()))
       );

       return () =>{
         //this the cleanup...
         unsubscribe();
       }
     //this will run ONCE when the components loads, and never again
    },[]);
    //normal way
    //const people =[]
    //people/push('shivam','dwivedi')

    //react way
    // setPeople([...people,'shivam','dwivedi']);
    return(
        <div>
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