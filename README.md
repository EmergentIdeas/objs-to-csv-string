# Webhandle / Objs-to-csv-string

What a monster I must be to write another CSV creator. I just wanted something very,
very small with no dependencies on either other packages or stream components so it was
problem free to use in the browser.

## Install

```bash
npm install @webhandle/objs-to-csv-string 
```

## Usage

```js
import convert from "@webhandle/objs-to-csv-string"


let data = [
	{a: '1', b: 2}
	, {b: '3', c: 'hello'}
	, {b: 'He says, "what is going on here?" to me.', c: "say 'hi'"}
]


console.log(convert(data))

console.log(convert(data, {
	headers: {
		a: 'A header'
		, b: "The B header"
		, d: "No values"
	}
}))

```

## Options

```js
/**
 * Converts an array of objects to a CSV string
 * @param {array[object]} data 
 * @param {object} [options] 
 * @param {object} [options.headers] an object representing the headers to use, which the keys are the same as they keys in the data
 * objects and the values are the strings to use for the column heads. If no headers are specified there will be a column for each of
 * the keys present in any of the data objects 
 * @param {object} [options.separator] column separator. ',' by default 
 * @param {object} [options.newline] line separator. '\n' by default 
 * @param {object} [options.sendHeaders] if true, column headers will be generated. true by default
 * @returns {string} csv text
 */
```

