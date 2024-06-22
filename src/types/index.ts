export interface MockUserData {
  id: number
  name: string
  owner: Owner
  links: Link[]
  count: number
}

export interface UserData {
  id: number
  createdAt: string
  name: string
  imageSource: string
  email: string
  authId: string
}

export interface Owner {
  id: number
  name: string
  profileImageSource: string
}

export interface Link {
  id: number
  url: string
  title: string
  imageSource: string
  description: string
  createdAt: string
  updatedAt?: string
  folderId?: number
}

export interface FolderList {
  id: number
  createdAt: string
  name: string
  userId: number
  favorite: boolean
  link: LinkCount
}

export interface LinkCount {
  count: number
}

export interface SharedFolder {
  id: number
  createdAt: string
  name: string
  userId: number
  favorite: boolean
}

export interface Paper {
  id: number
  name: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  background: string
  v: number
}
