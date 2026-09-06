export type PropsForm<K> = K & {
  onChange: <T extends keyof K>(field: T, value: K[T]) => void;
};