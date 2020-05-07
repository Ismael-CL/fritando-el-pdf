var fs = require('fs');
var pdf = require('html-pdf');
var html = '';// fs.readFileSync('./test/plantilla.html', 'utf8');
var options = { format: 'Letter' };

var Nightmare = require('nightmare');



var fileName = process.argv[2]; 


const downloadCtrl = {}


downloadCtrl.test = async (req, res) =>{

    var prelicNumber = 'Hola'
    var licNumber = 'Hola'

    var nightmare = Nightmare({
        show: true,
        maxWidth: 1204, 
        maxHeight: 1800,
        gotoTimeout: 10000,
        loadTimeout: 10000,
        waitTimeout: 10000,
        openDevTools: { detach: true } 
      });
    
    await nightmare
    .viewport(1024, 1800)
    .goto("https://accounts.test.evercheck.com/login")
    .wait('#btnsubmit')
    
    .wait(500)  
    .then(() =>{

            return nightmare
            .wait(1500)
            .evaluate( () => document.body.innerHTML );
        })
    .then(html2 => {
            
        html = html2;

        })
    .catch(()=>{})
    .then(()=>nightmare.end())

    console.log('html-----------------', html)
    pdf.create(html, options).toFile('./pdfGenerate.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
      });
    res.json({message: 'Listo'})
 
}

module.exports = downloadCtrl
