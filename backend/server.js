import express from "express";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
import cors from 'cors';
import mainApiRouter from './routes/mainApirouter.js' 
import navRouter from './routes/navRoutes.js'
import productApiRouter from './routes/productRouter.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();



app.use(cors());

app.use('/myclontra/api', mainApiRouter);

app.use('/myclontra/api/menu',navRouter);
app.use('/myclontra/api/product',productApiRouter);



const PORT = 2000;
app.listen(PORT, () => {
    console.log(`myClontra Backend Server Running on ${PORT}`);
})















// import { promises as fs } from 'fs'; // ✅ Use Promise version of fs

// app.get('/clontra/api', async (req, res) => {
//   try {
//     const filePath = path.join(__dirname, 'clontra_API.json');
//     const data = await fs.readFile(filePath, 'utf-8');  // ✅ await Promise
//     const jsonData = JSON.parse(data);
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(jsonData, null, 2));
//   } catch (err) {
//     res.status(500).json({ error: 'API not found' });
//   }
// });