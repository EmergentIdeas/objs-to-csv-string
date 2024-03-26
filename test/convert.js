import mocha from "mocha"
import {assert} from "chai"

import convert from "../index.mjs"

let data = [
	{a: '1', b: 2}
	, {b: '3', c: 'hello'}
	, {b: 'He says, "what is going on here?" to me.', c: "say 'hi'"}
]

describe("full csv convesion", function() {
	
	it("data operations", function() {
		console.log(convert(data))
	})

	it("data operations with headers", function() {
		console.log(convert(data, {
			headers: {
				a: 'A header'
				, b: "The B header"
				, d: "No values"
			}
		}))
	})
})
