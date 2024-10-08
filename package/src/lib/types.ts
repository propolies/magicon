type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false
type ExtractIcon<T> = IsAny<T> extends true
? never
: T

// @ts-expect-error "Type is imported"
export type Icons = ExtractIcon<typeof globalThis.CustomIcons> | ExtractIcon<typeof globalThis.HeroIcons> | ExtractIcon<typeof globalThis.LucideIcons>