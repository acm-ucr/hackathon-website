class Fault extends Error {
  constructor(code, name, message) {
    super(message);
    this.name = name;
    this.code = code;
  }
}

export default Fault;
