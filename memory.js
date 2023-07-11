class Memory {
  getInfo() {
    return {
      id: 'memory',
      name: 'Memory',
      color1: '#000000',
      color2: '#000000',
      color3: '#000000',
      blocks: [
        {
          opcode: 'create',
          blockType: Scratch.BlockType.COMMAND,
          text: 'create [sz]',
          arguments: {
            sz: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        '---'
    };
  }

  create(args) { return 0; }
}

Scratch.extensions.register(new Memory());
