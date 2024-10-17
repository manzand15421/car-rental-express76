const BaseModel = require("./base");

class rolesModel extends BaseModel {
  constructor() {
    super("roles");
    this.select = {
      id: true,
      role: true,
    };
  }
}

module.exports = rolesModel;
