import inquirer  from "inquirer";
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([{
    message: "Type in your URL: ",
    name: "URL",
},
  ])
  .then((answers) => {
    var qr_png = qr.image(answers.URL, { type: 'png' });
    qr_png.pipe(fs.createWriteStream(answers.URL + ".png"));
   
    fs.writeFile(answers.URL+ ".txt", answers.URL,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
