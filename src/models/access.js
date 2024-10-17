const BaseModel = require("./base");

class accessModel extends BaseModel {
  constructor() {
    super("access");
    this.select = {
      id: true,
      visible: true,
      menu_id: true,
      role_id: true,
      grant: true,
    };
  }
}

module.exports = accessModel;
