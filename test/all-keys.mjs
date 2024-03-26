import mocha from "mocha"
import {assert} from "chai"
import allKeys from "../all-keys.mjs"

let data = [
	{a: '1', b: 2}
	, {b: '3', c: 'hello'}
]
describe("test getting keys", function() {
	
	it("keys from multiple objects", function() {
		let result = allKeys(data)

		assert.equal(result[0], 'a')
		assert.equal(result[1], 'b')
		assert.equal(result[2], 'c')
		assert.equal(result.length, 3)

	})

})
