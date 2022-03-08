// create class handle errors
class ClientError {
  constructor(status, message) {
    // define status and message
    this.status = status;
    this.message = message;
  }
}
//export Class
module.exports = ClientError;
