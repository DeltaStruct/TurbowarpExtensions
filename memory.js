class Memory {
  getInfo() {
    this.buffer;
    this.dview;
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
        '---'
      ]
    };
  }
  create(args) {
    this.buffer = new ArrayBuffer(args.sz);
    this.dview = new DataView(buffer);
    this.is_init = true;
  }
  alreadyinit(args) { return this.is_init; }
}

Scratch.extensions.register(new Memory());
