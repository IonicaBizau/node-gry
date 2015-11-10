[![gry](http://i.imgur.com/vPz8gkX.png)](#)

# gry [![Support this project][donate-now]][paypal-donations]

A minimalist NodeJS wrapper for the `git` commands. `gry` stands for the Git RepositorY.

## Installation

```sh
$ npm i gry
```

## Example

```js
// Dependencies
var Repo = require("gry")
  , Fs = require("fs")
  , OneByOne = require("one-by-one")
  ;

// Create the repository
var myRepo = new Repo("./foo");
OneByOne([
    myRepo.create.bind(myRepo)
  , function (cb) {
        console.log("> Created the repository.");
        Fs.writeFile("./foo/README", "Hello World!", cb);
    }
  , function (cb) {
        console.log("> Created README.md");
        myRepo.exec("add .", cb);
    }
  , function (cb) {
        console.log("> Added the files.");
        myRepo.commit("Initial commit.", cb);
    }
  , function (cb) {
        console.log("> Created the initial commit.");
        cb();
    }
], function (err) {
    console.log(err ? "An error appeared: " + err.stack : "Successfully done.");
});
```

## Documentation

### `Gry(options)`
Creates a new `Gry` instance.

#### Params
- **Object** `options`: An object containing the following fields:
 - `path` (String): The path to the git repository.
 - `limit` (Number): The limit of commands to run same time.

#### Return
- **Gry** The `Gry` instance.

### `exec(command, args, callback)`
Executes a git command in the repository directory.

#### Params
- **String** `command`: The git command that should be executed in the repository directory.
- **Array** `args`: An array of options passed to the spawned process. This is optional (if not provided, `exec` will be used instead).
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

### `init(callback)`
Inits the git repository.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

### `create(path, callback)`
Creates a git repository.

#### Params
- **String** `path`: The path of the repository.
- **Function** `callback`: The callback function

#### Return
- **Gry** The `Gry` instance.

### `commit(message, options, callback)`
Creates a commit, providing the `message`.

#### Params
- **String** `message`: The commit message
- **String** `options`: Additional options passed to the commit command.
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bloggify`](https://github.com/Bloggify/bloggify-tools)

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`gh-contributions`](https://github.com/IonicaBizau/github-contributions)

 - [`git-issues`](https://github.com/softwarescales/git-issues) by Gabriel Petrovay

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)

 - [`gpm`](https://github.com/IonicaBizau/node-gpm)

 - [`repo-downloader`](https://github.com/IonicaBizau/repository-downloader)

 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md