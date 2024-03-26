export default function allKeys(data) {
	let keys = new Set()
	for(let obj of data) {
		for(let key of Object.keys(obj)) {
			keys.add(key)
		}
	}
	
	return Array.from(keys)
}