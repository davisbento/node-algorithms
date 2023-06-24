export default {
	coverageProvider: 'v8',
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				isolatedModules: true
			}
		]
	}
};
