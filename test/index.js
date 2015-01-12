var Repo = require("../lib")
  , Fs = require("fs")
  ;

var myRepo = new Repo("./foo");
myRepo.create(function (err) {
    if (err) throw err;
    Fs.writeFileSync("./foo/README", "Hello World!");
    myRepo.exec("add .", function (err) {
        if (err) throw err;
        myRepo.commit("Initial commit.", function (err) {
            if (err) throw err;
        });
    });
});
