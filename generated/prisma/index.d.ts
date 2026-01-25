
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MarketData
 * 
 */
export type MarketData = $Result.DefaultSelection<Prisma.$MarketDataPayload>
/**
 * Model AgentLog
 * 
 */
export type AgentLog = $Result.DefaultSelection<Prisma.$AgentLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MarketData
 * const marketData = await prisma.marketData.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more MarketData
   * const marketData = await prisma.marketData.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.marketData`: Exposes CRUD operations for the **MarketData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketData
    * const marketData = await prisma.marketData.findMany()
    * ```
    */
  get marketData(): Prisma.MarketDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentLog`: Exposes CRUD operations for the **AgentLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentLogs
    * const agentLogs = await prisma.agentLog.findMany()
    * ```
    */
  get agentLog(): Prisma.AgentLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    MarketData: 'MarketData',
    AgentLog: 'AgentLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "marketData" | "agentLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MarketData: {
        payload: Prisma.$MarketDataPayload<ExtArgs>
        fields: Prisma.MarketDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          findFirst: {
            args: Prisma.MarketDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          findMany: {
            args: Prisma.MarketDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          create: {
            args: Prisma.MarketDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          createMany: {
            args: Prisma.MarketDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          delete: {
            args: Prisma.MarketDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          update: {
            args: Prisma.MarketDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          deleteMany: {
            args: Prisma.MarketDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          upsert: {
            args: Prisma.MarketDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          aggregate: {
            args: Prisma.MarketDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketData>
          }
          groupBy: {
            args: Prisma.MarketDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketDataCountArgs<ExtArgs>
            result: $Utils.Optional<MarketDataCountAggregateOutputType> | number
          }
        }
      }
      AgentLog: {
        payload: Prisma.$AgentLogPayload<ExtArgs>
        fields: Prisma.AgentLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload>
          }
          findFirst: {
            args: Prisma.AgentLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload>
          }
          findMany: {
            args: Prisma.AgentLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload>[]
          }
          create: {
            args: Prisma.AgentLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload>
          }
          createMany: {
            args: Prisma.AgentLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload>[]
          }
          delete: {
            args: Prisma.AgentLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload>
          }
          update: {
            args: Prisma.AgentLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload>
          }
          deleteMany: {
            args: Prisma.AgentLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload>[]
          }
          upsert: {
            args: Prisma.AgentLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentLogPayload>
          }
          aggregate: {
            args: Prisma.AgentLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentLog>
          }
          groupBy: {
            args: Prisma.AgentLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentLogCountArgs<ExtArgs>
            result: $Utils.Optional<AgentLogCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    marketData?: MarketDataOmit
    agentLog?: AgentLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model MarketData
   */

  export type AggregateMarketData = {
    _count: MarketDataCountAggregateOutputType | null
    _avg: MarketDataAvgAggregateOutputType | null
    _sum: MarketDataSumAggregateOutputType | null
    _min: MarketDataMinAggregateOutputType | null
    _max: MarketDataMaxAggregateOutputType | null
  }

  export type MarketDataAvgAggregateOutputType = {
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: number | null
  }

  export type MarketDataSumAggregateOutputType = {
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: bigint | null
  }

  export type MarketDataMinAggregateOutputType = {
    symbol: string | null
    timestamp: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: bigint | null
  }

  export type MarketDataMaxAggregateOutputType = {
    symbol: string | null
    timestamp: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: bigint | null
  }

  export type MarketDataCountAggregateOutputType = {
    symbol: number
    timestamp: number
    open: number
    high: number
    low: number
    close: number
    volume: number
    _all: number
  }


  export type MarketDataAvgAggregateInputType = {
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type MarketDataSumAggregateInputType = {
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type MarketDataMinAggregateInputType = {
    symbol?: true
    timestamp?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type MarketDataMaxAggregateInputType = {
    symbol?: true
    timestamp?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type MarketDataCountAggregateInputType = {
    symbol?: true
    timestamp?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    _all?: true
  }

  export type MarketDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to aggregate.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketData
    **/
    _count?: true | MarketDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketDataMaxAggregateInputType
  }

  export type GetMarketDataAggregateType<T extends MarketDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketData[P]>
      : GetScalarType<T[P], AggregateMarketData[P]>
  }




  export type MarketDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketDataWhereInput
    orderBy?: MarketDataOrderByWithAggregationInput | MarketDataOrderByWithAggregationInput[]
    by: MarketDataScalarFieldEnum[] | MarketDataScalarFieldEnum
    having?: MarketDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketDataCountAggregateInputType | true
    _avg?: MarketDataAvgAggregateInputType
    _sum?: MarketDataSumAggregateInputType
    _min?: MarketDataMinAggregateInputType
    _max?: MarketDataMaxAggregateInputType
  }

  export type MarketDataGroupByOutputType = {
    symbol: string
    timestamp: Date
    open: Decimal
    high: Decimal
    low: Decimal
    close: Decimal
    volume: bigint
    _count: MarketDataCountAggregateOutputType | null
    _avg: MarketDataAvgAggregateOutputType | null
    _sum: MarketDataSumAggregateOutputType | null
    _min: MarketDataMinAggregateOutputType | null
    _max: MarketDataMaxAggregateOutputType | null
  }

  type GetMarketDataGroupByPayload<T extends MarketDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketDataGroupByOutputType[P]>
            : GetScalarType<T[P], MarketDataGroupByOutputType[P]>
        }
      >
    >


  export type MarketDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    symbol?: boolean
    timestamp?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    symbol?: boolean
    timestamp?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    symbol?: boolean
    timestamp?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectScalar = {
    symbol?: boolean
    timestamp?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
  }

  export type MarketDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"symbol" | "timestamp" | "open" | "high" | "low" | "close" | "volume", ExtArgs["result"]["marketData"]>

  export type $MarketDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      symbol: string
      timestamp: Date
      open: Prisma.Decimal
      high: Prisma.Decimal
      low: Prisma.Decimal
      close: Prisma.Decimal
      volume: bigint
    }, ExtArgs["result"]["marketData"]>
    composites: {}
  }

  type MarketDataGetPayload<S extends boolean | null | undefined | MarketDataDefaultArgs> = $Result.GetResult<Prisma.$MarketDataPayload, S>

  type MarketDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketDataCountAggregateInputType | true
    }

  export interface MarketDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketData'], meta: { name: 'MarketData' } }
    /**
     * Find zero or one MarketData that matches the filter.
     * @param {MarketDataFindUniqueArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketDataFindUniqueArgs>(args: SelectSubset<T, MarketDataFindUniqueArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketDataFindUniqueOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketDataFindFirstArgs>(args?: SelectSubset<T, MarketDataFindFirstArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketData
     * const marketData = await prisma.marketData.findMany()
     * 
     * // Get first 10 MarketData
     * const marketData = await prisma.marketData.findMany({ take: 10 })
     * 
     * // Only select the `symbol`
     * const marketDataWithSymbolOnly = await prisma.marketData.findMany({ select: { symbol: true } })
     * 
     */
    findMany<T extends MarketDataFindManyArgs>(args?: SelectSubset<T, MarketDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketData.
     * @param {MarketDataCreateArgs} args - Arguments to create a MarketData.
     * @example
     * // Create one MarketData
     * const MarketData = await prisma.marketData.create({
     *   data: {
     *     // ... data to create a MarketData
     *   }
     * })
     * 
     */
    create<T extends MarketDataCreateArgs>(args: SelectSubset<T, MarketDataCreateArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketData.
     * @param {MarketDataCreateManyArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketDataCreateManyArgs>(args?: SelectSubset<T, MarketDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketData and returns the data saved in the database.
     * @param {MarketDataCreateManyAndReturnArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketData and only return the `symbol`
     * const marketDataWithSymbolOnly = await prisma.marketData.createManyAndReturn({
     *   select: { symbol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketDataCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketData.
     * @param {MarketDataDeleteArgs} args - Arguments to delete one MarketData.
     * @example
     * // Delete one MarketData
     * const MarketData = await prisma.marketData.delete({
     *   where: {
     *     // ... filter to delete one MarketData
     *   }
     * })
     * 
     */
    delete<T extends MarketDataDeleteArgs>(args: SelectSubset<T, MarketDataDeleteArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketData.
     * @param {MarketDataUpdateArgs} args - Arguments to update one MarketData.
     * @example
     * // Update one MarketData
     * const marketData = await prisma.marketData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketDataUpdateArgs>(args: SelectSubset<T, MarketDataUpdateArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketData.
     * @param {MarketDataDeleteManyArgs} args - Arguments to filter MarketData to delete.
     * @example
     * // Delete a few MarketData
     * const { count } = await prisma.marketData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDataDeleteManyArgs>(args?: SelectSubset<T, MarketDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketData
     * const marketData = await prisma.marketData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketDataUpdateManyArgs>(args: SelectSubset<T, MarketDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketData and returns the data updated in the database.
     * @param {MarketDataUpdateManyAndReturnArgs} args - Arguments to update many MarketData.
     * @example
     * // Update many MarketData
     * const marketData = await prisma.marketData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketData and only return the `symbol`
     * const marketDataWithSymbolOnly = await prisma.marketData.updateManyAndReturn({
     *   select: { symbol: true },
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
    updateManyAndReturn<T extends MarketDataUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketData.
     * @param {MarketDataUpsertArgs} args - Arguments to update or create a MarketData.
     * @example
     * // Update or create a MarketData
     * const marketData = await prisma.marketData.upsert({
     *   create: {
     *     // ... data to create a MarketData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketData we want to update
     *   }
     * })
     */
    upsert<T extends MarketDataUpsertArgs>(args: SelectSubset<T, MarketDataUpsertArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataCountArgs} args - Arguments to filter MarketData to count.
     * @example
     * // Count the number of MarketData
     * const count = await prisma.marketData.count({
     *   where: {
     *     // ... the filter for the MarketData we want to count
     *   }
     * })
    **/
    count<T extends MarketDataCountArgs>(
      args?: Subset<T, MarketDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketDataAggregateArgs>(args: Subset<T, MarketDataAggregateArgs>): Prisma.PrismaPromise<GetMarketDataAggregateType<T>>

    /**
     * Group by MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataGroupByArgs} args - Group by arguments.
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
      T extends MarketDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketDataGroupByArgs['orderBy'] }
        : { orderBy?: MarketDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketData model
   */
  readonly fields: MarketDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MarketData model
   */
  interface MarketDataFieldRefs {
    readonly symbol: FieldRef<"MarketData", 'String'>
    readonly timestamp: FieldRef<"MarketData", 'DateTime'>
    readonly open: FieldRef<"MarketData", 'Decimal'>
    readonly high: FieldRef<"MarketData", 'Decimal'>
    readonly low: FieldRef<"MarketData", 'Decimal'>
    readonly close: FieldRef<"MarketData", 'Decimal'>
    readonly volume: FieldRef<"MarketData", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * MarketData findUnique
   */
  export type MarketDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData findUniqueOrThrow
   */
  export type MarketDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData findFirst
   */
  export type MarketDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketData.
     */
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData findFirstOrThrow
   */
  export type MarketDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketData.
     */
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData findMany
   */
  export type MarketDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData create
   */
  export type MarketDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketData.
     */
    data: XOR<MarketDataCreateInput, MarketDataUncheckedCreateInput>
  }

  /**
   * MarketData createMany
   */
  export type MarketDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketData.
     */
    data: MarketDataCreateManyInput | MarketDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketData createManyAndReturn
   */
  export type MarketDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data used to create many MarketData.
     */
    data: MarketDataCreateManyInput | MarketDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketData update
   */
  export type MarketDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketData.
     */
    data: XOR<MarketDataUpdateInput, MarketDataUncheckedUpdateInput>
    /**
     * Choose, which MarketData to update.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData updateMany
   */
  export type MarketDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketData.
     */
    data: XOR<MarketDataUpdateManyMutationInput, MarketDataUncheckedUpdateManyInput>
    /**
     * Filter which MarketData to update
     */
    where?: MarketDataWhereInput
    /**
     * Limit how many MarketData to update.
     */
    limit?: number
  }

  /**
   * MarketData updateManyAndReturn
   */
  export type MarketDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data used to update MarketData.
     */
    data: XOR<MarketDataUpdateManyMutationInput, MarketDataUncheckedUpdateManyInput>
    /**
     * Filter which MarketData to update
     */
    where?: MarketDataWhereInput
    /**
     * Limit how many MarketData to update.
     */
    limit?: number
  }

  /**
   * MarketData upsert
   */
  export type MarketDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketData to update in case it exists.
     */
    where: MarketDataWhereUniqueInput
    /**
     * In case the MarketData found by the `where` argument doesn't exist, create a new MarketData with this data.
     */
    create: XOR<MarketDataCreateInput, MarketDataUncheckedCreateInput>
    /**
     * In case the MarketData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketDataUpdateInput, MarketDataUncheckedUpdateInput>
  }

  /**
   * MarketData delete
   */
  export type MarketDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Filter which MarketData to delete.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData deleteMany
   */
  export type MarketDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to delete
     */
    where?: MarketDataWhereInput
    /**
     * Limit how many MarketData to delete.
     */
    limit?: number
  }

  /**
   * MarketData without action
   */
  export type MarketDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
  }


  /**
   * Model AgentLog
   */

  export type AggregateAgentLog = {
    _count: AgentLogCountAggregateOutputType | null
    _avg: AgentLogAvgAggregateOutputType | null
    _sum: AgentLogSumAggregateOutputType | null
    _min: AgentLogMinAggregateOutputType | null
    _max: AgentLogMaxAggregateOutputType | null
  }

  export type AgentLogAvgAggregateOutputType = {
    id: number | null
  }

  export type AgentLogSumAggregateOutputType = {
    id: bigint | null
  }

  export type AgentLogMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    agentName: string | null
    decision: string | null
  }

  export type AgentLogMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    agentName: string | null
    decision: string | null
  }

  export type AgentLogCountAggregateOutputType = {
    id: number
    createdAt: number
    agentName: number
    context: number
    decision: number
    _all: number
  }


  export type AgentLogAvgAggregateInputType = {
    id?: true
  }

  export type AgentLogSumAggregateInputType = {
    id?: true
  }

  export type AgentLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    agentName?: true
    decision?: true
  }

  export type AgentLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    agentName?: true
    decision?: true
  }

  export type AgentLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    agentName?: true
    context?: true
    decision?: true
    _all?: true
  }

  export type AgentLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentLog to aggregate.
     */
    where?: AgentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentLogs to fetch.
     */
    orderBy?: AgentLogOrderByWithRelationInput | AgentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentLogs
    **/
    _count?: true | AgentLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentLogMaxAggregateInputType
  }

  export type GetAgentLogAggregateType<T extends AgentLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentLog[P]>
      : GetScalarType<T[P], AggregateAgentLog[P]>
  }




  export type AgentLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentLogWhereInput
    orderBy?: AgentLogOrderByWithAggregationInput | AgentLogOrderByWithAggregationInput[]
    by: AgentLogScalarFieldEnum[] | AgentLogScalarFieldEnum
    having?: AgentLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentLogCountAggregateInputType | true
    _avg?: AgentLogAvgAggregateInputType
    _sum?: AgentLogSumAggregateInputType
    _min?: AgentLogMinAggregateInputType
    _max?: AgentLogMaxAggregateInputType
  }

  export type AgentLogGroupByOutputType = {
    id: bigint
    createdAt: Date
    agentName: string
    context: JsonValue
    decision: string | null
    _count: AgentLogCountAggregateOutputType | null
    _avg: AgentLogAvgAggregateOutputType | null
    _sum: AgentLogSumAggregateOutputType | null
    _min: AgentLogMinAggregateOutputType | null
    _max: AgentLogMaxAggregateOutputType | null
  }

  type GetAgentLogGroupByPayload<T extends AgentLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentLogGroupByOutputType[P]>
            : GetScalarType<T[P], AgentLogGroupByOutputType[P]>
        }
      >
    >


  export type AgentLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    agentName?: boolean
    context?: boolean
    decision?: boolean
  }, ExtArgs["result"]["agentLog"]>

  export type AgentLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    agentName?: boolean
    context?: boolean
    decision?: boolean
  }, ExtArgs["result"]["agentLog"]>

  export type AgentLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    agentName?: boolean
    context?: boolean
    decision?: boolean
  }, ExtArgs["result"]["agentLog"]>

  export type AgentLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    agentName?: boolean
    context?: boolean
    decision?: boolean
  }

  export type AgentLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "agentName" | "context" | "decision", ExtArgs["result"]["agentLog"]>

  export type $AgentLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      agentName: string
      context: Prisma.JsonValue
      decision: string | null
    }, ExtArgs["result"]["agentLog"]>
    composites: {}
  }

  type AgentLogGetPayload<S extends boolean | null | undefined | AgentLogDefaultArgs> = $Result.GetResult<Prisma.$AgentLogPayload, S>

  type AgentLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentLogCountAggregateInputType | true
    }

  export interface AgentLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentLog'], meta: { name: 'AgentLog' } }
    /**
     * Find zero or one AgentLog that matches the filter.
     * @param {AgentLogFindUniqueArgs} args - Arguments to find a AgentLog
     * @example
     * // Get one AgentLog
     * const agentLog = await prisma.agentLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentLogFindUniqueArgs>(args: SelectSubset<T, AgentLogFindUniqueArgs<ExtArgs>>): Prisma__AgentLogClient<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentLogFindUniqueOrThrowArgs} args - Arguments to find a AgentLog
     * @example
     * // Get one AgentLog
     * const agentLog = await prisma.agentLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentLogClient<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentLogFindFirstArgs} args - Arguments to find a AgentLog
     * @example
     * // Get one AgentLog
     * const agentLog = await prisma.agentLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentLogFindFirstArgs>(args?: SelectSubset<T, AgentLogFindFirstArgs<ExtArgs>>): Prisma__AgentLogClient<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentLogFindFirstOrThrowArgs} args - Arguments to find a AgentLog
     * @example
     * // Get one AgentLog
     * const agentLog = await prisma.agentLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentLogClient<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentLogs
     * const agentLogs = await prisma.agentLog.findMany()
     * 
     * // Get first 10 AgentLogs
     * const agentLogs = await prisma.agentLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentLogWithIdOnly = await prisma.agentLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentLogFindManyArgs>(args?: SelectSubset<T, AgentLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentLog.
     * @param {AgentLogCreateArgs} args - Arguments to create a AgentLog.
     * @example
     * // Create one AgentLog
     * const AgentLog = await prisma.agentLog.create({
     *   data: {
     *     // ... data to create a AgentLog
     *   }
     * })
     * 
     */
    create<T extends AgentLogCreateArgs>(args: SelectSubset<T, AgentLogCreateArgs<ExtArgs>>): Prisma__AgentLogClient<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentLogs.
     * @param {AgentLogCreateManyArgs} args - Arguments to create many AgentLogs.
     * @example
     * // Create many AgentLogs
     * const agentLog = await prisma.agentLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentLogCreateManyArgs>(args?: SelectSubset<T, AgentLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentLogs and returns the data saved in the database.
     * @param {AgentLogCreateManyAndReturnArgs} args - Arguments to create many AgentLogs.
     * @example
     * // Create many AgentLogs
     * const agentLog = await prisma.agentLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentLogs and only return the `id`
     * const agentLogWithIdOnly = await prisma.agentLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentLog.
     * @param {AgentLogDeleteArgs} args - Arguments to delete one AgentLog.
     * @example
     * // Delete one AgentLog
     * const AgentLog = await prisma.agentLog.delete({
     *   where: {
     *     // ... filter to delete one AgentLog
     *   }
     * })
     * 
     */
    delete<T extends AgentLogDeleteArgs>(args: SelectSubset<T, AgentLogDeleteArgs<ExtArgs>>): Prisma__AgentLogClient<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentLog.
     * @param {AgentLogUpdateArgs} args - Arguments to update one AgentLog.
     * @example
     * // Update one AgentLog
     * const agentLog = await prisma.agentLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentLogUpdateArgs>(args: SelectSubset<T, AgentLogUpdateArgs<ExtArgs>>): Prisma__AgentLogClient<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentLogs.
     * @param {AgentLogDeleteManyArgs} args - Arguments to filter AgentLogs to delete.
     * @example
     * // Delete a few AgentLogs
     * const { count } = await prisma.agentLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentLogDeleteManyArgs>(args?: SelectSubset<T, AgentLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentLogs
     * const agentLog = await prisma.agentLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentLogUpdateManyArgs>(args: SelectSubset<T, AgentLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentLogs and returns the data updated in the database.
     * @param {AgentLogUpdateManyAndReturnArgs} args - Arguments to update many AgentLogs.
     * @example
     * // Update many AgentLogs
     * const agentLog = await prisma.agentLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentLogs and only return the `id`
     * const agentLogWithIdOnly = await prisma.agentLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgentLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentLog.
     * @param {AgentLogUpsertArgs} args - Arguments to update or create a AgentLog.
     * @example
     * // Update or create a AgentLog
     * const agentLog = await prisma.agentLog.upsert({
     *   create: {
     *     // ... data to create a AgentLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentLog we want to update
     *   }
     * })
     */
    upsert<T extends AgentLogUpsertArgs>(args: SelectSubset<T, AgentLogUpsertArgs<ExtArgs>>): Prisma__AgentLogClient<$Result.GetResult<Prisma.$AgentLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentLogCountArgs} args - Arguments to filter AgentLogs to count.
     * @example
     * // Count the number of AgentLogs
     * const count = await prisma.agentLog.count({
     *   where: {
     *     // ... the filter for the AgentLogs we want to count
     *   }
     * })
    **/
    count<T extends AgentLogCountArgs>(
      args?: Subset<T, AgentLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentLogAggregateArgs>(args: Subset<T, AgentLogAggregateArgs>): Prisma.PrismaPromise<GetAgentLogAggregateType<T>>

    /**
     * Group by AgentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentLogGroupByArgs} args - Group by arguments.
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
      T extends AgentLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentLogGroupByArgs['orderBy'] }
        : { orderBy?: AgentLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentLog model
   */
  readonly fields: AgentLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AgentLog model
   */
  interface AgentLogFieldRefs {
    readonly id: FieldRef<"AgentLog", 'BigInt'>
    readonly createdAt: FieldRef<"AgentLog", 'DateTime'>
    readonly agentName: FieldRef<"AgentLog", 'String'>
    readonly context: FieldRef<"AgentLog", 'Json'>
    readonly decision: FieldRef<"AgentLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AgentLog findUnique
   */
  export type AgentLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * Filter, which AgentLog to fetch.
     */
    where: AgentLogWhereUniqueInput
  }

  /**
   * AgentLog findUniqueOrThrow
   */
  export type AgentLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * Filter, which AgentLog to fetch.
     */
    where: AgentLogWhereUniqueInput
  }

  /**
   * AgentLog findFirst
   */
  export type AgentLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * Filter, which AgentLog to fetch.
     */
    where?: AgentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentLogs to fetch.
     */
    orderBy?: AgentLogOrderByWithRelationInput | AgentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentLogs.
     */
    cursor?: AgentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentLogs.
     */
    distinct?: AgentLogScalarFieldEnum | AgentLogScalarFieldEnum[]
  }

  /**
   * AgentLog findFirstOrThrow
   */
  export type AgentLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * Filter, which AgentLog to fetch.
     */
    where?: AgentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentLogs to fetch.
     */
    orderBy?: AgentLogOrderByWithRelationInput | AgentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentLogs.
     */
    cursor?: AgentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentLogs.
     */
    distinct?: AgentLogScalarFieldEnum | AgentLogScalarFieldEnum[]
  }

  /**
   * AgentLog findMany
   */
  export type AgentLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * Filter, which AgentLogs to fetch.
     */
    where?: AgentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentLogs to fetch.
     */
    orderBy?: AgentLogOrderByWithRelationInput | AgentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentLogs.
     */
    cursor?: AgentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentLogs.
     */
    skip?: number
    distinct?: AgentLogScalarFieldEnum | AgentLogScalarFieldEnum[]
  }

  /**
   * AgentLog create
   */
  export type AgentLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AgentLog.
     */
    data: XOR<AgentLogCreateInput, AgentLogUncheckedCreateInput>
  }

  /**
   * AgentLog createMany
   */
  export type AgentLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentLogs.
     */
    data: AgentLogCreateManyInput | AgentLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentLog createManyAndReturn
   */
  export type AgentLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * The data used to create many AgentLogs.
     */
    data: AgentLogCreateManyInput | AgentLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentLog update
   */
  export type AgentLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AgentLog.
     */
    data: XOR<AgentLogUpdateInput, AgentLogUncheckedUpdateInput>
    /**
     * Choose, which AgentLog to update.
     */
    where: AgentLogWhereUniqueInput
  }

  /**
   * AgentLog updateMany
   */
  export type AgentLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentLogs.
     */
    data: XOR<AgentLogUpdateManyMutationInput, AgentLogUncheckedUpdateManyInput>
    /**
     * Filter which AgentLogs to update
     */
    where?: AgentLogWhereInput
    /**
     * Limit how many AgentLogs to update.
     */
    limit?: number
  }

  /**
   * AgentLog updateManyAndReturn
   */
  export type AgentLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * The data used to update AgentLogs.
     */
    data: XOR<AgentLogUpdateManyMutationInput, AgentLogUncheckedUpdateManyInput>
    /**
     * Filter which AgentLogs to update
     */
    where?: AgentLogWhereInput
    /**
     * Limit how many AgentLogs to update.
     */
    limit?: number
  }

  /**
   * AgentLog upsert
   */
  export type AgentLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AgentLog to update in case it exists.
     */
    where: AgentLogWhereUniqueInput
    /**
     * In case the AgentLog found by the `where` argument doesn't exist, create a new AgentLog with this data.
     */
    create: XOR<AgentLogCreateInput, AgentLogUncheckedCreateInput>
    /**
     * In case the AgentLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentLogUpdateInput, AgentLogUncheckedUpdateInput>
  }

  /**
   * AgentLog delete
   */
  export type AgentLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
    /**
     * Filter which AgentLog to delete.
     */
    where: AgentLogWhereUniqueInput
  }

  /**
   * AgentLog deleteMany
   */
  export type AgentLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentLogs to delete
     */
    where?: AgentLogWhereInput
    /**
     * Limit how many AgentLogs to delete.
     */
    limit?: number
  }

  /**
   * AgentLog without action
   */
  export type AgentLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentLog
     */
    select?: AgentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentLog
     */
    omit?: AgentLogOmit<ExtArgs> | null
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


  export const MarketDataScalarFieldEnum: {
    symbol: 'symbol',
    timestamp: 'timestamp',
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close',
    volume: 'volume'
  };

  export type MarketDataScalarFieldEnum = (typeof MarketDataScalarFieldEnum)[keyof typeof MarketDataScalarFieldEnum]


  export const AgentLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    agentName: 'agentName',
    context: 'context',
    decision: 'decision'
  };

  export type AgentLogScalarFieldEnum = (typeof AgentLogScalarFieldEnum)[keyof typeof AgentLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type MarketDataWhereInput = {
    AND?: MarketDataWhereInput | MarketDataWhereInput[]
    OR?: MarketDataWhereInput[]
    NOT?: MarketDataWhereInput | MarketDataWhereInput[]
    symbol?: StringFilter<"MarketData"> | string
    timestamp?: DateTimeFilter<"MarketData"> | Date | string
    open?: DecimalFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    high?: DecimalFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    low?: DecimalFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    close?: DecimalFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntFilter<"MarketData"> | bigint | number
  }

  export type MarketDataOrderByWithRelationInput = {
    symbol?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type MarketDataWhereUniqueInput = Prisma.AtLeast<{
    symbol_timestamp?: MarketDataSymbolTimestampCompoundUniqueInput
    AND?: MarketDataWhereInput | MarketDataWhereInput[]
    OR?: MarketDataWhereInput[]
    NOT?: MarketDataWhereInput | MarketDataWhereInput[]
    symbol?: StringFilter<"MarketData"> | string
    timestamp?: DateTimeFilter<"MarketData"> | Date | string
    open?: DecimalFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    high?: DecimalFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    low?: DecimalFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    close?: DecimalFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntFilter<"MarketData"> | bigint | number
  }, "symbol_timestamp">

  export type MarketDataOrderByWithAggregationInput = {
    symbol?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    _count?: MarketDataCountOrderByAggregateInput
    _avg?: MarketDataAvgOrderByAggregateInput
    _max?: MarketDataMaxOrderByAggregateInput
    _min?: MarketDataMinOrderByAggregateInput
    _sum?: MarketDataSumOrderByAggregateInput
  }

  export type MarketDataScalarWhereWithAggregatesInput = {
    AND?: MarketDataScalarWhereWithAggregatesInput | MarketDataScalarWhereWithAggregatesInput[]
    OR?: MarketDataScalarWhereWithAggregatesInput[]
    NOT?: MarketDataScalarWhereWithAggregatesInput | MarketDataScalarWhereWithAggregatesInput[]
    symbol?: StringWithAggregatesFilter<"MarketData"> | string
    timestamp?: DateTimeWithAggregatesFilter<"MarketData"> | Date | string
    open?: DecimalWithAggregatesFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    high?: DecimalWithAggregatesFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    low?: DecimalWithAggregatesFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    close?: DecimalWithAggregatesFilter<"MarketData"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntWithAggregatesFilter<"MarketData"> | bigint | number
  }

  export type AgentLogWhereInput = {
    AND?: AgentLogWhereInput | AgentLogWhereInput[]
    OR?: AgentLogWhereInput[]
    NOT?: AgentLogWhereInput | AgentLogWhereInput[]
    id?: BigIntFilter<"AgentLog"> | bigint | number
    createdAt?: DateTimeFilter<"AgentLog"> | Date | string
    agentName?: StringFilter<"AgentLog"> | string
    context?: JsonFilter<"AgentLog">
    decision?: StringNullableFilter<"AgentLog"> | string | null
  }

  export type AgentLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    agentName?: SortOrder
    context?: SortOrder
    decision?: SortOrderInput | SortOrder
  }

  export type AgentLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AgentLogWhereInput | AgentLogWhereInput[]
    OR?: AgentLogWhereInput[]
    NOT?: AgentLogWhereInput | AgentLogWhereInput[]
    createdAt?: DateTimeFilter<"AgentLog"> | Date | string
    agentName?: StringFilter<"AgentLog"> | string
    context?: JsonFilter<"AgentLog">
    decision?: StringNullableFilter<"AgentLog"> | string | null
  }, "id">

  export type AgentLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    agentName?: SortOrder
    context?: SortOrder
    decision?: SortOrderInput | SortOrder
    _count?: AgentLogCountOrderByAggregateInput
    _avg?: AgentLogAvgOrderByAggregateInput
    _max?: AgentLogMaxOrderByAggregateInput
    _min?: AgentLogMinOrderByAggregateInput
    _sum?: AgentLogSumOrderByAggregateInput
  }

  export type AgentLogScalarWhereWithAggregatesInput = {
    AND?: AgentLogScalarWhereWithAggregatesInput | AgentLogScalarWhereWithAggregatesInput[]
    OR?: AgentLogScalarWhereWithAggregatesInput[]
    NOT?: AgentLogScalarWhereWithAggregatesInput | AgentLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"AgentLog"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"AgentLog"> | Date | string
    agentName?: StringWithAggregatesFilter<"AgentLog"> | string
    context?: JsonWithAggregatesFilter<"AgentLog">
    decision?: StringNullableWithAggregatesFilter<"AgentLog"> | string | null
  }

  export type MarketDataCreateInput = {
    symbol: string
    timestamp: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: bigint | number
  }

  export type MarketDataUncheckedCreateInput = {
    symbol: string
    timestamp: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: bigint | number
  }

  export type MarketDataUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MarketDataUncheckedUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MarketDataCreateManyInput = {
    symbol: string
    timestamp: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: bigint | number
  }

  export type MarketDataUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MarketDataUncheckedUpdateManyInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AgentLogCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    agentName: string
    context: JsonNullValueInput | InputJsonValue
    decision?: string | null
  }

  export type AgentLogUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    agentName: string
    context: JsonNullValueInput | InputJsonValue
    decision?: string | null
  }

  export type AgentLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentName?: StringFieldUpdateOperationsInput | string
    context?: JsonNullValueInput | InputJsonValue
    decision?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentName?: StringFieldUpdateOperationsInput | string
    context?: JsonNullValueInput | InputJsonValue
    decision?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentLogCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    agentName: string
    context: JsonNullValueInput | InputJsonValue
    decision?: string | null
  }

  export type AgentLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentName?: StringFieldUpdateOperationsInput | string
    context?: JsonNullValueInput | InputJsonValue
    decision?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentName?: StringFieldUpdateOperationsInput | string
    context?: JsonNullValueInput | InputJsonValue
    decision?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type MarketDataSymbolTimestampCompoundUniqueInput = {
    symbol: string
    timestamp: Date | string
  }

  export type MarketDataCountOrderByAggregateInput = {
    symbol?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type MarketDataAvgOrderByAggregateInput = {
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type MarketDataMaxOrderByAggregateInput = {
    symbol?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type MarketDataMinOrderByAggregateInput = {
    symbol?: SortOrder
    timestamp?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type MarketDataSumOrderByAggregateInput = {
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgentLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    agentName?: SortOrder
    context?: SortOrder
    decision?: SortOrder
  }

  export type AgentLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgentLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    agentName?: SortOrder
    decision?: SortOrder
  }

  export type AgentLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    agentName?: SortOrder
    decision?: SortOrder
  }

  export type AgentLogSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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