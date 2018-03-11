const routes = require('./routes');
const xml2js = require('xml2js');
const XmlParser = new xml2js.Parser({explicitArray : false});


/**
 * @param instance {Object} Axios instance
 */
class Staff {

  constructor(instance) {
    this.instance = instance;
  }

  async list() {
    const response = await this.instance.get(routes.staff.list);

    var toReturn;
    XmlParser.parseString(response.data, function(err,result){
      toReturn = result.Response.StaffList;
    });

    return toReturn;
  }
}

module.exports = Staff;
