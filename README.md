<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

![gry](http://i.imgur.com/vPz8gkX.png)

# gry [![Donate now][donate-now]][paypal-donations]

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

### `exec(command, callback)`
Executes a git command in the repository directory.

#### Params
- **String** `command`: The git command that should be executed in the repository directory.
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

## License
[KINDLY][license] © [Ionică Bizău][website]–The [LICENSE](/LICENSE) file contains
a copy of the license.

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[contributing]: /CONTRIBUTING.md
[website]: http://ionicabizau.net
[docs]: /DOCUMENTATION.md
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
[donate-now]: http://i.imgur.com/jioicaN.png