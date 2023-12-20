class Fault extends Error {
  constructor(code, name, message, dev) {
    super(message);
    this.name = name;
    this.code = code;
    this.dev = dev;
  }
}

export default Fault;
