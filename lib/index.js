const axios = require('axios');
const Timesheets = require('./timesheets');

class TimesheetNazi {

  constructor(apiKey = null, accountKey = null) {
    if (!apiKey) {
      if (!process.env.WORKFLOW_API_KEY) {
        throw new Error('Env variable \'WORKFLOW_API_KEY\' must be set!');
      }
      apiKey = process.env.WORKFLOW_API_KEY;
    }

    if (!accountKey) {
      if (!process.env.WORKFLOW_ACCOUNT_KEY) {
        throw new Error('Env variable \'WORKFLOW_ACCOUNT_KEY\' must be set!');
      }
      accountKey = process.env.WORKFLOW_ACCOUNT_KEY;
    }

    // Setup Axios
    const instance = axios.create({
      baseURL: 'https://api.workflowmax.com/',
      responseType: 'text',
      timeout: 10000,
      params: {'apiKey': apiKey, 'accountKey': accountKey}
    });

    // Subclasses
    this.timesheets = new Timesheets(instance);
  }
}

module.exports = TimesheetNazi;
