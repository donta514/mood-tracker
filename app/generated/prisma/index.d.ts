
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MoodEntry
 * 
 */
export type MoodEntry = $Result.DefaultSelection<Prisma.$MoodEntryPayload>
/**
 * Model FeelingTag
 * 
 */
export type FeelingTag = $Result.DefaultSelection<Prisma.$FeelingTagPayload>
/**
 * Model MoodQuote
 * 
 */
export type MoodQuote = $Result.DefaultSelection<Prisma.$MoodQuotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodEntry`: Exposes CRUD operations for the **MoodEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodEntries
    * const moodEntries = await prisma.moodEntry.findMany()
    * ```
    */
  get moodEntry(): Prisma.MoodEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feelingTag`: Exposes CRUD operations for the **FeelingTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeelingTags
    * const feelingTags = await prisma.feelingTag.findMany()
    * ```
    */
  get feelingTag(): Prisma.FeelingTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodQuote`: Exposes CRUD operations for the **MoodQuote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodQuotes
    * const moodQuotes = await prisma.moodQuote.findMany()
    * ```
    */
  get moodQuote(): Prisma.MoodQuoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MoodEntry: 'MoodEntry',
    FeelingTag: 'FeelingTag',
    MoodQuote: 'MoodQuote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "moodEntry" | "feelingTag" | "moodQuote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MoodEntry: {
        payload: Prisma.$MoodEntryPayload<ExtArgs>
        fields: Prisma.MoodEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          findFirst: {
            args: Prisma.MoodEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          findMany: {
            args: Prisma.MoodEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>[]
          }
          create: {
            args: Prisma.MoodEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          createMany: {
            args: Prisma.MoodEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>[]
          }
          delete: {
            args: Prisma.MoodEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          update: {
            args: Prisma.MoodEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          deleteMany: {
            args: Prisma.MoodEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>[]
          }
          upsert: {
            args: Prisma.MoodEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          aggregate: {
            args: Prisma.MoodEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodEntry>
          }
          groupBy: {
            args: Prisma.MoodEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodEntryCountArgs<ExtArgs>
            result: $Utils.Optional<MoodEntryCountAggregateOutputType> | number
          }
        }
      }
      FeelingTag: {
        payload: Prisma.$FeelingTagPayload<ExtArgs>
        fields: Prisma.FeelingTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeelingTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeelingTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload>
          }
          findFirst: {
            args: Prisma.FeelingTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeelingTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload>
          }
          findMany: {
            args: Prisma.FeelingTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload>[]
          }
          create: {
            args: Prisma.FeelingTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload>
          }
          createMany: {
            args: Prisma.FeelingTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeelingTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload>[]
          }
          delete: {
            args: Prisma.FeelingTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload>
          }
          update: {
            args: Prisma.FeelingTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload>
          }
          deleteMany: {
            args: Prisma.FeelingTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeelingTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeelingTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload>[]
          }
          upsert: {
            args: Prisma.FeelingTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeelingTagPayload>
          }
          aggregate: {
            args: Prisma.FeelingTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeelingTag>
          }
          groupBy: {
            args: Prisma.FeelingTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeelingTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeelingTagCountArgs<ExtArgs>
            result: $Utils.Optional<FeelingTagCountAggregateOutputType> | number
          }
        }
      }
      MoodQuote: {
        payload: Prisma.$MoodQuotePayload<ExtArgs>
        fields: Prisma.MoodQuoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodQuoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodQuoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload>
          }
          findFirst: {
            args: Prisma.MoodQuoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodQuoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload>
          }
          findMany: {
            args: Prisma.MoodQuoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload>[]
          }
          create: {
            args: Prisma.MoodQuoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload>
          }
          createMany: {
            args: Prisma.MoodQuoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodQuoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload>[]
          }
          delete: {
            args: Prisma.MoodQuoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload>
          }
          update: {
            args: Prisma.MoodQuoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload>
          }
          deleteMany: {
            args: Prisma.MoodQuoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodQuoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodQuoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload>[]
          }
          upsert: {
            args: Prisma.MoodQuoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodQuotePayload>
          }
          aggregate: {
            args: Prisma.MoodQuoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodQuote>
          }
          groupBy: {
            args: Prisma.MoodQuoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodQuoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodQuoteCountArgs<ExtArgs>
            result: $Utils.Optional<MoodQuoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    moodEntry?: MoodEntryOmit
    feelingTag?: FeelingTagOmit
    moodQuote?: MoodQuoteOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
    entries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | UserCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodEntryWhereInput
  }


  /**
   * Count Type MoodEntryCountOutputType
   */

  export type MoodEntryCountOutputType = {
    feelings: number
  }

  export type MoodEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feelings?: boolean | MoodEntryCountOutputTypeCountFeelingsArgs
  }

  // Custom InputTypes
  /**
   * MoodEntryCountOutputType without action
   */
  export type MoodEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntryCountOutputType
     */
    select?: MoodEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoodEntryCountOutputType without action
   */
  export type MoodEntryCountOutputTypeCountFeelingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeelingTagWhereInput
  }


  /**
   * Count Type FeelingTagCountOutputType
   */

  export type FeelingTagCountOutputType = {
    entries: number
  }

  export type FeelingTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | FeelingTagCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * FeelingTagCountOutputType without action
   */
  export type FeelingTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTagCountOutputType
     */
    select?: FeelingTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeelingTagCountOutputType without action
   */
  export type FeelingTagCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clerkId: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clerkId: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    clerkId: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    clerkId?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    clerkId?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    clerkId?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    clerkId: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
    email?: boolean
    entries?: boolean | User$entriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "clerkId" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | User$entriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      entries: Prisma.$MoodEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      clerkId: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends User$entriesArgs<ExtArgs> = {}>(args?: Subset<T, User$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.entries
   */
  export type User$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    where?: MoodEntryWhereInput
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    cursor?: MoodEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MoodEntry
   */

  export type AggregateMoodEntry = {
    _count: MoodEntryCountAggregateOutputType | null
    _avg: MoodEntryAvgAggregateOutputType | null
    _sum: MoodEntrySumAggregateOutputType | null
    _min: MoodEntryMinAggregateOutputType | null
    _max: MoodEntryMaxAggregateOutputType | null
  }

  export type MoodEntryAvgAggregateOutputType = {
    mood: number | null
    sleepHours: number | null
  }

  export type MoodEntrySumAggregateOutputType = {
    mood: number | null
    sleepHours: number | null
  }

  export type MoodEntryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    mood: number | null
    journalEntry: string | null
    sleepHours: number | null
  }

  export type MoodEntryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    mood: number | null
    journalEntry: string | null
    sleepHours: number | null
  }

  export type MoodEntryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    mood: number
    journalEntry: number
    sleepHours: number
    _all: number
  }


  export type MoodEntryAvgAggregateInputType = {
    mood?: true
    sleepHours?: true
  }

  export type MoodEntrySumAggregateInputType = {
    mood?: true
    sleepHours?: true
  }

  export type MoodEntryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    mood?: true
    journalEntry?: true
    sleepHours?: true
  }

  export type MoodEntryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    mood?: true
    journalEntry?: true
    sleepHours?: true
  }

  export type MoodEntryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    mood?: true
    journalEntry?: true
    sleepHours?: true
    _all?: true
  }

  export type MoodEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodEntry to aggregate.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodEntries
    **/
    _count?: true | MoodEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoodEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoodEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodEntryMaxAggregateInputType
  }

  export type GetMoodEntryAggregateType<T extends MoodEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodEntry[P]>
      : GetScalarType<T[P], AggregateMoodEntry[P]>
  }




  export type MoodEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodEntryWhereInput
    orderBy?: MoodEntryOrderByWithAggregationInput | MoodEntryOrderByWithAggregationInput[]
    by: MoodEntryScalarFieldEnum[] | MoodEntryScalarFieldEnum
    having?: MoodEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodEntryCountAggregateInputType | true
    _avg?: MoodEntryAvgAggregateInputType
    _sum?: MoodEntrySumAggregateInputType
    _min?: MoodEntryMinAggregateInputType
    _max?: MoodEntryMaxAggregateInputType
  }

  export type MoodEntryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    mood: number
    journalEntry: string
    sleepHours: number
    _count: MoodEntryCountAggregateOutputType | null
    _avg: MoodEntryAvgAggregateOutputType | null
    _sum: MoodEntrySumAggregateOutputType | null
    _min: MoodEntryMinAggregateOutputType | null
    _max: MoodEntryMaxAggregateOutputType | null
  }

  type GetMoodEntryGroupByPayload<T extends MoodEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MoodEntryGroupByOutputType[P]>
        }
      >
    >


  export type MoodEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    mood?: boolean
    journalEntry?: boolean
    sleepHours?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    feelings?: boolean | MoodEntry$feelingsArgs<ExtArgs>
    _count?: boolean | MoodEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEntry"]>

  export type MoodEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    mood?: boolean
    journalEntry?: boolean
    sleepHours?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEntry"]>

  export type MoodEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    mood?: boolean
    journalEntry?: boolean
    sleepHours?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEntry"]>

  export type MoodEntrySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    mood?: boolean
    journalEntry?: boolean
    sleepHours?: boolean
  }

  export type MoodEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "mood" | "journalEntry" | "sleepHours", ExtArgs["result"]["moodEntry"]>
  export type MoodEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    feelings?: boolean | MoodEntry$feelingsArgs<ExtArgs>
    _count?: boolean | MoodEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MoodEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoodEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      feelings: Prisma.$FeelingTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      mood: number
      journalEntry: string
      sleepHours: number
    }, ExtArgs["result"]["moodEntry"]>
    composites: {}
  }

  type MoodEntryGetPayload<S extends boolean | null | undefined | MoodEntryDefaultArgs> = $Result.GetResult<Prisma.$MoodEntryPayload, S>

  type MoodEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodEntryCountAggregateInputType | true
    }

  export interface MoodEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodEntry'], meta: { name: 'MoodEntry' } }
    /**
     * Find zero or one MoodEntry that matches the filter.
     * @param {MoodEntryFindUniqueArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodEntryFindUniqueArgs>(args: SelectSubset<T, MoodEntryFindUniqueArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodEntryFindUniqueOrThrowArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryFindFirstArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodEntryFindFirstArgs>(args?: SelectSubset<T, MoodEntryFindFirstArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryFindFirstOrThrowArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodEntries
     * const moodEntries = await prisma.moodEntry.findMany()
     * 
     * // Get first 10 MoodEntries
     * const moodEntries = await prisma.moodEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodEntryWithIdOnly = await prisma.moodEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodEntryFindManyArgs>(args?: SelectSubset<T, MoodEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodEntry.
     * @param {MoodEntryCreateArgs} args - Arguments to create a MoodEntry.
     * @example
     * // Create one MoodEntry
     * const MoodEntry = await prisma.moodEntry.create({
     *   data: {
     *     // ... data to create a MoodEntry
     *   }
     * })
     * 
     */
    create<T extends MoodEntryCreateArgs>(args: SelectSubset<T, MoodEntryCreateArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodEntries.
     * @param {MoodEntryCreateManyArgs} args - Arguments to create many MoodEntries.
     * @example
     * // Create many MoodEntries
     * const moodEntry = await prisma.moodEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodEntryCreateManyArgs>(args?: SelectSubset<T, MoodEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodEntries and returns the data saved in the database.
     * @param {MoodEntryCreateManyAndReturnArgs} args - Arguments to create many MoodEntries.
     * @example
     * // Create many MoodEntries
     * const moodEntry = await prisma.moodEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodEntries and only return the `id`
     * const moodEntryWithIdOnly = await prisma.moodEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodEntry.
     * @param {MoodEntryDeleteArgs} args - Arguments to delete one MoodEntry.
     * @example
     * // Delete one MoodEntry
     * const MoodEntry = await prisma.moodEntry.delete({
     *   where: {
     *     // ... filter to delete one MoodEntry
     *   }
     * })
     * 
     */
    delete<T extends MoodEntryDeleteArgs>(args: SelectSubset<T, MoodEntryDeleteArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodEntry.
     * @param {MoodEntryUpdateArgs} args - Arguments to update one MoodEntry.
     * @example
     * // Update one MoodEntry
     * const moodEntry = await prisma.moodEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodEntryUpdateArgs>(args: SelectSubset<T, MoodEntryUpdateArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodEntries.
     * @param {MoodEntryDeleteManyArgs} args - Arguments to filter MoodEntries to delete.
     * @example
     * // Delete a few MoodEntries
     * const { count } = await prisma.moodEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodEntryDeleteManyArgs>(args?: SelectSubset<T, MoodEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodEntries
     * const moodEntry = await prisma.moodEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodEntryUpdateManyArgs>(args: SelectSubset<T, MoodEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodEntries and returns the data updated in the database.
     * @param {MoodEntryUpdateManyAndReturnArgs} args - Arguments to update many MoodEntries.
     * @example
     * // Update many MoodEntries
     * const moodEntry = await prisma.moodEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodEntries and only return the `id`
     * const moodEntryWithIdOnly = await prisma.moodEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoodEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodEntry.
     * @param {MoodEntryUpsertArgs} args - Arguments to update or create a MoodEntry.
     * @example
     * // Update or create a MoodEntry
     * const moodEntry = await prisma.moodEntry.upsert({
     *   create: {
     *     // ... data to create a MoodEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodEntry we want to update
     *   }
     * })
     */
    upsert<T extends MoodEntryUpsertArgs>(args: SelectSubset<T, MoodEntryUpsertArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryCountArgs} args - Arguments to filter MoodEntries to count.
     * @example
     * // Count the number of MoodEntries
     * const count = await prisma.moodEntry.count({
     *   where: {
     *     // ... the filter for the MoodEntries we want to count
     *   }
     * })
    **/
    count<T extends MoodEntryCountArgs>(
      args?: Subset<T, MoodEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoodEntryAggregateArgs>(args: Subset<T, MoodEntryAggregateArgs>): Prisma.PrismaPromise<GetMoodEntryAggregateType<T>>

    /**
     * Group by MoodEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryGroupByArgs} args - Group by arguments.
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
      T extends MoodEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodEntryGroupByArgs['orderBy'] }
        : { orderBy?: MoodEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MoodEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodEntry model
   */
  readonly fields: MoodEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feelings<T extends MoodEntry$feelingsArgs<ExtArgs> = {}>(args?: Subset<T, MoodEntry$feelingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoodEntry model
   */
  interface MoodEntryFieldRefs {
    readonly id: FieldRef<"MoodEntry", 'String'>
    readonly createdAt: FieldRef<"MoodEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"MoodEntry", 'DateTime'>
    readonly userId: FieldRef<"MoodEntry", 'String'>
    readonly mood: FieldRef<"MoodEntry", 'Int'>
    readonly journalEntry: FieldRef<"MoodEntry", 'String'>
    readonly sleepHours: FieldRef<"MoodEntry", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MoodEntry findUnique
   */
  export type MoodEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry findUniqueOrThrow
   */
  export type MoodEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry findFirst
   */
  export type MoodEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodEntries.
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodEntries.
     */
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * MoodEntry findFirstOrThrow
   */
  export type MoodEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodEntries.
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodEntries.
     */
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * MoodEntry findMany
   */
  export type MoodEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntries to fetch.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodEntries.
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * MoodEntry create
   */
  export type MoodEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a MoodEntry.
     */
    data: XOR<MoodEntryCreateInput, MoodEntryUncheckedCreateInput>
  }

  /**
   * MoodEntry createMany
   */
  export type MoodEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodEntries.
     */
    data: MoodEntryCreateManyInput | MoodEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodEntry createManyAndReturn
   */
  export type MoodEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * The data used to create many MoodEntries.
     */
    data: MoodEntryCreateManyInput | MoodEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodEntry update
   */
  export type MoodEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a MoodEntry.
     */
    data: XOR<MoodEntryUpdateInput, MoodEntryUncheckedUpdateInput>
    /**
     * Choose, which MoodEntry to update.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry updateMany
   */
  export type MoodEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodEntries.
     */
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyInput>
    /**
     * Filter which MoodEntries to update
     */
    where?: MoodEntryWhereInput
    /**
     * Limit how many MoodEntries to update.
     */
    limit?: number
  }

  /**
   * MoodEntry updateManyAndReturn
   */
  export type MoodEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * The data used to update MoodEntries.
     */
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyInput>
    /**
     * Filter which MoodEntries to update
     */
    where?: MoodEntryWhereInput
    /**
     * Limit how many MoodEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodEntry upsert
   */
  export type MoodEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the MoodEntry to update in case it exists.
     */
    where: MoodEntryWhereUniqueInput
    /**
     * In case the MoodEntry found by the `where` argument doesn't exist, create a new MoodEntry with this data.
     */
    create: XOR<MoodEntryCreateInput, MoodEntryUncheckedCreateInput>
    /**
     * In case the MoodEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodEntryUpdateInput, MoodEntryUncheckedUpdateInput>
  }

  /**
   * MoodEntry delete
   */
  export type MoodEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter which MoodEntry to delete.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry deleteMany
   */
  export type MoodEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodEntries to delete
     */
    where?: MoodEntryWhereInput
    /**
     * Limit how many MoodEntries to delete.
     */
    limit?: number
  }

  /**
   * MoodEntry.feelings
   */
  export type MoodEntry$feelingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    where?: FeelingTagWhereInput
    orderBy?: FeelingTagOrderByWithRelationInput | FeelingTagOrderByWithRelationInput[]
    cursor?: FeelingTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeelingTagScalarFieldEnum | FeelingTagScalarFieldEnum[]
  }

  /**
   * MoodEntry without action
   */
  export type MoodEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
  }


  /**
   * Model FeelingTag
   */

  export type AggregateFeelingTag = {
    _count: FeelingTagCountAggregateOutputType | null
    _min: FeelingTagMinAggregateOutputType | null
    _max: FeelingTagMaxAggregateOutputType | null
  }

  export type FeelingTagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FeelingTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FeelingTagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FeelingTagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FeelingTagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FeelingTagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FeelingTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeelingTag to aggregate.
     */
    where?: FeelingTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeelingTags to fetch.
     */
    orderBy?: FeelingTagOrderByWithRelationInput | FeelingTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeelingTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeelingTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeelingTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeelingTags
    **/
    _count?: true | FeelingTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeelingTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeelingTagMaxAggregateInputType
  }

  export type GetFeelingTagAggregateType<T extends FeelingTagAggregateArgs> = {
        [P in keyof T & keyof AggregateFeelingTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeelingTag[P]>
      : GetScalarType<T[P], AggregateFeelingTag[P]>
  }




  export type FeelingTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeelingTagWhereInput
    orderBy?: FeelingTagOrderByWithAggregationInput | FeelingTagOrderByWithAggregationInput[]
    by: FeelingTagScalarFieldEnum[] | FeelingTagScalarFieldEnum
    having?: FeelingTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeelingTagCountAggregateInputType | true
    _min?: FeelingTagMinAggregateInputType
    _max?: FeelingTagMaxAggregateInputType
  }

  export type FeelingTagGroupByOutputType = {
    id: string
    name: string
    _count: FeelingTagCountAggregateOutputType | null
    _min: FeelingTagMinAggregateOutputType | null
    _max: FeelingTagMaxAggregateOutputType | null
  }

  type GetFeelingTagGroupByPayload<T extends FeelingTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeelingTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeelingTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeelingTagGroupByOutputType[P]>
            : GetScalarType<T[P], FeelingTagGroupByOutputType[P]>
        }
      >
    >


  export type FeelingTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    entries?: boolean | FeelingTag$entriesArgs<ExtArgs>
    _count?: boolean | FeelingTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feelingTag"]>

  export type FeelingTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["feelingTag"]>

  export type FeelingTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["feelingTag"]>

  export type FeelingTagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FeelingTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["feelingTag"]>
  export type FeelingTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | FeelingTag$entriesArgs<ExtArgs>
    _count?: boolean | FeelingTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeelingTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeelingTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeelingTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeelingTag"
    objects: {
      entries: Prisma.$MoodEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["feelingTag"]>
    composites: {}
  }

  type FeelingTagGetPayload<S extends boolean | null | undefined | FeelingTagDefaultArgs> = $Result.GetResult<Prisma.$FeelingTagPayload, S>

  type FeelingTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeelingTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeelingTagCountAggregateInputType | true
    }

  export interface FeelingTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeelingTag'], meta: { name: 'FeelingTag' } }
    /**
     * Find zero or one FeelingTag that matches the filter.
     * @param {FeelingTagFindUniqueArgs} args - Arguments to find a FeelingTag
     * @example
     * // Get one FeelingTag
     * const feelingTag = await prisma.feelingTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeelingTagFindUniqueArgs>(args: SelectSubset<T, FeelingTagFindUniqueArgs<ExtArgs>>): Prisma__FeelingTagClient<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeelingTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeelingTagFindUniqueOrThrowArgs} args - Arguments to find a FeelingTag
     * @example
     * // Get one FeelingTag
     * const feelingTag = await prisma.feelingTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeelingTagFindUniqueOrThrowArgs>(args: SelectSubset<T, FeelingTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeelingTagClient<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeelingTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeelingTagFindFirstArgs} args - Arguments to find a FeelingTag
     * @example
     * // Get one FeelingTag
     * const feelingTag = await prisma.feelingTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeelingTagFindFirstArgs>(args?: SelectSubset<T, FeelingTagFindFirstArgs<ExtArgs>>): Prisma__FeelingTagClient<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeelingTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeelingTagFindFirstOrThrowArgs} args - Arguments to find a FeelingTag
     * @example
     * // Get one FeelingTag
     * const feelingTag = await prisma.feelingTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeelingTagFindFirstOrThrowArgs>(args?: SelectSubset<T, FeelingTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeelingTagClient<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeelingTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeelingTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeelingTags
     * const feelingTags = await prisma.feelingTag.findMany()
     * 
     * // Get first 10 FeelingTags
     * const feelingTags = await prisma.feelingTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feelingTagWithIdOnly = await prisma.feelingTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeelingTagFindManyArgs>(args?: SelectSubset<T, FeelingTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeelingTag.
     * @param {FeelingTagCreateArgs} args - Arguments to create a FeelingTag.
     * @example
     * // Create one FeelingTag
     * const FeelingTag = await prisma.feelingTag.create({
     *   data: {
     *     // ... data to create a FeelingTag
     *   }
     * })
     * 
     */
    create<T extends FeelingTagCreateArgs>(args: SelectSubset<T, FeelingTagCreateArgs<ExtArgs>>): Prisma__FeelingTagClient<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeelingTags.
     * @param {FeelingTagCreateManyArgs} args - Arguments to create many FeelingTags.
     * @example
     * // Create many FeelingTags
     * const feelingTag = await prisma.feelingTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeelingTagCreateManyArgs>(args?: SelectSubset<T, FeelingTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeelingTags and returns the data saved in the database.
     * @param {FeelingTagCreateManyAndReturnArgs} args - Arguments to create many FeelingTags.
     * @example
     * // Create many FeelingTags
     * const feelingTag = await prisma.feelingTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeelingTags and only return the `id`
     * const feelingTagWithIdOnly = await prisma.feelingTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeelingTagCreateManyAndReturnArgs>(args?: SelectSubset<T, FeelingTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeelingTag.
     * @param {FeelingTagDeleteArgs} args - Arguments to delete one FeelingTag.
     * @example
     * // Delete one FeelingTag
     * const FeelingTag = await prisma.feelingTag.delete({
     *   where: {
     *     // ... filter to delete one FeelingTag
     *   }
     * })
     * 
     */
    delete<T extends FeelingTagDeleteArgs>(args: SelectSubset<T, FeelingTagDeleteArgs<ExtArgs>>): Prisma__FeelingTagClient<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeelingTag.
     * @param {FeelingTagUpdateArgs} args - Arguments to update one FeelingTag.
     * @example
     * // Update one FeelingTag
     * const feelingTag = await prisma.feelingTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeelingTagUpdateArgs>(args: SelectSubset<T, FeelingTagUpdateArgs<ExtArgs>>): Prisma__FeelingTagClient<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeelingTags.
     * @param {FeelingTagDeleteManyArgs} args - Arguments to filter FeelingTags to delete.
     * @example
     * // Delete a few FeelingTags
     * const { count } = await prisma.feelingTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeelingTagDeleteManyArgs>(args?: SelectSubset<T, FeelingTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeelingTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeelingTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeelingTags
     * const feelingTag = await prisma.feelingTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeelingTagUpdateManyArgs>(args: SelectSubset<T, FeelingTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeelingTags and returns the data updated in the database.
     * @param {FeelingTagUpdateManyAndReturnArgs} args - Arguments to update many FeelingTags.
     * @example
     * // Update many FeelingTags
     * const feelingTag = await prisma.feelingTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeelingTags and only return the `id`
     * const feelingTagWithIdOnly = await prisma.feelingTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeelingTagUpdateManyAndReturnArgs>(args: SelectSubset<T, FeelingTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeelingTag.
     * @param {FeelingTagUpsertArgs} args - Arguments to update or create a FeelingTag.
     * @example
     * // Update or create a FeelingTag
     * const feelingTag = await prisma.feelingTag.upsert({
     *   create: {
     *     // ... data to create a FeelingTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeelingTag we want to update
     *   }
     * })
     */
    upsert<T extends FeelingTagUpsertArgs>(args: SelectSubset<T, FeelingTagUpsertArgs<ExtArgs>>): Prisma__FeelingTagClient<$Result.GetResult<Prisma.$FeelingTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeelingTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeelingTagCountArgs} args - Arguments to filter FeelingTags to count.
     * @example
     * // Count the number of FeelingTags
     * const count = await prisma.feelingTag.count({
     *   where: {
     *     // ... the filter for the FeelingTags we want to count
     *   }
     * })
    **/
    count<T extends FeelingTagCountArgs>(
      args?: Subset<T, FeelingTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeelingTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeelingTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeelingTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeelingTagAggregateArgs>(args: Subset<T, FeelingTagAggregateArgs>): Prisma.PrismaPromise<GetFeelingTagAggregateType<T>>

    /**
     * Group by FeelingTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeelingTagGroupByArgs} args - Group by arguments.
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
      T extends FeelingTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeelingTagGroupByArgs['orderBy'] }
        : { orderBy?: FeelingTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FeelingTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeelingTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeelingTag model
   */
  readonly fields: FeelingTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeelingTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeelingTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends FeelingTag$entriesArgs<ExtArgs> = {}>(args?: Subset<T, FeelingTag$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeelingTag model
   */
  interface FeelingTagFieldRefs {
    readonly id: FieldRef<"FeelingTag", 'String'>
    readonly name: FieldRef<"FeelingTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeelingTag findUnique
   */
  export type FeelingTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    /**
     * Filter, which FeelingTag to fetch.
     */
    where: FeelingTagWhereUniqueInput
  }

  /**
   * FeelingTag findUniqueOrThrow
   */
  export type FeelingTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    /**
     * Filter, which FeelingTag to fetch.
     */
    where: FeelingTagWhereUniqueInput
  }

  /**
   * FeelingTag findFirst
   */
  export type FeelingTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    /**
     * Filter, which FeelingTag to fetch.
     */
    where?: FeelingTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeelingTags to fetch.
     */
    orderBy?: FeelingTagOrderByWithRelationInput | FeelingTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeelingTags.
     */
    cursor?: FeelingTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeelingTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeelingTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeelingTags.
     */
    distinct?: FeelingTagScalarFieldEnum | FeelingTagScalarFieldEnum[]
  }

  /**
   * FeelingTag findFirstOrThrow
   */
  export type FeelingTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    /**
     * Filter, which FeelingTag to fetch.
     */
    where?: FeelingTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeelingTags to fetch.
     */
    orderBy?: FeelingTagOrderByWithRelationInput | FeelingTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeelingTags.
     */
    cursor?: FeelingTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeelingTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeelingTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeelingTags.
     */
    distinct?: FeelingTagScalarFieldEnum | FeelingTagScalarFieldEnum[]
  }

  /**
   * FeelingTag findMany
   */
  export type FeelingTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    /**
     * Filter, which FeelingTags to fetch.
     */
    where?: FeelingTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeelingTags to fetch.
     */
    orderBy?: FeelingTagOrderByWithRelationInput | FeelingTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeelingTags.
     */
    cursor?: FeelingTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeelingTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeelingTags.
     */
    skip?: number
    distinct?: FeelingTagScalarFieldEnum | FeelingTagScalarFieldEnum[]
  }

  /**
   * FeelingTag create
   */
  export type FeelingTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    /**
     * The data needed to create a FeelingTag.
     */
    data: XOR<FeelingTagCreateInput, FeelingTagUncheckedCreateInput>
  }

  /**
   * FeelingTag createMany
   */
  export type FeelingTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeelingTags.
     */
    data: FeelingTagCreateManyInput | FeelingTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeelingTag createManyAndReturn
   */
  export type FeelingTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * The data used to create many FeelingTags.
     */
    data: FeelingTagCreateManyInput | FeelingTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeelingTag update
   */
  export type FeelingTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    /**
     * The data needed to update a FeelingTag.
     */
    data: XOR<FeelingTagUpdateInput, FeelingTagUncheckedUpdateInput>
    /**
     * Choose, which FeelingTag to update.
     */
    where: FeelingTagWhereUniqueInput
  }

  /**
   * FeelingTag updateMany
   */
  export type FeelingTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeelingTags.
     */
    data: XOR<FeelingTagUpdateManyMutationInput, FeelingTagUncheckedUpdateManyInput>
    /**
     * Filter which FeelingTags to update
     */
    where?: FeelingTagWhereInput
    /**
     * Limit how many FeelingTags to update.
     */
    limit?: number
  }

  /**
   * FeelingTag updateManyAndReturn
   */
  export type FeelingTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * The data used to update FeelingTags.
     */
    data: XOR<FeelingTagUpdateManyMutationInput, FeelingTagUncheckedUpdateManyInput>
    /**
     * Filter which FeelingTags to update
     */
    where?: FeelingTagWhereInput
    /**
     * Limit how many FeelingTags to update.
     */
    limit?: number
  }

  /**
   * FeelingTag upsert
   */
  export type FeelingTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    /**
     * The filter to search for the FeelingTag to update in case it exists.
     */
    where: FeelingTagWhereUniqueInput
    /**
     * In case the FeelingTag found by the `where` argument doesn't exist, create a new FeelingTag with this data.
     */
    create: XOR<FeelingTagCreateInput, FeelingTagUncheckedCreateInput>
    /**
     * In case the FeelingTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeelingTagUpdateInput, FeelingTagUncheckedUpdateInput>
  }

  /**
   * FeelingTag delete
   */
  export type FeelingTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
    /**
     * Filter which FeelingTag to delete.
     */
    where: FeelingTagWhereUniqueInput
  }

  /**
   * FeelingTag deleteMany
   */
  export type FeelingTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeelingTags to delete
     */
    where?: FeelingTagWhereInput
    /**
     * Limit how many FeelingTags to delete.
     */
    limit?: number
  }

  /**
   * FeelingTag.entries
   */
  export type FeelingTag$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    where?: MoodEntryWhereInput
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    cursor?: MoodEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * FeelingTag without action
   */
  export type FeelingTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeelingTag
     */
    select?: FeelingTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeelingTag
     */
    omit?: FeelingTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeelingTagInclude<ExtArgs> | null
  }


  /**
   * Model MoodQuote
   */

  export type AggregateMoodQuote = {
    _count: MoodQuoteCountAggregateOutputType | null
    _avg: MoodQuoteAvgAggregateOutputType | null
    _sum: MoodQuoteSumAggregateOutputType | null
    _min: MoodQuoteMinAggregateOutputType | null
    _max: MoodQuoteMaxAggregateOutputType | null
  }

  export type MoodQuoteAvgAggregateOutputType = {
    moodLevel: number | null
  }

  export type MoodQuoteSumAggregateOutputType = {
    moodLevel: number | null
  }

  export type MoodQuoteMinAggregateOutputType = {
    id: string | null
    moodLevel: number | null
    quote: string | null
  }

  export type MoodQuoteMaxAggregateOutputType = {
    id: string | null
    moodLevel: number | null
    quote: string | null
  }

  export type MoodQuoteCountAggregateOutputType = {
    id: number
    moodLevel: number
    quote: number
    _all: number
  }


  export type MoodQuoteAvgAggregateInputType = {
    moodLevel?: true
  }

  export type MoodQuoteSumAggregateInputType = {
    moodLevel?: true
  }

  export type MoodQuoteMinAggregateInputType = {
    id?: true
    moodLevel?: true
    quote?: true
  }

  export type MoodQuoteMaxAggregateInputType = {
    id?: true
    moodLevel?: true
    quote?: true
  }

  export type MoodQuoteCountAggregateInputType = {
    id?: true
    moodLevel?: true
    quote?: true
    _all?: true
  }

  export type MoodQuoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodQuote to aggregate.
     */
    where?: MoodQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodQuotes to fetch.
     */
    orderBy?: MoodQuoteOrderByWithRelationInput | MoodQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodQuotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodQuotes
    **/
    _count?: true | MoodQuoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoodQuoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoodQuoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodQuoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodQuoteMaxAggregateInputType
  }

  export type GetMoodQuoteAggregateType<T extends MoodQuoteAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodQuote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodQuote[P]>
      : GetScalarType<T[P], AggregateMoodQuote[P]>
  }




  export type MoodQuoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodQuoteWhereInput
    orderBy?: MoodQuoteOrderByWithAggregationInput | MoodQuoteOrderByWithAggregationInput[]
    by: MoodQuoteScalarFieldEnum[] | MoodQuoteScalarFieldEnum
    having?: MoodQuoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodQuoteCountAggregateInputType | true
    _avg?: MoodQuoteAvgAggregateInputType
    _sum?: MoodQuoteSumAggregateInputType
    _min?: MoodQuoteMinAggregateInputType
    _max?: MoodQuoteMaxAggregateInputType
  }

  export type MoodQuoteGroupByOutputType = {
    id: string
    moodLevel: number
    quote: string
    _count: MoodQuoteCountAggregateOutputType | null
    _avg: MoodQuoteAvgAggregateOutputType | null
    _sum: MoodQuoteSumAggregateOutputType | null
    _min: MoodQuoteMinAggregateOutputType | null
    _max: MoodQuoteMaxAggregateOutputType | null
  }

  type GetMoodQuoteGroupByPayload<T extends MoodQuoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodQuoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodQuoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodQuoteGroupByOutputType[P]>
            : GetScalarType<T[P], MoodQuoteGroupByOutputType[P]>
        }
      >
    >


  export type MoodQuoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moodLevel?: boolean
    quote?: boolean
  }, ExtArgs["result"]["moodQuote"]>

  export type MoodQuoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moodLevel?: boolean
    quote?: boolean
  }, ExtArgs["result"]["moodQuote"]>

  export type MoodQuoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moodLevel?: boolean
    quote?: boolean
  }, ExtArgs["result"]["moodQuote"]>

  export type MoodQuoteSelectScalar = {
    id?: boolean
    moodLevel?: boolean
    quote?: boolean
  }

  export type MoodQuoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moodLevel" | "quote", ExtArgs["result"]["moodQuote"]>

  export type $MoodQuotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodQuote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      moodLevel: number
      quote: string
    }, ExtArgs["result"]["moodQuote"]>
    composites: {}
  }

  type MoodQuoteGetPayload<S extends boolean | null | undefined | MoodQuoteDefaultArgs> = $Result.GetResult<Prisma.$MoodQuotePayload, S>

  type MoodQuoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodQuoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodQuoteCountAggregateInputType | true
    }

  export interface MoodQuoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodQuote'], meta: { name: 'MoodQuote' } }
    /**
     * Find zero or one MoodQuote that matches the filter.
     * @param {MoodQuoteFindUniqueArgs} args - Arguments to find a MoodQuote
     * @example
     * // Get one MoodQuote
     * const moodQuote = await prisma.moodQuote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodQuoteFindUniqueArgs>(args: SelectSubset<T, MoodQuoteFindUniqueArgs<ExtArgs>>): Prisma__MoodQuoteClient<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodQuote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodQuoteFindUniqueOrThrowArgs} args - Arguments to find a MoodQuote
     * @example
     * // Get one MoodQuote
     * const moodQuote = await prisma.moodQuote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodQuoteFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodQuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodQuoteClient<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodQuote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodQuoteFindFirstArgs} args - Arguments to find a MoodQuote
     * @example
     * // Get one MoodQuote
     * const moodQuote = await prisma.moodQuote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodQuoteFindFirstArgs>(args?: SelectSubset<T, MoodQuoteFindFirstArgs<ExtArgs>>): Prisma__MoodQuoteClient<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodQuote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodQuoteFindFirstOrThrowArgs} args - Arguments to find a MoodQuote
     * @example
     * // Get one MoodQuote
     * const moodQuote = await prisma.moodQuote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodQuoteFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodQuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodQuoteClient<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodQuotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodQuoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodQuotes
     * const moodQuotes = await prisma.moodQuote.findMany()
     * 
     * // Get first 10 MoodQuotes
     * const moodQuotes = await prisma.moodQuote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodQuoteWithIdOnly = await prisma.moodQuote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodQuoteFindManyArgs>(args?: SelectSubset<T, MoodQuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodQuote.
     * @param {MoodQuoteCreateArgs} args - Arguments to create a MoodQuote.
     * @example
     * // Create one MoodQuote
     * const MoodQuote = await prisma.moodQuote.create({
     *   data: {
     *     // ... data to create a MoodQuote
     *   }
     * })
     * 
     */
    create<T extends MoodQuoteCreateArgs>(args: SelectSubset<T, MoodQuoteCreateArgs<ExtArgs>>): Prisma__MoodQuoteClient<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodQuotes.
     * @param {MoodQuoteCreateManyArgs} args - Arguments to create many MoodQuotes.
     * @example
     * // Create many MoodQuotes
     * const moodQuote = await prisma.moodQuote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodQuoteCreateManyArgs>(args?: SelectSubset<T, MoodQuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodQuotes and returns the data saved in the database.
     * @param {MoodQuoteCreateManyAndReturnArgs} args - Arguments to create many MoodQuotes.
     * @example
     * // Create many MoodQuotes
     * const moodQuote = await prisma.moodQuote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodQuotes and only return the `id`
     * const moodQuoteWithIdOnly = await prisma.moodQuote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodQuoteCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodQuoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodQuote.
     * @param {MoodQuoteDeleteArgs} args - Arguments to delete one MoodQuote.
     * @example
     * // Delete one MoodQuote
     * const MoodQuote = await prisma.moodQuote.delete({
     *   where: {
     *     // ... filter to delete one MoodQuote
     *   }
     * })
     * 
     */
    delete<T extends MoodQuoteDeleteArgs>(args: SelectSubset<T, MoodQuoteDeleteArgs<ExtArgs>>): Prisma__MoodQuoteClient<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodQuote.
     * @param {MoodQuoteUpdateArgs} args - Arguments to update one MoodQuote.
     * @example
     * // Update one MoodQuote
     * const moodQuote = await prisma.moodQuote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodQuoteUpdateArgs>(args: SelectSubset<T, MoodQuoteUpdateArgs<ExtArgs>>): Prisma__MoodQuoteClient<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodQuotes.
     * @param {MoodQuoteDeleteManyArgs} args - Arguments to filter MoodQuotes to delete.
     * @example
     * // Delete a few MoodQuotes
     * const { count } = await prisma.moodQuote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodQuoteDeleteManyArgs>(args?: SelectSubset<T, MoodQuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodQuotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodQuoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodQuotes
     * const moodQuote = await prisma.moodQuote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodQuoteUpdateManyArgs>(args: SelectSubset<T, MoodQuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodQuotes and returns the data updated in the database.
     * @param {MoodQuoteUpdateManyAndReturnArgs} args - Arguments to update many MoodQuotes.
     * @example
     * // Update many MoodQuotes
     * const moodQuote = await prisma.moodQuote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodQuotes and only return the `id`
     * const moodQuoteWithIdOnly = await prisma.moodQuote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoodQuoteUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodQuoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodQuote.
     * @param {MoodQuoteUpsertArgs} args - Arguments to update or create a MoodQuote.
     * @example
     * // Update or create a MoodQuote
     * const moodQuote = await prisma.moodQuote.upsert({
     *   create: {
     *     // ... data to create a MoodQuote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodQuote we want to update
     *   }
     * })
     */
    upsert<T extends MoodQuoteUpsertArgs>(args: SelectSubset<T, MoodQuoteUpsertArgs<ExtArgs>>): Prisma__MoodQuoteClient<$Result.GetResult<Prisma.$MoodQuotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodQuotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodQuoteCountArgs} args - Arguments to filter MoodQuotes to count.
     * @example
     * // Count the number of MoodQuotes
     * const count = await prisma.moodQuote.count({
     *   where: {
     *     // ... the filter for the MoodQuotes we want to count
     *   }
     * })
    **/
    count<T extends MoodQuoteCountArgs>(
      args?: Subset<T, MoodQuoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodQuoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodQuote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodQuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoodQuoteAggregateArgs>(args: Subset<T, MoodQuoteAggregateArgs>): Prisma.PrismaPromise<GetMoodQuoteAggregateType<T>>

    /**
     * Group by MoodQuote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodQuoteGroupByArgs} args - Group by arguments.
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
      T extends MoodQuoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodQuoteGroupByArgs['orderBy'] }
        : { orderBy?: MoodQuoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MoodQuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodQuote model
   */
  readonly fields: MoodQuoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodQuote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodQuoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoodQuote model
   */
  interface MoodQuoteFieldRefs {
    readonly id: FieldRef<"MoodQuote", 'String'>
    readonly moodLevel: FieldRef<"MoodQuote", 'Int'>
    readonly quote: FieldRef<"MoodQuote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MoodQuote findUnique
   */
  export type MoodQuoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * Filter, which MoodQuote to fetch.
     */
    where: MoodQuoteWhereUniqueInput
  }

  /**
   * MoodQuote findUniqueOrThrow
   */
  export type MoodQuoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * Filter, which MoodQuote to fetch.
     */
    where: MoodQuoteWhereUniqueInput
  }

  /**
   * MoodQuote findFirst
   */
  export type MoodQuoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * Filter, which MoodQuote to fetch.
     */
    where?: MoodQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodQuotes to fetch.
     */
    orderBy?: MoodQuoteOrderByWithRelationInput | MoodQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodQuotes.
     */
    cursor?: MoodQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodQuotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodQuotes.
     */
    distinct?: MoodQuoteScalarFieldEnum | MoodQuoteScalarFieldEnum[]
  }

  /**
   * MoodQuote findFirstOrThrow
   */
  export type MoodQuoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * Filter, which MoodQuote to fetch.
     */
    where?: MoodQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodQuotes to fetch.
     */
    orderBy?: MoodQuoteOrderByWithRelationInput | MoodQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodQuotes.
     */
    cursor?: MoodQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodQuotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodQuotes.
     */
    distinct?: MoodQuoteScalarFieldEnum | MoodQuoteScalarFieldEnum[]
  }

  /**
   * MoodQuote findMany
   */
  export type MoodQuoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * Filter, which MoodQuotes to fetch.
     */
    where?: MoodQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodQuotes to fetch.
     */
    orderBy?: MoodQuoteOrderByWithRelationInput | MoodQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodQuotes.
     */
    cursor?: MoodQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodQuotes.
     */
    skip?: number
    distinct?: MoodQuoteScalarFieldEnum | MoodQuoteScalarFieldEnum[]
  }

  /**
   * MoodQuote create
   */
  export type MoodQuoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * The data needed to create a MoodQuote.
     */
    data: XOR<MoodQuoteCreateInput, MoodQuoteUncheckedCreateInput>
  }

  /**
   * MoodQuote createMany
   */
  export type MoodQuoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodQuotes.
     */
    data: MoodQuoteCreateManyInput | MoodQuoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodQuote createManyAndReturn
   */
  export type MoodQuoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * The data used to create many MoodQuotes.
     */
    data: MoodQuoteCreateManyInput | MoodQuoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodQuote update
   */
  export type MoodQuoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * The data needed to update a MoodQuote.
     */
    data: XOR<MoodQuoteUpdateInput, MoodQuoteUncheckedUpdateInput>
    /**
     * Choose, which MoodQuote to update.
     */
    where: MoodQuoteWhereUniqueInput
  }

  /**
   * MoodQuote updateMany
   */
  export type MoodQuoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodQuotes.
     */
    data: XOR<MoodQuoteUpdateManyMutationInput, MoodQuoteUncheckedUpdateManyInput>
    /**
     * Filter which MoodQuotes to update
     */
    where?: MoodQuoteWhereInput
    /**
     * Limit how many MoodQuotes to update.
     */
    limit?: number
  }

  /**
   * MoodQuote updateManyAndReturn
   */
  export type MoodQuoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * The data used to update MoodQuotes.
     */
    data: XOR<MoodQuoteUpdateManyMutationInput, MoodQuoteUncheckedUpdateManyInput>
    /**
     * Filter which MoodQuotes to update
     */
    where?: MoodQuoteWhereInput
    /**
     * Limit how many MoodQuotes to update.
     */
    limit?: number
  }

  /**
   * MoodQuote upsert
   */
  export type MoodQuoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * The filter to search for the MoodQuote to update in case it exists.
     */
    where: MoodQuoteWhereUniqueInput
    /**
     * In case the MoodQuote found by the `where` argument doesn't exist, create a new MoodQuote with this data.
     */
    create: XOR<MoodQuoteCreateInput, MoodQuoteUncheckedCreateInput>
    /**
     * In case the MoodQuote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodQuoteUpdateInput, MoodQuoteUncheckedUpdateInput>
  }

  /**
   * MoodQuote delete
   */
  export type MoodQuoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
    /**
     * Filter which MoodQuote to delete.
     */
    where: MoodQuoteWhereUniqueInput
  }

  /**
   * MoodQuote deleteMany
   */
  export type MoodQuoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodQuotes to delete
     */
    where?: MoodQuoteWhereInput
    /**
     * Limit how many MoodQuotes to delete.
     */
    limit?: number
  }

  /**
   * MoodQuote without action
   */
  export type MoodQuoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodQuote
     */
    select?: MoodQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodQuote
     */
    omit?: MoodQuoteOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clerkId: 'clerkId',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MoodEntryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    mood: 'mood',
    journalEntry: 'journalEntry',
    sleepHours: 'sleepHours'
  };

  export type MoodEntryScalarFieldEnum = (typeof MoodEntryScalarFieldEnum)[keyof typeof MoodEntryScalarFieldEnum]


  export const FeelingTagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FeelingTagScalarFieldEnum = (typeof FeelingTagScalarFieldEnum)[keyof typeof FeelingTagScalarFieldEnum]


  export const MoodQuoteScalarFieldEnum: {
    id: 'id',
    moodLevel: 'moodLevel',
    quote: 'quote'
  };

  export type MoodQuoteScalarFieldEnum = (typeof MoodQuoteScalarFieldEnum)[keyof typeof MoodQuoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    entries?: MoodEntryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    entries?: MoodEntryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    entries?: MoodEntryListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type MoodEntryWhereInput = {
    AND?: MoodEntryWhereInput | MoodEntryWhereInput[]
    OR?: MoodEntryWhereInput[]
    NOT?: MoodEntryWhereInput | MoodEntryWhereInput[]
    id?: StringFilter<"MoodEntry"> | string
    createdAt?: DateTimeFilter<"MoodEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MoodEntry"> | Date | string
    userId?: StringFilter<"MoodEntry"> | string
    mood?: IntFilter<"MoodEntry"> | number
    journalEntry?: StringFilter<"MoodEntry"> | string
    sleepHours?: FloatFilter<"MoodEntry"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    feelings?: FeelingTagListRelationFilter
  }

  export type MoodEntryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    journalEntry?: SortOrder
    sleepHours?: SortOrder
    user?: UserOrderByWithRelationInput
    feelings?: FeelingTagOrderByRelationAggregateInput
  }

  export type MoodEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodEntryWhereInput | MoodEntryWhereInput[]
    OR?: MoodEntryWhereInput[]
    NOT?: MoodEntryWhereInput | MoodEntryWhereInput[]
    createdAt?: DateTimeFilter<"MoodEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MoodEntry"> | Date | string
    userId?: StringFilter<"MoodEntry"> | string
    mood?: IntFilter<"MoodEntry"> | number
    journalEntry?: StringFilter<"MoodEntry"> | string
    sleepHours?: FloatFilter<"MoodEntry"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    feelings?: FeelingTagListRelationFilter
  }, "id">

  export type MoodEntryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    journalEntry?: SortOrder
    sleepHours?: SortOrder
    _count?: MoodEntryCountOrderByAggregateInput
    _avg?: MoodEntryAvgOrderByAggregateInput
    _max?: MoodEntryMaxOrderByAggregateInput
    _min?: MoodEntryMinOrderByAggregateInput
    _sum?: MoodEntrySumOrderByAggregateInput
  }

  export type MoodEntryScalarWhereWithAggregatesInput = {
    AND?: MoodEntryScalarWhereWithAggregatesInput | MoodEntryScalarWhereWithAggregatesInput[]
    OR?: MoodEntryScalarWhereWithAggregatesInput[]
    NOT?: MoodEntryScalarWhereWithAggregatesInput | MoodEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoodEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MoodEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MoodEntry"> | Date | string
    userId?: StringWithAggregatesFilter<"MoodEntry"> | string
    mood?: IntWithAggregatesFilter<"MoodEntry"> | number
    journalEntry?: StringWithAggregatesFilter<"MoodEntry"> | string
    sleepHours?: FloatWithAggregatesFilter<"MoodEntry"> | number
  }

  export type FeelingTagWhereInput = {
    AND?: FeelingTagWhereInput | FeelingTagWhereInput[]
    OR?: FeelingTagWhereInput[]
    NOT?: FeelingTagWhereInput | FeelingTagWhereInput[]
    id?: StringFilter<"FeelingTag"> | string
    name?: StringFilter<"FeelingTag"> | string
    entries?: MoodEntryListRelationFilter
  }

  export type FeelingTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    entries?: MoodEntryOrderByRelationAggregateInput
  }

  export type FeelingTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: FeelingTagWhereInput | FeelingTagWhereInput[]
    OR?: FeelingTagWhereInput[]
    NOT?: FeelingTagWhereInput | FeelingTagWhereInput[]
    entries?: MoodEntryListRelationFilter
  }, "id" | "name">

  export type FeelingTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FeelingTagCountOrderByAggregateInput
    _max?: FeelingTagMaxOrderByAggregateInput
    _min?: FeelingTagMinOrderByAggregateInput
  }

  export type FeelingTagScalarWhereWithAggregatesInput = {
    AND?: FeelingTagScalarWhereWithAggregatesInput | FeelingTagScalarWhereWithAggregatesInput[]
    OR?: FeelingTagScalarWhereWithAggregatesInput[]
    NOT?: FeelingTagScalarWhereWithAggregatesInput | FeelingTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeelingTag"> | string
    name?: StringWithAggregatesFilter<"FeelingTag"> | string
  }

  export type MoodQuoteWhereInput = {
    AND?: MoodQuoteWhereInput | MoodQuoteWhereInput[]
    OR?: MoodQuoteWhereInput[]
    NOT?: MoodQuoteWhereInput | MoodQuoteWhereInput[]
    id?: StringFilter<"MoodQuote"> | string
    moodLevel?: IntFilter<"MoodQuote"> | number
    quote?: StringFilter<"MoodQuote"> | string
  }

  export type MoodQuoteOrderByWithRelationInput = {
    id?: SortOrder
    moodLevel?: SortOrder
    quote?: SortOrder
  }

  export type MoodQuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodQuoteWhereInput | MoodQuoteWhereInput[]
    OR?: MoodQuoteWhereInput[]
    NOT?: MoodQuoteWhereInput | MoodQuoteWhereInput[]
    moodLevel?: IntFilter<"MoodQuote"> | number
    quote?: StringFilter<"MoodQuote"> | string
  }, "id">

  export type MoodQuoteOrderByWithAggregationInput = {
    id?: SortOrder
    moodLevel?: SortOrder
    quote?: SortOrder
    _count?: MoodQuoteCountOrderByAggregateInput
    _avg?: MoodQuoteAvgOrderByAggregateInput
    _max?: MoodQuoteMaxOrderByAggregateInput
    _min?: MoodQuoteMinOrderByAggregateInput
    _sum?: MoodQuoteSumOrderByAggregateInput
  }

  export type MoodQuoteScalarWhereWithAggregatesInput = {
    AND?: MoodQuoteScalarWhereWithAggregatesInput | MoodQuoteScalarWhereWithAggregatesInput[]
    OR?: MoodQuoteScalarWhereWithAggregatesInput[]
    NOT?: MoodQuoteScalarWhereWithAggregatesInput | MoodQuoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoodQuote"> | string
    moodLevel?: IntWithAggregatesFilter<"MoodQuote"> | number
    quote?: StringWithAggregatesFilter<"MoodQuote"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
    entries?: MoodEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
    entries?: MoodEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    entries?: MoodEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    entries?: MoodEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type MoodEntryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mood: number
    journalEntry: string
    sleepHours: number
    user: UserCreateNestedOneWithoutEntriesInput
    feelings?: FeelingTagCreateNestedManyWithoutEntriesInput
  }

  export type MoodEntryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    mood: number
    journalEntry: string
    sleepHours: number
    feelings?: FeelingTagUncheckedCreateNestedManyWithoutEntriesInput
  }

  export type MoodEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
    feelings?: FeelingTagUpdateManyWithoutEntriesNestedInput
  }

  export type MoodEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
    feelings?: FeelingTagUncheckedUpdateManyWithoutEntriesNestedInput
  }

  export type MoodEntryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    mood: number
    journalEntry: string
    sleepHours: number
  }

  export type MoodEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
  }

  export type MoodEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
  }

  export type FeelingTagCreateInput = {
    id?: string
    name: string
    entries?: MoodEntryCreateNestedManyWithoutFeelingsInput
  }

  export type FeelingTagUncheckedCreateInput = {
    id?: string
    name: string
    entries?: MoodEntryUncheckedCreateNestedManyWithoutFeelingsInput
  }

  export type FeelingTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entries?: MoodEntryUpdateManyWithoutFeelingsNestedInput
  }

  export type FeelingTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entries?: MoodEntryUncheckedUpdateManyWithoutFeelingsNestedInput
  }

  export type FeelingTagCreateManyInput = {
    id?: string
    name: string
  }

  export type FeelingTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeelingTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodQuoteCreateInput = {
    id?: string
    moodLevel: number
    quote: string
  }

  export type MoodQuoteUncheckedCreateInput = {
    id?: string
    moodLevel: number
    quote: string
  }

  export type MoodQuoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodLevel?: IntFieldUpdateOperationsInput | number
    quote?: StringFieldUpdateOperationsInput | string
  }

  export type MoodQuoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodLevel?: IntFieldUpdateOperationsInput | number
    quote?: StringFieldUpdateOperationsInput | string
  }

  export type MoodQuoteCreateManyInput = {
    id?: string
    moodLevel: number
    quote: string
  }

  export type MoodQuoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodLevel?: IntFieldUpdateOperationsInput | number
    quote?: StringFieldUpdateOperationsInput | string
  }

  export type MoodQuoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodLevel?: IntFieldUpdateOperationsInput | number
    quote?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MoodEntryListRelationFilter = {
    every?: MoodEntryWhereInput
    some?: MoodEntryWhereInput
    none?: MoodEntryWhereInput
  }

  export type MoodEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FeelingTagListRelationFilter = {
    every?: FeelingTagWhereInput
    some?: FeelingTagWhereInput
    none?: FeelingTagWhereInput
  }

  export type FeelingTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoodEntryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    journalEntry?: SortOrder
    sleepHours?: SortOrder
  }

  export type MoodEntryAvgOrderByAggregateInput = {
    mood?: SortOrder
    sleepHours?: SortOrder
  }

  export type MoodEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    journalEntry?: SortOrder
    sleepHours?: SortOrder
  }

  export type MoodEntryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    journalEntry?: SortOrder
    sleepHours?: SortOrder
  }

  export type MoodEntrySumOrderByAggregateInput = {
    mood?: SortOrder
    sleepHours?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FeelingTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FeelingTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FeelingTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MoodQuoteCountOrderByAggregateInput = {
    id?: SortOrder
    moodLevel?: SortOrder
    quote?: SortOrder
  }

  export type MoodQuoteAvgOrderByAggregateInput = {
    moodLevel?: SortOrder
  }

  export type MoodQuoteMaxOrderByAggregateInput = {
    id?: SortOrder
    moodLevel?: SortOrder
    quote?: SortOrder
  }

  export type MoodQuoteMinOrderByAggregateInput = {
    id?: SortOrder
    moodLevel?: SortOrder
    quote?: SortOrder
  }

  export type MoodQuoteSumOrderByAggregateInput = {
    moodLevel?: SortOrder
  }

  export type MoodEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
  }

  export type MoodEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MoodEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    upsert?: MoodEntryUpsertWithWhereUniqueWithoutUserInput | MoodEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    set?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    disconnect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    delete?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    update?: MoodEntryUpdateWithWhereUniqueWithoutUserInput | MoodEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodEntryUpdateManyWithWhereWithoutUserInput | MoodEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
  }

  export type MoodEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    upsert?: MoodEntryUpsertWithWhereUniqueWithoutUserInput | MoodEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    set?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    disconnect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    delete?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    update?: MoodEntryUpdateWithWhereUniqueWithoutUserInput | MoodEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodEntryUpdateManyWithWhereWithoutUserInput | MoodEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEntriesInput = {
    create?: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type FeelingTagCreateNestedManyWithoutEntriesInput = {
    create?: XOR<FeelingTagCreateWithoutEntriesInput, FeelingTagUncheckedCreateWithoutEntriesInput> | FeelingTagCreateWithoutEntriesInput[] | FeelingTagUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: FeelingTagCreateOrConnectWithoutEntriesInput | FeelingTagCreateOrConnectWithoutEntriesInput[]
    connect?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
  }

  export type FeelingTagUncheckedCreateNestedManyWithoutEntriesInput = {
    create?: XOR<FeelingTagCreateWithoutEntriesInput, FeelingTagUncheckedCreateWithoutEntriesInput> | FeelingTagCreateWithoutEntriesInput[] | FeelingTagUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: FeelingTagCreateOrConnectWithoutEntriesInput | FeelingTagCreateOrConnectWithoutEntriesInput[]
    connect?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntriesInput
    upsert?: UserUpsertWithoutEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEntriesInput, UserUpdateWithoutEntriesInput>, UserUncheckedUpdateWithoutEntriesInput>
  }

  export type FeelingTagUpdateManyWithoutEntriesNestedInput = {
    create?: XOR<FeelingTagCreateWithoutEntriesInput, FeelingTagUncheckedCreateWithoutEntriesInput> | FeelingTagCreateWithoutEntriesInput[] | FeelingTagUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: FeelingTagCreateOrConnectWithoutEntriesInput | FeelingTagCreateOrConnectWithoutEntriesInput[]
    upsert?: FeelingTagUpsertWithWhereUniqueWithoutEntriesInput | FeelingTagUpsertWithWhereUniqueWithoutEntriesInput[]
    set?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
    disconnect?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
    delete?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
    connect?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
    update?: FeelingTagUpdateWithWhereUniqueWithoutEntriesInput | FeelingTagUpdateWithWhereUniqueWithoutEntriesInput[]
    updateMany?: FeelingTagUpdateManyWithWhereWithoutEntriesInput | FeelingTagUpdateManyWithWhereWithoutEntriesInput[]
    deleteMany?: FeelingTagScalarWhereInput | FeelingTagScalarWhereInput[]
  }

  export type FeelingTagUncheckedUpdateManyWithoutEntriesNestedInput = {
    create?: XOR<FeelingTagCreateWithoutEntriesInput, FeelingTagUncheckedCreateWithoutEntriesInput> | FeelingTagCreateWithoutEntriesInput[] | FeelingTagUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: FeelingTagCreateOrConnectWithoutEntriesInput | FeelingTagCreateOrConnectWithoutEntriesInput[]
    upsert?: FeelingTagUpsertWithWhereUniqueWithoutEntriesInput | FeelingTagUpsertWithWhereUniqueWithoutEntriesInput[]
    set?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
    disconnect?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
    delete?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
    connect?: FeelingTagWhereUniqueInput | FeelingTagWhereUniqueInput[]
    update?: FeelingTagUpdateWithWhereUniqueWithoutEntriesInput | FeelingTagUpdateWithWhereUniqueWithoutEntriesInput[]
    updateMany?: FeelingTagUpdateManyWithWhereWithoutEntriesInput | FeelingTagUpdateManyWithWhereWithoutEntriesInput[]
    deleteMany?: FeelingTagScalarWhereInput | FeelingTagScalarWhereInput[]
  }

  export type MoodEntryCreateNestedManyWithoutFeelingsInput = {
    create?: XOR<MoodEntryCreateWithoutFeelingsInput, MoodEntryUncheckedCreateWithoutFeelingsInput> | MoodEntryCreateWithoutFeelingsInput[] | MoodEntryUncheckedCreateWithoutFeelingsInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutFeelingsInput | MoodEntryCreateOrConnectWithoutFeelingsInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
  }

  export type MoodEntryUncheckedCreateNestedManyWithoutFeelingsInput = {
    create?: XOR<MoodEntryCreateWithoutFeelingsInput, MoodEntryUncheckedCreateWithoutFeelingsInput> | MoodEntryCreateWithoutFeelingsInput[] | MoodEntryUncheckedCreateWithoutFeelingsInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutFeelingsInput | MoodEntryCreateOrConnectWithoutFeelingsInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
  }

  export type MoodEntryUpdateManyWithoutFeelingsNestedInput = {
    create?: XOR<MoodEntryCreateWithoutFeelingsInput, MoodEntryUncheckedCreateWithoutFeelingsInput> | MoodEntryCreateWithoutFeelingsInput[] | MoodEntryUncheckedCreateWithoutFeelingsInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutFeelingsInput | MoodEntryCreateOrConnectWithoutFeelingsInput[]
    upsert?: MoodEntryUpsertWithWhereUniqueWithoutFeelingsInput | MoodEntryUpsertWithWhereUniqueWithoutFeelingsInput[]
    set?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    disconnect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    delete?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    update?: MoodEntryUpdateWithWhereUniqueWithoutFeelingsInput | MoodEntryUpdateWithWhereUniqueWithoutFeelingsInput[]
    updateMany?: MoodEntryUpdateManyWithWhereWithoutFeelingsInput | MoodEntryUpdateManyWithWhereWithoutFeelingsInput[]
    deleteMany?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
  }

  export type MoodEntryUncheckedUpdateManyWithoutFeelingsNestedInput = {
    create?: XOR<MoodEntryCreateWithoutFeelingsInput, MoodEntryUncheckedCreateWithoutFeelingsInput> | MoodEntryCreateWithoutFeelingsInput[] | MoodEntryUncheckedCreateWithoutFeelingsInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutFeelingsInput | MoodEntryCreateOrConnectWithoutFeelingsInput[]
    upsert?: MoodEntryUpsertWithWhereUniqueWithoutFeelingsInput | MoodEntryUpsertWithWhereUniqueWithoutFeelingsInput[]
    set?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    disconnect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    delete?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    update?: MoodEntryUpdateWithWhereUniqueWithoutFeelingsInput | MoodEntryUpdateWithWhereUniqueWithoutFeelingsInput[]
    updateMany?: MoodEntryUpdateManyWithWhereWithoutFeelingsInput | MoodEntryUpdateManyWithWhereWithoutFeelingsInput[]
    deleteMany?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MoodEntryCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mood: number
    journalEntry: string
    sleepHours: number
    feelings?: FeelingTagCreateNestedManyWithoutEntriesInput
  }

  export type MoodEntryUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mood: number
    journalEntry: string
    sleepHours: number
    feelings?: FeelingTagUncheckedCreateNestedManyWithoutEntriesInput
  }

  export type MoodEntryCreateOrConnectWithoutUserInput = {
    where: MoodEntryWhereUniqueInput
    create: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput>
  }

  export type MoodEntryCreateManyUserInputEnvelope = {
    data: MoodEntryCreateManyUserInput | MoodEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoodEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: MoodEntryWhereUniqueInput
    update: XOR<MoodEntryUpdateWithoutUserInput, MoodEntryUncheckedUpdateWithoutUserInput>
    create: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput>
  }

  export type MoodEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: MoodEntryWhereUniqueInput
    data: XOR<MoodEntryUpdateWithoutUserInput, MoodEntryUncheckedUpdateWithoutUserInput>
  }

  export type MoodEntryUpdateManyWithWhereWithoutUserInput = {
    where: MoodEntryScalarWhereInput
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type MoodEntryScalarWhereInput = {
    AND?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
    OR?: MoodEntryScalarWhereInput[]
    NOT?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
    id?: StringFilter<"MoodEntry"> | string
    createdAt?: DateTimeFilter<"MoodEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MoodEntry"> | Date | string
    userId?: StringFilter<"MoodEntry"> | string
    mood?: IntFilter<"MoodEntry"> | number
    journalEntry?: StringFilter<"MoodEntry"> | string
    sleepHours?: FloatFilter<"MoodEntry"> | number
  }

  export type UserCreateWithoutEntriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
  }

  export type UserUncheckedCreateWithoutEntriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
  }

  export type UserCreateOrConnectWithoutEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
  }

  export type FeelingTagCreateWithoutEntriesInput = {
    id?: string
    name: string
  }

  export type FeelingTagUncheckedCreateWithoutEntriesInput = {
    id?: string
    name: string
  }

  export type FeelingTagCreateOrConnectWithoutEntriesInput = {
    where: FeelingTagWhereUniqueInput
    create: XOR<FeelingTagCreateWithoutEntriesInput, FeelingTagUncheckedCreateWithoutEntriesInput>
  }

  export type UserUpsertWithoutEntriesInput = {
    update: XOR<UserUpdateWithoutEntriesInput, UserUncheckedUpdateWithoutEntriesInput>
    create: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEntriesInput, UserUncheckedUpdateWithoutEntriesInput>
  }

  export type UserUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type FeelingTagUpsertWithWhereUniqueWithoutEntriesInput = {
    where: FeelingTagWhereUniqueInput
    update: XOR<FeelingTagUpdateWithoutEntriesInput, FeelingTagUncheckedUpdateWithoutEntriesInput>
    create: XOR<FeelingTagCreateWithoutEntriesInput, FeelingTagUncheckedCreateWithoutEntriesInput>
  }

  export type FeelingTagUpdateWithWhereUniqueWithoutEntriesInput = {
    where: FeelingTagWhereUniqueInput
    data: XOR<FeelingTagUpdateWithoutEntriesInput, FeelingTagUncheckedUpdateWithoutEntriesInput>
  }

  export type FeelingTagUpdateManyWithWhereWithoutEntriesInput = {
    where: FeelingTagScalarWhereInput
    data: XOR<FeelingTagUpdateManyMutationInput, FeelingTagUncheckedUpdateManyWithoutEntriesInput>
  }

  export type FeelingTagScalarWhereInput = {
    AND?: FeelingTagScalarWhereInput | FeelingTagScalarWhereInput[]
    OR?: FeelingTagScalarWhereInput[]
    NOT?: FeelingTagScalarWhereInput | FeelingTagScalarWhereInput[]
    id?: StringFilter<"FeelingTag"> | string
    name?: StringFilter<"FeelingTag"> | string
  }

  export type MoodEntryCreateWithoutFeelingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mood: number
    journalEntry: string
    sleepHours: number
    user: UserCreateNestedOneWithoutEntriesInput
  }

  export type MoodEntryUncheckedCreateWithoutFeelingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    mood: number
    journalEntry: string
    sleepHours: number
  }

  export type MoodEntryCreateOrConnectWithoutFeelingsInput = {
    where: MoodEntryWhereUniqueInput
    create: XOR<MoodEntryCreateWithoutFeelingsInput, MoodEntryUncheckedCreateWithoutFeelingsInput>
  }

  export type MoodEntryUpsertWithWhereUniqueWithoutFeelingsInput = {
    where: MoodEntryWhereUniqueInput
    update: XOR<MoodEntryUpdateWithoutFeelingsInput, MoodEntryUncheckedUpdateWithoutFeelingsInput>
    create: XOR<MoodEntryCreateWithoutFeelingsInput, MoodEntryUncheckedCreateWithoutFeelingsInput>
  }

  export type MoodEntryUpdateWithWhereUniqueWithoutFeelingsInput = {
    where: MoodEntryWhereUniqueInput
    data: XOR<MoodEntryUpdateWithoutFeelingsInput, MoodEntryUncheckedUpdateWithoutFeelingsInput>
  }

  export type MoodEntryUpdateManyWithWhereWithoutFeelingsInput = {
    where: MoodEntryScalarWhereInput
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyWithoutFeelingsInput>
  }

  export type MoodEntryCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mood: number
    journalEntry: string
    sleepHours: number
  }

  export type MoodEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
    feelings?: FeelingTagUpdateManyWithoutEntriesNestedInput
  }

  export type MoodEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
    feelings?: FeelingTagUncheckedUpdateManyWithoutEntriesNestedInput
  }

  export type MoodEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
  }

  export type FeelingTagUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeelingTagUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeelingTagUncheckedUpdateManyWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodEntryUpdateWithoutFeelingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type MoodEntryUncheckedUpdateWithoutFeelingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
  }

  export type MoodEntryUncheckedUpdateManyWithoutFeelingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: IntFieldUpdateOperationsInput | number
    journalEntry?: StringFieldUpdateOperationsInput | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
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