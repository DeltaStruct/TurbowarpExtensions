class Memory {
  getInfo() {
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
  let buffer;
  let dview;
  let is_init = false;
  create(args) {
    buffer = new ArrayBuffer(args.sz);
    dview = new DataView(buffer);
    is_init = true;
  }
  alreadyinit(args) { return is_init; }
}

Scratch.extensions.register(new Memory());
