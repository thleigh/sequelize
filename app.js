const db = require('./models');
const { defaults } = require('pg');

// db.user.create({
//     firstName: 'Tanner',
//     lastName: 'Leigh',
//     age: '23',
//     email: 'tannerhleigh@gmail.com'
// }).then(data => {
//     console.log(data)
// })

  db.user.findOne({
      where: {
        id: 1  
      }
  }).then(user => {
      console.log('==== user 1 ===')
      console.log(user.dataValues)
  })

  //search by name
  db.user.findOne({ 
      where: {firstName:'Tanner'}
  }).then(user => {
      console.log('==== user 2 ===')
      console.log(user.dataValues)
  })

  //search by email
  db.user.findOne({
      where: {
          email: 'tannerhleigh@gmail.com'
      }
  }).then(user => {
      console.log('==== user 3 ===')
      console.log(user.dataValues)
  })

  db.user.findOrCreate({
      where: {
          firstName: 'Kevin',
          lastName: 'Johnson'
      },
      defaults: {age: 40, email: 'kv@email.com'}
  }).then(([user, created]) => {
      console.log(`This was created on ${created}`)
      console.log(user.dataValues)
  })

  let queryOne = {
      where: {
          firstName: 'John',
          lastName: 'Smith'
      },
      defaults: {age: 25, email: 'john@email.com'}
  }
  db.user.findOrCreate(queryOne).then(([user, created]) => {
      console.log(created)
      console.log(user.dataValues)
  })

db.user.findAll().then(users => {
    users.forEach(e => {
        console.log(e.dataValues.firstName)
    })
});

// db.user.findAll()
// .then(users => {
//     for(let i = 0; i < users.length; i++) {
//         let eachUser = users[i].firstName;

//     }
// })