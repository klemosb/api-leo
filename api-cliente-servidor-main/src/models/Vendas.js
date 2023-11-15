import mongoose from 'mongoose';

const vendasSchema = new mongoose.Schema(
  {
    nome: { type: String },
    quantidade: { type: String }
  },
  {
    versionKey: false,
    collection: 'vendas'
  }
);

const Vendas = mongoose.model('vendas', vendasSchema);

export default Vendas;

