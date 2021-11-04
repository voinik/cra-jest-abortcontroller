# CRA jest bug

Please run `npm test` and verify that the test completes successfully.

Then please try to reproducte the bug by adding this somewhere to your packcage json:
```
"jest": {
    "testEnvironment": "node"
  },
```

Then run `npm test` again and verify that the test fails because: 

> ReferenceError: AbortController is not defined