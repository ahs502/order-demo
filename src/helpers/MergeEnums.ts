type MergeEnums<E> = {
  [K1 in keyof E]: {
    [K2 in keyof E[K1]]: E[K1][K2];
  }[keyof E[K1]];
}[keyof E];

export default MergeEnums;
