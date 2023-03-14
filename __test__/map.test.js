// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

import { LOG, expectEqualTest as eeT } from './utils';

test('hashMap Test', () => {
  // 새로운 Map 생성
  const myMap = new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
  ]);

  // count별 Map 생성
  const words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];

  const hashMap = new Map();
  words.forEach((word) => {
    if (hashMap.has(word)) {
      hashMap.set(word, hashMap.get(word) + 1);
    } else {
      hashMap.set(word, 1);
    }
  });

  /**
   * forEach((value, key, map) => {})
   */
  hashMap.forEach((vaule, key, map) => {
    eeT(words.includes(key), true);
  });

  /**
   * get($KEY): Key를 이용한 값 얻기
   * has($KEY): Map 내 key가 있는지 검색
   * delete($KEY): Map 내 키 제거
   * size: Map 크기
   */
  eeT(hashMap.get('i'), 2);
  eeT(hashMap.has('i'), true);
  eeT(hashMap.size, 4);
  hashMap.delete('i');
  eeT(hashMap.has('i'), false);

  /**
   * entries: iterator 반환
   */
  const iterator = hashMap.entries();
  eeT(iterator.next().value, ['love', 2]);
});
