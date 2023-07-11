class Memory {
  getInfo() {
    return {
      id: 'memory',
      name: 'Memory',
      color1: '#333333',
      color2: '#333333',
      color3: '#333333',
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
