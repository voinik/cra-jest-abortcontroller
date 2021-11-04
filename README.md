# CRA jest bug

Make sure you have Node v16.13.0 installed.

Then please run `npm test` and verify that the test completes successfully.

Next, please try to reproducte the bug by adding this somewhere to your packcage json:
```
"jest": {
    "testEnvironment": "node"
  },
```

And then running `npm test` again and verify that the test fails because: 

> ReferenceError: AbortController is not defined