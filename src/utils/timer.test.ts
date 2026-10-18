import test from 'node:test';
import assert from 'node:assert/strict';
import { formatSecondsToHms, calculateProgressPercentage, getSlidePacingPercentage } from './timer.ts';

test('formatSecondsToHms formats 7200 seconds to 02:00:00', () => {
  assert.equal(formatSecondsToHms(7200), '02:00:00');
});

test('formatSecondsToHms formats 3661 seconds to 01:01:01', () => {
  assert.equal(formatSecondsToHms(3661), '01:01:01');
});

test('formatSecondsToHms handles 0 and negative values safely', () => {
  assert.equal(formatSecondsToHms(0), '00:00:00');
  assert.equal(formatSecondsToHms(-15), '00:00:00');
});

test('calculateProgressPercentage calculates valid percentages', () => {
  assert.equal(calculateProgressPercentage(0, 25), 4);
  assert.equal(calculateProgressPercentage(24, 25), 100);
  assert.equal(calculateProgressPercentage(12, 25), 52);
  assert.equal(calculateProgressPercentage(0, 0), 0);
});

test('getSlidePacingPercentage correctly maps 2h duration', () => {
  assert.equal(getSlidePacingPercentage(3600, 7200), 50);
  assert.equal(getSlidePacingPercentage(7200, 7200), 100);
});
