import {
  faArrowUp,
  faBank,
  faBullseye,
  faCircleQuestion,
  faCoffee,
  faHamburger,
  faHouse,
  faShirt,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

import { faAmazon, faApple, faPaypal } from '@fortawesome/free-brands-svg-icons'

export function getTransactionIcon(iconName?: string): IconDefinition {
  if (!iconName) {
    return faCircleQuestion
  }
  return translationsIconMap[iconName] || faCircleQuestion
}


export const translationsIconMap: Record<string, IconDefinition> = {
  ikea: faHouse,
  bank: faBank,
  target: faBullseye,
  paypal: faPaypal,
  starbucks: faCoffee,
  topup: faArrowUp,
  mcdonalds: faHamburger,
  zara: faShirt,
  amazon: faAmazon,
  apple: faApple,
}
