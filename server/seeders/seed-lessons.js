// Currently throws error saying create cannot be called on undefined

const db = require('../models')

db.Lessons.create([{
    title: 'React Lesson 1',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: 'React',
    hasReact: true,
    hasMongo: false,
    hasExpress: false,
    content:'Nulla pariatur ullamco ullamco velit ad. Incididunt sit commodo excepteur non. Do eu ut anim magna sint. Pariatur ullamco ex deserunt aliquip ullamco ullamco ea cupidatat Lorem nostrud esse do. Ea reprehenderit magna nostrud eu aute tempor quis sint. Nulla id anim ea reprehenderit. Nostrud ut irure sunt reprehenderit pariatur.'
}, {
    title: 'React Lesson 2',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: 'React',
    hasReact: true,
    hasMongo: true,
    hasExpress: false,
    content:'Elit aute pariatur magna fugiat eu dolor cupidatat dolor proident labore magna tempor. Excepteur cillum laboris laboris irure aute amet quis in est anim proident mollit. Aliqua irure est aliqua velit irure sint esse excepteur ullamco occaecat sint. Culpa dolore laboris nisi ex sit mollit in duis qui.'
}, {
    title: 'React Lesson 3',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: 'React',
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content:'Aute ipsum est proident laboris laborum exercitation commodo consequat consequat est dolore. Consectetur duis non in exercitation mollit. Sunt reprehenderit cupidatat consectetur deserunt occaecat nostrud incididunt.'
}, {
    title: 'React Lesson 4',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: 'React',
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content: 'Occaecat duis velit fugiat incididunt ad pariatur in do ullamco ea fugiat eu. Lorem laborum elit irure ut nulla consectetur ad elit. Deserunt voluptate excepteur sit ullamco. Id veniam et laboris id.'
}, {
    title: 'React Lesson 5',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: 'React',
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content: 'In ullamco ad pariatur tempor culpa ipsum eu. Enim laboris Lorem fugiat eiusmod commodo consequat do minim proident tempor aute exercitation excepteur. Incididunt sint aute reprehenderit non duis nostrud magna pariatur minim dolore. Ut est id incididunt ipsum pariatur sint deserunt dolor duis. Cillum excepteur minim magna sint laborum est aliqua sunt Lorem. Aute est laborum adipisicing reprehenderit cillum. Reprehenderit ipsum anim occaecat adipisicing minim non laboris deserunt ipsum ex ad deserunt culpa id.'
}, {
    title: "API's Lesson 1",
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: "API's",
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content:'Ex do amet nulla velit. Cupidatat quis consequat laboris reprehenderit elit. Cillum nulla ad duis officia pariatur qui qui et proident ipsum ut in. Deserunt fugiat proident ex amet Lorem culpa aliqua dolor. Commodo aliqua excepteur voluptate aute ex est velit.'
}, {
    title: "API's Lesson 2",
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: "API's",
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content: 'Sint consectetur qui dolor ut minim elit nulla nisi est. Proident dolor aute enim reprehenderit officia labore labore. Eiusmod proident cillum mollit qui minim id ad magna.'
}, {
    title: "API's Lesson 3",
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: "API's",
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content: 'Laboris mollit minim ex et ullamco proident tempor ea sint quis laboris eu. Deserunt non cupidatat magna consectetur eu occaecat do ipsum ad. Reprehenderit magna laborum aliquip labore nulla aliqua. Sit sunt dolore Lorem sint aliquip. Fugiat amet proident et ea cupidatat pariatur.'
}, {
    title: "API's Lesson 4",
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: "API's",
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content: 'Labore tempor mollit culpa voluptate aliqua sint veniam labore ipsum dolor velit enim. Laboris in excepteur anim cillum minim et veniam. Occaecat commodo non consectetur reprehenderit incididunt. Proident dolore pariatur ipsum nisi consectetur cillum id do. Ut non do esse irure laboris culpa eiusmod.'
}, {
    title: 'SQL Lesson 1',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: 'SQL',
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content: 'Irure ipsum qui nulla commodo. Sint ullamco ut veniam velit velit. Nisi ex fugiat duis amet magna commodo officia commodo.'
}, {
    title: 'SQL Lesson 2',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: 'SQL',
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content: 'Sint et nostrud cupidatat aliqua. Do mollit sit eiusmod sint et esse ad eiusmod culpa eu minim elit. Eu nostrud qui officia dolor ea.'
}, {
    title: 'SQL Lesson 3',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    topic: 'SQL',
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
    content: 'Consequat sunt nostrud labore nisi consequat. Cupidatat ullamco voluptate incididunt reprehenderit enim tempor ullamco elit cillum ullamco nisi amet. Do excepteur dolor commodo ea eiusmod commodo commodo cillum cupidatat eiusmod nulla sit commodo mollit.'
}
])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})