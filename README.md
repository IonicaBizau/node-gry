
[![gry](http://i.imgur.com/vPz8gkX.png)](#)

# gry

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/node-gry.svg)](https://travis-ci.org/IonicaBizau/node-gry/) [![Version](https://img.shields.io/npm/v/gry.svg)](https://www.npmjs.com/package/gry) [![Downloads](https://img.shields.io/npm/dt/gry.svg)](https://www.npmjs.com/package/gry) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A minimalist NodeJS wrapper for the `git` commands. `gry` stands for the Git RepositorY.

## :cloud: Installation

```sh
$ npm i --save gry
```


## :clipboard: Example



```js
// Dependencies
const Repo = require("gry")
    , fs = require("fs")
    , oneByOne = require("one-by-one")
    ;

// Create the repository
var myRepo = new Repo("./foo");
oneByOne([
    myRepo.create.bind(myRepo)
  , cb => {
        console.log("> Created the repository.");
        fs.writeFile("./foo/README", "Hello World!", cb);
    }
  , cb => {
        console.log("> Created README.md");
        myRepo.exec("add .", cb);
    }
  , cb => {
        console.log("> Added the files.");
        myRepo.commit("Initial commit.", cb);
    }
  , cb => {
        console.log("> Created the initial commit.");
        cb();
    }
], function (err) {
    console.log(err ? "An error appeared: " + err.stack : "Successfully done.");
});
```

## :memo: Documentation


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

### `pull(options, callback)`
Runs `git pull`.

#### Params
- **String** `options`: Additional options passed to the `pull` command.
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

### `add(options, callback)`
Runs `git add`.

#### Params
- **String** `options`: Additional options passed to the `add` command.
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

### `branch(options, callback)`
Runs `git branch`.

#### Params
- **String** `options`: Additional options passed to the `branch` command.
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

### `checkout(options, callback)`
Runs `git checkout`.

#### Params
- **String** `options`: Additional options passed to the `checkout` command.
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

### `clone(gitUrl, options, callback)`
Runs `git clone`.

#### Params
- **String** `gitUrl`: The git url of the repository that should be cloned.
- **String** `options`: Additional options passed to the `checkout` command.
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify`](https://github.com/Bloggify/bloggify-tools)—A set of tools for Bloggify administration.
 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)—Easy way to import a library into CDNJS.
 - [`engine-tools`](https://github.com/jillix/engine-tools) (by jillix)—Engine Tools library and CLI app.
 - [`gh-contributions`](https://github.com/IonicaBizau/github-contributions)—A tool that generates a repository which being pushed into your GitHub account creates a nice contributions calendar.
 - [`git-issues`](https://github.com/softwarescales/git-issues) (by Gabriel Petrovay)—Git issues extension to list issues of a Git project
 - [`git-package-json`](https://github.com/IonicaBizau/git-package-json#readme)—Get the package.json contents from git repositories.
 - [`git-stats`](https://github.com/IonicaBizau/git-stats)—Local git statistics including GitHub-like contributions calendars.
 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)—Imports your commits from a repository into git-stats history.
 - [`gpm`](https://github.com/IonicaBizau/gpm)—npm + git = gpm - Install NPM packages and dependencies from git repositories.
 - [`np-init`](https://github.com/IonicaBizau/np-init#readme)—Easily start a npm package from scratch.
 - [`repo-downloader`](https://github.com/IonicaBizau/repository-downloader)—Download all the repositories from BitBucket and GitHub, including your account, teams and where you created pull requests.
 - [`repository-downloader`](https://github.com/IonicaBizau/repository-downloader)—Download all the repositories from BitBucket and GitHub, including your account, teams and where you created pull requests.
 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)—Automagically switch on the SSH remote url in a Git repository.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
