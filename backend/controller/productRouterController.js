import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'public', 'clontra_API.json');

export const productApiController = (req, res) => {

    const {category} = req.query;
    
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            return res.status(500).json({error: 'API not found'});
        }

        const jsonData = JSON.parse(data);
        const productData = jsonData['products'];
        const filtered = productData.filter((p) => p.category && category && p.category.toLowerCase() === category.toLowerCase());
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(filtered, null ,2));
        // JSON.stringify(value, replacer, space)
    });
    
}
export const productfilterApiController = (req, res) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            return res.status(500).json({error: 'API not found'});
        }

        const jsonData = JSON.parse(data);
        const productData = jsonData['products'];
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(productData, null ,2));
        // JSON.stringify(value, replacer, space)
    });
    
    
}