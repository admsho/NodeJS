## in the terminal:

to run file one time (js file) => node {{file}}
to run the file with listening to the changes(synchronised) => nodemon {{file}}
to run client: npm start or npm run start
to run server, run the script you added in the package.json ( "dev": "nodemon ./src/index.js" )
=> npm run dev // or change it in the package to start instead of dev
<ctrl>+C :to stop server
add ( "type": "module", ) into package.json to enable using ( import and export ) instead of (require and module.exports)

## API methods names

- GET: get data from the server
- POST: send data to the server
- PUT: update data on the server
- DELETE: delete data from the server
  we use:
  req.params for => ../products/:id //:id is a placeholder for id as value only ex:../products/123
  req.query for => ../products?id=123
  req.body for => body contents recieved from client side in post, and put only
  req.headers for => metadata paased in browser network
  SQL, for more info visit: (https://sequelize.org/docs/v6/getting-started/)
- install tools (ORM)
  npm install --save sequelize
  -for sql server:
  npm install --save tedious
- ////////////////destructure//////////////////////
  cosnt data = [0,1,2,3]

const [firstIndex,secondIndex ] = data

console.log(firstIndex) // 0
console.log(secondIndex) // 1

const [firstIndex, ...rest] = data
console.log(firstIndex) // 0
console.log(rest) // [1,2,3]

const [firstIndex, , , fourthIndex] = data
console.log(firstIndex) // 0
console.log(fourthIndex) // 3
................object destruction depends on key name..................
const obj = {
id: 1,
title: 'متدرب',
description: 'متدرب',
isDeleted: false,
}

const { id } = obj
console.log(id) // 1

const { title } = obj
console.log(title) // متدرب

const { id, ...rest } = obj

console.log(id) // 1
console.log(rest) // {title: "متدرب", description: "متدرب", isDeleted: false}

const { title, ...rest } = obj

console.log(title) // متدرب

