// Dependencies
var Repo = require("../lib")
  , Fs = require("fs")
  ;

// Create the repository
var myRepo = new Repo("./foo");
myRepo.create(function (err) {
    if (err) throw err;
    console.log("> Created the repository.");
    Fs.writeFileSync("./foo/README", "Hello World!");
    console.log("> Created README.");
    myRepo.exec("add .", function (err) {
        if (err) throw err;
        console.log("> Added the files.");
        myRepo.commit("Initial commit.", function (err) {
            if (err) throw err;
            console.log("> Created the initial commit.");
        });
    });
});
