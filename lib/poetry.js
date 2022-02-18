const fs = require("fs");
const bib = require('./bib')

var text = fs.readFileSync("data/text/Bananen.txt",{encoding:'utf8', flag:'r'});

exports.getPoetry = () => {
var newtext = text
var A = newtext.split(' ')
A = bib.shuffle(A)
var i = Math.floor(Math.random()*100)
A = A.slice(0,i)
newtext = A.join(' ')
  return newtext
}
