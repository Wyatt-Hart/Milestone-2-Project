//Lesson models (datasets for lesson entries)

// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const gameSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    subject: {
      type: Schema.Types.ObjectID,
      ref: 'Subject'
    }
});


//model and export
const Lesson = mongoose.model('Game', gameSchema)
module.exports = Game

/*module.exports = [
    {
      title: 'Client-Server Architecture',
      image: '../images/Client-Server-Model.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
    },
    {
      title: 'Databases',
      image: '../images/DB-types.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
    },
    {
      title: 'React & Front-End Libraries',
      image: '../images/reactLogo.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
    },
    {
      title: 'Express & Server-Side Web Frameworks',
      image: '../images/reactLogo.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
    },
    {
      title: 'MongoDB',
      image: '../images/reactLogo.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
    }
  ]*/