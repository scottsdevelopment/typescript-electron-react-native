export const isElectron : boolean = (typeof document !== 'undefined');
export const isReactNative : boolean = (typeof navigator !== 'undefined' && navigator.product === 'ReactNative');