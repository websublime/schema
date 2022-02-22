/* eslint-disable @typescript-eslint/no-var-requires */
import { schemaType, BaseType } from '../../src/index';

describe('> BaseType', () => {
  it('Should be a valid object', async () => {
    let baseSchemaObject = BaseType<boolean>();

    let validation = await baseSchemaObject.check(false);

    expect(validation.isValid).toBeTruthy();
    expect(baseSchemaObject.schemaType).toEqual(schemaType.property);
  });
});
