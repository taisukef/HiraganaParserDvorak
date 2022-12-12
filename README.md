# dovraker's KEY_CONFIGS for HiragaraParser

```JavaScript
import { HiraganaParser } from "https://packages.obake.land/hiragana-parser/index.min.js";
import { KEY_CONFIGS } from "https://taisukef.github.io/HiraganaParserDvorak/KEY_CONFIGS.js";

const parser = new HiraganaParser({ hiraganas: 'きんにく', configs: KEY_CONFIGS })
console.log(parser.input('c'))
console.log(parser.input('n'))
console.log(parser.input('i'))
console.log(parser.isComplete())
console.log(parser.inputedRoma)
console.log(parser.notInputedRoma)
```

## HiraganaParser

- [ひらがなをローマ字に変換するよ HiraganaParser](https://github.com/2ndPINEW/HiraganaParser)
