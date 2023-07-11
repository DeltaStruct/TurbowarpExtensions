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
