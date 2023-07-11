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
          opcode: 'convert',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [IN] to [FORMAT]',
          arguments: {
            IN: {
              type: Scratch.ArgumentType.STRING
            },
            FORMAT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'FORMAT_MENU'
            }
          }
        },
        '---'
      ],
      menus: {
        FORMAT_MENU: {
          acceptReporters: true,
          items: [
            {
              text: 'Hex',
              value: '16'
            },
            {
              text: 'Decimal',
              value: '10'
            },
            {
              text: 'Octal',
              value: '8'
            },
            {
              text: 'Binary',
              value: '2'
            }
          ]
        }
      }
    };
  }

  bitor(args) { return args.one | args.two; }
  bitand(args) { return args.one & args.two; }
  bitxor(args) { return args.one ^ args.two; }
  rshift(args) { return (args.one >> args.two); }
  lshift(args) { return (args.one << args.two); }
  lsb(args) { return ((args.IN) & (-args.IN)); }
  bitnot(args) { return (~args.IN); }
  convert(args) {
    let i = Scratch.Cast.toNumber(args.IN);
    args.FORMAT = args.FORMAT.toNumber();
    let rel = { 16:"0x", 10:"", 8:"0o", 2:"0b" };
    const f = "0123456789abcdef";
    let o = "";
    if (i==0) o = "0";
    while(i!=0){
      console.log(i);
      console.log(args.FORMAT);
      o += f.charAt(i%args.FORMAT);
      i=Math.floor(i/args.FORMAT);
    }
    return ( rel[args.FORMAT] + o.split('').reverse().join('') );
  }
}

Scratch.extensions.register(new HelloWorld());
