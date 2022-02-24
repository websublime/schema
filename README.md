# Schema

<p align="center" style="background: #4ecca3; text-align: center; width: 100%; margin-bottom: 2rem;">
  <img src="./white-logo.svg" alt="logo">
</p>

<p align="center">
  <img style="display: inline; margin: 0 6px" alt="GitHub issues" src="https://img.shields.io/github/issues/websublime/schema?style=flat-square">
  <img style="display: inline; margin: 0 6px" alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/websublime/schema?style=flat-square">
  <img style="display: inline; margin: 0 6px" alt="GitHub" src="https://img.shields.io/github/license/websublime/schema?style=flat-square">
  <img style="display: inline; margin: 0 6px" alt="PRS" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
  <img style="display: inline; margin: 0 6px" alt="CI" src="https://github.com/websublime/schema/actions/workflows/main-build.yml/badge.svg?branch=main">
</p>

<p align="center">
  <img style="display: inline; margin: 0 6px" alt="OSS" src="https://forthebadge.com/images/badges/open-source.svg">
  <img style="display: inline; margin: 0 6px" alt="Typescript" src="https://forthebadge.com/images/badges/made-with-typescript.svg">
</p>


<p align="center">🥊 Schema Validator</p>


Schema is a validator for your data. You can define rules to check if the properties present on your schema are valid on the rules you have defined.

An express example:

```typescript
const schemaObject = ObjectType<{ age: number; email: string }>({
  age: NumberType().min(18),
  email: StringType().isEmail()
});

let validation = await schemaObject.check({
  age: 19,
  email: "miguel.ramos@websublime.com"
});

expect(validation.properties?.age.hasError).toBeFalsy();
expect(validation.properties?.email.hasError).toBeFalsy();
```

```typescript
class Parent {
  age: number;
  email: string;
}

class User {
  age?: number;
  email: string;
  parent: Parent;
}

const schema = ObjectType<User>({
  age: NumberType().min(18),
  email: StringType().isEmail(),
  parent: ObjectType<Parent>().shape({
    age: NumberType().min(50),
    email: StringType().isEmail()
  })
});

// schema.properties?.age.

const checkStatus = await schema.check({
  age: 17,
  email: "miguel.ramos@websublime.com",
  parent: { age: 40, email: "zicheng" }
});

expect(checkStatus.hasError).toBeFalsy();
expect(checkStatus.isValid).toBeFalsy();
expect(checkStatus.properties?.email.hasError).toBeFalsy();
expect(checkStatus.properties?.age.hasError).toBeTruthy();
expect(checkStatus.properties?.age.errors[0].i18n).toEqual(
  errorMessages.number.min
);
```

# Table of contents

- [Usage](#usage)
  - [String](#string)
  - [Number](#number)
  - [Boolean](#boolean)
  - [Date](#date)

- [Installation](#installation)

# Usage

[(Back to top)](#table-of-contents)

This package as zero dependencies. It can work on any modern major browsers. Support for node will be added on the building system as well. The data to be validated can be any supported type of javascript types. Let's start for string type.

```typescript
const str = StringType().minLength(5);

expect((await str.check("abcde")).hasError).toBeFalsy();
expect((await str.check("abcd")).hasError).toBeTruthy();
```

Now Number:

```typescript
const validationSchema = NumberType().max(10);

expect((await validationSchema.check(9)).hasError).toBeFalsy();
expect((await validationSchema.check(11)).hasError).toBeTruthy();
```

Every type can have is particular checks, present in all are:

- isRequired
- isEmpty
- addRule (to add new custom rules)

### String

The rules defined on string type are:

- containsLetter (check if value contains only letters)
- containsUppercaseLetter (check if value is uppercase)
- containsLowercaseLetter (check if value is lowercase)
- containsLetterOnly (check if value contains letters only)
- containsNumber (check if value constains numbers)
- isOneOf (check if is one of the types included)
- isEmail (check if is valid email)
- isURL (check if is valid url)
- isHex (check if is a hex value)
- pattern (test a reg expression)
- rangeLength (check if value is between minimum and maximum length)
- minLength (check if value as minimum length)
- maxLength (check if valu is less then maximum length)

### Number

The rules defined on number type are:

- isInteger (check if value is integer)
- pattern (test a reg expression)
- isOneOf (check if is one of the types included)
- range (check if value is between the range)
- min (check if value is equal or great to minimum value)
- max (check if value is equal or lower to maximum value)

### Boolean

The rules defined on boolean type are:

- isRequired

### Date

The rules defined on date type are:

- range (check if date is beteewn min and max dates)
- min (check if date is equal or greater than minimum date)
- max (check if date is equal or lower than maximum date)

### Object and Array

Object can be a compound of native and array a compound of native or objects.

# Installation

[(Back to top)](#table-of-contents)

```
npm install @websublime/schema
```

# Contributing

[(Back to top)](#table-of-contents)

Your contributions are always welcome! Please have a look at the [contribution guidelines](CONTRIBUTING.md) first. :tada:

Create branch, work on it and before submit run:
  - git add .
  - git commit -m "feat: title" -m "Description"
  - yarn changeset
  - git add .
  - git commit --amend
  - git push origin feat/... -f

# License

[(Back to top)](#table-of-contents)


The MIT License (MIT) 2022 - [Websublime](https://github.com/websublime/). Please have a look at the [LICENSE.md](LICENSE.md) for more details.
