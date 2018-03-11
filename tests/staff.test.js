import test from 'ava';
import nock from 'nock';
import TimesheetNazi from '../index'
import {response, expected} from './fixtures/staff';

let nazi;

test.before(() => {
  // nazi = new TimesheetNazi("fakeApiKey","FakeAccountKey");
  nazi = new TimesheetNazi();
});

test('should succeed in receiving an xml response and parsing to json', async t => {
  nock("https://api.workflowmax.com/staff.api")
    .get('/list')
    .query(true)
    .reply(200, response);

  try {
    const res = await nazi.staff.list();
    t.deepEqual(res, expected, 'Server list does not equal object as expected');
  } catch (err) {
    t.fail(err);
  }
});
