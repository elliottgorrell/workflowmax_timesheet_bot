import test from 'ava';
import nock from 'nock';
import TimesheetNazi from '../index'
import {response, expected} from './fixtures/timesheets';

let nazi;

test.before(() => {
  nazi = new TimesheetNazi("fakeApiKey","FakeAccountKey");
});

test('should succeed in receiving an xml response and parsing to json', async t => {
  nock("https://api.workflowmax.com/time.api")
    .get('/list')
    .query(true)
    .reply(200, response);

  try {
    const res = await nazi.timesheets.list();
    t.deepEqual(res, expected, 'Server list does not equal object as expected');
  } catch (err) {
    t.fail(err);
  }
});
