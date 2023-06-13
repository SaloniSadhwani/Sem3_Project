const express = require('express');
const router = express.Router();
const fs = require('fs');
const {exec} = require('child_process');


const langMap = {
  "python3": {
    "extension": "py",
    "compiler": "python3",
    "run": "python temp.py"
  },
  "python2": {
    "extension": "py",
    "compiler": "python2",
    "run": ""
  }
};


function execute(lang, callback) {
  exec(langMap[lang]["run"], (error, stdout, stderr) => { return stdout });
};

function runCode({ codeLanguage, code }, res) {
  const langAttr = langMap[codeLanguage];

  var fileName = "temp." + langAttr["extension"];

  fs.writeFileSync(fileName, code);
  console.log("The file was saved!");
  exec(langMap[codeLanguage]["run"], (error, stdout, stderr) =>{console.log(stdout); res.send(stdout)});
  // console.log(a)
  // return a.stdout;
}

router.post('/', function (req, res, next) {
  console.log(req.body);
  const lang = req.body["codeLanguage"];
  const output = runCode(req.body, res);

  // res.send(output);
});

module.exports = router;
