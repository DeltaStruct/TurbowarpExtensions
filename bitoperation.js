class HelloWorld {
  getInfo() {
    return {
      id: 'bitoperation',
      name: 'bit演算',
      blocks: [
        {
          opcode: 'bitor',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one] | [two]'
          arguments: {
            one: {
              type: Scratch.ArgumentType.NUMBER
            },
            two: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        }
      ]
    };
  }

  hello() {
    return 'World!';
  }
}

Scratch.extensions.register(new HelloWorld());
