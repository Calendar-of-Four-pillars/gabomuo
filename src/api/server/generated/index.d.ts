
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Account
 * 
 */
export type Account = {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string | null
  email: string
  image: string | null
  gender: string | null
  birth_year: number | null
  birth_month: number | null
  birth_day: number | null
  birth_hour: number | null
  birth_minute: number | null
  is_moon: boolean | null
  doubled: boolean | null
  region: string | null
  saju_year_code: number | null
  saju_month_code: number | null
  saju_day_code: number | null
  saju_time_code: number | null
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sessionToken: string
  userId: string
  expires: Date
}

/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = {
  identifier: string
  token: string
  expires: Date
}

/**
 * Model Calendar
 * 
 */
export type Calendar = {
  id: string
  userId: string
  key: string
  emotion: string
  title: string
  content: string
}

/**
 * Model Friend
 * 
 */
export type Friend = {
  id: string
  userId: string
  name: string
  gender: string
  birth_year: number
  birth_month: number
  birth_day: number
  birth_hour: number
  birth_minute: number
  is_moon: boolean
  doubled: boolean
  region: string
  saju_year_code: number
  saju_month_code: number
  saju_day_code: number
  saju_time_code: number
}

/**
 * Model SeasonYear
 * 
 */
export type SeasonYear = {
  id: number
  year: string
  seasontime: Prisma.JsonValue
}

/**
 * Model SajuDate
 * 
 */
export type SajuDate = {
  id: number
  datekey: string
  info: Prisma.JsonValue
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<GlobalReject>;

  /**
   * `prisma.calendar`: Exposes CRUD operations for the **Calendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendars
    * const calendars = await prisma.calendar.findMany()
    * ```
    */
  get calendar(): Prisma.CalendarDelegate<GlobalReject>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<GlobalReject>;

  /**
   * `prisma.seasonYear`: Exposes CRUD operations for the **SeasonYear** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeasonYears
    * const seasonYears = await prisma.seasonYear.findMany()
    * ```
    */
  get seasonYear(): Prisma.SeasonYearDelegate<GlobalReject>;

  /**
   * `prisma.sajuDate`: Exposes CRUD operations for the **SajuDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SajuDates
    * const sajuDates = await prisma.sajuDate.findMany()
    * ```
    */
  get sajuDate(): Prisma.SajuDateDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    User: 'User',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Calendar: 'Calendar',
    Friend: 'Friend',
    SeasonYear: 'SeasonYear',
    SajuDate: 'SajuDate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    friends: number
    calendars: number
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect = {
    friends?: boolean
    calendars?: boolean
    accounts?: boolean
    sessions?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CalendarCountOutputType
   */


  export type CalendarCountOutputType = {
    friends: number
  }

  export type CalendarCountOutputTypeSelect = {
    friends?: boolean
  }

  export type CalendarCountOutputTypeGetPayload<S extends boolean | null | undefined | CalendarCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CalendarCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CalendarCountOutputTypeArgs)
    ? CalendarCountOutputType 
    : S extends { select: any } & (CalendarCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CalendarCountOutputType ? CalendarCountOutputType[P] : never
  } 
      : CalendarCountOutputType




  // Custom InputTypes

  /**
   * CalendarCountOutputType without action
   */
  export type CalendarCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CalendarCountOutputType
     */
    select?: CalendarCountOutputTypeSelect | null
  }



  /**
   * Count Type FriendCountOutputType
   */


  export type FriendCountOutputType = {
    calendars: number
  }

  export type FriendCountOutputTypeSelect = {
    calendars?: boolean
  }

  export type FriendCountOutputTypeGetPayload<S extends boolean | null | undefined | FriendCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FriendCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FriendCountOutputTypeArgs)
    ? FriendCountOutputType 
    : S extends { select: any } & (FriendCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FriendCountOutputType ? FriendCountOutputType[P] : never
  } 
      : FriendCountOutputType




  // Custom InputTypes

  /**
   * FriendCountOutputType without action
   */
  export type FriendCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FriendCountOutputType
     */
    select?: FriendCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: AccountScalarFieldEnum[]
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserArgs
  }


  export type AccountInclude = {
    user?: boolean | UserArgs
  }

  export type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Account :
    S extends undefined ? never :
    S extends { include: any } & (AccountArgs | AccountFindManyArgs)
    ? Account  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountArgs | AccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
      : Account


  type AccountCountArgs = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): Prisma.PrismaPromise<Array<AccountGetPayload<T>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     */
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    birth_year: number | null
    birth_month: number | null
    birth_day: number | null
    birth_hour: number | null
    birth_minute: number | null
    saju_year_code: number | null
    saju_month_code: number | null
    saju_day_code: number | null
    saju_time_code: number | null
  }

  export type UserSumAggregateOutputType = {
    birth_year: number | null
    birth_month: number | null
    birth_day: number | null
    birth_hour: number | null
    birth_minute: number | null
    saju_year_code: number | null
    saju_month_code: number | null
    saju_day_code: number | null
    saju_time_code: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    gender: string | null
    birth_year: number | null
    birth_month: number | null
    birth_day: number | null
    birth_hour: number | null
    birth_minute: number | null
    is_moon: boolean | null
    doubled: boolean | null
    region: string | null
    saju_year_code: number | null
    saju_month_code: number | null
    saju_day_code: number | null
    saju_time_code: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    gender: string | null
    birth_year: number | null
    birth_month: number | null
    birth_day: number | null
    birth_hour: number | null
    birth_minute: number | null
    is_moon: boolean | null
    doubled: boolean | null
    region: string | null
    saju_year_code: number | null
    saju_month_code: number | null
    saju_day_code: number | null
    saju_time_code: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    gender: number
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: number
    doubled: number
    region: number
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
  }

  export type UserSumAggregateInputType = {
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    gender?: true
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    is_moon?: true
    doubled?: true
    region?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    gender?: true
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    is_moon?: true
    doubled?: true
    region?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    gender?: true
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    is_moon?: true
    doubled?: true
    region?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    image: string | null
    gender: string | null
    birth_year: number | null
    birth_month: number | null
    birth_day: number | null
    birth_hour: number | null
    birth_minute: number | null
    is_moon: boolean | null
    doubled: boolean | null
    region: string | null
    saju_year_code: number | null
    saju_month_code: number | null
    saju_day_code: number | null
    saju_time_code: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    gender?: boolean
    birth_year?: boolean
    birth_month?: boolean
    birth_day?: boolean
    birth_hour?: boolean
    birth_minute?: boolean
    is_moon?: boolean
    doubled?: boolean
    region?: boolean
    saju_year_code?: boolean
    saju_month_code?: boolean
    saju_day_code?: boolean
    saju_time_code?: boolean
    friends?: boolean | User$friendsArgs
    calendars?: boolean | User$calendarsArgs
    accounts?: boolean | User$accountsArgs
    sessions?: boolean | User$sessionsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    friends?: boolean | User$friendsArgs
    calendars?: boolean | User$calendarsArgs
    accounts?: boolean | User$accountsArgs
    sessions?: boolean | User$sessionsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'friends' ? Array < FriendGetPayload<S['include'][P]>>  :
        P extends 'calendars' ? Array < CalendarGetPayload<S['include'][P]>>  :
        P extends 'accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'friends' ? Array < FriendGetPayload<S['select'][P]>>  :
        P extends 'calendars' ? Array < CalendarGetPayload<S['select'][P]>>  :
        P extends 'accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    friends<T extends User$friendsArgs= {}>(args?: Subset<T, User$friendsArgs>): Prisma.PrismaPromise<Array<FriendGetPayload<T>>| Null>;

    calendars<T extends User$calendarsArgs= {}>(args?: Subset<T, User$calendarsArgs>): Prisma.PrismaPromise<Array<CalendarGetPayload<T>>| Null>;

    accounts<T extends User$accountsArgs= {}>(args?: Subset<T, User$accountsArgs>): Prisma.PrismaPromise<Array<AccountGetPayload<T>>| Null>;

    sessions<T extends User$sessionsArgs= {}>(args?: Subset<T, User$sessionsArgs>): Prisma.PrismaPromise<Array<SessionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.friends
   */
  export type User$friendsArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    where?: FriendWhereInput
    orderBy?: Enumerable<FriendOrderByWithRelationInput>
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FriendScalarFieldEnum>
  }


  /**
   * User.calendars
   */
  export type User$calendarsArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    where?: CalendarWhereInput
    orderBy?: Enumerable<CalendarOrderByWithRelationInput>
    cursor?: CalendarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CalendarScalarFieldEnum>
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: SessionScalarFieldEnum[]
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserArgs
  }


  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Session :
    S extends undefined ? never :
    S extends { include: any } & (SessionArgs | SessionFindManyArgs)
    ? Session  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SessionArgs | SessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Session ? Session[P] : never
  } 
      : Session


  type SessionCountArgs = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): Prisma.PrismaPromise<Array<SessionGetPayload<T>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     */
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
  }



  /**
   * Model VerificationToken
   */


  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs = {
    where?: VerificationTokenWhereInput
    orderBy?: Enumerable<VerificationTokenOrderByWithAggregationInput>
    by: VerificationTokenScalarFieldEnum[]
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }


  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VerificationToken :
    S extends undefined ? never :
    S extends { include: any } & (VerificationTokenArgs | VerificationTokenFindManyArgs)
    ? VerificationToken 
    : S extends { select: any } & (VerificationTokenArgs | VerificationTokenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VerificationToken ? VerificationToken[P] : never
  } 
      : VerificationToken


  type VerificationTokenCountArgs = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VerificationToken'> extends True ? Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>> : Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null, null>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VerificationToken'> extends True ? Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>> : Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null, null>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs>
    ): Prisma.PrismaPromise<Array<VerificationTokenGetPayload<T>>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationTokenClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VerificationToken base type for findUnique actions
   */
  export type VerificationTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUnique
   */
  export interface VerificationTokenFindUniqueArgs extends VerificationTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken base type for findFirst actions
   */
  export type VerificationTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }

  /**
   * VerificationToken findFirst
   */
  export interface VerificationTokenFindFirstArgs extends VerificationTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: Enumerable<VerificationTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
  }



  /**
   * Model Calendar
   */


  export type AggregateCalendar = {
    _count: CalendarCountAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  export type CalendarMinAggregateOutputType = {
    id: string | null
    userId: string | null
    key: string | null
    emotion: string | null
    title: string | null
    content: string | null
  }

  export type CalendarMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    key: string | null
    emotion: string | null
    title: string | null
    content: string | null
  }

  export type CalendarCountAggregateOutputType = {
    id: number
    userId: number
    key: number
    emotion: number
    title: number
    content: number
    _all: number
  }


  export type CalendarMinAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    emotion?: true
    title?: true
    content?: true
  }

  export type CalendarMaxAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    emotion?: true
    title?: true
    content?: true
  }

  export type CalendarCountAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    emotion?: true
    title?: true
    content?: true
    _all?: true
  }

  export type CalendarAggregateArgs = {
    /**
     * Filter which Calendar to aggregate.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: Enumerable<CalendarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calendars
    **/
    _count?: true | CalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarMaxAggregateInputType
  }

  export type GetCalendarAggregateType<T extends CalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendar[P]>
      : GetScalarType<T[P], AggregateCalendar[P]>
  }




  export type CalendarGroupByArgs = {
    where?: CalendarWhereInput
    orderBy?: Enumerable<CalendarOrderByWithAggregationInput>
    by: CalendarScalarFieldEnum[]
    having?: CalendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarCountAggregateInputType | true
    _min?: CalendarMinAggregateInputType
    _max?: CalendarMaxAggregateInputType
  }


  export type CalendarGroupByOutputType = {
    id: string
    userId: string
    key: string
    emotion: string
    title: string
    content: string
    _count: CalendarCountAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  type GetCalendarGroupByPayload<T extends CalendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarGroupByOutputType[P]>
        }
      >
    >


  export type CalendarSelect = {
    id?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    key?: boolean
    emotion?: boolean
    title?: boolean
    content?: boolean
    friends?: boolean | Calendar$friendsArgs
    _count?: boolean | CalendarCountOutputTypeArgs
  }


  export type CalendarInclude = {
    user?: boolean | UserArgs
    friends?: boolean | Calendar$friendsArgs
    _count?: boolean | CalendarCountOutputTypeArgs
  }

  export type CalendarGetPayload<S extends boolean | null | undefined | CalendarArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Calendar :
    S extends undefined ? never :
    S extends { include: any } & (CalendarArgs | CalendarFindManyArgs)
    ? Calendar  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'friends' ? Array < FriendGetPayload<S['include'][P]>>  :
        P extends '_count' ? CalendarCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CalendarArgs | CalendarFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'friends' ? Array < FriendGetPayload<S['select'][P]>>  :
        P extends '_count' ? CalendarCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Calendar ? Calendar[P] : never
  } 
      : Calendar


  type CalendarCountArgs = 
    Omit<CalendarFindManyArgs, 'select' | 'include'> & {
      select?: CalendarCountAggregateInputType | true
    }

  export interface CalendarDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Calendar that matches the filter.
     * @param {CalendarFindUniqueArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CalendarFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CalendarFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Calendar'> extends True ? Prisma__CalendarClient<CalendarGetPayload<T>> : Prisma__CalendarClient<CalendarGetPayload<T> | null, null>

    /**
     * Find one Calendar that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CalendarFindUniqueOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CalendarFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CalendarFindUniqueOrThrowArgs>
    ): Prisma__CalendarClient<CalendarGetPayload<T>>

    /**
     * Find the first Calendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CalendarFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CalendarFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Calendar'> extends True ? Prisma__CalendarClient<CalendarGetPayload<T>> : Prisma__CalendarClient<CalendarGetPayload<T> | null, null>

    /**
     * Find the first Calendar that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CalendarFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CalendarFindFirstOrThrowArgs>
    ): Prisma__CalendarClient<CalendarGetPayload<T>>

    /**
     * Find zero or more Calendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendars
     * const calendars = await prisma.calendar.findMany()
     * 
     * // Get first 10 Calendars
     * const calendars = await prisma.calendar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarWithIdOnly = await prisma.calendar.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CalendarFindManyArgs>(
      args?: SelectSubset<T, CalendarFindManyArgs>
    ): Prisma.PrismaPromise<Array<CalendarGetPayload<T>>>

    /**
     * Create a Calendar.
     * @param {CalendarCreateArgs} args - Arguments to create a Calendar.
     * @example
     * // Create one Calendar
     * const Calendar = await prisma.calendar.create({
     *   data: {
     *     // ... data to create a Calendar
     *   }
     * })
     * 
    **/
    create<T extends CalendarCreateArgs>(
      args: SelectSubset<T, CalendarCreateArgs>
    ): Prisma__CalendarClient<CalendarGetPayload<T>>

    /**
     * Create many Calendars.
     *     @param {CalendarCreateManyArgs} args - Arguments to create many Calendars.
     *     @example
     *     // Create many Calendars
     *     const calendar = await prisma.calendar.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CalendarCreateManyArgs>(
      args?: SelectSubset<T, CalendarCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Calendar.
     * @param {CalendarDeleteArgs} args - Arguments to delete one Calendar.
     * @example
     * // Delete one Calendar
     * const Calendar = await prisma.calendar.delete({
     *   where: {
     *     // ... filter to delete one Calendar
     *   }
     * })
     * 
    **/
    delete<T extends CalendarDeleteArgs>(
      args: SelectSubset<T, CalendarDeleteArgs>
    ): Prisma__CalendarClient<CalendarGetPayload<T>>

    /**
     * Update one Calendar.
     * @param {CalendarUpdateArgs} args - Arguments to update one Calendar.
     * @example
     * // Update one Calendar
     * const calendar = await prisma.calendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CalendarUpdateArgs>(
      args: SelectSubset<T, CalendarUpdateArgs>
    ): Prisma__CalendarClient<CalendarGetPayload<T>>

    /**
     * Delete zero or more Calendars.
     * @param {CalendarDeleteManyArgs} args - Arguments to filter Calendars to delete.
     * @example
     * // Delete a few Calendars
     * const { count } = await prisma.calendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CalendarDeleteManyArgs>(
      args?: SelectSubset<T, CalendarDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendars
     * const calendar = await prisma.calendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CalendarUpdateManyArgs>(
      args: SelectSubset<T, CalendarUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Calendar.
     * @param {CalendarUpsertArgs} args - Arguments to update or create a Calendar.
     * @example
     * // Update or create a Calendar
     * const calendar = await prisma.calendar.upsert({
     *   create: {
     *     // ... data to create a Calendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendar we want to update
     *   }
     * })
    **/
    upsert<T extends CalendarUpsertArgs>(
      args: SelectSubset<T, CalendarUpsertArgs>
    ): Prisma__CalendarClient<CalendarGetPayload<T>>

    /**
     * Count the number of Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarCountArgs} args - Arguments to filter Calendars to count.
     * @example
     * // Count the number of Calendars
     * const count = await prisma.calendar.count({
     *   where: {
     *     // ... the filter for the Calendars we want to count
     *   }
     * })
    **/
    count<T extends CalendarCountArgs>(
      args?: Subset<T, CalendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarAggregateArgs>(args: Subset<T, CalendarAggregateArgs>): Prisma.PrismaPromise<GetCalendarAggregateType<T>>

    /**
     * Group by Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarGroupByArgs['orderBy'] }
        : { orderBy?: CalendarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Calendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CalendarClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    friends<T extends Calendar$friendsArgs= {}>(args?: Subset<T, Calendar$friendsArgs>): Prisma.PrismaPromise<Array<FriendGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Calendar base type for findUnique actions
   */
  export type CalendarFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar findUnique
   */
  export interface CalendarFindUniqueArgs extends CalendarFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Calendar findUniqueOrThrow
   */
  export type CalendarFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }


  /**
   * Calendar base type for findFirst actions
   */
  export type CalendarFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: Enumerable<CalendarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: Enumerable<CalendarScalarFieldEnum>
  }

  /**
   * Calendar findFirst
   */
  export interface CalendarFindFirstArgs extends CalendarFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Calendar findFirstOrThrow
   */
  export type CalendarFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: Enumerable<CalendarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: Enumerable<CalendarScalarFieldEnum>
  }


  /**
   * Calendar findMany
   */
  export type CalendarFindManyArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    /**
     * Filter, which Calendars to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: Enumerable<CalendarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    distinct?: Enumerable<CalendarScalarFieldEnum>
  }


  /**
   * Calendar create
   */
  export type CalendarCreateArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    /**
     * The data needed to create a Calendar.
     */
    data: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
  }


  /**
   * Calendar createMany
   */
  export type CalendarCreateManyArgs = {
    /**
     * The data used to create many Calendars.
     */
    data: Enumerable<CalendarCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Calendar update
   */
  export type CalendarUpdateArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    /**
     * The data needed to update a Calendar.
     */
    data: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
    /**
     * Choose, which Calendar to update.
     */
    where: CalendarWhereUniqueInput
  }


  /**
   * Calendar updateMany
   */
  export type CalendarUpdateManyArgs = {
    /**
     * The data used to update Calendars.
     */
    data: XOR<CalendarUpdateManyMutationInput, CalendarUncheckedUpdateManyInput>
    /**
     * Filter which Calendars to update
     */
    where?: CalendarWhereInput
  }


  /**
   * Calendar upsert
   */
  export type CalendarUpsertArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    /**
     * The filter to search for the Calendar to update in case it exists.
     */
    where: CalendarWhereUniqueInput
    /**
     * In case the Calendar found by the `where` argument doesn't exist, create a new Calendar with this data.
     */
    create: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
    /**
     * In case the Calendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
  }


  /**
   * Calendar delete
   */
  export type CalendarDeleteArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    /**
     * Filter which Calendar to delete.
     */
    where: CalendarWhereUniqueInput
  }


  /**
   * Calendar deleteMany
   */
  export type CalendarDeleteManyArgs = {
    /**
     * Filter which Calendars to delete
     */
    where?: CalendarWhereInput
  }


  /**
   * Calendar.friends
   */
  export type Calendar$friendsArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    where?: FriendWhereInput
    orderBy?: Enumerable<FriendOrderByWithRelationInput>
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FriendScalarFieldEnum>
  }


  /**
   * Calendar without action
   */
  export type CalendarArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
  }



  /**
   * Model Friend
   */


  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendAvgAggregateOutputType = {
    birth_year: number | null
    birth_month: number | null
    birth_day: number | null
    birth_hour: number | null
    birth_minute: number | null
    saju_year_code: number | null
    saju_month_code: number | null
    saju_day_code: number | null
    saju_time_code: number | null
  }

  export type FriendSumAggregateOutputType = {
    birth_year: number | null
    birth_month: number | null
    birth_day: number | null
    birth_hour: number | null
    birth_minute: number | null
    saju_year_code: number | null
    saju_month_code: number | null
    saju_day_code: number | null
    saju_time_code: number | null
  }

  export type FriendMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    gender: string | null
    birth_year: number | null
    birth_month: number | null
    birth_day: number | null
    birth_hour: number | null
    birth_minute: number | null
    is_moon: boolean | null
    doubled: boolean | null
    region: string | null
    saju_year_code: number | null
    saju_month_code: number | null
    saju_day_code: number | null
    saju_time_code: number | null
  }

  export type FriendMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    gender: string | null
    birth_year: number | null
    birth_month: number | null
    birth_day: number | null
    birth_hour: number | null
    birth_minute: number | null
    is_moon: boolean | null
    doubled: boolean | null
    region: string | null
    saju_year_code: number | null
    saju_month_code: number | null
    saju_day_code: number | null
    saju_time_code: number | null
  }

  export type FriendCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    gender: number
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: number
    doubled: number
    region: number
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
    _all: number
  }


  export type FriendAvgAggregateInputType = {
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
  }

  export type FriendSumAggregateInputType = {
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
  }

  export type FriendMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    gender?: true
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    is_moon?: true
    doubled?: true
    region?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
  }

  export type FriendMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    gender?: true
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    is_moon?: true
    doubled?: true
    region?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
  }

  export type FriendCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    gender?: true
    birth_year?: true
    birth_month?: true
    birth_day?: true
    birth_hour?: true
    birth_minute?: true
    is_moon?: true
    doubled?: true
    region?: true
    saju_year_code?: true
    saju_month_code?: true
    saju_day_code?: true
    saju_time_code?: true
    _all?: true
  }

  export type FriendAggregateArgs = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: Enumerable<FriendOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs = {
    where?: FriendWhereInput
    orderBy?: Enumerable<FriendOrderByWithAggregationInput>
    by: FriendScalarFieldEnum[]
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _avg?: FriendAvgAggregateInputType
    _sum?: FriendSumAggregateInputType
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }


  export type FriendGroupByOutputType = {
    id: string
    userId: string
    name: string
    gender: string
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: boolean
    doubled: boolean
    region: string
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect = {
    id?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    calendars?: boolean | Friend$calendarsArgs
    name?: boolean
    gender?: boolean
    birth_year?: boolean
    birth_month?: boolean
    birth_day?: boolean
    birth_hour?: boolean
    birth_minute?: boolean
    is_moon?: boolean
    doubled?: boolean
    region?: boolean
    saju_year_code?: boolean
    saju_month_code?: boolean
    saju_day_code?: boolean
    saju_time_code?: boolean
    _count?: boolean | FriendCountOutputTypeArgs
  }


  export type FriendInclude = {
    user?: boolean | UserArgs
    calendars?: boolean | Friend$calendarsArgs
    _count?: boolean | FriendCountOutputTypeArgs
  }

  export type FriendGetPayload<S extends boolean | null | undefined | FriendArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Friend :
    S extends undefined ? never :
    S extends { include: any } & (FriendArgs | FriendFindManyArgs)
    ? Friend  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'calendars' ? Array < CalendarGetPayload<S['include'][P]>>  :
        P extends '_count' ? FriendCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FriendArgs | FriendFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'calendars' ? Array < CalendarGetPayload<S['select'][P]>>  :
        P extends '_count' ? FriendCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Friend ? Friend[P] : never
  } 
      : Friend


  type FriendCountArgs = 
    Omit<FriendFindManyArgs, 'select' | 'include'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FriendFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FriendFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Friend'> extends True ? Prisma__FriendClient<FriendGetPayload<T>> : Prisma__FriendClient<FriendGetPayload<T> | null, null>

    /**
     * Find one Friend that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FriendFindUniqueOrThrowArgs>
    ): Prisma__FriendClient<FriendGetPayload<T>>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FriendFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FriendFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Friend'> extends True ? Prisma__FriendClient<FriendGetPayload<T>> : Prisma__FriendClient<FriendGetPayload<T> | null, null>

    /**
     * Find the first Friend that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FriendFindFirstOrThrowArgs>
    ): Prisma__FriendClient<FriendGetPayload<T>>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendWithIdOnly = await prisma.friend.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FriendFindManyArgs>(
      args?: SelectSubset<T, FriendFindManyArgs>
    ): Prisma.PrismaPromise<Array<FriendGetPayload<T>>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
    **/
    create<T extends FriendCreateArgs>(
      args: SelectSubset<T, FriendCreateArgs>
    ): Prisma__FriendClient<FriendGetPayload<T>>

    /**
     * Create many Friends.
     *     @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     *     @example
     *     // Create many Friends
     *     const friend = await prisma.friend.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FriendCreateManyArgs>(
      args?: SelectSubset<T, FriendCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
    **/
    delete<T extends FriendDeleteArgs>(
      args: SelectSubset<T, FriendDeleteArgs>
    ): Prisma__FriendClient<FriendGetPayload<T>>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FriendUpdateArgs>(
      args: SelectSubset<T, FriendUpdateArgs>
    ): Prisma__FriendClient<FriendGetPayload<T>>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FriendDeleteManyArgs>(
      args?: SelectSubset<T, FriendDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FriendUpdateManyArgs>(
      args: SelectSubset<T, FriendUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
    **/
    upsert<T extends FriendUpsertArgs>(
      args: SelectSubset<T, FriendUpsertArgs>
    ): Prisma__FriendClient<FriendGetPayload<T>>

    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FriendClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    calendars<T extends Friend$calendarsArgs= {}>(args?: Subset<T, Friend$calendarsArgs>): Prisma.PrismaPromise<Array<CalendarGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Friend base type for findUnique actions
   */
  export type FriendFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findUnique
   */
  export interface FriendFindUniqueArgs extends FriendFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }


  /**
   * Friend base type for findFirst actions
   */
  export type FriendFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: Enumerable<FriendOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: Enumerable<FriendScalarFieldEnum>
  }

  /**
   * Friend findFirst
   */
  export interface FriendFindFirstArgs extends FriendFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: Enumerable<FriendOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: Enumerable<FriendScalarFieldEnum>
  }


  /**
   * Friend findMany
   */
  export type FriendFindManyArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: Enumerable<FriendOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: Enumerable<FriendScalarFieldEnum>
  }


  /**
   * Friend create
   */
  export type FriendCreateArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }


  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs = {
    /**
     * The data used to create many Friends.
     */
    data: Enumerable<FriendCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Friend update
   */
  export type FriendUpdateArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }


  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
  }


  /**
   * Friend upsert
   */
  export type FriendUpsertArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }


  /**
   * Friend delete
   */
  export type FriendDeleteArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }


  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
  }


  /**
   * Friend.calendars
   */
  export type Friend$calendarsArgs = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CalendarInclude | null
    where?: CalendarWhereInput
    orderBy?: Enumerable<CalendarOrderByWithRelationInput>
    cursor?: CalendarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CalendarScalarFieldEnum>
  }


  /**
   * Friend without action
   */
  export type FriendArgs = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude | null
  }



  /**
   * Model SeasonYear
   */


  export type AggregateSeasonYear = {
    _count: SeasonYearCountAggregateOutputType | null
    _avg: SeasonYearAvgAggregateOutputType | null
    _sum: SeasonYearSumAggregateOutputType | null
    _min: SeasonYearMinAggregateOutputType | null
    _max: SeasonYearMaxAggregateOutputType | null
  }

  export type SeasonYearAvgAggregateOutputType = {
    id: number | null
  }

  export type SeasonYearSumAggregateOutputType = {
    id: number | null
  }

  export type SeasonYearMinAggregateOutputType = {
    id: number | null
    year: string | null
  }

  export type SeasonYearMaxAggregateOutputType = {
    id: number | null
    year: string | null
  }

  export type SeasonYearCountAggregateOutputType = {
    id: number
    year: number
    seasontime: number
    _all: number
  }


  export type SeasonYearAvgAggregateInputType = {
    id?: true
  }

  export type SeasonYearSumAggregateInputType = {
    id?: true
  }

  export type SeasonYearMinAggregateInputType = {
    id?: true
    year?: true
  }

  export type SeasonYearMaxAggregateInputType = {
    id?: true
    year?: true
  }

  export type SeasonYearCountAggregateInputType = {
    id?: true
    year?: true
    seasontime?: true
    _all?: true
  }

  export type SeasonYearAggregateArgs = {
    /**
     * Filter which SeasonYear to aggregate.
     */
    where?: SeasonYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonYears to fetch.
     */
    orderBy?: Enumerable<SeasonYearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonYears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeasonYears
    **/
    _count?: true | SeasonYearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonYearAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonYearSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonYearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonYearMaxAggregateInputType
  }

  export type GetSeasonYearAggregateType<T extends SeasonYearAggregateArgs> = {
        [P in keyof T & keyof AggregateSeasonYear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeasonYear[P]>
      : GetScalarType<T[P], AggregateSeasonYear[P]>
  }




  export type SeasonYearGroupByArgs = {
    where?: SeasonYearWhereInput
    orderBy?: Enumerable<SeasonYearOrderByWithAggregationInput>
    by: SeasonYearScalarFieldEnum[]
    having?: SeasonYearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonYearCountAggregateInputType | true
    _avg?: SeasonYearAvgAggregateInputType
    _sum?: SeasonYearSumAggregateInputType
    _min?: SeasonYearMinAggregateInputType
    _max?: SeasonYearMaxAggregateInputType
  }


  export type SeasonYearGroupByOutputType = {
    id: number
    year: string
    seasontime: JsonValue
    _count: SeasonYearCountAggregateOutputType | null
    _avg: SeasonYearAvgAggregateOutputType | null
    _sum: SeasonYearSumAggregateOutputType | null
    _min: SeasonYearMinAggregateOutputType | null
    _max: SeasonYearMaxAggregateOutputType | null
  }

  type GetSeasonYearGroupByPayload<T extends SeasonYearGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SeasonYearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonYearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonYearGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonYearGroupByOutputType[P]>
        }
      >
    >


  export type SeasonYearSelect = {
    id?: boolean
    year?: boolean
    seasontime?: boolean
  }


  export type SeasonYearGetPayload<S extends boolean | null | undefined | SeasonYearArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SeasonYear :
    S extends undefined ? never :
    S extends { include: any } & (SeasonYearArgs | SeasonYearFindManyArgs)
    ? SeasonYear 
    : S extends { select: any } & (SeasonYearArgs | SeasonYearFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SeasonYear ? SeasonYear[P] : never
  } 
      : SeasonYear


  type SeasonYearCountArgs = 
    Omit<SeasonYearFindManyArgs, 'select' | 'include'> & {
      select?: SeasonYearCountAggregateInputType | true
    }

  export interface SeasonYearDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SeasonYear that matches the filter.
     * @param {SeasonYearFindUniqueArgs} args - Arguments to find a SeasonYear
     * @example
     * // Get one SeasonYear
     * const seasonYear = await prisma.seasonYear.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeasonYearFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SeasonYearFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SeasonYear'> extends True ? Prisma__SeasonYearClient<SeasonYearGetPayload<T>> : Prisma__SeasonYearClient<SeasonYearGetPayload<T> | null, null>

    /**
     * Find one SeasonYear that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SeasonYearFindUniqueOrThrowArgs} args - Arguments to find a SeasonYear
     * @example
     * // Get one SeasonYear
     * const seasonYear = await prisma.seasonYear.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeasonYearFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SeasonYearFindUniqueOrThrowArgs>
    ): Prisma__SeasonYearClient<SeasonYearGetPayload<T>>

    /**
     * Find the first SeasonYear that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonYearFindFirstArgs} args - Arguments to find a SeasonYear
     * @example
     * // Get one SeasonYear
     * const seasonYear = await prisma.seasonYear.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeasonYearFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SeasonYearFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SeasonYear'> extends True ? Prisma__SeasonYearClient<SeasonYearGetPayload<T>> : Prisma__SeasonYearClient<SeasonYearGetPayload<T> | null, null>

    /**
     * Find the first SeasonYear that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonYearFindFirstOrThrowArgs} args - Arguments to find a SeasonYear
     * @example
     * // Get one SeasonYear
     * const seasonYear = await prisma.seasonYear.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeasonYearFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SeasonYearFindFirstOrThrowArgs>
    ): Prisma__SeasonYearClient<SeasonYearGetPayload<T>>

    /**
     * Find zero or more SeasonYears that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonYearFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeasonYears
     * const seasonYears = await prisma.seasonYear.findMany()
     * 
     * // Get first 10 SeasonYears
     * const seasonYears = await prisma.seasonYear.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonYearWithIdOnly = await prisma.seasonYear.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SeasonYearFindManyArgs>(
      args?: SelectSubset<T, SeasonYearFindManyArgs>
    ): Prisma.PrismaPromise<Array<SeasonYearGetPayload<T>>>

    /**
     * Create a SeasonYear.
     * @param {SeasonYearCreateArgs} args - Arguments to create a SeasonYear.
     * @example
     * // Create one SeasonYear
     * const SeasonYear = await prisma.seasonYear.create({
     *   data: {
     *     // ... data to create a SeasonYear
     *   }
     * })
     * 
    **/
    create<T extends SeasonYearCreateArgs>(
      args: SelectSubset<T, SeasonYearCreateArgs>
    ): Prisma__SeasonYearClient<SeasonYearGetPayload<T>>

    /**
     * Create many SeasonYears.
     *     @param {SeasonYearCreateManyArgs} args - Arguments to create many SeasonYears.
     *     @example
     *     // Create many SeasonYears
     *     const seasonYear = await prisma.seasonYear.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SeasonYearCreateManyArgs>(
      args?: SelectSubset<T, SeasonYearCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SeasonYear.
     * @param {SeasonYearDeleteArgs} args - Arguments to delete one SeasonYear.
     * @example
     * // Delete one SeasonYear
     * const SeasonYear = await prisma.seasonYear.delete({
     *   where: {
     *     // ... filter to delete one SeasonYear
     *   }
     * })
     * 
    **/
    delete<T extends SeasonYearDeleteArgs>(
      args: SelectSubset<T, SeasonYearDeleteArgs>
    ): Prisma__SeasonYearClient<SeasonYearGetPayload<T>>

    /**
     * Update one SeasonYear.
     * @param {SeasonYearUpdateArgs} args - Arguments to update one SeasonYear.
     * @example
     * // Update one SeasonYear
     * const seasonYear = await prisma.seasonYear.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeasonYearUpdateArgs>(
      args: SelectSubset<T, SeasonYearUpdateArgs>
    ): Prisma__SeasonYearClient<SeasonYearGetPayload<T>>

    /**
     * Delete zero or more SeasonYears.
     * @param {SeasonYearDeleteManyArgs} args - Arguments to filter SeasonYears to delete.
     * @example
     * // Delete a few SeasonYears
     * const { count } = await prisma.seasonYear.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeasonYearDeleteManyArgs>(
      args?: SelectSubset<T, SeasonYearDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeasonYears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonYearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeasonYears
     * const seasonYear = await prisma.seasonYear.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeasonYearUpdateManyArgs>(
      args: SelectSubset<T, SeasonYearUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SeasonYear.
     * @param {SeasonYearUpsertArgs} args - Arguments to update or create a SeasonYear.
     * @example
     * // Update or create a SeasonYear
     * const seasonYear = await prisma.seasonYear.upsert({
     *   create: {
     *     // ... data to create a SeasonYear
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeasonYear we want to update
     *   }
     * })
    **/
    upsert<T extends SeasonYearUpsertArgs>(
      args: SelectSubset<T, SeasonYearUpsertArgs>
    ): Prisma__SeasonYearClient<SeasonYearGetPayload<T>>

    /**
     * Count the number of SeasonYears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonYearCountArgs} args - Arguments to filter SeasonYears to count.
     * @example
     * // Count the number of SeasonYears
     * const count = await prisma.seasonYear.count({
     *   where: {
     *     // ... the filter for the SeasonYears we want to count
     *   }
     * })
    **/
    count<T extends SeasonYearCountArgs>(
      args?: Subset<T, SeasonYearCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonYearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeasonYear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonYearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonYearAggregateArgs>(args: Subset<T, SeasonYearAggregateArgs>): Prisma.PrismaPromise<GetSeasonYearAggregateType<T>>

    /**
     * Group by SeasonYear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonYearGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeasonYearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonYearGroupByArgs['orderBy'] }
        : { orderBy?: SeasonYearGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeasonYearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonYearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SeasonYear.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SeasonYearClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SeasonYear base type for findUnique actions
   */
  export type SeasonYearFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
    /**
     * Filter, which SeasonYear to fetch.
     */
    where: SeasonYearWhereUniqueInput
  }

  /**
   * SeasonYear findUnique
   */
  export interface SeasonYearFindUniqueArgs extends SeasonYearFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SeasonYear findUniqueOrThrow
   */
  export type SeasonYearFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
    /**
     * Filter, which SeasonYear to fetch.
     */
    where: SeasonYearWhereUniqueInput
  }


  /**
   * SeasonYear base type for findFirst actions
   */
  export type SeasonYearFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
    /**
     * Filter, which SeasonYear to fetch.
     */
    where?: SeasonYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonYears to fetch.
     */
    orderBy?: Enumerable<SeasonYearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonYears.
     */
    cursor?: SeasonYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonYears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonYears.
     */
    distinct?: Enumerable<SeasonYearScalarFieldEnum>
  }

  /**
   * SeasonYear findFirst
   */
  export interface SeasonYearFindFirstArgs extends SeasonYearFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SeasonYear findFirstOrThrow
   */
  export type SeasonYearFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
    /**
     * Filter, which SeasonYear to fetch.
     */
    where?: SeasonYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonYears to fetch.
     */
    orderBy?: Enumerable<SeasonYearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonYears.
     */
    cursor?: SeasonYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonYears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonYears.
     */
    distinct?: Enumerable<SeasonYearScalarFieldEnum>
  }


  /**
   * SeasonYear findMany
   */
  export type SeasonYearFindManyArgs = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
    /**
     * Filter, which SeasonYears to fetch.
     */
    where?: SeasonYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonYears to fetch.
     */
    orderBy?: Enumerable<SeasonYearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeasonYears.
     */
    cursor?: SeasonYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonYears.
     */
    skip?: number
    distinct?: Enumerable<SeasonYearScalarFieldEnum>
  }


  /**
   * SeasonYear create
   */
  export type SeasonYearCreateArgs = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
    /**
     * The data needed to create a SeasonYear.
     */
    data: XOR<SeasonYearCreateInput, SeasonYearUncheckedCreateInput>
  }


  /**
   * SeasonYear createMany
   */
  export type SeasonYearCreateManyArgs = {
    /**
     * The data used to create many SeasonYears.
     */
    data: Enumerable<SeasonYearCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SeasonYear update
   */
  export type SeasonYearUpdateArgs = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
    /**
     * The data needed to update a SeasonYear.
     */
    data: XOR<SeasonYearUpdateInput, SeasonYearUncheckedUpdateInput>
    /**
     * Choose, which SeasonYear to update.
     */
    where: SeasonYearWhereUniqueInput
  }


  /**
   * SeasonYear updateMany
   */
  export type SeasonYearUpdateManyArgs = {
    /**
     * The data used to update SeasonYears.
     */
    data: XOR<SeasonYearUpdateManyMutationInput, SeasonYearUncheckedUpdateManyInput>
    /**
     * Filter which SeasonYears to update
     */
    where?: SeasonYearWhereInput
  }


  /**
   * SeasonYear upsert
   */
  export type SeasonYearUpsertArgs = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
    /**
     * The filter to search for the SeasonYear to update in case it exists.
     */
    where: SeasonYearWhereUniqueInput
    /**
     * In case the SeasonYear found by the `where` argument doesn't exist, create a new SeasonYear with this data.
     */
    create: XOR<SeasonYearCreateInput, SeasonYearUncheckedCreateInput>
    /**
     * In case the SeasonYear was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonYearUpdateInput, SeasonYearUncheckedUpdateInput>
  }


  /**
   * SeasonYear delete
   */
  export type SeasonYearDeleteArgs = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
    /**
     * Filter which SeasonYear to delete.
     */
    where: SeasonYearWhereUniqueInput
  }


  /**
   * SeasonYear deleteMany
   */
  export type SeasonYearDeleteManyArgs = {
    /**
     * Filter which SeasonYears to delete
     */
    where?: SeasonYearWhereInput
  }


  /**
   * SeasonYear without action
   */
  export type SeasonYearArgs = {
    /**
     * Select specific fields to fetch from the SeasonYear
     */
    select?: SeasonYearSelect | null
  }



  /**
   * Model SajuDate
   */


  export type AggregateSajuDate = {
    _count: SajuDateCountAggregateOutputType | null
    _avg: SajuDateAvgAggregateOutputType | null
    _sum: SajuDateSumAggregateOutputType | null
    _min: SajuDateMinAggregateOutputType | null
    _max: SajuDateMaxAggregateOutputType | null
  }

  export type SajuDateAvgAggregateOutputType = {
    id: number | null
  }

  export type SajuDateSumAggregateOutputType = {
    id: number | null
  }

  export type SajuDateMinAggregateOutputType = {
    id: number | null
    datekey: string | null
  }

  export type SajuDateMaxAggregateOutputType = {
    id: number | null
    datekey: string | null
  }

  export type SajuDateCountAggregateOutputType = {
    id: number
    datekey: number
    info: number
    _all: number
  }


  export type SajuDateAvgAggregateInputType = {
    id?: true
  }

  export type SajuDateSumAggregateInputType = {
    id?: true
  }

  export type SajuDateMinAggregateInputType = {
    id?: true
    datekey?: true
  }

  export type SajuDateMaxAggregateInputType = {
    id?: true
    datekey?: true
  }

  export type SajuDateCountAggregateInputType = {
    id?: true
    datekey?: true
    info?: true
    _all?: true
  }

  export type SajuDateAggregateArgs = {
    /**
     * Filter which SajuDate to aggregate.
     */
    where?: SajuDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SajuDates to fetch.
     */
    orderBy?: Enumerable<SajuDateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SajuDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SajuDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SajuDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SajuDates
    **/
    _count?: true | SajuDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SajuDateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SajuDateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SajuDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SajuDateMaxAggregateInputType
  }

  export type GetSajuDateAggregateType<T extends SajuDateAggregateArgs> = {
        [P in keyof T & keyof AggregateSajuDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSajuDate[P]>
      : GetScalarType<T[P], AggregateSajuDate[P]>
  }




  export type SajuDateGroupByArgs = {
    where?: SajuDateWhereInput
    orderBy?: Enumerable<SajuDateOrderByWithAggregationInput>
    by: SajuDateScalarFieldEnum[]
    having?: SajuDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SajuDateCountAggregateInputType | true
    _avg?: SajuDateAvgAggregateInputType
    _sum?: SajuDateSumAggregateInputType
    _min?: SajuDateMinAggregateInputType
    _max?: SajuDateMaxAggregateInputType
  }


  export type SajuDateGroupByOutputType = {
    id: number
    datekey: string
    info: JsonValue
    _count: SajuDateCountAggregateOutputType | null
    _avg: SajuDateAvgAggregateOutputType | null
    _sum: SajuDateSumAggregateOutputType | null
    _min: SajuDateMinAggregateOutputType | null
    _max: SajuDateMaxAggregateOutputType | null
  }

  type GetSajuDateGroupByPayload<T extends SajuDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SajuDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SajuDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SajuDateGroupByOutputType[P]>
            : GetScalarType<T[P], SajuDateGroupByOutputType[P]>
        }
      >
    >


  export type SajuDateSelect = {
    id?: boolean
    datekey?: boolean
    info?: boolean
  }


  export type SajuDateGetPayload<S extends boolean | null | undefined | SajuDateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SajuDate :
    S extends undefined ? never :
    S extends { include: any } & (SajuDateArgs | SajuDateFindManyArgs)
    ? SajuDate 
    : S extends { select: any } & (SajuDateArgs | SajuDateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SajuDate ? SajuDate[P] : never
  } 
      : SajuDate


  type SajuDateCountArgs = 
    Omit<SajuDateFindManyArgs, 'select' | 'include'> & {
      select?: SajuDateCountAggregateInputType | true
    }

  export interface SajuDateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SajuDate that matches the filter.
     * @param {SajuDateFindUniqueArgs} args - Arguments to find a SajuDate
     * @example
     * // Get one SajuDate
     * const sajuDate = await prisma.sajuDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SajuDateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SajuDateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SajuDate'> extends True ? Prisma__SajuDateClient<SajuDateGetPayload<T>> : Prisma__SajuDateClient<SajuDateGetPayload<T> | null, null>

    /**
     * Find one SajuDate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SajuDateFindUniqueOrThrowArgs} args - Arguments to find a SajuDate
     * @example
     * // Get one SajuDate
     * const sajuDate = await prisma.sajuDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SajuDateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SajuDateFindUniqueOrThrowArgs>
    ): Prisma__SajuDateClient<SajuDateGetPayload<T>>

    /**
     * Find the first SajuDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuDateFindFirstArgs} args - Arguments to find a SajuDate
     * @example
     * // Get one SajuDate
     * const sajuDate = await prisma.sajuDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SajuDateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SajuDateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SajuDate'> extends True ? Prisma__SajuDateClient<SajuDateGetPayload<T>> : Prisma__SajuDateClient<SajuDateGetPayload<T> | null, null>

    /**
     * Find the first SajuDate that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuDateFindFirstOrThrowArgs} args - Arguments to find a SajuDate
     * @example
     * // Get one SajuDate
     * const sajuDate = await prisma.sajuDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SajuDateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SajuDateFindFirstOrThrowArgs>
    ): Prisma__SajuDateClient<SajuDateGetPayload<T>>

    /**
     * Find zero or more SajuDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuDateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SajuDates
     * const sajuDates = await prisma.sajuDate.findMany()
     * 
     * // Get first 10 SajuDates
     * const sajuDates = await prisma.sajuDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sajuDateWithIdOnly = await prisma.sajuDate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SajuDateFindManyArgs>(
      args?: SelectSubset<T, SajuDateFindManyArgs>
    ): Prisma.PrismaPromise<Array<SajuDateGetPayload<T>>>

    /**
     * Create a SajuDate.
     * @param {SajuDateCreateArgs} args - Arguments to create a SajuDate.
     * @example
     * // Create one SajuDate
     * const SajuDate = await prisma.sajuDate.create({
     *   data: {
     *     // ... data to create a SajuDate
     *   }
     * })
     * 
    **/
    create<T extends SajuDateCreateArgs>(
      args: SelectSubset<T, SajuDateCreateArgs>
    ): Prisma__SajuDateClient<SajuDateGetPayload<T>>

    /**
     * Create many SajuDates.
     *     @param {SajuDateCreateManyArgs} args - Arguments to create many SajuDates.
     *     @example
     *     // Create many SajuDates
     *     const sajuDate = await prisma.sajuDate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SajuDateCreateManyArgs>(
      args?: SelectSubset<T, SajuDateCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SajuDate.
     * @param {SajuDateDeleteArgs} args - Arguments to delete one SajuDate.
     * @example
     * // Delete one SajuDate
     * const SajuDate = await prisma.sajuDate.delete({
     *   where: {
     *     // ... filter to delete one SajuDate
     *   }
     * })
     * 
    **/
    delete<T extends SajuDateDeleteArgs>(
      args: SelectSubset<T, SajuDateDeleteArgs>
    ): Prisma__SajuDateClient<SajuDateGetPayload<T>>

    /**
     * Update one SajuDate.
     * @param {SajuDateUpdateArgs} args - Arguments to update one SajuDate.
     * @example
     * // Update one SajuDate
     * const sajuDate = await prisma.sajuDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SajuDateUpdateArgs>(
      args: SelectSubset<T, SajuDateUpdateArgs>
    ): Prisma__SajuDateClient<SajuDateGetPayload<T>>

    /**
     * Delete zero or more SajuDates.
     * @param {SajuDateDeleteManyArgs} args - Arguments to filter SajuDates to delete.
     * @example
     * // Delete a few SajuDates
     * const { count } = await prisma.sajuDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SajuDateDeleteManyArgs>(
      args?: SelectSubset<T, SajuDateDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SajuDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SajuDates
     * const sajuDate = await prisma.sajuDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SajuDateUpdateManyArgs>(
      args: SelectSubset<T, SajuDateUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SajuDate.
     * @param {SajuDateUpsertArgs} args - Arguments to update or create a SajuDate.
     * @example
     * // Update or create a SajuDate
     * const sajuDate = await prisma.sajuDate.upsert({
     *   create: {
     *     // ... data to create a SajuDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SajuDate we want to update
     *   }
     * })
    **/
    upsert<T extends SajuDateUpsertArgs>(
      args: SelectSubset<T, SajuDateUpsertArgs>
    ): Prisma__SajuDateClient<SajuDateGetPayload<T>>

    /**
     * Count the number of SajuDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuDateCountArgs} args - Arguments to filter SajuDates to count.
     * @example
     * // Count the number of SajuDates
     * const count = await prisma.sajuDate.count({
     *   where: {
     *     // ... the filter for the SajuDates we want to count
     *   }
     * })
    **/
    count<T extends SajuDateCountArgs>(
      args?: Subset<T, SajuDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SajuDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SajuDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SajuDateAggregateArgs>(args: Subset<T, SajuDateAggregateArgs>): Prisma.PrismaPromise<GetSajuDateAggregateType<T>>

    /**
     * Group by SajuDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SajuDateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SajuDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SajuDateGroupByArgs['orderBy'] }
        : { orderBy?: SajuDateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SajuDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSajuDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SajuDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SajuDateClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SajuDate base type for findUnique actions
   */
  export type SajuDateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
    /**
     * Filter, which SajuDate to fetch.
     */
    where: SajuDateWhereUniqueInput
  }

  /**
   * SajuDate findUnique
   */
  export interface SajuDateFindUniqueArgs extends SajuDateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SajuDate findUniqueOrThrow
   */
  export type SajuDateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
    /**
     * Filter, which SajuDate to fetch.
     */
    where: SajuDateWhereUniqueInput
  }


  /**
   * SajuDate base type for findFirst actions
   */
  export type SajuDateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
    /**
     * Filter, which SajuDate to fetch.
     */
    where?: SajuDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SajuDates to fetch.
     */
    orderBy?: Enumerable<SajuDateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SajuDates.
     */
    cursor?: SajuDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SajuDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SajuDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SajuDates.
     */
    distinct?: Enumerable<SajuDateScalarFieldEnum>
  }

  /**
   * SajuDate findFirst
   */
  export interface SajuDateFindFirstArgs extends SajuDateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SajuDate findFirstOrThrow
   */
  export type SajuDateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
    /**
     * Filter, which SajuDate to fetch.
     */
    where?: SajuDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SajuDates to fetch.
     */
    orderBy?: Enumerable<SajuDateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SajuDates.
     */
    cursor?: SajuDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SajuDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SajuDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SajuDates.
     */
    distinct?: Enumerable<SajuDateScalarFieldEnum>
  }


  /**
   * SajuDate findMany
   */
  export type SajuDateFindManyArgs = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
    /**
     * Filter, which SajuDates to fetch.
     */
    where?: SajuDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SajuDates to fetch.
     */
    orderBy?: Enumerable<SajuDateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SajuDates.
     */
    cursor?: SajuDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SajuDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SajuDates.
     */
    skip?: number
    distinct?: Enumerable<SajuDateScalarFieldEnum>
  }


  /**
   * SajuDate create
   */
  export type SajuDateCreateArgs = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
    /**
     * The data needed to create a SajuDate.
     */
    data: XOR<SajuDateCreateInput, SajuDateUncheckedCreateInput>
  }


  /**
   * SajuDate createMany
   */
  export type SajuDateCreateManyArgs = {
    /**
     * The data used to create many SajuDates.
     */
    data: Enumerable<SajuDateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SajuDate update
   */
  export type SajuDateUpdateArgs = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
    /**
     * The data needed to update a SajuDate.
     */
    data: XOR<SajuDateUpdateInput, SajuDateUncheckedUpdateInput>
    /**
     * Choose, which SajuDate to update.
     */
    where: SajuDateWhereUniqueInput
  }


  /**
   * SajuDate updateMany
   */
  export type SajuDateUpdateManyArgs = {
    /**
     * The data used to update SajuDates.
     */
    data: XOR<SajuDateUpdateManyMutationInput, SajuDateUncheckedUpdateManyInput>
    /**
     * Filter which SajuDates to update
     */
    where?: SajuDateWhereInput
  }


  /**
   * SajuDate upsert
   */
  export type SajuDateUpsertArgs = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
    /**
     * The filter to search for the SajuDate to update in case it exists.
     */
    where: SajuDateWhereUniqueInput
    /**
     * In case the SajuDate found by the `where` argument doesn't exist, create a new SajuDate with this data.
     */
    create: XOR<SajuDateCreateInput, SajuDateUncheckedCreateInput>
    /**
     * In case the SajuDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SajuDateUpdateInput, SajuDateUncheckedUpdateInput>
  }


  /**
   * SajuDate delete
   */
  export type SajuDateDeleteArgs = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
    /**
     * Filter which SajuDate to delete.
     */
    where: SajuDateWhereUniqueInput
  }


  /**
   * SajuDate deleteMany
   */
  export type SajuDateDeleteManyArgs = {
    /**
     * Filter which SajuDates to delete
     */
    where?: SajuDateWhereInput
  }


  /**
   * SajuDate without action
   */
  export type SajuDateArgs = {
    /**
     * Select specific fields to fetch from the SajuDate
     */
    select?: SajuDateSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CalendarScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    key: 'key',
    emotion: 'emotion',
    title: 'title',
    content: 'content'
  };

  export type CalendarScalarFieldEnum = (typeof CalendarScalarFieldEnum)[keyof typeof CalendarScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    gender: 'gender',
    birth_year: 'birth_year',
    birth_month: 'birth_month',
    birth_day: 'birth_day',
    birth_hour: 'birth_hour',
    birth_minute: 'birth_minute',
    is_moon: 'is_moon',
    doubled: 'doubled',
    region: 'region',
    saju_year_code: 'saju_year_code',
    saju_month_code: 'saju_month_code',
    saju_day_code: 'saju_day_code',
    saju_time_code: 'saju_time_code'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const SajuDateScalarFieldEnum: {
    id: 'id',
    datekey: 'datekey',
    info: 'info'
  };

  export type SajuDateScalarFieldEnum = (typeof SajuDateScalarFieldEnum)[keyof typeof SajuDateScalarFieldEnum]


  export const SeasonYearScalarFieldEnum: {
    id: 'id',
    year: 'year',
    seasontime: 'seasontime'
  };

  export type SeasonYearScalarFieldEnum = (typeof SeasonYearScalarFieldEnum)[keyof typeof SeasonYearScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    gender: 'gender',
    birth_year: 'birth_year',
    birth_month: 'birth_month',
    birth_day: 'birth_day',
    birth_hour: 'birth_hour',
    birth_minute: 'birth_minute',
    is_moon: 'is_moon',
    doubled: 'doubled',
    region: 'region',
    saju_year_code: 'saju_year_code',
    saju_month_code: 'saju_month_code',
    saju_day_code: 'saju_day_code',
    saju_time_code: 'saju_time_code'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringFilter | string
    image?: StringNullableFilter | string | null
    gender?: StringNullableFilter | string | null
    birth_year?: IntNullableFilter | number | null
    birth_month?: IntNullableFilter | number | null
    birth_day?: IntNullableFilter | number | null
    birth_hour?: IntNullableFilter | number | null
    birth_minute?: IntNullableFilter | number | null
    is_moon?: BoolNullableFilter | boolean | null
    doubled?: BoolNullableFilter | boolean | null
    region?: StringNullableFilter | string | null
    saju_year_code?: IntNullableFilter | number | null
    saju_month_code?: IntNullableFilter | number | null
    saju_day_code?: IntNullableFilter | number | null
    saju_time_code?: IntNullableFilter | number | null
    friends?: FriendListRelationFilter
    calendars?: CalendarListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
    friends?: FriendOrderByRelationAggregateInput
    calendars?: CalendarOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    gender?: StringNullableWithAggregatesFilter | string | null
    birth_year?: IntNullableWithAggregatesFilter | number | null
    birth_month?: IntNullableWithAggregatesFilter | number | null
    birth_day?: IntNullableWithAggregatesFilter | number | null
    birth_hour?: IntNullableWithAggregatesFilter | number | null
    birth_minute?: IntNullableWithAggregatesFilter | number | null
    is_moon?: BoolNullableWithAggregatesFilter | boolean | null
    doubled?: BoolNullableWithAggregatesFilter | boolean | null
    region?: StringNullableWithAggregatesFilter | string | null
    saju_year_code?: IntNullableWithAggregatesFilter | number | null
    saju_month_code?: IntNullableWithAggregatesFilter | number | null
    saju_day_code?: IntNullableWithAggregatesFilter | number | null
    saju_time_code?: IntNullableWithAggregatesFilter | number | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sessionToken?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sessionToken?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: Enumerable<VerificationTokenWhereInput>
    OR?: Enumerable<VerificationTokenWhereInput>
    NOT?: Enumerable<VerificationTokenWhereInput>
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = {
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
  }

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CalendarWhereInput = {
    AND?: Enumerable<CalendarWhereInput>
    OR?: Enumerable<CalendarWhereInput>
    NOT?: Enumerable<CalendarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    key?: StringFilter | string
    emotion?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    friends?: FriendListRelationFilter
  }

  export type CalendarOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    key?: SortOrder
    emotion?: SortOrder
    title?: SortOrder
    content?: SortOrder
    friends?: FriendOrderByRelationAggregateInput
  }

  export type CalendarWhereUniqueInput = {
    id?: string
  }

  export type CalendarOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    emotion?: SortOrder
    title?: SortOrder
    content?: SortOrder
    _count?: CalendarCountOrderByAggregateInput
    _max?: CalendarMaxOrderByAggregateInput
    _min?: CalendarMinOrderByAggregateInput
  }

  export type CalendarScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CalendarScalarWhereWithAggregatesInput>
    OR?: Enumerable<CalendarScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CalendarScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    key?: StringWithAggregatesFilter | string
    emotion?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
  }

  export type FriendWhereInput = {
    AND?: Enumerable<FriendWhereInput>
    OR?: Enumerable<FriendWhereInput>
    NOT?: Enumerable<FriendWhereInput>
    id?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    calendars?: CalendarListRelationFilter
    name?: StringFilter | string
    gender?: StringFilter | string
    birth_year?: IntFilter | number
    birth_month?: IntFilter | number
    birth_day?: IntFilter | number
    birth_hour?: IntFilter | number
    birth_minute?: IntFilter | number
    is_moon?: BoolFilter | boolean
    doubled?: BoolFilter | boolean
    region?: StringFilter | string
    saju_year_code?: IntFilter | number
    saju_month_code?: IntFilter | number
    saju_day_code?: IntFilter | number
    saju_time_code?: IntFilter | number
  }

  export type FriendOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    calendars?: CalendarOrderByRelationAggregateInput
    name?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type FriendWhereUniqueInput = {
    id?: string
  }

  export type FriendOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
    _count?: FriendCountOrderByAggregateInput
    _avg?: FriendAvgOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
    _sum?: FriendSumOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FriendScalarWhereWithAggregatesInput>
    OR?: Enumerable<FriendScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FriendScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    gender?: StringWithAggregatesFilter | string
    birth_year?: IntWithAggregatesFilter | number
    birth_month?: IntWithAggregatesFilter | number
    birth_day?: IntWithAggregatesFilter | number
    birth_hour?: IntWithAggregatesFilter | number
    birth_minute?: IntWithAggregatesFilter | number
    is_moon?: BoolWithAggregatesFilter | boolean
    doubled?: BoolWithAggregatesFilter | boolean
    region?: StringWithAggregatesFilter | string
    saju_year_code?: IntWithAggregatesFilter | number
    saju_month_code?: IntWithAggregatesFilter | number
    saju_day_code?: IntWithAggregatesFilter | number
    saju_time_code?: IntWithAggregatesFilter | number
  }

  export type SeasonYearWhereInput = {
    AND?: Enumerable<SeasonYearWhereInput>
    OR?: Enumerable<SeasonYearWhereInput>
    NOT?: Enumerable<SeasonYearWhereInput>
    id?: IntFilter | number
    year?: StringFilter | string
    seasontime?: JsonFilter
  }

  export type SeasonYearOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    seasontime?: SortOrder
  }

  export type SeasonYearWhereUniqueInput = {
    id?: number
    year?: string
  }

  export type SeasonYearOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    seasontime?: SortOrder
    _count?: SeasonYearCountOrderByAggregateInput
    _avg?: SeasonYearAvgOrderByAggregateInput
    _max?: SeasonYearMaxOrderByAggregateInput
    _min?: SeasonYearMinOrderByAggregateInput
    _sum?: SeasonYearSumOrderByAggregateInput
  }

  export type SeasonYearScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SeasonYearScalarWhereWithAggregatesInput>
    OR?: Enumerable<SeasonYearScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SeasonYearScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    year?: StringWithAggregatesFilter | string
    seasontime?: JsonWithAggregatesFilter
  }

  export type SajuDateWhereInput = {
    AND?: Enumerable<SajuDateWhereInput>
    OR?: Enumerable<SajuDateWhereInput>
    NOT?: Enumerable<SajuDateWhereInput>
    id?: IntFilter | number
    datekey?: StringFilter | string
    info?: JsonFilter
  }

  export type SajuDateOrderByWithRelationInput = {
    id?: SortOrder
    datekey?: SortOrder
    info?: SortOrder
  }

  export type SajuDateWhereUniqueInput = {
    id?: number
    datekey?: string
  }

  export type SajuDateOrderByWithAggregationInput = {
    id?: SortOrder
    datekey?: SortOrder
    info?: SortOrder
    _count?: SajuDateCountOrderByAggregateInput
    _avg?: SajuDateAvgOrderByAggregateInput
    _max?: SajuDateMaxOrderByAggregateInput
    _min?: SajuDateMinOrderByAggregateInput
    _sum?: SajuDateSumOrderByAggregateInput
  }

  export type SajuDateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SajuDateScalarWhereWithAggregatesInput>
    OR?: Enumerable<SajuDateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SajuDateScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    datekey?: StringWithAggregatesFilter | string
    info?: JsonWithAggregatesFilter
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    friends?: FriendCreateNestedManyWithoutUserInput
    calendars?: CalendarCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    calendars?: CalendarUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    friends?: FriendUpdateManyWithoutUserNestedInput
    calendars?: CalendarUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    calendars?: CalendarUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutCalendarsInput
    key: string
    emotion: string
    title: string
    content: string
    friends?: FriendCreateNestedManyWithoutCalendarsInput
  }

  export type CalendarUncheckedCreateInput = {
    id?: string
    userId: string
    key: string
    emotion: string
    title: string
    content: string
    friends?: FriendUncheckedCreateNestedManyWithoutCalendarsInput
  }

  export type CalendarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCalendarsNestedInput
    key?: StringFieldUpdateOperationsInput | string
    emotion?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    friends?: FriendUpdateManyWithoutCalendarsNestedInput
  }

  export type CalendarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    emotion?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    friends?: FriendUncheckedUpdateManyWithoutCalendarsNestedInput
  }

  export type CalendarCreateManyInput = {
    id?: string
    userId: string
    key: string
    emotion: string
    title: string
    content: string
  }

  export type CalendarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    emotion?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    emotion?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FriendCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutFriendsInput
    calendars?: CalendarCreateNestedManyWithoutFriendsInput
    name: string
    gender: string
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: boolean
    doubled: boolean
    region: string
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
  }

  export type FriendUncheckedCreateInput = {
    id?: string
    userId: string
    calendars?: CalendarUncheckedCreateNestedManyWithoutFriendsInput
    name: string
    gender: string
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: boolean
    doubled: boolean
    region: string
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
  }

  export type FriendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    calendars?: CalendarUpdateManyWithoutFriendsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth_year?: IntFieldUpdateOperationsInput | number
    birth_month?: IntFieldUpdateOperationsInput | number
    birth_day?: IntFieldUpdateOperationsInput | number
    birth_hour?: IntFieldUpdateOperationsInput | number
    birth_minute?: IntFieldUpdateOperationsInput | number
    is_moon?: BoolFieldUpdateOperationsInput | boolean
    doubled?: BoolFieldUpdateOperationsInput | boolean
    region?: StringFieldUpdateOperationsInput | string
    saju_year_code?: IntFieldUpdateOperationsInput | number
    saju_month_code?: IntFieldUpdateOperationsInput | number
    saju_day_code?: IntFieldUpdateOperationsInput | number
    saju_time_code?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    calendars?: CalendarUncheckedUpdateManyWithoutFriendsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth_year?: IntFieldUpdateOperationsInput | number
    birth_month?: IntFieldUpdateOperationsInput | number
    birth_day?: IntFieldUpdateOperationsInput | number
    birth_hour?: IntFieldUpdateOperationsInput | number
    birth_minute?: IntFieldUpdateOperationsInput | number
    is_moon?: BoolFieldUpdateOperationsInput | boolean
    doubled?: BoolFieldUpdateOperationsInput | boolean
    region?: StringFieldUpdateOperationsInput | string
    saju_year_code?: IntFieldUpdateOperationsInput | number
    saju_month_code?: IntFieldUpdateOperationsInput | number
    saju_day_code?: IntFieldUpdateOperationsInput | number
    saju_time_code?: IntFieldUpdateOperationsInput | number
  }

  export type FriendCreateManyInput = {
    id?: string
    userId: string
    name: string
    gender: string
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: boolean
    doubled: boolean
    region: string
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
  }

  export type FriendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth_year?: IntFieldUpdateOperationsInput | number
    birth_month?: IntFieldUpdateOperationsInput | number
    birth_day?: IntFieldUpdateOperationsInput | number
    birth_hour?: IntFieldUpdateOperationsInput | number
    birth_minute?: IntFieldUpdateOperationsInput | number
    is_moon?: BoolFieldUpdateOperationsInput | boolean
    doubled?: BoolFieldUpdateOperationsInput | boolean
    region?: StringFieldUpdateOperationsInput | string
    saju_year_code?: IntFieldUpdateOperationsInput | number
    saju_month_code?: IntFieldUpdateOperationsInput | number
    saju_day_code?: IntFieldUpdateOperationsInput | number
    saju_time_code?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth_year?: IntFieldUpdateOperationsInput | number
    birth_month?: IntFieldUpdateOperationsInput | number
    birth_day?: IntFieldUpdateOperationsInput | number
    birth_hour?: IntFieldUpdateOperationsInput | number
    birth_minute?: IntFieldUpdateOperationsInput | number
    is_moon?: BoolFieldUpdateOperationsInput | boolean
    doubled?: BoolFieldUpdateOperationsInput | boolean
    region?: StringFieldUpdateOperationsInput | string
    saju_year_code?: IntFieldUpdateOperationsInput | number
    saju_month_code?: IntFieldUpdateOperationsInput | number
    saju_day_code?: IntFieldUpdateOperationsInput | number
    saju_time_code?: IntFieldUpdateOperationsInput | number
  }

  export type SeasonYearCreateInput = {
    year: string
    seasontime: JsonNullValueInput | InputJsonValue
  }

  export type SeasonYearUncheckedCreateInput = {
    id?: number
    year: string
    seasontime: JsonNullValueInput | InputJsonValue
  }

  export type SeasonYearUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    seasontime?: JsonNullValueInput | InputJsonValue
  }

  export type SeasonYearUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    seasontime?: JsonNullValueInput | InputJsonValue
  }

  export type SeasonYearCreateManyInput = {
    id?: number
    year: string
    seasontime: JsonNullValueInput | InputJsonValue
  }

  export type SeasonYearUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
    seasontime?: JsonNullValueInput | InputJsonValue
  }

  export type SeasonYearUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    seasontime?: JsonNullValueInput | InputJsonValue
  }

  export type SajuDateCreateInput = {
    datekey: string
    info: JsonNullValueInput | InputJsonValue
  }

  export type SajuDateUncheckedCreateInput = {
    id?: number
    datekey: string
    info: JsonNullValueInput | InputJsonValue
  }

  export type SajuDateUpdateInput = {
    datekey?: StringFieldUpdateOperationsInput | string
    info?: JsonNullValueInput | InputJsonValue
  }

  export type SajuDateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    datekey?: StringFieldUpdateOperationsInput | string
    info?: JsonNullValueInput | InputJsonValue
  }

  export type SajuDateCreateManyInput = {
    id?: number
    datekey: string
    info: JsonNullValueInput | InputJsonValue
  }

  export type SajuDateUpdateManyMutationInput = {
    datekey?: StringFieldUpdateOperationsInput | string
    info?: JsonNullValueInput | InputJsonValue
  }

  export type SajuDateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    datekey?: StringFieldUpdateOperationsInput | string
    info?: JsonNullValueInput | InputJsonValue
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type CalendarListRelationFilter = {
    every?: CalendarWhereInput
    some?: CalendarWhereInput
    none?: CalendarWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type CalendarCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    emotion?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type CalendarMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    emotion?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type CalendarMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    emotion?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type FriendCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type FriendAvgOrderByAggregateInput = {
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    is_moon?: SortOrder
    doubled?: SortOrder
    region?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type FriendSumOrderByAggregateInput = {
    birth_year?: SortOrder
    birth_month?: SortOrder
    birth_day?: SortOrder
    birth_hour?: SortOrder
    birth_minute?: SortOrder
    saju_year_code?: SortOrder
    saju_month_code?: SortOrder
    saju_day_code?: SortOrder
    saju_time_code?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type SeasonYearCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    seasontime?: SortOrder
  }

  export type SeasonYearAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeasonYearMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type SeasonYearMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type SeasonYearSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type SajuDateCountOrderByAggregateInput = {
    id?: SortOrder
    datekey?: SortOrder
    info?: SortOrder
  }

  export type SajuDateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SajuDateMaxOrderByAggregateInput = {
    id?: SortOrder
    datekey?: SortOrder
  }

  export type SajuDateMinOrderByAggregateInput = {
    id?: SortOrder
    datekey?: SortOrder
  }

  export type SajuDateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type FriendCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FriendCreateWithoutUserInput>, Enumerable<FriendUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FriendCreateOrConnectWithoutUserInput>
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: Enumerable<FriendWhereUniqueInput>
  }

  export type CalendarCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CalendarCreateWithoutUserInput>, Enumerable<CalendarUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CalendarCreateOrConnectWithoutUserInput>
    createMany?: CalendarCreateManyUserInputEnvelope
    connect?: Enumerable<CalendarWhereUniqueInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type FriendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FriendCreateWithoutUserInput>, Enumerable<FriendUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FriendCreateOrConnectWithoutUserInput>
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: Enumerable<FriendWhereUniqueInput>
  }

  export type CalendarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CalendarCreateWithoutUserInput>, Enumerable<CalendarUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CalendarCreateOrConnectWithoutUserInput>
    createMany?: CalendarCreateManyUserInputEnvelope
    connect?: Enumerable<CalendarWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type FriendUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FriendCreateWithoutUserInput>, Enumerable<FriendUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FriendCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FriendUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FriendCreateManyUserInputEnvelope
    set?: Enumerable<FriendWhereUniqueInput>
    disconnect?: Enumerable<FriendWhereUniqueInput>
    delete?: Enumerable<FriendWhereUniqueInput>
    connect?: Enumerable<FriendWhereUniqueInput>
    update?: Enumerable<FriendUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FriendUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FriendScalarWhereInput>
  }

  export type CalendarUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CalendarCreateWithoutUserInput>, Enumerable<CalendarUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CalendarCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CalendarUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CalendarCreateManyUserInputEnvelope
    set?: Enumerable<CalendarWhereUniqueInput>
    disconnect?: Enumerable<CalendarWhereUniqueInput>
    delete?: Enumerable<CalendarWhereUniqueInput>
    connect?: Enumerable<CalendarWhereUniqueInput>
    update?: Enumerable<CalendarUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CalendarUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CalendarScalarWhereInput>
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type FriendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FriendCreateWithoutUserInput>, Enumerable<FriendUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FriendCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FriendUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FriendCreateManyUserInputEnvelope
    set?: Enumerable<FriendWhereUniqueInput>
    disconnect?: Enumerable<FriendWhereUniqueInput>
    delete?: Enumerable<FriendWhereUniqueInput>
    connect?: Enumerable<FriendWhereUniqueInput>
    update?: Enumerable<FriendUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FriendUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FriendScalarWhereInput>
  }

  export type CalendarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CalendarCreateWithoutUserInput>, Enumerable<CalendarUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CalendarCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CalendarUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CalendarCreateManyUserInputEnvelope
    set?: Enumerable<CalendarWhereUniqueInput>
    disconnect?: Enumerable<CalendarWhereUniqueInput>
    delete?: Enumerable<CalendarWhereUniqueInput>
    connect?: Enumerable<CalendarWhereUniqueInput>
    update?: Enumerable<CalendarUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CalendarUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CalendarScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutCalendarsInput = {
    create?: XOR<UserCreateWithoutCalendarsInput, UserUncheckedCreateWithoutCalendarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarsInput
    connect?: UserWhereUniqueInput
  }

  export type FriendCreateNestedManyWithoutCalendarsInput = {
    create?: XOR<Enumerable<FriendCreateWithoutCalendarsInput>, Enumerable<FriendUncheckedCreateWithoutCalendarsInput>>
    connectOrCreate?: Enumerable<FriendCreateOrConnectWithoutCalendarsInput>
    connect?: Enumerable<FriendWhereUniqueInput>
  }

  export type FriendUncheckedCreateNestedManyWithoutCalendarsInput = {
    create?: XOR<Enumerable<FriendCreateWithoutCalendarsInput>, Enumerable<FriendUncheckedCreateWithoutCalendarsInput>>
    connectOrCreate?: Enumerable<FriendCreateOrConnectWithoutCalendarsInput>
    connect?: Enumerable<FriendWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutCalendarsNestedInput = {
    create?: XOR<UserCreateWithoutCalendarsInput, UserUncheckedCreateWithoutCalendarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarsInput
    upsert?: UserUpsertWithoutCalendarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCalendarsInput, UserUncheckedUpdateWithoutCalendarsInput>
  }

  export type FriendUpdateManyWithoutCalendarsNestedInput = {
    create?: XOR<Enumerable<FriendCreateWithoutCalendarsInput>, Enumerable<FriendUncheckedCreateWithoutCalendarsInput>>
    connectOrCreate?: Enumerable<FriendCreateOrConnectWithoutCalendarsInput>
    upsert?: Enumerable<FriendUpsertWithWhereUniqueWithoutCalendarsInput>
    set?: Enumerable<FriendWhereUniqueInput>
    disconnect?: Enumerable<FriendWhereUniqueInput>
    delete?: Enumerable<FriendWhereUniqueInput>
    connect?: Enumerable<FriendWhereUniqueInput>
    update?: Enumerable<FriendUpdateWithWhereUniqueWithoutCalendarsInput>
    updateMany?: Enumerable<FriendUpdateManyWithWhereWithoutCalendarsInput>
    deleteMany?: Enumerable<FriendScalarWhereInput>
  }

  export type FriendUncheckedUpdateManyWithoutCalendarsNestedInput = {
    create?: XOR<Enumerable<FriendCreateWithoutCalendarsInput>, Enumerable<FriendUncheckedCreateWithoutCalendarsInput>>
    connectOrCreate?: Enumerable<FriendCreateOrConnectWithoutCalendarsInput>
    upsert?: Enumerable<FriendUpsertWithWhereUniqueWithoutCalendarsInput>
    set?: Enumerable<FriendWhereUniqueInput>
    disconnect?: Enumerable<FriendWhereUniqueInput>
    delete?: Enumerable<FriendWhereUniqueInput>
    connect?: Enumerable<FriendWhereUniqueInput>
    update?: Enumerable<FriendUpdateWithWhereUniqueWithoutCalendarsInput>
    updateMany?: Enumerable<FriendUpdateManyWithWhereWithoutCalendarsInput>
    deleteMany?: Enumerable<FriendScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type CalendarCreateNestedManyWithoutFriendsInput = {
    create?: XOR<Enumerable<CalendarCreateWithoutFriendsInput>, Enumerable<CalendarUncheckedCreateWithoutFriendsInput>>
    connectOrCreate?: Enumerable<CalendarCreateOrConnectWithoutFriendsInput>
    connect?: Enumerable<CalendarWhereUniqueInput>
  }

  export type CalendarUncheckedCreateNestedManyWithoutFriendsInput = {
    create?: XOR<Enumerable<CalendarCreateWithoutFriendsInput>, Enumerable<CalendarUncheckedCreateWithoutFriendsInput>>
    connectOrCreate?: Enumerable<CalendarCreateOrConnectWithoutFriendsInput>
    connect?: Enumerable<CalendarWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type CalendarUpdateManyWithoutFriendsNestedInput = {
    create?: XOR<Enumerable<CalendarCreateWithoutFriendsInput>, Enumerable<CalendarUncheckedCreateWithoutFriendsInput>>
    connectOrCreate?: Enumerable<CalendarCreateOrConnectWithoutFriendsInput>
    upsert?: Enumerable<CalendarUpsertWithWhereUniqueWithoutFriendsInput>
    set?: Enumerable<CalendarWhereUniqueInput>
    disconnect?: Enumerable<CalendarWhereUniqueInput>
    delete?: Enumerable<CalendarWhereUniqueInput>
    connect?: Enumerable<CalendarWhereUniqueInput>
    update?: Enumerable<CalendarUpdateWithWhereUniqueWithoutFriendsInput>
    updateMany?: Enumerable<CalendarUpdateManyWithWhereWithoutFriendsInput>
    deleteMany?: Enumerable<CalendarScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CalendarUncheckedUpdateManyWithoutFriendsNestedInput = {
    create?: XOR<Enumerable<CalendarCreateWithoutFriendsInput>, Enumerable<CalendarUncheckedCreateWithoutFriendsInput>>
    connectOrCreate?: Enumerable<CalendarCreateOrConnectWithoutFriendsInput>
    upsert?: Enumerable<CalendarUpsertWithWhereUniqueWithoutFriendsInput>
    set?: Enumerable<CalendarWhereUniqueInput>
    disconnect?: Enumerable<CalendarWhereUniqueInput>
    delete?: Enumerable<CalendarWhereUniqueInput>
    connect?: Enumerable<CalendarWhereUniqueInput>
    update?: Enumerable<CalendarUpdateWithWhereUniqueWithoutFriendsInput>
    updateMany?: Enumerable<CalendarUpdateManyWithWhereWithoutFriendsInput>
    deleteMany?: Enumerable<CalendarScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    friends?: FriendCreateNestedManyWithoutUserInput
    calendars?: CalendarCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    calendars?: CalendarUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    friends?: FriendUpdateManyWithoutUserNestedInput
    calendars?: CalendarUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    calendars?: CalendarUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FriendCreateWithoutUserInput = {
    id?: string
    calendars?: CalendarCreateNestedManyWithoutFriendsInput
    name: string
    gender: string
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: boolean
    doubled: boolean
    region: string
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
  }

  export type FriendUncheckedCreateWithoutUserInput = {
    id?: string
    calendars?: CalendarUncheckedCreateNestedManyWithoutFriendsInput
    name: string
    gender: string
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: boolean
    doubled: boolean
    region: string
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
  }

  export type FriendCreateOrConnectWithoutUserInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendCreateManyUserInputEnvelope = {
    data: Enumerable<FriendCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CalendarCreateWithoutUserInput = {
    id?: string
    key: string
    emotion: string
    title: string
    content: string
    friends?: FriendCreateNestedManyWithoutCalendarsInput
  }

  export type CalendarUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    emotion: string
    title: string
    content: string
    friends?: FriendUncheckedCreateNestedManyWithoutCalendarsInput
  }

  export type CalendarCreateOrConnectWithoutUserInput = {
    where: CalendarWhereUniqueInput
    create: XOR<CalendarCreateWithoutUserInput, CalendarUncheckedCreateWithoutUserInput>
  }

  export type CalendarCreateManyUserInputEnvelope = {
    data: Enumerable<CalendarCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FriendUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
  }

  export type FriendUpdateManyWithWhereWithoutUserInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendsInput>
  }

  export type FriendScalarWhereInput = {
    AND?: Enumerable<FriendScalarWhereInput>
    OR?: Enumerable<FriendScalarWhereInput>
    NOT?: Enumerable<FriendScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    name?: StringFilter | string
    gender?: StringFilter | string
    birth_year?: IntFilter | number
    birth_month?: IntFilter | number
    birth_day?: IntFilter | number
    birth_hour?: IntFilter | number
    birth_minute?: IntFilter | number
    is_moon?: BoolFilter | boolean
    doubled?: BoolFilter | boolean
    region?: StringFilter | string
    saju_year_code?: IntFilter | number
    saju_month_code?: IntFilter | number
    saju_day_code?: IntFilter | number
    saju_time_code?: IntFilter | number
  }

  export type CalendarUpsertWithWhereUniqueWithoutUserInput = {
    where: CalendarWhereUniqueInput
    update: XOR<CalendarUpdateWithoutUserInput, CalendarUncheckedUpdateWithoutUserInput>
    create: XOR<CalendarCreateWithoutUserInput, CalendarUncheckedCreateWithoutUserInput>
  }

  export type CalendarUpdateWithWhereUniqueWithoutUserInput = {
    where: CalendarWhereUniqueInput
    data: XOR<CalendarUpdateWithoutUserInput, CalendarUncheckedUpdateWithoutUserInput>
  }

  export type CalendarUpdateManyWithWhereWithoutUserInput = {
    where: CalendarScalarWhereInput
    data: XOR<CalendarUpdateManyMutationInput, CalendarUncheckedUpdateManyWithoutCalendarsInput>
  }

  export type CalendarScalarWhereInput = {
    AND?: Enumerable<CalendarScalarWhereInput>
    OR?: Enumerable<CalendarScalarWhereInput>
    NOT?: Enumerable<CalendarScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    key?: StringFilter | string
    emotion?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    friends?: FriendCreateNestedManyWithoutUserInput
    calendars?: CalendarCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    calendars?: CalendarUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    friends?: FriendUpdateManyWithoutUserNestedInput
    calendars?: CalendarUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    calendars?: CalendarUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCalendarsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    friends?: FriendCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCalendarsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCalendarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCalendarsInput, UserUncheckedCreateWithoutCalendarsInput>
  }

  export type FriendCreateWithoutCalendarsInput = {
    id?: string
    user: UserCreateNestedOneWithoutFriendsInput
    name: string
    gender: string
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: boolean
    doubled: boolean
    region: string
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
  }

  export type FriendUncheckedCreateWithoutCalendarsInput = {
    id?: string
    userId: string
    name: string
    gender: string
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: boolean
    doubled: boolean
    region: string
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
  }

  export type FriendCreateOrConnectWithoutCalendarsInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutCalendarsInput, FriendUncheckedCreateWithoutCalendarsInput>
  }

  export type UserUpsertWithoutCalendarsInput = {
    update: XOR<UserUpdateWithoutCalendarsInput, UserUncheckedUpdateWithoutCalendarsInput>
    create: XOR<UserCreateWithoutCalendarsInput, UserUncheckedCreateWithoutCalendarsInput>
  }

  export type UserUpdateWithoutCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    friends?: FriendUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FriendUpsertWithWhereUniqueWithoutCalendarsInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutCalendarsInput, FriendUncheckedUpdateWithoutCalendarsInput>
    create: XOR<FriendCreateWithoutCalendarsInput, FriendUncheckedCreateWithoutCalendarsInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutCalendarsInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutCalendarsInput, FriendUncheckedUpdateWithoutCalendarsInput>
  }

  export type FriendUpdateManyWithWhereWithoutCalendarsInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendsInput>
  }

  export type UserCreateWithoutFriendsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    calendars?: CalendarCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    gender?: string | null
    birth_year?: number | null
    birth_month?: number | null
    birth_day?: number | null
    birth_hour?: number | null
    birth_minute?: number | null
    is_moon?: boolean | null
    doubled?: boolean | null
    region?: string | null
    saju_year_code?: number | null
    saju_month_code?: number | null
    saju_day_code?: number | null
    saju_time_code?: number | null
    calendars?: CalendarUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type CalendarCreateWithoutFriendsInput = {
    id?: string
    user: UserCreateNestedOneWithoutCalendarsInput
    key: string
    emotion: string
    title: string
    content: string
  }

  export type CalendarUncheckedCreateWithoutFriendsInput = {
    id?: string
    userId: string
    key: string
    emotion: string
    title: string
    content: string
  }

  export type CalendarCreateOrConnectWithoutFriendsInput = {
    where: CalendarWhereUniqueInput
    create: XOR<CalendarCreateWithoutFriendsInput, CalendarUncheckedCreateWithoutFriendsInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    calendars?: CalendarUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_year?: NullableIntFieldUpdateOperationsInput | number | null
    birth_month?: NullableIntFieldUpdateOperationsInput | number | null
    birth_day?: NullableIntFieldUpdateOperationsInput | number | null
    birth_hour?: NullableIntFieldUpdateOperationsInput | number | null
    birth_minute?: NullableIntFieldUpdateOperationsInput | number | null
    is_moon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doubled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    saju_year_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_month_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_day_code?: NullableIntFieldUpdateOperationsInput | number | null
    saju_time_code?: NullableIntFieldUpdateOperationsInput | number | null
    calendars?: CalendarUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CalendarUpsertWithWhereUniqueWithoutFriendsInput = {
    where: CalendarWhereUniqueInput
    update: XOR<CalendarUpdateWithoutFriendsInput, CalendarUncheckedUpdateWithoutFriendsInput>
    create: XOR<CalendarCreateWithoutFriendsInput, CalendarUncheckedCreateWithoutFriendsInput>
  }

  export type CalendarUpdateWithWhereUniqueWithoutFriendsInput = {
    where: CalendarWhereUniqueInput
    data: XOR<CalendarUpdateWithoutFriendsInput, CalendarUncheckedUpdateWithoutFriendsInput>
  }

  export type CalendarUpdateManyWithWhereWithoutFriendsInput = {
    where: CalendarScalarWhereInput
    data: XOR<CalendarUpdateManyMutationInput, CalendarUncheckedUpdateManyWithoutCalendarsInput>
  }

  export type FriendCreateManyUserInput = {
    id?: string
    name: string
    gender: string
    birth_year: number
    birth_month: number
    birth_day: number
    birth_hour: number
    birth_minute: number
    is_moon: boolean
    doubled: boolean
    region: string
    saju_year_code: number
    saju_month_code: number
    saju_day_code: number
    saju_time_code: number
  }

  export type CalendarCreateManyUserInput = {
    id?: string
    key: string
    emotion: string
    title: string
    content: string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type FriendUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendars?: CalendarUpdateManyWithoutFriendsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth_year?: IntFieldUpdateOperationsInput | number
    birth_month?: IntFieldUpdateOperationsInput | number
    birth_day?: IntFieldUpdateOperationsInput | number
    birth_hour?: IntFieldUpdateOperationsInput | number
    birth_minute?: IntFieldUpdateOperationsInput | number
    is_moon?: BoolFieldUpdateOperationsInput | boolean
    doubled?: BoolFieldUpdateOperationsInput | boolean
    region?: StringFieldUpdateOperationsInput | string
    saju_year_code?: IntFieldUpdateOperationsInput | number
    saju_month_code?: IntFieldUpdateOperationsInput | number
    saju_day_code?: IntFieldUpdateOperationsInput | number
    saju_time_code?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendars?: CalendarUncheckedUpdateManyWithoutFriendsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth_year?: IntFieldUpdateOperationsInput | number
    birth_month?: IntFieldUpdateOperationsInput | number
    birth_day?: IntFieldUpdateOperationsInput | number
    birth_hour?: IntFieldUpdateOperationsInput | number
    birth_minute?: IntFieldUpdateOperationsInput | number
    is_moon?: BoolFieldUpdateOperationsInput | boolean
    doubled?: BoolFieldUpdateOperationsInput | boolean
    region?: StringFieldUpdateOperationsInput | string
    saju_year_code?: IntFieldUpdateOperationsInput | number
    saju_month_code?: IntFieldUpdateOperationsInput | number
    saju_day_code?: IntFieldUpdateOperationsInput | number
    saju_time_code?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUncheckedUpdateManyWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth_year?: IntFieldUpdateOperationsInput | number
    birth_month?: IntFieldUpdateOperationsInput | number
    birth_day?: IntFieldUpdateOperationsInput | number
    birth_hour?: IntFieldUpdateOperationsInput | number
    birth_minute?: IntFieldUpdateOperationsInput | number
    is_moon?: BoolFieldUpdateOperationsInput | boolean
    doubled?: BoolFieldUpdateOperationsInput | boolean
    region?: StringFieldUpdateOperationsInput | string
    saju_year_code?: IntFieldUpdateOperationsInput | number
    saju_month_code?: IntFieldUpdateOperationsInput | number
    saju_day_code?: IntFieldUpdateOperationsInput | number
    saju_time_code?: IntFieldUpdateOperationsInput | number
  }

  export type CalendarUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    emotion?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    friends?: FriendUpdateManyWithoutCalendarsNestedInput
  }

  export type CalendarUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    emotion?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    friends?: FriendUncheckedUpdateManyWithoutCalendarsNestedInput
  }

  export type CalendarUncheckedUpdateManyWithoutCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    emotion?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUpdateWithoutCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth_year?: IntFieldUpdateOperationsInput | number
    birth_month?: IntFieldUpdateOperationsInput | number
    birth_day?: IntFieldUpdateOperationsInput | number
    birth_hour?: IntFieldUpdateOperationsInput | number
    birth_minute?: IntFieldUpdateOperationsInput | number
    is_moon?: BoolFieldUpdateOperationsInput | boolean
    doubled?: BoolFieldUpdateOperationsInput | boolean
    region?: StringFieldUpdateOperationsInput | string
    saju_year_code?: IntFieldUpdateOperationsInput | number
    saju_month_code?: IntFieldUpdateOperationsInput | number
    saju_day_code?: IntFieldUpdateOperationsInput | number
    saju_time_code?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUncheckedUpdateWithoutCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth_year?: IntFieldUpdateOperationsInput | number
    birth_month?: IntFieldUpdateOperationsInput | number
    birth_day?: IntFieldUpdateOperationsInput | number
    birth_hour?: IntFieldUpdateOperationsInput | number
    birth_minute?: IntFieldUpdateOperationsInput | number
    is_moon?: BoolFieldUpdateOperationsInput | boolean
    doubled?: BoolFieldUpdateOperationsInput | boolean
    region?: StringFieldUpdateOperationsInput | string
    saju_year_code?: IntFieldUpdateOperationsInput | number
    saju_month_code?: IntFieldUpdateOperationsInput | number
    saju_day_code?: IntFieldUpdateOperationsInput | number
    saju_time_code?: IntFieldUpdateOperationsInput | number
  }

  export type CalendarUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCalendarsNestedInput
    key?: StringFieldUpdateOperationsInput | string
    emotion?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarUncheckedUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    emotion?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}