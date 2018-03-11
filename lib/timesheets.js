const routes = require('./routes');
const xml2js = require('xml2js');
const XmlParser = new xml2js.Parser({explicitArray : false});

/**
 * @param instance {Object} Axios instance
 */
class Timesheets {

  constructor(instance) {
    this.instance = instance;
  }

  /**
  * @method list
  * @return {Array} Array of PlanModel Objects
  */
  async list() {
    const response = await this.instance.get(routes.time.list, { 'params': { 'from': '20100101', 'to': '20180202' } });

    var toReturn;
    XmlParser.parseString(response.data, function(err,result){
      toReturn = result.Response.Times;
    });

    return toReturn;
  }
}

module.exports = Timesheets;
