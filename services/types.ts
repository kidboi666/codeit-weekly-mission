export interface MockUserData {
  id: number;
  name: string;
  owner: Owner;
  links: FolderLink[];
  count: number;
}

export interface UserData {
  id: number;
  createdAt: string;
  name: string;
  imageSource: string;
  email: string;
  authId: string;
}

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface FolderLink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface FolderList {
  id: number;
  createdAt: string;
  name: string;
  userId: number;
  favorite: boolean;
  link: Link;
}

export interface Link {
  count: number;
}
