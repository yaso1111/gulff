const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Bot is on'));

module.exports = () => {
  app.listen(3000);
}
