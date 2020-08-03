import React,{ useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
function TinderCards() {

    const[people,setPeople]=  useState([
        {
          name:'Rosamund Pike',
          url:
          "https://images.freeimages.com/images/large-previews/f2c/effi-1-1366221.jpg"

        },
        {
           name:'Rebecca Fergouson',
           url:'https://drive.google.com/file/d/1wE6w7WVT3FTfVKDiXA2wfn4MucpS9AXq/view?usp=sharing'
        },
        // {
        //     name:'Monica Bellucci',
        //     url:'https://github.com/imshivamdwivedi/React-Trash/blob/master/res/photos/BuzzFeed.jfif'

        //  },
        //  {
        //     name:'olivia brower',
        //     url:'https://github.com/imshivamdwivedi/React-Trash/blob/master/res/photos/FiveModels%20(%40FiveModels).jfif'
        //  },
        //  {
        //     name:'Gigi Hadid',
        //     url:'https://github.com/imshivamdwivedi/React-Trash/blob/master/res/photos/Gigi%20Hadid%202016%20-%20Gigi%20Hadid%20-%20Wikipedia.png'

        //  },
        //  {
        //     name:'Kriti Sanon',
        //     url:'https://github.com/imshivamdwivedi/React-Trash/blob/master/res/photos/Kriti%20Sanon%20Latest%20Stills%20From%20Ekta%20Kapoor%20Diwali%20Celebrations%20-%20LinksInd.jfif'

        //  },
        //  {
        //     name:'Michelle Monaghan',
        //     url:'https://github.com/imshivamdwivedi/React-Trash/blob/master/res/photos/Michelle%20Monaghan.jfif'

        //  },
        //  {
        //     name:'Neha Sharma',
        //     url:'https://github.com/imshivamdwivedi/React-Trash/blob/master/res/photos/Neha%20Sharma.jfif'
        //  },
        //  {
        //     name:'Emma Watson',
        //     url:'https://github.com/imshivamdwivedi/React-Trash/blob/master/res/photos/Only%20Best%20Emma%20Watson%20Photos.jfif'

        //  },
        //  {
        //     name:'Rachel Wiesz',
        //     url:'https://github.com/imshivamdwivedi/React-Trash/blob/master/res/photos/Rachel%20Weisz%20photo%20%23191606%20_%20theplace2_ru.jfif'
        //  },
        //  {
        //     name:'Alexndra',
        //     url:'https://github.com/imshivamdwivedi/React-Trash/blob/master/res/photos/%D8%A7%D9%84%D8%B9%D8%B4%D9%82%20%D8%A7%D9%84%D9%85%D9%85%D9%86%D9%88%D8%B9.jfif'
        //  },

    ]);
    //normal way
    //const people =[]
    //people/push('shivam','dwivedi')

    //react way
    // setPeople([...people,'shivam','dwivedi']);
    return(
        <div>
         <h1>Tinder Cards</h1>
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
    )
}
export default TinderCards