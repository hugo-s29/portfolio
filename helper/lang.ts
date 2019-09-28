import languages from '../translation/languages'
import Language from '../translation/lang'
import { DocumentContext } from 'next/document'
import en from '../translation/en'
import languageParser from 'accept-language-parser'

export default function getLang(ctx: DocumentContext) {
  let lang: Language = en
  let langQuality: number = 0
  if (ctx.req && ctx.req.headers['accept-language']) {
    const acceptedLanguages = languageParser.parse(ctx.req.headers['accept-language'])
    for (let { code, quality } of acceptedLanguages) {
      const acceptedLanguage = languages.find(l => l.code == code)
      if (acceptedLanguage && quality >= langQuality) {
        lang = acceptedLanguage.lang
        langQuality = quality
      }
    }
  }
  return lang
}
