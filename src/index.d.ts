type StoreUpdateArgs = { prevStore: any; store: any };

export function logger(storeValues: StoreUpdateArgs, name: string): void;

export function namedLogger(
  name: string
): (storeValues: StoreUpdateArgs) => void;
