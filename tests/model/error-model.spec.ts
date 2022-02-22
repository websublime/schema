import { ErrorModel } from '../../src/index';

describe('> ErrorModel', () => {
  it('Should have default values', () => {
    let error = new ErrorModel();

    expect(error.constraints).toBeNull();
    expect(error.i18n).toEqual('ERROR.UNKNOWN');
    expect(error.key).toEqual('UNKNOWN');
    expect(error.value).toBeNull();

    // test with null
    error = new ErrorModel(null);

    expect(error.constraints).toBeNull();
    expect(error.i18n).toEqual('ERROR.UNKNOWN');
    expect(error.key).toEqual('UNKNOWN');
    expect(error.value).toBeNull();

    // test with undefined
    error = new ErrorModel(undefined);

    expect(error.constraints).toBeNull();
    expect(error.i18n).toEqual('ERROR.UNKNOWN');
    expect(error.key).toEqual('UNKNOWN');
    expect(error.value).toBeNull();
  });
});
