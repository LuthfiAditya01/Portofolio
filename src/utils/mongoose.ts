// getting-started.js
import mongoose from 'mongoose';

main().catch(err => console.log(err));
const uri = import.meta.env.VITE_MONGODB_URI;

async function main() {
  await mongoose.connect(uri);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}