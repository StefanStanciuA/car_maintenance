// server.js
const jsonServer = require('json-server')
const auth = require('json-server-auth')

const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const rules = auth.rewriter({
    // Permission rules
    users: 660,
    // cars: 660,
    // info: 660
})

server.db = router.db
server.use(middlewares)
server.use(rules)
server.use(auth);
server.use(router)


server.listen(8000, () => {
    console.log('JSON Server is running')
})