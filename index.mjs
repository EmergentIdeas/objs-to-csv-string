import allKeys from "./all-keys.mjs";


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
export default function convert(data, {
	headers
	, separator = ','
  	, newline = '\n'
  	, sendHeaders = true

} ={}) {
	data = [...data]
	let rows = []
	let keys
	if(!headers) {
		keys = allKeys(data)
		if(sendHeaders) {
			headers = keys.reduce((acc, key) => {
				acc[key] = key
				return acc
			}, {})
		}
	}
	else {
		keys = Object.keys(headers)
	}

	if(sendHeaders) {
		rows.push(valuesRow(Object.values(headers), separator))
	}
	
	for(let obj of data) {
		let values = []
		for(let key of keys) {
			values.push(obj[key])
		}
		rows.push(valuesRow(values, separator))
	}

	
	return rows.join(newline)
}


function valuesRow(values, separator) {
	let cols = values.map(makeStringValue).map(quoteValue)
	return cols.join(',')
}

function makeStringValue(value) {
	if(value === null || value === undefined ) {
		return ''
	}
	if(typeof value !== 'string') {
		return '' + value
	}
	return value
}

function quoteValue(value) {
	return '"' + value.split('"').join('""') + '"'
}