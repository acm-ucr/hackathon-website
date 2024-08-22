class Fault extends Error {
  name: string;
  code: number;
  dev?: string;

  constructor(code: number, name: string, message: string, dev?: string) {
    super(message);
    this.name = name;
    this.code = code;
    this.dev = dev;
  }
}

export default Fault;
