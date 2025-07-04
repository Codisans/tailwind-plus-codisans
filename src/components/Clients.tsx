import codisansLogo from '@/images/codisans-logo-solid.svg'
import { LogoCardsBlock } from '@/blocks/LogoCardsBlock'

const clientList = [
  { name: 'Phobia', logo: codisansLogo },
  { name: 'Family Fund', logo: codisansLogo },
  { name: 'Unseal', logo: codisansLogo },
  { name: 'Mail Smirk', logo: codisansLogo },
  { name: 'Home Work', logo: codisansLogo },
  { name: 'Green Life', logo: codisansLogo },
  { name: 'Bright Path', logo: codisansLogo },
  { name: 'North Adventures', logo: codisansLogo },
]

export const Clients = () => {
  return <LogoCardsBlock title="You’re in good company" items={clientList} />
}
