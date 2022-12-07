# dovraker's KEY_CONFIGS for HiragaraParser

```JavaScript
import { GameParser } from "https://taisukef.github.io/HiraganaParser/lib/esm/index.js";
import { KEY_CONFIGS } from "https://taisukef.github.io/HiraganaParserDvorak/KEY_CONFIGS.js";

const parser = new GameParser({ hiraganas: 'きんにく', configs: KEY_CONFIGS })
console.log(parser.input('c'))
console.log(parser.input('n'))
console.log(parser.input('i'))
console.log(parser.isComplete())
console.log(parser.inputedRoma)
console.log(parser.notInputedRoma)
```
