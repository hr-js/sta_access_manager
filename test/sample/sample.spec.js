/* globals */
import assert from 'power-assert';
import {
  sample1,
  sample2,
} from '../../src/sample/sample';

describe('sample/sample.js test', () => {
  describe('sample1関数テスト', () => {
    it('戻り値は、{type: "sample1"}である', () => {
      assert.deepEqual(sample1(), { type: 'sample1' });
    });
  });

  describe('sample2関数テスト', () => {
    it('戻り値は、{type: "sample2"}である', () => {
      assert.deepEqual(sample2(), { type: 'sample2' });
    });
  });
});
