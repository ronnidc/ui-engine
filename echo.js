const args = process.argv;    
const mssg = args[2];

const opts = [
  '-s', '--set',
  '-b', '--bg-color',
  '-f', '--font-color'];

function excapeAnsiCode(code) {
  return '\x1b[' + code + 'm';
}

const ansiStyles = opts.map(function (opt) {
  return args.indexOf(opt) > -1
      ? excapeAnsiCode(args[args.indexOf(opt) +1])
      : '';
});

console.log('%s%s%s', ansiStyles.join(''), mssg, '\x1b[0m');

/*
┌─────────────────────────┐
│ Code  Font Color        │
├─────────────────────────┤
│  39   Default           │
│  30   Black             │
│  31   Red               │
│  32   Green             │
│  33   Yellow            │
│  34   Blue              │
│  35   Magenta           │
│  36   Cyan              │
│  37   Light Gray        │
│  90   Dark Gray         │
│  91   Light Red         │
│  92   Light Green       │
│  93   Light Yellow      │
│  94   Light Blue        │
│  95   Light Magenta     │
│  96   Light Cyan        │
│  97   White Cyan        │
└─────────────────────────┘
┌─────────────────────────┐
│ Code  Background Color  │
├─────────────────────────┤
│  49   Default           │
│  40   Black             │
│  41   Red               │
│  42   Green             │
│  43   Yellow            │
│  44   Blue              │
│  45   Magenta           │
│  46   Cyan              │
│  47   Light Gray        │
│  100  Dark Gray         │
│  101  Light Red         │
│  102  Light Green       │
│  103  Light Yellow      │
│  104  Light Blue        │
│  105  Light Magenta     │
│  106  Light Cyan        │
│  107  White Cyan        │
└─────────────────────────┘
https://stackoverflow.com/a/50275198/1139704
*/