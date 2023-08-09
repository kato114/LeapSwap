import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Leap',
  description: 'Leap',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Leap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Leap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Leap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Leap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Leap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Leap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Leap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Leap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Leap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Leap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Leap')}`,
      }
    default:
      return null
  }
}
