import { ReactNode } from 'react'
import AccountInfo from './DropDownContents/AccountInfo'
import EditCard, { EditCardProps } from './DropDownContents/EditCard'

export type DropDownType = 'accountInfo' | 'editCard'

export const DROPDOWN_COMPONENTS: Map<DropDownType, (props?: any) => ReactNode> = new Map<
  DropDownType,
  (props?: any) => ReactNode
>([
  ['accountInfo', (props) => <AccountInfo key="accountInfo" {...props} />],
  ['editCard', (props: EditCardProps) => <EditCard key="editCard" {...props} />],
])
