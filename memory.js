class Memory {
  getInfo() {
    this.buffer = 0;
    this.dview = 0;
    this.memsz = 0;
    this.is_init = false;
    return {
      id: 'memory',
      name: 'Memory',
      color1: '#444444',
      color2: '#444444',
      color3: '#444444',
      blocks: [
        {
          opcode: 'create',
          blockType: Scratch.BlockType.COMMAND,
          text: 'create size:[sz]',
          arguments: {
            sz: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        '---',
        {
          opcode: 'alreadyinit',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Already Init?',
        },
        '---',
        {
          opcode: 'sz',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'memory size',
        },
        '---'
      ]
    };
  }
  create(args) {
    this.buffer = new ArrayBuffer(args.sz);
    this.dview = new DataView(this.buffer);
    this.memsz = args.sz;
    this.is_init = true;
  }
  alreadyinit(args) { return this.is_init; }
  sz(args) { return (is_init?this.memsz:NaN); }
}

Scratch.extensions.register(new Memory());
