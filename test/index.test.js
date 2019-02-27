const { transformSync } = require('@babel/core');
const plugin = require('../lib');

describe('__DEV__', () => {
  it('convert __DEV__ expression to process.env.NODE_ENV === "development"', () => {
    const input = `
    if (__DEV__)  {
      console.log("log this only in development");
    }
    `;
    const expectedOutput = `if(process.env.NODE_ENV === "development"){console.log("log this only in development");}`;
    const transformedCode = transformSync(input, {
      plugins: [plugin],
      compact: true
    });
    const output = transformedCode.code;
    expect(output).toEqual(expectedOutput);
  });
});

describe('__PROD__', () => {
  it('convert __PROD__ expression to process.env.NODE_ENV === "production"', () => {
    const input = `
    if (__PROD__)  {
      console.log("log this only in production");
    }
    `;
    const expectedOutput = `if(process.env.NODE_ENV === "production"){console.log("log this only in production");}`;
    const transformedCode = transformSync(input, {
      plugins: [plugin],
      compact: true
    });
    const output = transformedCode.code;
    expect(output).toEqual(expectedOutput);
  });
});
