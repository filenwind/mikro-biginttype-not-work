# mikro-biginttype-not-work

## Steps

1. `npm install`
2. `npm run start`

User schema

```js
export const UserEntitySchema = new EntitySchema({
  class: UserEntity,
  tableName: "user",
  properties: {
    id: { primary: true, type: new BigIntType("string") },
  },
});
```

Expected result

```js
UserEntity { id: '1' }
```

Actual result

```js
UserEntity { id: 1n }
```
