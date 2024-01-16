import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(404).json({
    ok: false,
    code: 401,
    msg: 'Not found'
  })
  
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});