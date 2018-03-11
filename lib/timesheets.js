const routes = require('./resources/routes');
const xml2js = require('xml2js');
const XmlParser = new xml2js.Parser({explicitArray : false});

/**
 * @param instance {Object} Axios instance
 */
class Timesheets {

  constructor(instance) {
    this.instance = instance;
  }

  async list(fromDate, toDate, staffId = null) {

    let response;
    if (staffId) {
      response = await this.instance.get(routes.time.staff + '/' + staffId, { 'params': { 'from': fromDate, 'to': toDate } });
    } else {
      response = await this.instance.get(routes.time.list, { 'params': { 'from': fromDate, 'to': toDate } });
    }

    let toReturn;
    XmlParser.parseString(response.data, function(err,result){
      toReturn = result.Response.Times;
    });

    return toReturn;
  }

}

module.exports = Timesheets;
