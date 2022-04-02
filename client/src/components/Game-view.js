import Def from './default'
import GamesHub from './Games-Hub'
const React = require('react')

export default function Game () {
   return (
       <Def>
           <main className='lesson-view'>
               <h1>This is the {game.title} Game!</h1>
               <div>
                   {/*game here*/}
               </div>
               <img src={game.image} alt={game.title} />
            
               <div>
                   {game.content}
               </div>
                
               <a href={`/lessons/${lesson.id}/show`} className='btn-primary'><button>Need Another Lesson?</button></a>   
               
           </main>
       </Def>
   )
}