# cross-log-name

<!-- ![](https://img.shields.io/github/license/niktekusho/cross-log-name.svg) [![](https://img.shields.io/npm/v/cross-log-name.svg)](https://www.npmjs.com/package/cross-log-name) [![Build Status](https://travis-ci.org/niktekusho/cross-log-name.svg?branch=master)](https://travis-ci.org/niktekusho/cross-log-name) [![](https://img.shields.io/node/v/cross-log-name.svg)](https://www.npmjs.com/package/cross-log-name) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![Maintainability](https://api.codeclimate.com/v1/badges/744538fb7227c1a86bea/maintainability)](https://codeclimate.com/github/niktekusho/cross-log-name/maintainability) [![](https://img.shields.io/bundlephobia/minzip/cross-log-name.svg)](https://bundlephobia.com/result?p=cross-log-name) -->

> Get a cross-platform log file name.

By default this library returns a string, representing the log file name, in the following format:

```
${application_name}.${iso-8601-date}.log
```

Using the appropriate options, you can customize:

- application name (you can turn it off too!)
- delimiter between the application name and the date segment
- use the full date-time string or a date only string
- delimiter used in the date format (defaults to '-')
- file extension

## Installation

**Note:** to use this library, you have to have installed [Node.js](https://nodejs.org/) and a console you can run commands into. The **minimum required version** of Node.js is: [8 - codename "Carbon"](https://github.com/nodejs/Release#release-schedule).

In your console, run the following command:

```sh
$ npm install cross-log-name
```

You can also use `yarn` (like we do in this project):

```sh
$ yarn add cross-log-name
```

## Usage

This library exports a function which returns a string with a possible log file name.

```js
const logname = require('..');

// Returns a string similar to 'example.YYYY-MM-DD-HH-mm-ss.txt'
logname(new Date(), {
	basename: 'example',
    extension: '.txt'
});

```

You can find other usage examples in the [examples](examples/) directory.

## API

### logname(date?, options?)

Returns a string with the log file name.

#### date

Type: `Date | number`

Optional date to use in the log name. Defaults to `now`.

#### options

Type: `object`

Optional parameters to configure this function's behaviour.

##### basename

Type: `string`

Default: `'app'`

Prefix of the log file name.

##### dateDelimiter

Type: `string`

Default: `'-'`

Delimiter used to separate each date "component".

##### extension

Type: `string`

Default: `'.log'`

Log file extension (including the first '.').

##### includeTime

Type: `boolean`

Default: `true`

In the date section of the file name, include the time segments (hours, minutes and seconds).

##### nameDelimiter

Type: `string`

Default: `'.'`

Delimiter used between `basename` and the date section.

## Related

<!-- -   [CLI application](https://github.com/niktekusho/mas-piano-validator-cli). -->
