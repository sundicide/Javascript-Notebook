import { DateTime } from 'luxon';
import { LOG } from './utils';

const dt = DateTime;

console.log(dt.now().toJSDate(), new Date());

LOG(dt.fromISO('2022-08-01').toJSDate());
// LOG(dt.fromString("2022-08-01").toJSDate());
LOG('format', dt.now().toFormat('yyyy-LL-dd'));

test('luxon', () => {
  // 0011 << 2 => 1100 = 12
  expect(3 + 2).toBe(5);
});
