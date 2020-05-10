module.exports = {
    "testEnvironment": "node",
    "roots": [
        "<rootDir>"
    ],
    "preset": "ts-jest",
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"],
    "transform": {
        "^.+\\.[t|j]sx?$": "ts-jest"
    },
    collectCoverage: true,
    coverageDirectory: '<rootDir>/reports/coverage',
    collectCoverageFrom: [
        '**app/components/**/*.js',
        '**app/containers/**/*.js',
        '**app/utils/*.js',
        '!**app/components/**/*.mock.js',
        '!**lib/components/**/*.styles.js',
        '!**app/styles/**/*.js',
        '!**/node_modules/**',
    ],
    coveragePathIgnorePatterns: [
        // exceptions.
        '/node_modules/',
    ],
    coverageReporters: ['lcov', 'json', 'text-summary'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    verbose: true,
    "testPathIgnorePatterns": ["<rootDir>/.next/", "<rootDir>/node_modules/"],

    // https://github.com/zeit/next.js/issues/8663#issue-490553899
    "globals": {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires. you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        "ts-jest": {
            "tsConfig": "<rootDir>/tsconfig.jest.json"
        }
    }

}