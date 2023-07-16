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
    isKeepAlive?: boolean;
    [key: string]: any;
  }
}

type AssemblySizeType = "default" | "small" | "large";

declare namespace Request {
  interface LoginResult {
    token: string;
    username: string;
  }
}

declare namespace PiniaStoreType {
  interface StoreUserState {
    token: string;
    username: string;
  }

  interface StoreAuthState {
    menuList: Menu.MenuOptions[];
  }
}
