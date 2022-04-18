import * as fs from 'fs';
export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
        if (err){
            res.status(500).json({
                message: 'No Such Blog Found!'
            })
        }
        console.log(req.query.slug)
        res.status(200).json(data);
    })
}
