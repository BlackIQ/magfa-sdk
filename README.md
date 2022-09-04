# MagFa JavaScript SDK

**MagFa** is a SMS provider.

## How to use this package

So, let's have a quick review of our steps.

- [Installation](#installation)
- [Configuration](#configuration)
- [Methods](#methods)

### Installation

To install **MagFa SDK** use `npm` command like below:

```shell
$ npm i magfa-sdk
```

### Configuration

Now you installed package. You need to initial it. Just require it and use `MagFa` class with 3 values.

- username
- password
- domain

```javascript
const MagFa = require("magfa-sdk");

const sms = new MagFa("username", "password", "domain");
```

### Methods

This SDK has 3 main methods.

- `balance`
- `messages`
- `send`

## Development

If you want to develop the package, it is so simple. just follow steps below.

- Clone the project
- Install dependencies by running `$ npm install`
- Start changing!
    - Link package
    - Test

> Before you start: **Remember the base or code are stored in `lib/magfa.js`. You need to edit there.

### Cloning the project

To clone the project, you need to have git installed. Ok, now clone it same as command below.

```shell
$ git clone https://gitlab.com/BlackIQ/magfa-sdk
```

### installing dependencies

Next, install what package uses with `npm i` or `npm install`.

```shell
$ npm i
```

### Changing

To change package or anything, your need a testing environment to use linked package. Just follow steps.

#### Link package

We asoume you are in `lib` directory. Right. You can open a **tmux** or in another terminal to cd in `test` directory.

In `lib` directory enter link command:

```shell
$ npm link
```

So, in other terminal, or other tmux part, link your development package to your `test` directory. If you are in the `test` directory ok, if not, just say `cd test` and enter the linking command:

```shell
$ npm link magfa-sdk
```

Linking step is done.

#### Test

Your test app is linked. Change anything in package and test it in `test` directory.