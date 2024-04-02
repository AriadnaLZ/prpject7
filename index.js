require('dotenv').config()
const express = require('express')
 const {connectDB} = require('./src/config/db')
 const juegosRouter = require('./src/api/routes/juegos')
 const plataformasRouter = require('./src/api/routes/plataformas')
const usersRoutes = require('./src/api/routes/users')

const app = express()

app.use(express.json())

connectDB()

app.use("/api/v1/plataformas", plataformasRouter)
app.use("/api/v1/juegos", juegosRouter)
app.use("/api/v1/users", usersRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada')
})
app.listen(8000, () => {
  console.log("Servidor en: http://localhost:8000");
});