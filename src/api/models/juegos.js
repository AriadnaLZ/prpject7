const mongoose = require('mongoose')

const juegoSchema = new mongoose.Schema(
  {
    nombre: {type: String, required: true},
    imagen: {type: String, required: true},
    precio: { type: Number, required: true},
    categoria: {
      type: String,
      required: true,
      enum: [
        'plataformas', 'puzzles', 'deportes', 'aventuras', 'miedo', 'coches'
      ]
    },
    verified: {type: Boolean, required: true, default: false}
  },
  {
    timestamps: true,
    collection: 'juegos'
  }
)

const Juego = mongoose.model('juegos', juegoSchema, 'juego')
module.exports = Juego