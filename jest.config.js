module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/enzyme.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    moduleDirectories: ['node_modules', 'src'],
    globals: {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json',
        },
    },
}
