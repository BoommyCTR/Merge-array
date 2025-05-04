## Setup Dependency

#### Step 1: Init package.json

- `npm init -y`

- `npm install --save-dev typescript jest ts-jest @types/jest`

#### Step 2: Create file `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

#### Step 3: Create file `jest.config.js`

```
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
};
```

And you good to go :)

## How to execute code

- `npm i`

- `npx tsc`

- `node dist/main.js`

## How to execute unit test

- Create file <strong>`tests/main.test.ts`</strong>

- `npx jest`
