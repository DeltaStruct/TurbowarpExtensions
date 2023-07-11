class Memory {
  getInfo() {
    return {
      id: 'memory',
      name: 'Memory',
      color1: '#111111',
      color2: '#111111',
      color3: '#111111',
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
      ]
    };
  }

  create(args) { return 0; }
}

Scratch.extensions.register(new Memory());
