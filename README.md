![](http://i.imgur.com/vPz8gkX.png)

gry
===
A minimalist NodeJS wrapper for the `git` commands. `gry` stands for the Git RepositorY.

## Example

```js
// Dependencies
var Repo = require("../lib")
  , Fs = require("fs")
  ;

// Create the repository
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
```

## Installation

```sh
$ npm install gry
```

## Documentation
## `exec(command, callback)`
Executes a git command in the repository directory.

### Params
- **String** `command`: The git command that should be executed in the repository directory.
- **Function** `callback`: The callback function.

### Return
- **Gry** The `Gry` intance.

## `init(callback)`
Inits the git repository.

### Params
- **Function** `callback`: The callback function.

### Return
- **Gry** The `Gry` intance.

## `create(path, callback)`
Creates a git repository.

### Params
- **String** `path`: The path of the repository.
- **Function** `callback`: The callback function

### Return
- **Gry** The `Gry` intance.

## `commit(message, options, callback)`
Creates a commit, providing the `message`.

### Params
- **String** `message`: The commit message
- **String** `options`: Additional options passed to the commit command.
- **Function** `callback`: The callback function.

### Return
- **Gry** The `Gry` intance.



## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
