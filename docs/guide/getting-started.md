# Getting started

## Install

You can install `@websublime/schema` via npm or yarn using the following command:

```bash
npm @websublime/schema --save
# or
yarn add @websublime/schema
```

## Usage

The code below will create a validation schema for a property of type `number` and create a variable that contains the value `10`.

Then it will check if the variable checks with the validation schema.

```typescript
import { NumberType } from '@websublime/schema';

const schema = NumberType()
  .isRequired()
  .max(10);

const number = 10;

const validation = await schema.check(number);

expect(validation.hasError).toBeFalsy();
expect(validation.isValid).toBeTruthy();
expect(validation.errors.length).toBe(0);
```

Schema validation model for an `object` type.

```typescript
import { NumberType, ObjectType, StringType } from '@websublime/schema';

const schemaObject = ObjectType<{ age: number; email: string }>({
  age: NumberType().min(18),
  email: StringType().isEmail()
});

let validation = await schemaObject.check({
  age: 19,
  email: 'schema@websublime.com'
});

expect(validation.isValid).toBeTruthy();
expect(validation.properties?.age.isValid).toBeTruthy();
expect(validation.properties?.email.isValid).toBeTruthy();
```
