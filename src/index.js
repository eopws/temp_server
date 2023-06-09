try {
  const express = require('express')
  const bodyParser = require('body-parser')
  const app = express()
  const port = 3000
  
  const jsonParser = bodyParser.json()
  const urlencodedParser = bodyParser.urlencoded({ extended: false })
  
  let accounts = [];

  app.get('/', (req, res) => {
    res.send('tot')
  })

  app.get('/clear', (req, res) => {
    accounts = []
    res.send('success')
  })

  app.get('/get', (req, res) => {
    res.send(JSON.stringify(accounts))
  })
  
  app.post('/set', jsonParser, (req, res) => {
      accounts.push(req.body);
  
      res.send('success')
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
} catch (e) {
  console.log(e)
}
