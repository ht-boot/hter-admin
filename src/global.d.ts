type ObjectToKeyValueOfArray<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    meta: IMeta;
    children?: MenuOptions[];
    component?: string | (() => Promise<unknown>) | undefined;
  }
  interface IMeta {
    icon: string;
    title: string;
    isFullScreen: boolean;
    isHide: boolean;
    isKeepAlive: boolean;
    [key: string]: any;
  }
}

type AssemblySizeType = "default" | "small" | "large";

declare namespace Request {
  interface LoginResult {
    token: string;
    userInfo: PiniaStoreType.UserInfo;
  }

  interface UserInfo {
    id: number;
    imageUrl: string;
    phone: string;
    username: string;
    email: string;
    create_time: string;
  }
}

declare namespace PiniaStoreType {
  interface StoreUserState {
    token: string;
    userInfo: UserInfo | {};
  }

  interface StoreAuthState {
    menuList: Menu.MenuOptions[];
  }
}
