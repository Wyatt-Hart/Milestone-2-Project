const express = require('express')
const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')
const Game = require('../models/games.js')


//Index Route?
router.get('/', (req, res) => {
    res.json({message: 'Hello World'})
});

//SEED Route
router.get('/data/seed', (req, res) => {
    Game.insertMany([
      {
        type: 'Trivia Games',
        subject: [],
        title: [],
        image: '../images/Client-Server-Model.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
      },
      {
        type: 'Flashcard Games',
        subject: [],
        title: [],
        image: '../images/DB-types.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
      },
    ])
      .then(createdGames => {
        res.redirect('/router')
      })
  })

module.exports = router