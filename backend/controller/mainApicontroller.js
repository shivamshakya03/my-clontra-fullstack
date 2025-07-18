import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'public', 'clontra_API.json');



export const mainApicontroller =  (req, res) => {
    // const filePath = path.join(__dirname, 'clontra_API.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            return res.status(500).json({error: 'API not found'});
        }

        const jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData, null ,2));
        // JSON.stringify(value, replacer, space)
    });
};
