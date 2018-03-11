import test from 'ava';
import nock from 'nock';
import routes from '../lib/resources/routes'
import TimesheetNazi from '../index'
import fixtures from './fixtures/timesheets';

let nazi;

test.before(() => {
  nazi = new TimesheetNazi("fakeApiKey","FakeAccountKey");
});

test('should succeed in receiving an xml response and parsing to json', async t => {
  nock("https://api.workflowmax.com/time.api")
    .get('/list')
    .query(true)
    .reply(200, fixtures.listResponse);

  try {
    const res = await nazi.timesheets.list("20180305","20180309");
    t.deepEqual(res, fixtures.listExpected, 'Server list does not equal object as expected');
  } catch (err) {
    t.fail(err);
  }
});

test('should be able to retrieve a timesheet for staff member', async t => {
  nock("https://api.workflowmax.com/time.api")
    .get('/staff/12345')
    .query(true)
    .reply(200, fixtures.staffResponse);

  try {
    const res = await nazi.timesheets.list("20180305","20180309","12345");
    t.deepEqual(res, fixtures.staffExpected, 'Server list does not equal object as expected');
  } catch (err) {
    t.fail(err);
  }
});
