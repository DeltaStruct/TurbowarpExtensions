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
          text: '[one] ^ [two]',
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
          opcode: 'rshift',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one] >> [two]',
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
          opcode: 'lshift',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one] << [two]',
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
          opcode: 'lsb',
          blockType: Scratch.BlockType.REPORTER,
          text: 'LSB [IN]',
          arguments: {
            IN: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        '---',
        {
          opcode: 'bitnot',
          blockType: Scratch.BlockType.REPORTER,
          text: '~ [IN]',
          arguments: {
            IN: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        '---',
        {
          opcode: 'tohex',
          blockType: Scratch.BlockType.REPORTER,
          text: 'toHex [IN]',
          arguments: {
            IN: {
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
  bitxor(args) { return args.one ^ args.two; }
  rshift(args) { return (args.one >> args.two); }
  lshift(args) { return (args.one << args.two); }
  lsb(args) { return ((args.IN) & (-args.IN)); }
  bitnot(args) { return (~args.IN); }
  tohex(args) {
    const f = "0123456789abcdef";
    let o = "0x";
    while(args.IN>0){
      o += f.charAt(args.IN%16);
      args.IN/=16;
    }
    return o;
  }
}

Scratch.extensions.register(new HelloWorld());
