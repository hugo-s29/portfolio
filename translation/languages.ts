import en from './en'
import fr from './fr'
import Language from './lang'

interface languagesDefinition {
  code: string
  lang: Language
}

const languages: languagesDefinition[] = [{ code: 'en', lang: en }, { code: 'fr', lang: fr }]

export default languages
