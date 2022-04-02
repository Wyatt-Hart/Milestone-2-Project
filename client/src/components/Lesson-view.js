import Def from './default'
import LessonsHub from './Lessons-Hub'
const React = require('react')

export default function Lesson () {
   return (
       <Def>
           <main className='lesson-view'>
               <h1>This is the {lesson.subject} module!</h1>
               <div>
                   {/*lesson here*/}
               </div>
               <img src={lesson.image} alt={lesson.subject} />
            
               <p>
                   {lesson.content}
               </p>
                
               <a href={`/games/${game.id}/show`} className='btn-primary'><button>Try A Drill?</button></a>   
               
           </main>
       </Def>
   )
}