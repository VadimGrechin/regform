export function testGuid(guid) {
	return /[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i.test(guid)
} 