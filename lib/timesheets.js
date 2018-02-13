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
    // try {
      const response = await this.instance.get(
        routes.time.list, {
          'params': {
            'from': '20100101',
            'to': '20180202'
          }
        });

      const data = response.data;
      debugger;
      var toReturn;

      XmlParser.parseString(data, function(err,result){
        //Extract the value from the data element
        toReturn = result.Response.Times;
        debugger;
      });

      return toReturn;
      // return Object.keys(data).map(key => {
      //   return new PlanModel(data[key]);
      // });
    // } catch (err) {
    //   handleAxiosError(err);
    // }
  }
}

module.exports = Timesheets;
