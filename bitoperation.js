class HelloWorld {
  getInfo() {
    return {
      id: 'bitoperation',
      name: 'bit演算',
      blocks: [
        {
          opcode: 'bitor',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one] | [two]',
          arguments: {
            one: {
              type: Scratch.ArgumentType.NUMBER
            },
            two: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        '---',
        {
          opcode: 'bitand',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one] & [two]',
          arguments: {
            one: {
              type: Scratch.ArgumentType.NUMBER
            },
            two: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        '---',
        {
          opcode: 'bitxor',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one] | [two]',
          arguments: {
            one: {
              type: Scratch.ArgumentType.NUMBER
            },
            two: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        '---'
      ]
    };
  }

  bitor(args) { return args.one | args.two; }
  bitand(args) { return args.one & args.two; }
  bitor(args) { return args.one ^ args.two; }
}

Scratch.extensions.register(new HelloWorld());
