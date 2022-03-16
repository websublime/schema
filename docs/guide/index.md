# What is Schema?

Schema is a set of function to describe a validation model for any javascript object.

## Motivation

Schema was created to describe a schema validation for javascript models, to be used especially in form validation.

Is based in the package `schema-typed` but simplified, and yet very complete.

All validation rules are async and run async, in order of it definition.

It also have two ways of validate a model:

- From top to bottom. It will validate all object fields.

- And from bottom to top. It very useful to be used with form validation.
  When you fill a form with several fields, we don't all fields to be validation at same time. Only if they are changed.

## Forms

`@websublime/forms` in another package that combines `@websublime/schema` and form validation model based on `angular` forms model, to make form validation easy.

Please check also [@websublime/forms]()
