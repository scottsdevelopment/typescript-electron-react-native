export const isElectron = () : boolean => {
    return (typeof document !== 'undefined');
}

export const isReactNative = () : boolean => {
    return (typeof navigator !== 'undefined' && navigator.product === 'ReactNative');
}