type ObjectToKeyValueOfArray<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    meta: IMeta;
    children?: MenuOptions[];
    component?: string | (() => Promise<unknown>);
  }
  interface IMeta {
    icon: string;
    title: string;
  }
}