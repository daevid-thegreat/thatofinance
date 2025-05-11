
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
 * Model LoanApplication
 * 
 */
export type LoanApplication = $Result.DefaultSelection<Prisma.$LoanApplicationPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LoanType: {
  EMERGENCY: 'EMERGENCY',
  BUSINESS: 'BUSINESS',
  THATOFIX: 'THATOFIX',
  SECOND_SALARY: 'SECOND_SALARY',
  LOAN_READVANCE: 'LOAN_READVANCE'
};

export type LoanType = (typeof LoanType)[keyof typeof LoanType]


export const EmploymentType: {
  CONTRACT: 'CONTRACT',
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  OTHER: 'OTHER'
};

export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType]


export const MaritalStatus: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Race: {
  WHITE_CAUCASIAN: 'WHITE_CAUCASIAN',
  BLACK_AFRICAN_AMERICAN: 'BLACK_AFRICAN_AMERICAN',
  HISPANIC_LATINO: 'HISPANIC_LATINO',
  ASIAN: 'ASIAN',
  OTHER: 'OTHER'
};

export type Race = (typeof Race)[keyof typeof Race]


export const MaritalProperty: {
  COP: 'COP',
  ANC: 'ANC',
  OTHER: 'OTHER'
};

export type MaritalProperty = (typeof MaritalProperty)[keyof typeof MaritalProperty]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  UNDER_REVIEW: 'UNDER_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  FUNDED: 'FUNDED',
  COMPLETED: 'COMPLETED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  LOAN_OFFICER: 'LOAN_OFFICER',
  REVIEWER: 'REVIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type LoanType = $Enums.LoanType

export const LoanType: typeof $Enums.LoanType

export type EmploymentType = $Enums.EmploymentType

export const EmploymentType: typeof $Enums.EmploymentType

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Race = $Enums.Race

export const Race: typeof $Enums.Race

export type MaritalProperty = $Enums.MaritalProperty

export const MaritalProperty: typeof $Enums.MaritalProperty

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.loanApplication`: Exposes CRUD operations for the **LoanApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanApplications
    * const loanApplications = await prisma.loanApplication.findMany()
    * ```
    */
  get loanApplication(): Prisma.LoanApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
    LoanApplication: 'LoanApplication',
    Document: 'Document',
    AuditLog: 'AuditLog'
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
      modelProps: "user" | "loanApplication" | "document" | "auditLog"
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
      LoanApplication: {
        payload: Prisma.$LoanApplicationPayload<ExtArgs>
        fields: Prisma.LoanApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          findFirst: {
            args: Prisma.LoanApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          findMany: {
            args: Prisma.LoanApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>[]
          }
          create: {
            args: Prisma.LoanApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          createMany: {
            args: Prisma.LoanApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>[]
          }
          delete: {
            args: Prisma.LoanApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          update: {
            args: Prisma.LoanApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          deleteMany: {
            args: Prisma.LoanApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>[]
          }
          upsert: {
            args: Prisma.LoanApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanApplicationPayload>
          }
          aggregate: {
            args: Prisma.LoanApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanApplication>
          }
          groupBy: {
            args: Prisma.LoanApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<LoanApplicationCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
    loanApplication?: LoanApplicationOmit
    document?: DocumentOmit
    auditLog?: AuditLogOmit
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
    loanApplications: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanApplications?: boolean | UserCountOutputTypeCountLoanApplicationsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
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
  export type UserCountOutputTypeCountLoanApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type LoanApplicationCountOutputType
   */

  export type LoanApplicationCountOutputType = {
    auditLogs: number
  }

  export type LoanApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | LoanApplicationCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * LoanApplicationCountOutputType without action
   */
  export type LoanApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplicationCountOutputType
     */
    select?: LoanApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanApplicationCountOutputType without action
   */
  export type LoanApplicationCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
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
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    isActive: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    isActive: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    isActive: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    isActive?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    isActive?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    isActive?: true
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
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    lastLogin: Date | null
    isActive: boolean
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
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    loanApplications?: boolean | User$loanApplicationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "createdAt" | "updatedAt" | "lastLogin" | "isActive", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanApplications?: boolean | User$loanApplicationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      loanApplications: Prisma.$LoanApplicationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      lastLogin: Date | null
      isActive: boolean
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
    loanApplications<T extends User$loanApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$loanApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
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
   * User.loanApplications
   */
  export type User$loanApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    where?: LoanApplicationWhereInput
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    cursor?: LoanApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanApplicationScalarFieldEnum | LoanApplicationScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
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
   * Model LoanApplication
   */

  export type AggregateLoanApplication = {
    _count: LoanApplicationCountAggregateOutputType | null
    _avg: LoanApplicationAvgAggregateOutputType | null
    _sum: LoanApplicationSumAggregateOutputType | null
    _min: LoanApplicationMinAggregateOutputType | null
    _max: LoanApplicationMaxAggregateOutputType | null
  }

  export type LoanApplicationAvgAggregateOutputType = {
    loanAmount: number | null
    loanTerm: number | null
    lengthOfEmployment: number | null
    dependants: number | null
    salary: number | null
    netIncome: number | null
    basicIncome: number | null
    livingExpenses: number | null
    monthlyLoanRepayments: number | null
    totalExpenses: number | null
  }

  export type LoanApplicationSumAggregateOutputType = {
    loanAmount: number | null
    loanTerm: number | null
    lengthOfEmployment: number | null
    dependants: number | null
    salary: number | null
    netIncome: number | null
    basicIncome: number | null
    livingExpenses: number | null
    monthlyLoanRepayments: number | null
    totalExpenses: number | null
  }

  export type LoanApplicationMinAggregateOutputType = {
    id: string | null
    loanType: $Enums.LoanType | null
    loanAmount: number | null
    loanTerm: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    idNumber: string | null
    maritalStatus: $Enums.MaritalStatus | null
    maritalProperty: $Enums.MaritalProperty | null
    gender: $Enums.Gender | null
    cell: string | null
    whatsapp: string | null
    email: string | null
    race: $Enums.Race | null
    employer: string | null
    employmentType: $Enums.EmploymentType | null
    lengthOfEmployment: number | null
    employeeNumber: string | null
    dependants: number | null
    salary: number | null
    employerTelephone: string | null
    employerEmail: string | null
    netIncome: number | null
    basicIncome: number | null
    livingExpenses: number | null
    monthlyLoanRepayments: number | null
    totalExpenses: number | null
    bankName: string | null
    accountNumber: string | null
    accountHolder: string | null
    branchCode: string | null
    status: $Enums.ApplicationStatus | null
    notes: string | null
    rejectionReason: string | null
    idDocumentId: string | null
    payslipId: string | null
    bankStatementId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewedAt: Date | null
    approvedAt: Date | null
    fundedAt: Date | null
  }

  export type LoanApplicationMaxAggregateOutputType = {
    id: string | null
    loanType: $Enums.LoanType | null
    loanAmount: number | null
    loanTerm: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    idNumber: string | null
    maritalStatus: $Enums.MaritalStatus | null
    maritalProperty: $Enums.MaritalProperty | null
    gender: $Enums.Gender | null
    cell: string | null
    whatsapp: string | null
    email: string | null
    race: $Enums.Race | null
    employer: string | null
    employmentType: $Enums.EmploymentType | null
    lengthOfEmployment: number | null
    employeeNumber: string | null
    dependants: number | null
    salary: number | null
    employerTelephone: string | null
    employerEmail: string | null
    netIncome: number | null
    basicIncome: number | null
    livingExpenses: number | null
    monthlyLoanRepayments: number | null
    totalExpenses: number | null
    bankName: string | null
    accountNumber: string | null
    accountHolder: string | null
    branchCode: string | null
    status: $Enums.ApplicationStatus | null
    notes: string | null
    rejectionReason: string | null
    idDocumentId: string | null
    payslipId: string | null
    bankStatementId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewedAt: Date | null
    approvedAt: Date | null
    fundedAt: Date | null
  }

  export type LoanApplicationCountAggregateOutputType = {
    id: number
    loanType: number
    loanAmount: number
    loanTerm: number
    firstName: number
    lastName: number
    address: number
    idNumber: number
    maritalStatus: number
    maritalProperty: number
    gender: number
    cell: number
    whatsapp: number
    email: number
    race: number
    employer: number
    employmentType: number
    lengthOfEmployment: number
    employeeNumber: number
    dependants: number
    salary: number
    employerTelephone: number
    employerEmail: number
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: number
    accountNumber: number
    accountHolder: number
    branchCode: number
    status: number
    notes: number
    rejectionReason: number
    idDocumentId: number
    payslipId: number
    bankStatementId: number
    userId: number
    createdAt: number
    updatedAt: number
    reviewedAt: number
    approvedAt: number
    fundedAt: number
    _all: number
  }


  export type LoanApplicationAvgAggregateInputType = {
    loanAmount?: true
    loanTerm?: true
    lengthOfEmployment?: true
    dependants?: true
    salary?: true
    netIncome?: true
    basicIncome?: true
    livingExpenses?: true
    monthlyLoanRepayments?: true
    totalExpenses?: true
  }

  export type LoanApplicationSumAggregateInputType = {
    loanAmount?: true
    loanTerm?: true
    lengthOfEmployment?: true
    dependants?: true
    salary?: true
    netIncome?: true
    basicIncome?: true
    livingExpenses?: true
    monthlyLoanRepayments?: true
    totalExpenses?: true
  }

  export type LoanApplicationMinAggregateInputType = {
    id?: true
    loanType?: true
    loanAmount?: true
    loanTerm?: true
    firstName?: true
    lastName?: true
    address?: true
    idNumber?: true
    maritalStatus?: true
    maritalProperty?: true
    gender?: true
    cell?: true
    whatsapp?: true
    email?: true
    race?: true
    employer?: true
    employmentType?: true
    lengthOfEmployment?: true
    employeeNumber?: true
    dependants?: true
    salary?: true
    employerTelephone?: true
    employerEmail?: true
    netIncome?: true
    basicIncome?: true
    livingExpenses?: true
    monthlyLoanRepayments?: true
    totalExpenses?: true
    bankName?: true
    accountNumber?: true
    accountHolder?: true
    branchCode?: true
    status?: true
    notes?: true
    rejectionReason?: true
    idDocumentId?: true
    payslipId?: true
    bankStatementId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    reviewedAt?: true
    approvedAt?: true
    fundedAt?: true
  }

  export type LoanApplicationMaxAggregateInputType = {
    id?: true
    loanType?: true
    loanAmount?: true
    loanTerm?: true
    firstName?: true
    lastName?: true
    address?: true
    idNumber?: true
    maritalStatus?: true
    maritalProperty?: true
    gender?: true
    cell?: true
    whatsapp?: true
    email?: true
    race?: true
    employer?: true
    employmentType?: true
    lengthOfEmployment?: true
    employeeNumber?: true
    dependants?: true
    salary?: true
    employerTelephone?: true
    employerEmail?: true
    netIncome?: true
    basicIncome?: true
    livingExpenses?: true
    monthlyLoanRepayments?: true
    totalExpenses?: true
    bankName?: true
    accountNumber?: true
    accountHolder?: true
    branchCode?: true
    status?: true
    notes?: true
    rejectionReason?: true
    idDocumentId?: true
    payslipId?: true
    bankStatementId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    reviewedAt?: true
    approvedAt?: true
    fundedAt?: true
  }

  export type LoanApplicationCountAggregateInputType = {
    id?: true
    loanType?: true
    loanAmount?: true
    loanTerm?: true
    firstName?: true
    lastName?: true
    address?: true
    idNumber?: true
    maritalStatus?: true
    maritalProperty?: true
    gender?: true
    cell?: true
    whatsapp?: true
    email?: true
    race?: true
    employer?: true
    employmentType?: true
    lengthOfEmployment?: true
    employeeNumber?: true
    dependants?: true
    salary?: true
    employerTelephone?: true
    employerEmail?: true
    netIncome?: true
    basicIncome?: true
    livingExpenses?: true
    monthlyLoanRepayments?: true
    totalExpenses?: true
    bankName?: true
    accountNumber?: true
    accountHolder?: true
    branchCode?: true
    status?: true
    notes?: true
    rejectionReason?: true
    idDocumentId?: true
    payslipId?: true
    bankStatementId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    reviewedAt?: true
    approvedAt?: true
    fundedAt?: true
    _all?: true
  }

  export type LoanApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanApplication to aggregate.
     */
    where?: LoanApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanApplications to fetch.
     */
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanApplications
    **/
    _count?: true | LoanApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanApplicationMaxAggregateInputType
  }

  export type GetLoanApplicationAggregateType<T extends LoanApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanApplication[P]>
      : GetScalarType<T[P], AggregateLoanApplication[P]>
  }




  export type LoanApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanApplicationWhereInput
    orderBy?: LoanApplicationOrderByWithAggregationInput | LoanApplicationOrderByWithAggregationInput[]
    by: LoanApplicationScalarFieldEnum[] | LoanApplicationScalarFieldEnum
    having?: LoanApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanApplicationCountAggregateInputType | true
    _avg?: LoanApplicationAvgAggregateInputType
    _sum?: LoanApplicationSumAggregateInputType
    _min?: LoanApplicationMinAggregateInputType
    _max?: LoanApplicationMaxAggregateInputType
  }

  export type LoanApplicationGroupByOutputType = {
    id: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status: $Enums.ApplicationStatus
    notes: string | null
    rejectionReason: string | null
    idDocumentId: string | null
    payslipId: string | null
    bankStatementId: string | null
    userId: string | null
    createdAt: Date
    updatedAt: Date
    reviewedAt: Date | null
    approvedAt: Date | null
    fundedAt: Date | null
    _count: LoanApplicationCountAggregateOutputType | null
    _avg: LoanApplicationAvgAggregateOutputType | null
    _sum: LoanApplicationSumAggregateOutputType | null
    _min: LoanApplicationMinAggregateOutputType | null
    _max: LoanApplicationMaxAggregateOutputType | null
  }

  type GetLoanApplicationGroupByPayload<T extends LoanApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], LoanApplicationGroupByOutputType[P]>
        }
      >
    >


  export type LoanApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanType?: boolean
    loanAmount?: boolean
    loanTerm?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    idNumber?: boolean
    maritalStatus?: boolean
    maritalProperty?: boolean
    gender?: boolean
    cell?: boolean
    whatsapp?: boolean
    email?: boolean
    race?: boolean
    employer?: boolean
    employmentType?: boolean
    lengthOfEmployment?: boolean
    employeeNumber?: boolean
    dependants?: boolean
    salary?: boolean
    employerTelephone?: boolean
    employerEmail?: boolean
    netIncome?: boolean
    basicIncome?: boolean
    livingExpenses?: boolean
    monthlyLoanRepayments?: boolean
    totalExpenses?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolder?: boolean
    branchCode?: boolean
    status?: boolean
    notes?: boolean
    rejectionReason?: boolean
    idDocumentId?: boolean
    payslipId?: boolean
    bankStatementId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewedAt?: boolean
    approvedAt?: boolean
    fundedAt?: boolean
    idDocument?: boolean | LoanApplication$idDocumentArgs<ExtArgs>
    payslip?: boolean | LoanApplication$payslipArgs<ExtArgs>
    bankStatement?: boolean | LoanApplication$bankStatementArgs<ExtArgs>
    user?: boolean | LoanApplication$userArgs<ExtArgs>
    auditLogs?: boolean | LoanApplication$auditLogsArgs<ExtArgs>
    _count?: boolean | LoanApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanApplication"]>

  export type LoanApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanType?: boolean
    loanAmount?: boolean
    loanTerm?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    idNumber?: boolean
    maritalStatus?: boolean
    maritalProperty?: boolean
    gender?: boolean
    cell?: boolean
    whatsapp?: boolean
    email?: boolean
    race?: boolean
    employer?: boolean
    employmentType?: boolean
    lengthOfEmployment?: boolean
    employeeNumber?: boolean
    dependants?: boolean
    salary?: boolean
    employerTelephone?: boolean
    employerEmail?: boolean
    netIncome?: boolean
    basicIncome?: boolean
    livingExpenses?: boolean
    monthlyLoanRepayments?: boolean
    totalExpenses?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolder?: boolean
    branchCode?: boolean
    status?: boolean
    notes?: boolean
    rejectionReason?: boolean
    idDocumentId?: boolean
    payslipId?: boolean
    bankStatementId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewedAt?: boolean
    approvedAt?: boolean
    fundedAt?: boolean
    idDocument?: boolean | LoanApplication$idDocumentArgs<ExtArgs>
    payslip?: boolean | LoanApplication$payslipArgs<ExtArgs>
    bankStatement?: boolean | LoanApplication$bankStatementArgs<ExtArgs>
    user?: boolean | LoanApplication$userArgs<ExtArgs>
  }, ExtArgs["result"]["loanApplication"]>

  export type LoanApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanType?: boolean
    loanAmount?: boolean
    loanTerm?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    idNumber?: boolean
    maritalStatus?: boolean
    maritalProperty?: boolean
    gender?: boolean
    cell?: boolean
    whatsapp?: boolean
    email?: boolean
    race?: boolean
    employer?: boolean
    employmentType?: boolean
    lengthOfEmployment?: boolean
    employeeNumber?: boolean
    dependants?: boolean
    salary?: boolean
    employerTelephone?: boolean
    employerEmail?: boolean
    netIncome?: boolean
    basicIncome?: boolean
    livingExpenses?: boolean
    monthlyLoanRepayments?: boolean
    totalExpenses?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolder?: boolean
    branchCode?: boolean
    status?: boolean
    notes?: boolean
    rejectionReason?: boolean
    idDocumentId?: boolean
    payslipId?: boolean
    bankStatementId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewedAt?: boolean
    approvedAt?: boolean
    fundedAt?: boolean
    idDocument?: boolean | LoanApplication$idDocumentArgs<ExtArgs>
    payslip?: boolean | LoanApplication$payslipArgs<ExtArgs>
    bankStatement?: boolean | LoanApplication$bankStatementArgs<ExtArgs>
    user?: boolean | LoanApplication$userArgs<ExtArgs>
  }, ExtArgs["result"]["loanApplication"]>

  export type LoanApplicationSelectScalar = {
    id?: boolean
    loanType?: boolean
    loanAmount?: boolean
    loanTerm?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    idNumber?: boolean
    maritalStatus?: boolean
    maritalProperty?: boolean
    gender?: boolean
    cell?: boolean
    whatsapp?: boolean
    email?: boolean
    race?: boolean
    employer?: boolean
    employmentType?: boolean
    lengthOfEmployment?: boolean
    employeeNumber?: boolean
    dependants?: boolean
    salary?: boolean
    employerTelephone?: boolean
    employerEmail?: boolean
    netIncome?: boolean
    basicIncome?: boolean
    livingExpenses?: boolean
    monthlyLoanRepayments?: boolean
    totalExpenses?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolder?: boolean
    branchCode?: boolean
    status?: boolean
    notes?: boolean
    rejectionReason?: boolean
    idDocumentId?: boolean
    payslipId?: boolean
    bankStatementId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewedAt?: boolean
    approvedAt?: boolean
    fundedAt?: boolean
  }

  export type LoanApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loanType" | "loanAmount" | "loanTerm" | "firstName" | "lastName" | "address" | "idNumber" | "maritalStatus" | "maritalProperty" | "gender" | "cell" | "whatsapp" | "email" | "race" | "employer" | "employmentType" | "lengthOfEmployment" | "employeeNumber" | "dependants" | "salary" | "employerTelephone" | "employerEmail" | "netIncome" | "basicIncome" | "livingExpenses" | "monthlyLoanRepayments" | "totalExpenses" | "bankName" | "accountNumber" | "accountHolder" | "branchCode" | "status" | "notes" | "rejectionReason" | "idDocumentId" | "payslipId" | "bankStatementId" | "userId" | "createdAt" | "updatedAt" | "reviewedAt" | "approvedAt" | "fundedAt", ExtArgs["result"]["loanApplication"]>
  export type LoanApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idDocument?: boolean | LoanApplication$idDocumentArgs<ExtArgs>
    payslip?: boolean | LoanApplication$payslipArgs<ExtArgs>
    bankStatement?: boolean | LoanApplication$bankStatementArgs<ExtArgs>
    user?: boolean | LoanApplication$userArgs<ExtArgs>
    auditLogs?: boolean | LoanApplication$auditLogsArgs<ExtArgs>
    _count?: boolean | LoanApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoanApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idDocument?: boolean | LoanApplication$idDocumentArgs<ExtArgs>
    payslip?: boolean | LoanApplication$payslipArgs<ExtArgs>
    bankStatement?: boolean | LoanApplication$bankStatementArgs<ExtArgs>
    user?: boolean | LoanApplication$userArgs<ExtArgs>
  }
  export type LoanApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idDocument?: boolean | LoanApplication$idDocumentArgs<ExtArgs>
    payslip?: boolean | LoanApplication$payslipArgs<ExtArgs>
    bankStatement?: boolean | LoanApplication$bankStatementArgs<ExtArgs>
    user?: boolean | LoanApplication$userArgs<ExtArgs>
  }

  export type $LoanApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanApplication"
    objects: {
      idDocument: Prisma.$DocumentPayload<ExtArgs> | null
      payslip: Prisma.$DocumentPayload<ExtArgs> | null
      bankStatement: Prisma.$DocumentPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      loanType: $Enums.LoanType
      loanAmount: number
      loanTerm: number
      firstName: string
      lastName: string
      address: string
      idNumber: string
      maritalStatus: $Enums.MaritalStatus
      maritalProperty: $Enums.MaritalProperty | null
      gender: $Enums.Gender
      cell: string
      whatsapp: string | null
      email: string
      race: $Enums.Race
      employer: string
      employmentType: $Enums.EmploymentType
      lengthOfEmployment: number
      employeeNumber: string
      dependants: number
      salary: number
      employerTelephone: string
      employerEmail: string
      netIncome: number
      basicIncome: number
      livingExpenses: number
      monthlyLoanRepayments: number
      totalExpenses: number
      bankName: string
      accountNumber: string
      accountHolder: string
      branchCode: string
      status: $Enums.ApplicationStatus
      notes: string | null
      rejectionReason: string | null
      idDocumentId: string | null
      payslipId: string | null
      bankStatementId: string | null
      userId: string | null
      createdAt: Date
      updatedAt: Date
      reviewedAt: Date | null
      approvedAt: Date | null
      fundedAt: Date | null
    }, ExtArgs["result"]["loanApplication"]>
    composites: {}
  }

  type LoanApplicationGetPayload<S extends boolean | null | undefined | LoanApplicationDefaultArgs> = $Result.GetResult<Prisma.$LoanApplicationPayload, S>

  type LoanApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanApplicationCountAggregateInputType | true
    }

  export interface LoanApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanApplication'], meta: { name: 'LoanApplication' } }
    /**
     * Find zero or one LoanApplication that matches the filter.
     * @param {LoanApplicationFindUniqueArgs} args - Arguments to find a LoanApplication
     * @example
     * // Get one LoanApplication
     * const loanApplication = await prisma.loanApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanApplicationFindUniqueArgs>(args: SelectSubset<T, LoanApplicationFindUniqueArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoanApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanApplicationFindUniqueOrThrowArgs} args - Arguments to find a LoanApplication
     * @example
     * // Get one LoanApplication
     * const loanApplication = await prisma.loanApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationFindFirstArgs} args - Arguments to find a LoanApplication
     * @example
     * // Get one LoanApplication
     * const loanApplication = await prisma.loanApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanApplicationFindFirstArgs>(args?: SelectSubset<T, LoanApplicationFindFirstArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationFindFirstOrThrowArgs} args - Arguments to find a LoanApplication
     * @example
     * // Get one LoanApplication
     * const loanApplication = await prisma.loanApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoanApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanApplications
     * const loanApplications = await prisma.loanApplication.findMany()
     * 
     * // Get first 10 LoanApplications
     * const loanApplications = await prisma.loanApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanApplicationWithIdOnly = await prisma.loanApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanApplicationFindManyArgs>(args?: SelectSubset<T, LoanApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoanApplication.
     * @param {LoanApplicationCreateArgs} args - Arguments to create a LoanApplication.
     * @example
     * // Create one LoanApplication
     * const LoanApplication = await prisma.loanApplication.create({
     *   data: {
     *     // ... data to create a LoanApplication
     *   }
     * })
     * 
     */
    create<T extends LoanApplicationCreateArgs>(args: SelectSubset<T, LoanApplicationCreateArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoanApplications.
     * @param {LoanApplicationCreateManyArgs} args - Arguments to create many LoanApplications.
     * @example
     * // Create many LoanApplications
     * const loanApplication = await prisma.loanApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanApplicationCreateManyArgs>(args?: SelectSubset<T, LoanApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoanApplications and returns the data saved in the database.
     * @param {LoanApplicationCreateManyAndReturnArgs} args - Arguments to create many LoanApplications.
     * @example
     * // Create many LoanApplications
     * const loanApplication = await prisma.loanApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoanApplications and only return the `id`
     * const loanApplicationWithIdOnly = await prisma.loanApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoanApplication.
     * @param {LoanApplicationDeleteArgs} args - Arguments to delete one LoanApplication.
     * @example
     * // Delete one LoanApplication
     * const LoanApplication = await prisma.loanApplication.delete({
     *   where: {
     *     // ... filter to delete one LoanApplication
     *   }
     * })
     * 
     */
    delete<T extends LoanApplicationDeleteArgs>(args: SelectSubset<T, LoanApplicationDeleteArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoanApplication.
     * @param {LoanApplicationUpdateArgs} args - Arguments to update one LoanApplication.
     * @example
     * // Update one LoanApplication
     * const loanApplication = await prisma.loanApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanApplicationUpdateArgs>(args: SelectSubset<T, LoanApplicationUpdateArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoanApplications.
     * @param {LoanApplicationDeleteManyArgs} args - Arguments to filter LoanApplications to delete.
     * @example
     * // Delete a few LoanApplications
     * const { count } = await prisma.loanApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanApplicationDeleteManyArgs>(args?: SelectSubset<T, LoanApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanApplications
     * const loanApplication = await prisma.loanApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanApplicationUpdateManyArgs>(args: SelectSubset<T, LoanApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanApplications and returns the data updated in the database.
     * @param {LoanApplicationUpdateManyAndReturnArgs} args - Arguments to update many LoanApplications.
     * @example
     * // Update many LoanApplications
     * const loanApplication = await prisma.loanApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoanApplications and only return the `id`
     * const loanApplicationWithIdOnly = await prisma.loanApplication.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoanApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoanApplication.
     * @param {LoanApplicationUpsertArgs} args - Arguments to update or create a LoanApplication.
     * @example
     * // Update or create a LoanApplication
     * const loanApplication = await prisma.loanApplication.upsert({
     *   create: {
     *     // ... data to create a LoanApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanApplication we want to update
     *   }
     * })
     */
    upsert<T extends LoanApplicationUpsertArgs>(args: SelectSubset<T, LoanApplicationUpsertArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoanApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationCountArgs} args - Arguments to filter LoanApplications to count.
     * @example
     * // Count the number of LoanApplications
     * const count = await prisma.loanApplication.count({
     *   where: {
     *     // ... the filter for the LoanApplications we want to count
     *   }
     * })
    **/
    count<T extends LoanApplicationCountArgs>(
      args?: Subset<T, LoanApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoanApplicationAggregateArgs>(args: Subset<T, LoanApplicationAggregateArgs>): Prisma.PrismaPromise<GetLoanApplicationAggregateType<T>>

    /**
     * Group by LoanApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanApplicationGroupByArgs} args - Group by arguments.
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
      T extends LoanApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanApplicationGroupByArgs['orderBy'] }
        : { orderBy?: LoanApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoanApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanApplication model
   */
  readonly fields: LoanApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    idDocument<T extends LoanApplication$idDocumentArgs<ExtArgs> = {}>(args?: Subset<T, LoanApplication$idDocumentArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payslip<T extends LoanApplication$payslipArgs<ExtArgs> = {}>(args?: Subset<T, LoanApplication$payslipArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bankStatement<T extends LoanApplication$bankStatementArgs<ExtArgs> = {}>(args?: Subset<T, LoanApplication$bankStatementArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends LoanApplication$userArgs<ExtArgs> = {}>(args?: Subset<T, LoanApplication$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auditLogs<T extends LoanApplication$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, LoanApplication$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LoanApplication model
   */
  interface LoanApplicationFieldRefs {
    readonly id: FieldRef<"LoanApplication", 'String'>
    readonly loanType: FieldRef<"LoanApplication", 'LoanType'>
    readonly loanAmount: FieldRef<"LoanApplication", 'Float'>
    readonly loanTerm: FieldRef<"LoanApplication", 'Int'>
    readonly firstName: FieldRef<"LoanApplication", 'String'>
    readonly lastName: FieldRef<"LoanApplication", 'String'>
    readonly address: FieldRef<"LoanApplication", 'String'>
    readonly idNumber: FieldRef<"LoanApplication", 'String'>
    readonly maritalStatus: FieldRef<"LoanApplication", 'MaritalStatus'>
    readonly maritalProperty: FieldRef<"LoanApplication", 'MaritalProperty'>
    readonly gender: FieldRef<"LoanApplication", 'Gender'>
    readonly cell: FieldRef<"LoanApplication", 'String'>
    readonly whatsapp: FieldRef<"LoanApplication", 'String'>
    readonly email: FieldRef<"LoanApplication", 'String'>
    readonly race: FieldRef<"LoanApplication", 'Race'>
    readonly employer: FieldRef<"LoanApplication", 'String'>
    readonly employmentType: FieldRef<"LoanApplication", 'EmploymentType'>
    readonly lengthOfEmployment: FieldRef<"LoanApplication", 'Int'>
    readonly employeeNumber: FieldRef<"LoanApplication", 'String'>
    readonly dependants: FieldRef<"LoanApplication", 'Int'>
    readonly salary: FieldRef<"LoanApplication", 'Float'>
    readonly employerTelephone: FieldRef<"LoanApplication", 'String'>
    readonly employerEmail: FieldRef<"LoanApplication", 'String'>
    readonly netIncome: FieldRef<"LoanApplication", 'Float'>
    readonly basicIncome: FieldRef<"LoanApplication", 'Float'>
    readonly livingExpenses: FieldRef<"LoanApplication", 'Float'>
    readonly monthlyLoanRepayments: FieldRef<"LoanApplication", 'Float'>
    readonly totalExpenses: FieldRef<"LoanApplication", 'Float'>
    readonly bankName: FieldRef<"LoanApplication", 'String'>
    readonly accountNumber: FieldRef<"LoanApplication", 'String'>
    readonly accountHolder: FieldRef<"LoanApplication", 'String'>
    readonly branchCode: FieldRef<"LoanApplication", 'String'>
    readonly status: FieldRef<"LoanApplication", 'ApplicationStatus'>
    readonly notes: FieldRef<"LoanApplication", 'String'>
    readonly rejectionReason: FieldRef<"LoanApplication", 'String'>
    readonly idDocumentId: FieldRef<"LoanApplication", 'String'>
    readonly payslipId: FieldRef<"LoanApplication", 'String'>
    readonly bankStatementId: FieldRef<"LoanApplication", 'String'>
    readonly userId: FieldRef<"LoanApplication", 'String'>
    readonly createdAt: FieldRef<"LoanApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"LoanApplication", 'DateTime'>
    readonly reviewedAt: FieldRef<"LoanApplication", 'DateTime'>
    readonly approvedAt: FieldRef<"LoanApplication", 'DateTime'>
    readonly fundedAt: FieldRef<"LoanApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanApplication findUnique
   */
  export type LoanApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplication to fetch.
     */
    where: LoanApplicationWhereUniqueInput
  }

  /**
   * LoanApplication findUniqueOrThrow
   */
  export type LoanApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplication to fetch.
     */
    where: LoanApplicationWhereUniqueInput
  }

  /**
   * LoanApplication findFirst
   */
  export type LoanApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplication to fetch.
     */
    where?: LoanApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanApplications to fetch.
     */
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanApplications.
     */
    cursor?: LoanApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanApplications.
     */
    distinct?: LoanApplicationScalarFieldEnum | LoanApplicationScalarFieldEnum[]
  }

  /**
   * LoanApplication findFirstOrThrow
   */
  export type LoanApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplication to fetch.
     */
    where?: LoanApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanApplications to fetch.
     */
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanApplications.
     */
    cursor?: LoanApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanApplications.
     */
    distinct?: LoanApplicationScalarFieldEnum | LoanApplicationScalarFieldEnum[]
  }

  /**
   * LoanApplication findMany
   */
  export type LoanApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LoanApplications to fetch.
     */
    where?: LoanApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanApplications to fetch.
     */
    orderBy?: LoanApplicationOrderByWithRelationInput | LoanApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanApplications.
     */
    cursor?: LoanApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanApplications.
     */
    skip?: number
    distinct?: LoanApplicationScalarFieldEnum | LoanApplicationScalarFieldEnum[]
  }

  /**
   * LoanApplication create
   */
  export type LoanApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanApplication.
     */
    data: XOR<LoanApplicationCreateInput, LoanApplicationUncheckedCreateInput>
  }

  /**
   * LoanApplication createMany
   */
  export type LoanApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanApplications.
     */
    data: LoanApplicationCreateManyInput | LoanApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanApplication createManyAndReturn
   */
  export type LoanApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many LoanApplications.
     */
    data: LoanApplicationCreateManyInput | LoanApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanApplication update
   */
  export type LoanApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanApplication.
     */
    data: XOR<LoanApplicationUpdateInput, LoanApplicationUncheckedUpdateInput>
    /**
     * Choose, which LoanApplication to update.
     */
    where: LoanApplicationWhereUniqueInput
  }

  /**
   * LoanApplication updateMany
   */
  export type LoanApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanApplications.
     */
    data: XOR<LoanApplicationUpdateManyMutationInput, LoanApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LoanApplications to update
     */
    where?: LoanApplicationWhereInput
    /**
     * Limit how many LoanApplications to update.
     */
    limit?: number
  }

  /**
   * LoanApplication updateManyAndReturn
   */
  export type LoanApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * The data used to update LoanApplications.
     */
    data: XOR<LoanApplicationUpdateManyMutationInput, LoanApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LoanApplications to update
     */
    where?: LoanApplicationWhereInput
    /**
     * Limit how many LoanApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanApplication upsert
   */
  export type LoanApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanApplication to update in case it exists.
     */
    where: LoanApplicationWhereUniqueInput
    /**
     * In case the LoanApplication found by the `where` argument doesn't exist, create a new LoanApplication with this data.
     */
    create: XOR<LoanApplicationCreateInput, LoanApplicationUncheckedCreateInput>
    /**
     * In case the LoanApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanApplicationUpdateInput, LoanApplicationUncheckedUpdateInput>
  }

  /**
   * LoanApplication delete
   */
  export type LoanApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    /**
     * Filter which LoanApplication to delete.
     */
    where: LoanApplicationWhereUniqueInput
  }

  /**
   * LoanApplication deleteMany
   */
  export type LoanApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanApplications to delete
     */
    where?: LoanApplicationWhereInput
    /**
     * Limit how many LoanApplications to delete.
     */
    limit?: number
  }

  /**
   * LoanApplication.idDocument
   */
  export type LoanApplication$idDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
  }

  /**
   * LoanApplication.payslip
   */
  export type LoanApplication$payslipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
  }

  /**
   * LoanApplication.bankStatement
   */
  export type LoanApplication$bankStatementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
  }

  /**
   * LoanApplication.user
   */
  export type LoanApplication$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * LoanApplication.auditLogs
   */
  export type LoanApplication$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * LoanApplication without action
   */
  export type LoanApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    url: string | null
    fileName: string | null
    fileType: string | null
    fileSize: number | null
    blobPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    url: string | null
    fileName: string | null
    fileType: string | null
    fileSize: number | null
    blobPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    url: number
    fileName: number
    fileType: number
    fileSize: number
    blobPath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type DocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    url?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    blobPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    url?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    blobPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    url?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    blobPath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    blobPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idDocumentApplication?: boolean | Document$idDocumentApplicationArgs<ExtArgs>
    payslipApplication?: boolean | Document$payslipApplicationArgs<ExtArgs>
    bankStatementApplication?: boolean | Document$bankStatementApplicationArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    blobPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    blobPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    url?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    blobPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "fileName" | "fileType" | "fileSize" | "blobPath" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idDocumentApplication?: boolean | Document$idDocumentApplicationArgs<ExtArgs>
    payslipApplication?: boolean | Document$payslipApplicationArgs<ExtArgs>
    bankStatementApplication?: boolean | Document$bankStatementApplicationArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      idDocumentApplication: Prisma.$LoanApplicationPayload<ExtArgs> | null
      payslipApplication: Prisma.$LoanApplicationPayload<ExtArgs> | null
      bankStatementApplication: Prisma.$LoanApplicationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      fileName: string
      fileType: string
      fileSize: number
      blobPath: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    idDocumentApplication<T extends Document$idDocumentApplicationArgs<ExtArgs> = {}>(args?: Subset<T, Document$idDocumentApplicationArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payslipApplication<T extends Document$payslipApplicationArgs<ExtArgs> = {}>(args?: Subset<T, Document$payslipApplicationArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bankStatementApplication<T extends Document$bankStatementApplicationArgs<ExtArgs> = {}>(args?: Subset<T, Document$bankStatementApplicationArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly fileType: FieldRef<"Document", 'String'>
    readonly fileSize: FieldRef<"Document", 'Int'>
    readonly blobPath: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.idDocumentApplication
   */
  export type Document$idDocumentApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    where?: LoanApplicationWhereInput
  }

  /**
   * Document.payslipApplication
   */
  export type Document$payslipApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    where?: LoanApplicationWhereInput
  }

  /**
   * Document.bankStatementApplication
   */
  export type Document$bankStatementApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    where?: LoanApplicationWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    userId: string | null
    loanApplicationId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    userId: string | null
    loanApplicationId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entityType: number
    entityId: number
    details: number
    userId: number
    loanApplicationId: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    userId?: true
    loanApplicationId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    userId?: true
    loanApplicationId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    details?: true
    userId?: true
    loanApplicationId?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    entityType: string
    entityId: string
    details: JsonValue | null
    userId: string
    loanApplicationId: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    userId?: boolean
    loanApplicationId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loanApplication?: boolean | AuditLog$loanApplicationArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    userId?: boolean
    loanApplicationId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loanApplication?: boolean | AuditLog$loanApplicationArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    userId?: boolean
    loanApplicationId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loanApplication?: boolean | AuditLog$loanApplicationArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    userId?: boolean
    loanApplicationId?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entityType" | "entityId" | "details" | "userId" | "loanApplicationId" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loanApplication?: boolean | AuditLog$loanApplicationArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loanApplication?: boolean | AuditLog$loanApplicationArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loanApplication?: boolean | AuditLog$loanApplicationArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      loanApplication: Prisma.$LoanApplicationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      entityType: string
      entityId: string
      details: Prisma.JsonValue | null
      userId: string
      loanApplicationId: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loanApplication<T extends AuditLog$loanApplicationArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$loanApplicationArgs<ExtArgs>>): Prisma__LoanApplicationClient<$Result.GetResult<Prisma.$LoanApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'Json'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly loanApplicationId: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.loanApplication
   */
  export type AuditLog$loanApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanApplication
     */
    select?: LoanApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanApplication
     */
    omit?: LoanApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanApplicationInclude<ExtArgs> | null
    where?: LoanApplicationWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin',
    isActive: 'isActive'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LoanApplicationScalarFieldEnum: {
    id: 'id',
    loanType: 'loanType',
    loanAmount: 'loanAmount',
    loanTerm: 'loanTerm',
    firstName: 'firstName',
    lastName: 'lastName',
    address: 'address',
    idNumber: 'idNumber',
    maritalStatus: 'maritalStatus',
    maritalProperty: 'maritalProperty',
    gender: 'gender',
    cell: 'cell',
    whatsapp: 'whatsapp',
    email: 'email',
    race: 'race',
    employer: 'employer',
    employmentType: 'employmentType',
    lengthOfEmployment: 'lengthOfEmployment',
    employeeNumber: 'employeeNumber',
    dependants: 'dependants',
    salary: 'salary',
    employerTelephone: 'employerTelephone',
    employerEmail: 'employerEmail',
    netIncome: 'netIncome',
    basicIncome: 'basicIncome',
    livingExpenses: 'livingExpenses',
    monthlyLoanRepayments: 'monthlyLoanRepayments',
    totalExpenses: 'totalExpenses',
    bankName: 'bankName',
    accountNumber: 'accountNumber',
    accountHolder: 'accountHolder',
    branchCode: 'branchCode',
    status: 'status',
    notes: 'notes',
    rejectionReason: 'rejectionReason',
    idDocumentId: 'idDocumentId',
    payslipId: 'payslipId',
    bankStatementId: 'bankStatementId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    reviewedAt: 'reviewedAt',
    approvedAt: 'approvedAt',
    fundedAt: 'fundedAt'
  };

  export type LoanApplicationScalarFieldEnum = (typeof LoanApplicationScalarFieldEnum)[keyof typeof LoanApplicationScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    url: 'url',
    fileName: 'fileName',
    fileType: 'fileType',
    fileSize: 'fileSize',
    blobPath: 'blobPath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    details: 'details',
    userId: 'userId',
    loanApplicationId: 'loanApplicationId',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LoanType'
   */
  export type EnumLoanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoanType'>
    


  /**
   * Reference to a field of type 'LoanType[]'
   */
  export type ListEnumLoanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoanType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'MaritalProperty'
   */
  export type EnumMaritalPropertyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalProperty'>
    


  /**
   * Reference to a field of type 'MaritalProperty[]'
   */
  export type ListEnumMaritalPropertyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalProperty[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Race'
   */
  export type EnumRaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Race'>
    


  /**
   * Reference to a field of type 'Race[]'
   */
  export type ListEnumRaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Race[]'>
    


  /**
   * Reference to a field of type 'EmploymentType'
   */
  export type EnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType'>
    


  /**
   * Reference to a field of type 'EmploymentType[]'
   */
  export type ListEnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    loanApplications?: LoanApplicationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    loanApplications?: LoanApplicationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    loanApplications?: LoanApplicationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type LoanApplicationWhereInput = {
    AND?: LoanApplicationWhereInput | LoanApplicationWhereInput[]
    OR?: LoanApplicationWhereInput[]
    NOT?: LoanApplicationWhereInput | LoanApplicationWhereInput[]
    id?: StringFilter<"LoanApplication"> | string
    loanType?: EnumLoanTypeFilter<"LoanApplication"> | $Enums.LoanType
    loanAmount?: FloatFilter<"LoanApplication"> | number
    loanTerm?: IntFilter<"LoanApplication"> | number
    firstName?: StringFilter<"LoanApplication"> | string
    lastName?: StringFilter<"LoanApplication"> | string
    address?: StringFilter<"LoanApplication"> | string
    idNumber?: StringFilter<"LoanApplication"> | string
    maritalStatus?: EnumMaritalStatusFilter<"LoanApplication"> | $Enums.MaritalStatus
    maritalProperty?: EnumMaritalPropertyNullableFilter<"LoanApplication"> | $Enums.MaritalProperty | null
    gender?: EnumGenderFilter<"LoanApplication"> | $Enums.Gender
    cell?: StringFilter<"LoanApplication"> | string
    whatsapp?: StringNullableFilter<"LoanApplication"> | string | null
    email?: StringFilter<"LoanApplication"> | string
    race?: EnumRaceFilter<"LoanApplication"> | $Enums.Race
    employer?: StringFilter<"LoanApplication"> | string
    employmentType?: EnumEmploymentTypeFilter<"LoanApplication"> | $Enums.EmploymentType
    lengthOfEmployment?: IntFilter<"LoanApplication"> | number
    employeeNumber?: StringFilter<"LoanApplication"> | string
    dependants?: IntFilter<"LoanApplication"> | number
    salary?: FloatFilter<"LoanApplication"> | number
    employerTelephone?: StringFilter<"LoanApplication"> | string
    employerEmail?: StringFilter<"LoanApplication"> | string
    netIncome?: FloatFilter<"LoanApplication"> | number
    basicIncome?: FloatFilter<"LoanApplication"> | number
    livingExpenses?: FloatFilter<"LoanApplication"> | number
    monthlyLoanRepayments?: FloatFilter<"LoanApplication"> | number
    totalExpenses?: FloatFilter<"LoanApplication"> | number
    bankName?: StringFilter<"LoanApplication"> | string
    accountNumber?: StringFilter<"LoanApplication"> | string
    accountHolder?: StringFilter<"LoanApplication"> | string
    branchCode?: StringFilter<"LoanApplication"> | string
    status?: EnumApplicationStatusFilter<"LoanApplication"> | $Enums.ApplicationStatus
    notes?: StringNullableFilter<"LoanApplication"> | string | null
    rejectionReason?: StringNullableFilter<"LoanApplication"> | string | null
    idDocumentId?: StringNullableFilter<"LoanApplication"> | string | null
    payslipId?: StringNullableFilter<"LoanApplication"> | string | null
    bankStatementId?: StringNullableFilter<"LoanApplication"> | string | null
    userId?: StringNullableFilter<"LoanApplication"> | string | null
    createdAt?: DateTimeFilter<"LoanApplication"> | Date | string
    updatedAt?: DateTimeFilter<"LoanApplication"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"LoanApplication"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"LoanApplication"> | Date | string | null
    fundedAt?: DateTimeNullableFilter<"LoanApplication"> | Date | string | null
    idDocument?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    payslip?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    bankStatement?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    auditLogs?: AuditLogListRelationFilter
  }

  export type LoanApplicationOrderByWithRelationInput = {
    id?: SortOrder
    loanType?: SortOrder
    loanAmount?: SortOrder
    loanTerm?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    idNumber?: SortOrder
    maritalStatus?: SortOrder
    maritalProperty?: SortOrderInput | SortOrder
    gender?: SortOrder
    cell?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    email?: SortOrder
    race?: SortOrder
    employer?: SortOrder
    employmentType?: SortOrder
    lengthOfEmployment?: SortOrder
    employeeNumber?: SortOrder
    dependants?: SortOrder
    salary?: SortOrder
    employerTelephone?: SortOrder
    employerEmail?: SortOrder
    netIncome?: SortOrder
    basicIncome?: SortOrder
    livingExpenses?: SortOrder
    monthlyLoanRepayments?: SortOrder
    totalExpenses?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolder?: SortOrder
    branchCode?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    idDocumentId?: SortOrderInput | SortOrder
    payslipId?: SortOrderInput | SortOrder
    bankStatementId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    fundedAt?: SortOrderInput | SortOrder
    idDocument?: DocumentOrderByWithRelationInput
    payslip?: DocumentOrderByWithRelationInput
    bankStatement?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type LoanApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idDocumentId?: string
    payslipId?: string
    bankStatementId?: string
    AND?: LoanApplicationWhereInput | LoanApplicationWhereInput[]
    OR?: LoanApplicationWhereInput[]
    NOT?: LoanApplicationWhereInput | LoanApplicationWhereInput[]
    loanType?: EnumLoanTypeFilter<"LoanApplication"> | $Enums.LoanType
    loanAmount?: FloatFilter<"LoanApplication"> | number
    loanTerm?: IntFilter<"LoanApplication"> | number
    firstName?: StringFilter<"LoanApplication"> | string
    lastName?: StringFilter<"LoanApplication"> | string
    address?: StringFilter<"LoanApplication"> | string
    idNumber?: StringFilter<"LoanApplication"> | string
    maritalStatus?: EnumMaritalStatusFilter<"LoanApplication"> | $Enums.MaritalStatus
    maritalProperty?: EnumMaritalPropertyNullableFilter<"LoanApplication"> | $Enums.MaritalProperty | null
    gender?: EnumGenderFilter<"LoanApplication"> | $Enums.Gender
    cell?: StringFilter<"LoanApplication"> | string
    whatsapp?: StringNullableFilter<"LoanApplication"> | string | null
    email?: StringFilter<"LoanApplication"> | string
    race?: EnumRaceFilter<"LoanApplication"> | $Enums.Race
    employer?: StringFilter<"LoanApplication"> | string
    employmentType?: EnumEmploymentTypeFilter<"LoanApplication"> | $Enums.EmploymentType
    lengthOfEmployment?: IntFilter<"LoanApplication"> | number
    employeeNumber?: StringFilter<"LoanApplication"> | string
    dependants?: IntFilter<"LoanApplication"> | number
    salary?: FloatFilter<"LoanApplication"> | number
    employerTelephone?: StringFilter<"LoanApplication"> | string
    employerEmail?: StringFilter<"LoanApplication"> | string
    netIncome?: FloatFilter<"LoanApplication"> | number
    basicIncome?: FloatFilter<"LoanApplication"> | number
    livingExpenses?: FloatFilter<"LoanApplication"> | number
    monthlyLoanRepayments?: FloatFilter<"LoanApplication"> | number
    totalExpenses?: FloatFilter<"LoanApplication"> | number
    bankName?: StringFilter<"LoanApplication"> | string
    accountNumber?: StringFilter<"LoanApplication"> | string
    accountHolder?: StringFilter<"LoanApplication"> | string
    branchCode?: StringFilter<"LoanApplication"> | string
    status?: EnumApplicationStatusFilter<"LoanApplication"> | $Enums.ApplicationStatus
    notes?: StringNullableFilter<"LoanApplication"> | string | null
    rejectionReason?: StringNullableFilter<"LoanApplication"> | string | null
    userId?: StringNullableFilter<"LoanApplication"> | string | null
    createdAt?: DateTimeFilter<"LoanApplication"> | Date | string
    updatedAt?: DateTimeFilter<"LoanApplication"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"LoanApplication"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"LoanApplication"> | Date | string | null
    fundedAt?: DateTimeNullableFilter<"LoanApplication"> | Date | string | null
    idDocument?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    payslip?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    bankStatement?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "idDocumentId" | "payslipId" | "bankStatementId">

  export type LoanApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    loanType?: SortOrder
    loanAmount?: SortOrder
    loanTerm?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    idNumber?: SortOrder
    maritalStatus?: SortOrder
    maritalProperty?: SortOrderInput | SortOrder
    gender?: SortOrder
    cell?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    email?: SortOrder
    race?: SortOrder
    employer?: SortOrder
    employmentType?: SortOrder
    lengthOfEmployment?: SortOrder
    employeeNumber?: SortOrder
    dependants?: SortOrder
    salary?: SortOrder
    employerTelephone?: SortOrder
    employerEmail?: SortOrder
    netIncome?: SortOrder
    basicIncome?: SortOrder
    livingExpenses?: SortOrder
    monthlyLoanRepayments?: SortOrder
    totalExpenses?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolder?: SortOrder
    branchCode?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    idDocumentId?: SortOrderInput | SortOrder
    payslipId?: SortOrderInput | SortOrder
    bankStatementId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    fundedAt?: SortOrderInput | SortOrder
    _count?: LoanApplicationCountOrderByAggregateInput
    _avg?: LoanApplicationAvgOrderByAggregateInput
    _max?: LoanApplicationMaxOrderByAggregateInput
    _min?: LoanApplicationMinOrderByAggregateInput
    _sum?: LoanApplicationSumOrderByAggregateInput
  }

  export type LoanApplicationScalarWhereWithAggregatesInput = {
    AND?: LoanApplicationScalarWhereWithAggregatesInput | LoanApplicationScalarWhereWithAggregatesInput[]
    OR?: LoanApplicationScalarWhereWithAggregatesInput[]
    NOT?: LoanApplicationScalarWhereWithAggregatesInput | LoanApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanApplication"> | string
    loanType?: EnumLoanTypeWithAggregatesFilter<"LoanApplication"> | $Enums.LoanType
    loanAmount?: FloatWithAggregatesFilter<"LoanApplication"> | number
    loanTerm?: IntWithAggregatesFilter<"LoanApplication"> | number
    firstName?: StringWithAggregatesFilter<"LoanApplication"> | string
    lastName?: StringWithAggregatesFilter<"LoanApplication"> | string
    address?: StringWithAggregatesFilter<"LoanApplication"> | string
    idNumber?: StringWithAggregatesFilter<"LoanApplication"> | string
    maritalStatus?: EnumMaritalStatusWithAggregatesFilter<"LoanApplication"> | $Enums.MaritalStatus
    maritalProperty?: EnumMaritalPropertyNullableWithAggregatesFilter<"LoanApplication"> | $Enums.MaritalProperty | null
    gender?: EnumGenderWithAggregatesFilter<"LoanApplication"> | $Enums.Gender
    cell?: StringWithAggregatesFilter<"LoanApplication"> | string
    whatsapp?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    email?: StringWithAggregatesFilter<"LoanApplication"> | string
    race?: EnumRaceWithAggregatesFilter<"LoanApplication"> | $Enums.Race
    employer?: StringWithAggregatesFilter<"LoanApplication"> | string
    employmentType?: EnumEmploymentTypeWithAggregatesFilter<"LoanApplication"> | $Enums.EmploymentType
    lengthOfEmployment?: IntWithAggregatesFilter<"LoanApplication"> | number
    employeeNumber?: StringWithAggregatesFilter<"LoanApplication"> | string
    dependants?: IntWithAggregatesFilter<"LoanApplication"> | number
    salary?: FloatWithAggregatesFilter<"LoanApplication"> | number
    employerTelephone?: StringWithAggregatesFilter<"LoanApplication"> | string
    employerEmail?: StringWithAggregatesFilter<"LoanApplication"> | string
    netIncome?: FloatWithAggregatesFilter<"LoanApplication"> | number
    basicIncome?: FloatWithAggregatesFilter<"LoanApplication"> | number
    livingExpenses?: FloatWithAggregatesFilter<"LoanApplication"> | number
    monthlyLoanRepayments?: FloatWithAggregatesFilter<"LoanApplication"> | number
    totalExpenses?: FloatWithAggregatesFilter<"LoanApplication"> | number
    bankName?: StringWithAggregatesFilter<"LoanApplication"> | string
    accountNumber?: StringWithAggregatesFilter<"LoanApplication"> | string
    accountHolder?: StringWithAggregatesFilter<"LoanApplication"> | string
    branchCode?: StringWithAggregatesFilter<"LoanApplication"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"LoanApplication"> | $Enums.ApplicationStatus
    notes?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    idDocumentId?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    payslipId?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    bankStatementId?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    userId?: StringNullableWithAggregatesFilter<"LoanApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LoanApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LoanApplication"> | Date | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"LoanApplication"> | Date | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"LoanApplication"> | Date | string | null
    fundedAt?: DateTimeNullableWithAggregatesFilter<"LoanApplication"> | Date | string | null
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    fileType?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    blobPath?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    idDocumentApplication?: XOR<LoanApplicationNullableScalarRelationFilter, LoanApplicationWhereInput> | null
    payslipApplication?: XOR<LoanApplicationNullableScalarRelationFilter, LoanApplicationWhereInput> | null
    bankStatementApplication?: XOR<LoanApplicationNullableScalarRelationFilter, LoanApplicationWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    blobPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDocumentApplication?: LoanApplicationOrderByWithRelationInput
    payslipApplication?: LoanApplicationOrderByWithRelationInput
    bankStatementApplication?: LoanApplicationOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    blobPath?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    fileName?: StringFilter<"Document"> | string
    fileType?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    idDocumentApplication?: XOR<LoanApplicationNullableScalarRelationFilter, LoanApplicationWhereInput> | null
    payslipApplication?: XOR<LoanApplicationNullableScalarRelationFilter, LoanApplicationWhereInput> | null
    bankStatementApplication?: XOR<LoanApplicationNullableScalarRelationFilter, LoanApplicationWhereInput> | null
  }, "id" | "url" | "blobPath">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    blobPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    url?: StringWithAggregatesFilter<"Document"> | string
    fileName?: StringWithAggregatesFilter<"Document"> | string
    fileType?: StringWithAggregatesFilter<"Document"> | string
    fileSize?: IntWithAggregatesFilter<"Document"> | number
    blobPath?: StringWithAggregatesFilter<"Document"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    userId?: StringFilter<"AuditLog"> | string
    loanApplicationId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loanApplication?: XOR<LoanApplicationNullableScalarRelationFilter, LoanApplicationWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    userId?: SortOrder
    loanApplicationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    loanApplication?: LoanApplicationOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    userId?: StringFilter<"AuditLog"> | string
    loanApplicationId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loanApplication?: XOR<LoanApplicationNullableScalarRelationFilter, LoanApplicationWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    userId?: SortOrder
    loanApplicationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: JsonNullableWithAggregatesFilter<"AuditLog">
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    loanApplicationId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    loanApplications?: LoanApplicationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    loanApplications?: LoanApplicationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    loanApplications?: LoanApplicationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    loanApplications?: LoanApplicationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LoanApplicationCreateInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    idDocument?: DocumentCreateNestedOneWithoutIdDocumentApplicationInput
    payslip?: DocumentCreateNestedOneWithoutPayslipApplicationInput
    bankStatement?: DocumentCreateNestedOneWithoutBankStatementApplicationInput
    user?: UserCreateNestedOneWithoutLoanApplicationsInput
    auditLogs?: AuditLogCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationUncheckedCreateInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    idDocumentId?: string | null
    payslipId?: string | null
    bankStatementId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idDocument?: DocumentUpdateOneWithoutIdDocumentApplicationNestedInput
    payslip?: DocumentUpdateOneWithoutPayslipApplicationNestedInput
    bankStatement?: DocumentUpdateOneWithoutBankStatementApplicationNestedInput
    user?: UserUpdateOneWithoutLoanApplicationsNestedInput
    auditLogs?: AuditLogUpdateManyWithoutLoanApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentId?: NullableStringFieldUpdateOperationsInput | string | null
    payslipId?: NullableStringFieldUpdateOperationsInput | string | null
    bankStatementId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutLoanApplicationNestedInput
  }

  export type LoanApplicationCreateManyInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    idDocumentId?: string | null
    payslipId?: string | null
    bankStatementId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
  }

  export type LoanApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentId?: NullableStringFieldUpdateOperationsInput | string | null
    payslipId?: NullableStringFieldUpdateOperationsInput | string | null
    bankStatementId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCreateInput = {
    id?: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDocumentApplication?: LoanApplicationCreateNestedOneWithoutIdDocumentInput
    payslipApplication?: LoanApplicationCreateNestedOneWithoutPayslipInput
    bankStatementApplication?: LoanApplicationCreateNestedOneWithoutBankStatementInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDocumentApplication?: LoanApplicationUncheckedCreateNestedOneWithoutIdDocumentInput
    payslipApplication?: LoanApplicationUncheckedCreateNestedOneWithoutPayslipInput
    bankStatementApplication?: LoanApplicationUncheckedCreateNestedOneWithoutBankStatementInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocumentApplication?: LoanApplicationUpdateOneWithoutIdDocumentNestedInput
    payslipApplication?: LoanApplicationUpdateOneWithoutPayslipNestedInput
    bankStatementApplication?: LoanApplicationUpdateOneWithoutBankStatementNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocumentApplication?: LoanApplicationUncheckedUpdateOneWithoutIdDocumentNestedInput
    payslipApplication?: LoanApplicationUncheckedUpdateOneWithoutPayslipNestedInput
    bankStatementApplication?: LoanApplicationUncheckedUpdateOneWithoutBankStatementNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
    loanApplication?: LoanApplicationCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId: string
    loanApplicationId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
    loanApplication?: LoanApplicationUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    loanApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId: string
    loanApplicationId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    loanApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LoanApplicationListRelationFilter = {
    every?: LoanApplicationWhereInput
    some?: LoanApplicationWhereInput
    none?: LoanApplicationWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LoanApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumLoanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanType | EnumLoanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoanType[] | ListEnumLoanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanType[] | ListEnumLoanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanTypeFilter<$PrismaModel> | $Enums.LoanType
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

  export type EnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type EnumMaritalPropertyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalProperty | EnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalProperty[] | ListEnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalProperty[] | ListEnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalPropertyNullableFilter<$PrismaModel> | $Enums.MaritalProperty | null
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type EnumRaceFilter<$PrismaModel = never> = {
    equals?: $Enums.Race | EnumRaceFieldRefInput<$PrismaModel>
    in?: $Enums.Race[] | ListEnumRaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Race[] | ListEnumRaceFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceFilter<$PrismaModel> | $Enums.Race
  }

  export type EnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type DocumentNullableScalarRelationFilter = {
    is?: DocumentWhereInput | null
    isNot?: DocumentWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LoanApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    loanType?: SortOrder
    loanAmount?: SortOrder
    loanTerm?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    idNumber?: SortOrder
    maritalStatus?: SortOrder
    maritalProperty?: SortOrder
    gender?: SortOrder
    cell?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    race?: SortOrder
    employer?: SortOrder
    employmentType?: SortOrder
    lengthOfEmployment?: SortOrder
    employeeNumber?: SortOrder
    dependants?: SortOrder
    salary?: SortOrder
    employerTelephone?: SortOrder
    employerEmail?: SortOrder
    netIncome?: SortOrder
    basicIncome?: SortOrder
    livingExpenses?: SortOrder
    monthlyLoanRepayments?: SortOrder
    totalExpenses?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolder?: SortOrder
    branchCode?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    rejectionReason?: SortOrder
    idDocumentId?: SortOrder
    payslipId?: SortOrder
    bankStatementId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedAt?: SortOrder
    approvedAt?: SortOrder
    fundedAt?: SortOrder
  }

  export type LoanApplicationAvgOrderByAggregateInput = {
    loanAmount?: SortOrder
    loanTerm?: SortOrder
    lengthOfEmployment?: SortOrder
    dependants?: SortOrder
    salary?: SortOrder
    netIncome?: SortOrder
    basicIncome?: SortOrder
    livingExpenses?: SortOrder
    monthlyLoanRepayments?: SortOrder
    totalExpenses?: SortOrder
  }

  export type LoanApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    loanType?: SortOrder
    loanAmount?: SortOrder
    loanTerm?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    idNumber?: SortOrder
    maritalStatus?: SortOrder
    maritalProperty?: SortOrder
    gender?: SortOrder
    cell?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    race?: SortOrder
    employer?: SortOrder
    employmentType?: SortOrder
    lengthOfEmployment?: SortOrder
    employeeNumber?: SortOrder
    dependants?: SortOrder
    salary?: SortOrder
    employerTelephone?: SortOrder
    employerEmail?: SortOrder
    netIncome?: SortOrder
    basicIncome?: SortOrder
    livingExpenses?: SortOrder
    monthlyLoanRepayments?: SortOrder
    totalExpenses?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolder?: SortOrder
    branchCode?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    rejectionReason?: SortOrder
    idDocumentId?: SortOrder
    payslipId?: SortOrder
    bankStatementId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedAt?: SortOrder
    approvedAt?: SortOrder
    fundedAt?: SortOrder
  }

  export type LoanApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    loanType?: SortOrder
    loanAmount?: SortOrder
    loanTerm?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    idNumber?: SortOrder
    maritalStatus?: SortOrder
    maritalProperty?: SortOrder
    gender?: SortOrder
    cell?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    race?: SortOrder
    employer?: SortOrder
    employmentType?: SortOrder
    lengthOfEmployment?: SortOrder
    employeeNumber?: SortOrder
    dependants?: SortOrder
    salary?: SortOrder
    employerTelephone?: SortOrder
    employerEmail?: SortOrder
    netIncome?: SortOrder
    basicIncome?: SortOrder
    livingExpenses?: SortOrder
    monthlyLoanRepayments?: SortOrder
    totalExpenses?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolder?: SortOrder
    branchCode?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    rejectionReason?: SortOrder
    idDocumentId?: SortOrder
    payslipId?: SortOrder
    bankStatementId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedAt?: SortOrder
    approvedAt?: SortOrder
    fundedAt?: SortOrder
  }

  export type LoanApplicationSumOrderByAggregateInput = {
    loanAmount?: SortOrder
    loanTerm?: SortOrder
    lengthOfEmployment?: SortOrder
    dependants?: SortOrder
    salary?: SortOrder
    netIncome?: SortOrder
    basicIncome?: SortOrder
    livingExpenses?: SortOrder
    monthlyLoanRepayments?: SortOrder
    totalExpenses?: SortOrder
  }

  export type EnumLoanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanType | EnumLoanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoanType[] | ListEnumLoanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanType[] | ListEnumLoanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanTypeWithAggregatesFilter<$PrismaModel> | $Enums.LoanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanTypeFilter<$PrismaModel>
    _max?: NestedEnumLoanTypeFilter<$PrismaModel>
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

  export type EnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type EnumMaritalPropertyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalProperty | EnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalProperty[] | ListEnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalProperty[] | ListEnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalPropertyNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalProperty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalPropertyNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalPropertyNullableFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type EnumRaceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Race | EnumRaceFieldRefInput<$PrismaModel>
    in?: $Enums.Race[] | ListEnumRaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Race[] | ListEnumRaceFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceWithAggregatesFilter<$PrismaModel> | $Enums.Race
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaceFilter<$PrismaModel>
    _max?: NestedEnumRaceFilter<$PrismaModel>
  }

  export type EnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type LoanApplicationNullableScalarRelationFilter = {
    is?: LoanApplicationWhereInput | null
    isNot?: LoanApplicationWhereInput | null
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    blobPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    blobPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    blobPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    userId?: SortOrder
    loanApplicationId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    loanApplicationId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    loanApplicationId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LoanApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput> | LoanApplicationCreateWithoutUserInput[] | LoanApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutUserInput | LoanApplicationCreateOrConnectWithoutUserInput[]
    createMany?: LoanApplicationCreateManyUserInputEnvelope
    connect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type LoanApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput> | LoanApplicationCreateWithoutUserInput[] | LoanApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutUserInput | LoanApplicationCreateOrConnectWithoutUserInput[]
    createMany?: LoanApplicationCreateManyUserInputEnvelope
    connect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LoanApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput> | LoanApplicationCreateWithoutUserInput[] | LoanApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutUserInput | LoanApplicationCreateOrConnectWithoutUserInput[]
    upsert?: LoanApplicationUpsertWithWhereUniqueWithoutUserInput | LoanApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanApplicationCreateManyUserInputEnvelope
    set?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    disconnect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    delete?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    connect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    update?: LoanApplicationUpdateWithWhereUniqueWithoutUserInput | LoanApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanApplicationUpdateManyWithWhereWithoutUserInput | LoanApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanApplicationScalarWhereInput | LoanApplicationScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type LoanApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput> | LoanApplicationCreateWithoutUserInput[] | LoanApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutUserInput | LoanApplicationCreateOrConnectWithoutUserInput[]
    upsert?: LoanApplicationUpsertWithWhereUniqueWithoutUserInput | LoanApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanApplicationCreateManyUserInputEnvelope
    set?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    disconnect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    delete?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    connect?: LoanApplicationWhereUniqueInput | LoanApplicationWhereUniqueInput[]
    update?: LoanApplicationUpdateWithWhereUniqueWithoutUserInput | LoanApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanApplicationUpdateManyWithWhereWithoutUserInput | LoanApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanApplicationScalarWhereInput | LoanApplicationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutIdDocumentApplicationInput = {
    create?: XOR<DocumentCreateWithoutIdDocumentApplicationInput, DocumentUncheckedCreateWithoutIdDocumentApplicationInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutIdDocumentApplicationInput
    connect?: DocumentWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutPayslipApplicationInput = {
    create?: XOR<DocumentCreateWithoutPayslipApplicationInput, DocumentUncheckedCreateWithoutPayslipApplicationInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutPayslipApplicationInput
    connect?: DocumentWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutBankStatementApplicationInput = {
    create?: XOR<DocumentCreateWithoutBankStatementApplicationInput, DocumentUncheckedCreateWithoutBankStatementApplicationInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutBankStatementApplicationInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLoanApplicationsInput = {
    create?: XOR<UserCreateWithoutLoanApplicationsInput, UserUncheckedCreateWithoutLoanApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoanApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type AuditLogCreateNestedManyWithoutLoanApplicationInput = {
    create?: XOR<AuditLogCreateWithoutLoanApplicationInput, AuditLogUncheckedCreateWithoutLoanApplicationInput> | AuditLogCreateWithoutLoanApplicationInput[] | AuditLogUncheckedCreateWithoutLoanApplicationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutLoanApplicationInput | AuditLogCreateOrConnectWithoutLoanApplicationInput[]
    createMany?: AuditLogCreateManyLoanApplicationInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutLoanApplicationInput = {
    create?: XOR<AuditLogCreateWithoutLoanApplicationInput, AuditLogUncheckedCreateWithoutLoanApplicationInput> | AuditLogCreateWithoutLoanApplicationInput[] | AuditLogUncheckedCreateWithoutLoanApplicationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutLoanApplicationInput | AuditLogCreateOrConnectWithoutLoanApplicationInput[]
    createMany?: AuditLogCreateManyLoanApplicationInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type EnumLoanTypeFieldUpdateOperationsInput = {
    set?: $Enums.LoanType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus
  }

  export type NullableEnumMaritalPropertyFieldUpdateOperationsInput = {
    set?: $Enums.MaritalProperty | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRaceFieldUpdateOperationsInput = {
    set?: $Enums.Race
  }

  export type EnumEmploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentType
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type DocumentUpdateOneWithoutIdDocumentApplicationNestedInput = {
    create?: XOR<DocumentCreateWithoutIdDocumentApplicationInput, DocumentUncheckedCreateWithoutIdDocumentApplicationInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutIdDocumentApplicationInput
    upsert?: DocumentUpsertWithoutIdDocumentApplicationInput
    disconnect?: DocumentWhereInput | boolean
    delete?: DocumentWhereInput | boolean
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutIdDocumentApplicationInput, DocumentUpdateWithoutIdDocumentApplicationInput>, DocumentUncheckedUpdateWithoutIdDocumentApplicationInput>
  }

  export type DocumentUpdateOneWithoutPayslipApplicationNestedInput = {
    create?: XOR<DocumentCreateWithoutPayslipApplicationInput, DocumentUncheckedCreateWithoutPayslipApplicationInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutPayslipApplicationInput
    upsert?: DocumentUpsertWithoutPayslipApplicationInput
    disconnect?: DocumentWhereInput | boolean
    delete?: DocumentWhereInput | boolean
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutPayslipApplicationInput, DocumentUpdateWithoutPayslipApplicationInput>, DocumentUncheckedUpdateWithoutPayslipApplicationInput>
  }

  export type DocumentUpdateOneWithoutBankStatementApplicationNestedInput = {
    create?: XOR<DocumentCreateWithoutBankStatementApplicationInput, DocumentUncheckedCreateWithoutBankStatementApplicationInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutBankStatementApplicationInput
    upsert?: DocumentUpsertWithoutBankStatementApplicationInput
    disconnect?: DocumentWhereInput | boolean
    delete?: DocumentWhereInput | boolean
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutBankStatementApplicationInput, DocumentUpdateWithoutBankStatementApplicationInput>, DocumentUncheckedUpdateWithoutBankStatementApplicationInput>
  }

  export type UserUpdateOneWithoutLoanApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutLoanApplicationsInput, UserUncheckedCreateWithoutLoanApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoanApplicationsInput
    upsert?: UserUpsertWithoutLoanApplicationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoanApplicationsInput, UserUpdateWithoutLoanApplicationsInput>, UserUncheckedUpdateWithoutLoanApplicationsInput>
  }

  export type AuditLogUpdateManyWithoutLoanApplicationNestedInput = {
    create?: XOR<AuditLogCreateWithoutLoanApplicationInput, AuditLogUncheckedCreateWithoutLoanApplicationInput> | AuditLogCreateWithoutLoanApplicationInput[] | AuditLogUncheckedCreateWithoutLoanApplicationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutLoanApplicationInput | AuditLogCreateOrConnectWithoutLoanApplicationInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutLoanApplicationInput | AuditLogUpsertWithWhereUniqueWithoutLoanApplicationInput[]
    createMany?: AuditLogCreateManyLoanApplicationInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutLoanApplicationInput | AuditLogUpdateWithWhereUniqueWithoutLoanApplicationInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutLoanApplicationInput | AuditLogUpdateManyWithWhereWithoutLoanApplicationInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutLoanApplicationNestedInput = {
    create?: XOR<AuditLogCreateWithoutLoanApplicationInput, AuditLogUncheckedCreateWithoutLoanApplicationInput> | AuditLogCreateWithoutLoanApplicationInput[] | AuditLogUncheckedCreateWithoutLoanApplicationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutLoanApplicationInput | AuditLogCreateOrConnectWithoutLoanApplicationInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutLoanApplicationInput | AuditLogUpsertWithWhereUniqueWithoutLoanApplicationInput[]
    createMany?: AuditLogCreateManyLoanApplicationInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutLoanApplicationInput | AuditLogUpdateWithWhereUniqueWithoutLoanApplicationInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutLoanApplicationInput | AuditLogUpdateManyWithWhereWithoutLoanApplicationInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type LoanApplicationCreateNestedOneWithoutIdDocumentInput = {
    create?: XOR<LoanApplicationCreateWithoutIdDocumentInput, LoanApplicationUncheckedCreateWithoutIdDocumentInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutIdDocumentInput
    connect?: LoanApplicationWhereUniqueInput
  }

  export type LoanApplicationCreateNestedOneWithoutPayslipInput = {
    create?: XOR<LoanApplicationCreateWithoutPayslipInput, LoanApplicationUncheckedCreateWithoutPayslipInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutPayslipInput
    connect?: LoanApplicationWhereUniqueInput
  }

  export type LoanApplicationCreateNestedOneWithoutBankStatementInput = {
    create?: XOR<LoanApplicationCreateWithoutBankStatementInput, LoanApplicationUncheckedCreateWithoutBankStatementInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutBankStatementInput
    connect?: LoanApplicationWhereUniqueInput
  }

  export type LoanApplicationUncheckedCreateNestedOneWithoutIdDocumentInput = {
    create?: XOR<LoanApplicationCreateWithoutIdDocumentInput, LoanApplicationUncheckedCreateWithoutIdDocumentInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutIdDocumentInput
    connect?: LoanApplicationWhereUniqueInput
  }

  export type LoanApplicationUncheckedCreateNestedOneWithoutPayslipInput = {
    create?: XOR<LoanApplicationCreateWithoutPayslipInput, LoanApplicationUncheckedCreateWithoutPayslipInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutPayslipInput
    connect?: LoanApplicationWhereUniqueInput
  }

  export type LoanApplicationUncheckedCreateNestedOneWithoutBankStatementInput = {
    create?: XOR<LoanApplicationCreateWithoutBankStatementInput, LoanApplicationUncheckedCreateWithoutBankStatementInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutBankStatementInput
    connect?: LoanApplicationWhereUniqueInput
  }

  export type LoanApplicationUpdateOneWithoutIdDocumentNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutIdDocumentInput, LoanApplicationUncheckedCreateWithoutIdDocumentInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutIdDocumentInput
    upsert?: LoanApplicationUpsertWithoutIdDocumentInput
    disconnect?: LoanApplicationWhereInput | boolean
    delete?: LoanApplicationWhereInput | boolean
    connect?: LoanApplicationWhereUniqueInput
    update?: XOR<XOR<LoanApplicationUpdateToOneWithWhereWithoutIdDocumentInput, LoanApplicationUpdateWithoutIdDocumentInput>, LoanApplicationUncheckedUpdateWithoutIdDocumentInput>
  }

  export type LoanApplicationUpdateOneWithoutPayslipNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutPayslipInput, LoanApplicationUncheckedCreateWithoutPayslipInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutPayslipInput
    upsert?: LoanApplicationUpsertWithoutPayslipInput
    disconnect?: LoanApplicationWhereInput | boolean
    delete?: LoanApplicationWhereInput | boolean
    connect?: LoanApplicationWhereUniqueInput
    update?: XOR<XOR<LoanApplicationUpdateToOneWithWhereWithoutPayslipInput, LoanApplicationUpdateWithoutPayslipInput>, LoanApplicationUncheckedUpdateWithoutPayslipInput>
  }

  export type LoanApplicationUpdateOneWithoutBankStatementNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutBankStatementInput, LoanApplicationUncheckedCreateWithoutBankStatementInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutBankStatementInput
    upsert?: LoanApplicationUpsertWithoutBankStatementInput
    disconnect?: LoanApplicationWhereInput | boolean
    delete?: LoanApplicationWhereInput | boolean
    connect?: LoanApplicationWhereUniqueInput
    update?: XOR<XOR<LoanApplicationUpdateToOneWithWhereWithoutBankStatementInput, LoanApplicationUpdateWithoutBankStatementInput>, LoanApplicationUncheckedUpdateWithoutBankStatementInput>
  }

  export type LoanApplicationUncheckedUpdateOneWithoutIdDocumentNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutIdDocumentInput, LoanApplicationUncheckedCreateWithoutIdDocumentInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutIdDocumentInput
    upsert?: LoanApplicationUpsertWithoutIdDocumentInput
    disconnect?: LoanApplicationWhereInput | boolean
    delete?: LoanApplicationWhereInput | boolean
    connect?: LoanApplicationWhereUniqueInput
    update?: XOR<XOR<LoanApplicationUpdateToOneWithWhereWithoutIdDocumentInput, LoanApplicationUpdateWithoutIdDocumentInput>, LoanApplicationUncheckedUpdateWithoutIdDocumentInput>
  }

  export type LoanApplicationUncheckedUpdateOneWithoutPayslipNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutPayslipInput, LoanApplicationUncheckedCreateWithoutPayslipInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutPayslipInput
    upsert?: LoanApplicationUpsertWithoutPayslipInput
    disconnect?: LoanApplicationWhereInput | boolean
    delete?: LoanApplicationWhereInput | boolean
    connect?: LoanApplicationWhereUniqueInput
    update?: XOR<XOR<LoanApplicationUpdateToOneWithWhereWithoutPayslipInput, LoanApplicationUpdateWithoutPayslipInput>, LoanApplicationUncheckedUpdateWithoutPayslipInput>
  }

  export type LoanApplicationUncheckedUpdateOneWithoutBankStatementNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutBankStatementInput, LoanApplicationUncheckedCreateWithoutBankStatementInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutBankStatementInput
    upsert?: LoanApplicationUpsertWithoutBankStatementInput
    disconnect?: LoanApplicationWhereInput | boolean
    delete?: LoanApplicationWhereInput | boolean
    connect?: LoanApplicationWhereUniqueInput
    update?: XOR<XOR<LoanApplicationUpdateToOneWithWhereWithoutBankStatementInput, LoanApplicationUpdateWithoutBankStatementInput>, LoanApplicationUncheckedUpdateWithoutBankStatementInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type LoanApplicationCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<LoanApplicationCreateWithoutAuditLogsInput, LoanApplicationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutAuditLogsInput
    connect?: LoanApplicationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type LoanApplicationUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<LoanApplicationCreateWithoutAuditLogsInput, LoanApplicationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: LoanApplicationCreateOrConnectWithoutAuditLogsInput
    upsert?: LoanApplicationUpsertWithoutAuditLogsInput
    disconnect?: LoanApplicationWhereInput | boolean
    delete?: LoanApplicationWhereInput | boolean
    connect?: LoanApplicationWhereUniqueInput
    update?: XOR<XOR<LoanApplicationUpdateToOneWithWhereWithoutAuditLogsInput, LoanApplicationUpdateWithoutAuditLogsInput>, LoanApplicationUncheckedUpdateWithoutAuditLogsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumLoanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanType | EnumLoanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoanType[] | ListEnumLoanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanType[] | ListEnumLoanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanTypeFilter<$PrismaModel> | $Enums.LoanType
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

  export type NestedEnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type NestedEnumMaritalPropertyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalProperty | EnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalProperty[] | ListEnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalProperty[] | ListEnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalPropertyNullableFilter<$PrismaModel> | $Enums.MaritalProperty | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedEnumRaceFilter<$PrismaModel = never> = {
    equals?: $Enums.Race | EnumRaceFieldRefInput<$PrismaModel>
    in?: $Enums.Race[] | ListEnumRaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Race[] | ListEnumRaceFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceFilter<$PrismaModel> | $Enums.Race
  }

  export type NestedEnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumLoanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanType | EnumLoanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoanType[] | ListEnumLoanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanType[] | ListEnumLoanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanTypeWithAggregatesFilter<$PrismaModel> | $Enums.LoanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanTypeFilter<$PrismaModel>
    _max?: NestedEnumLoanTypeFilter<$PrismaModel>
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

  export type NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type NestedEnumMaritalPropertyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalProperty | EnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalProperty[] | ListEnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalProperty[] | ListEnumMaritalPropertyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalPropertyNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalProperty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalPropertyNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalPropertyNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type NestedEnumRaceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Race | EnumRaceFieldRefInput<$PrismaModel>
    in?: $Enums.Race[] | ListEnumRaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Race[] | ListEnumRaceFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceWithAggregatesFilter<$PrismaModel> | $Enums.Race
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaceFilter<$PrismaModel>
    _max?: NestedEnumRaceFilter<$PrismaModel>
  }

  export type NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type LoanApplicationCreateWithoutUserInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    idDocument?: DocumentCreateNestedOneWithoutIdDocumentApplicationInput
    payslip?: DocumentCreateNestedOneWithoutPayslipApplicationInput
    bankStatement?: DocumentCreateNestedOneWithoutBankStatementApplicationInput
    auditLogs?: AuditLogCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    idDocumentId?: string | null
    payslipId?: string | null
    bankStatementId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationCreateOrConnectWithoutUserInput = {
    where: LoanApplicationWhereUniqueInput
    create: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput>
  }

  export type LoanApplicationCreateManyUserInputEnvelope = {
    data: LoanApplicationCreateManyUserInput | LoanApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    loanApplication?: LoanApplicationCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    loanApplicationId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoanApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: LoanApplicationWhereUniqueInput
    update: XOR<LoanApplicationUpdateWithoutUserInput, LoanApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<LoanApplicationCreateWithoutUserInput, LoanApplicationUncheckedCreateWithoutUserInput>
  }

  export type LoanApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: LoanApplicationWhereUniqueInput
    data: XOR<LoanApplicationUpdateWithoutUserInput, LoanApplicationUncheckedUpdateWithoutUserInput>
  }

  export type LoanApplicationUpdateManyWithWhereWithoutUserInput = {
    where: LoanApplicationScalarWhereInput
    data: XOR<LoanApplicationUpdateManyMutationInput, LoanApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type LoanApplicationScalarWhereInput = {
    AND?: LoanApplicationScalarWhereInput | LoanApplicationScalarWhereInput[]
    OR?: LoanApplicationScalarWhereInput[]
    NOT?: LoanApplicationScalarWhereInput | LoanApplicationScalarWhereInput[]
    id?: StringFilter<"LoanApplication"> | string
    loanType?: EnumLoanTypeFilter<"LoanApplication"> | $Enums.LoanType
    loanAmount?: FloatFilter<"LoanApplication"> | number
    loanTerm?: IntFilter<"LoanApplication"> | number
    firstName?: StringFilter<"LoanApplication"> | string
    lastName?: StringFilter<"LoanApplication"> | string
    address?: StringFilter<"LoanApplication"> | string
    idNumber?: StringFilter<"LoanApplication"> | string
    maritalStatus?: EnumMaritalStatusFilter<"LoanApplication"> | $Enums.MaritalStatus
    maritalProperty?: EnumMaritalPropertyNullableFilter<"LoanApplication"> | $Enums.MaritalProperty | null
    gender?: EnumGenderFilter<"LoanApplication"> | $Enums.Gender
    cell?: StringFilter<"LoanApplication"> | string
    whatsapp?: StringNullableFilter<"LoanApplication"> | string | null
    email?: StringFilter<"LoanApplication"> | string
    race?: EnumRaceFilter<"LoanApplication"> | $Enums.Race
    employer?: StringFilter<"LoanApplication"> | string
    employmentType?: EnumEmploymentTypeFilter<"LoanApplication"> | $Enums.EmploymentType
    lengthOfEmployment?: IntFilter<"LoanApplication"> | number
    employeeNumber?: StringFilter<"LoanApplication"> | string
    dependants?: IntFilter<"LoanApplication"> | number
    salary?: FloatFilter<"LoanApplication"> | number
    employerTelephone?: StringFilter<"LoanApplication"> | string
    employerEmail?: StringFilter<"LoanApplication"> | string
    netIncome?: FloatFilter<"LoanApplication"> | number
    basicIncome?: FloatFilter<"LoanApplication"> | number
    livingExpenses?: FloatFilter<"LoanApplication"> | number
    monthlyLoanRepayments?: FloatFilter<"LoanApplication"> | number
    totalExpenses?: FloatFilter<"LoanApplication"> | number
    bankName?: StringFilter<"LoanApplication"> | string
    accountNumber?: StringFilter<"LoanApplication"> | string
    accountHolder?: StringFilter<"LoanApplication"> | string
    branchCode?: StringFilter<"LoanApplication"> | string
    status?: EnumApplicationStatusFilter<"LoanApplication"> | $Enums.ApplicationStatus
    notes?: StringNullableFilter<"LoanApplication"> | string | null
    rejectionReason?: StringNullableFilter<"LoanApplication"> | string | null
    idDocumentId?: StringNullableFilter<"LoanApplication"> | string | null
    payslipId?: StringNullableFilter<"LoanApplication"> | string | null
    bankStatementId?: StringNullableFilter<"LoanApplication"> | string | null
    userId?: StringNullableFilter<"LoanApplication"> | string | null
    createdAt?: DateTimeFilter<"LoanApplication"> | Date | string
    updatedAt?: DateTimeFilter<"LoanApplication"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"LoanApplication"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"LoanApplication"> | Date | string | null
    fundedAt?: DateTimeNullableFilter<"LoanApplication"> | Date | string | null
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    userId?: StringFilter<"AuditLog"> | string
    loanApplicationId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type DocumentCreateWithoutIdDocumentApplicationInput = {
    id?: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payslipApplication?: LoanApplicationCreateNestedOneWithoutPayslipInput
    bankStatementApplication?: LoanApplicationCreateNestedOneWithoutBankStatementInput
  }

  export type DocumentUncheckedCreateWithoutIdDocumentApplicationInput = {
    id?: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payslipApplication?: LoanApplicationUncheckedCreateNestedOneWithoutPayslipInput
    bankStatementApplication?: LoanApplicationUncheckedCreateNestedOneWithoutBankStatementInput
  }

  export type DocumentCreateOrConnectWithoutIdDocumentApplicationInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutIdDocumentApplicationInput, DocumentUncheckedCreateWithoutIdDocumentApplicationInput>
  }

  export type DocumentCreateWithoutPayslipApplicationInput = {
    id?: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDocumentApplication?: LoanApplicationCreateNestedOneWithoutIdDocumentInput
    bankStatementApplication?: LoanApplicationCreateNestedOneWithoutBankStatementInput
  }

  export type DocumentUncheckedCreateWithoutPayslipApplicationInput = {
    id?: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDocumentApplication?: LoanApplicationUncheckedCreateNestedOneWithoutIdDocumentInput
    bankStatementApplication?: LoanApplicationUncheckedCreateNestedOneWithoutBankStatementInput
  }

  export type DocumentCreateOrConnectWithoutPayslipApplicationInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutPayslipApplicationInput, DocumentUncheckedCreateWithoutPayslipApplicationInput>
  }

  export type DocumentCreateWithoutBankStatementApplicationInput = {
    id?: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDocumentApplication?: LoanApplicationCreateNestedOneWithoutIdDocumentInput
    payslipApplication?: LoanApplicationCreateNestedOneWithoutPayslipInput
  }

  export type DocumentUncheckedCreateWithoutBankStatementApplicationInput = {
    id?: string
    url: string
    fileName: string
    fileType: string
    fileSize: number
    blobPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDocumentApplication?: LoanApplicationUncheckedCreateNestedOneWithoutIdDocumentInput
    payslipApplication?: LoanApplicationUncheckedCreateNestedOneWithoutPayslipInput
  }

  export type DocumentCreateOrConnectWithoutBankStatementApplicationInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutBankStatementApplicationInput, DocumentUncheckedCreateWithoutBankStatementApplicationInput>
  }

  export type UserCreateWithoutLoanApplicationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLoanApplicationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLoanApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoanApplicationsInput, UserUncheckedCreateWithoutLoanApplicationsInput>
  }

  export type AuditLogCreateWithoutLoanApplicationInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutLoanApplicationInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId: string
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutLoanApplicationInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutLoanApplicationInput, AuditLogUncheckedCreateWithoutLoanApplicationInput>
  }

  export type AuditLogCreateManyLoanApplicationInputEnvelope = {
    data: AuditLogCreateManyLoanApplicationInput | AuditLogCreateManyLoanApplicationInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithoutIdDocumentApplicationInput = {
    update: XOR<DocumentUpdateWithoutIdDocumentApplicationInput, DocumentUncheckedUpdateWithoutIdDocumentApplicationInput>
    create: XOR<DocumentCreateWithoutIdDocumentApplicationInput, DocumentUncheckedCreateWithoutIdDocumentApplicationInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutIdDocumentApplicationInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutIdDocumentApplicationInput, DocumentUncheckedUpdateWithoutIdDocumentApplicationInput>
  }

  export type DocumentUpdateWithoutIdDocumentApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslipApplication?: LoanApplicationUpdateOneWithoutPayslipNestedInput
    bankStatementApplication?: LoanApplicationUpdateOneWithoutBankStatementNestedInput
  }

  export type DocumentUncheckedUpdateWithoutIdDocumentApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslipApplication?: LoanApplicationUncheckedUpdateOneWithoutPayslipNestedInput
    bankStatementApplication?: LoanApplicationUncheckedUpdateOneWithoutBankStatementNestedInput
  }

  export type DocumentUpsertWithoutPayslipApplicationInput = {
    update: XOR<DocumentUpdateWithoutPayslipApplicationInput, DocumentUncheckedUpdateWithoutPayslipApplicationInput>
    create: XOR<DocumentCreateWithoutPayslipApplicationInput, DocumentUncheckedCreateWithoutPayslipApplicationInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutPayslipApplicationInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutPayslipApplicationInput, DocumentUncheckedUpdateWithoutPayslipApplicationInput>
  }

  export type DocumentUpdateWithoutPayslipApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocumentApplication?: LoanApplicationUpdateOneWithoutIdDocumentNestedInput
    bankStatementApplication?: LoanApplicationUpdateOneWithoutBankStatementNestedInput
  }

  export type DocumentUncheckedUpdateWithoutPayslipApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocumentApplication?: LoanApplicationUncheckedUpdateOneWithoutIdDocumentNestedInput
    bankStatementApplication?: LoanApplicationUncheckedUpdateOneWithoutBankStatementNestedInput
  }

  export type DocumentUpsertWithoutBankStatementApplicationInput = {
    update: XOR<DocumentUpdateWithoutBankStatementApplicationInput, DocumentUncheckedUpdateWithoutBankStatementApplicationInput>
    create: XOR<DocumentCreateWithoutBankStatementApplicationInput, DocumentUncheckedCreateWithoutBankStatementApplicationInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutBankStatementApplicationInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutBankStatementApplicationInput, DocumentUncheckedUpdateWithoutBankStatementApplicationInput>
  }

  export type DocumentUpdateWithoutBankStatementApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocumentApplication?: LoanApplicationUpdateOneWithoutIdDocumentNestedInput
    payslipApplication?: LoanApplicationUpdateOneWithoutPayslipNestedInput
  }

  export type DocumentUncheckedUpdateWithoutBankStatementApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    blobPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocumentApplication?: LoanApplicationUncheckedUpdateOneWithoutIdDocumentNestedInput
    payslipApplication?: LoanApplicationUncheckedUpdateOneWithoutPayslipNestedInput
  }

  export type UserUpsertWithoutLoanApplicationsInput = {
    update: XOR<UserUpdateWithoutLoanApplicationsInput, UserUncheckedUpdateWithoutLoanApplicationsInput>
    create: XOR<UserCreateWithoutLoanApplicationsInput, UserUncheckedCreateWithoutLoanApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoanApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoanApplicationsInput, UserUncheckedUpdateWithoutLoanApplicationsInput>
  }

  export type UserUpdateWithoutLoanApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLoanApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuditLogUpsertWithWhereUniqueWithoutLoanApplicationInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutLoanApplicationInput, AuditLogUncheckedUpdateWithoutLoanApplicationInput>
    create: XOR<AuditLogCreateWithoutLoanApplicationInput, AuditLogUncheckedCreateWithoutLoanApplicationInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutLoanApplicationInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutLoanApplicationInput, AuditLogUncheckedUpdateWithoutLoanApplicationInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutLoanApplicationInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutLoanApplicationInput>
  }

  export type LoanApplicationCreateWithoutIdDocumentInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    payslip?: DocumentCreateNestedOneWithoutPayslipApplicationInput
    bankStatement?: DocumentCreateNestedOneWithoutBankStatementApplicationInput
    user?: UserCreateNestedOneWithoutLoanApplicationsInput
    auditLogs?: AuditLogCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationUncheckedCreateWithoutIdDocumentInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    payslipId?: string | null
    bankStatementId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationCreateOrConnectWithoutIdDocumentInput = {
    where: LoanApplicationWhereUniqueInput
    create: XOR<LoanApplicationCreateWithoutIdDocumentInput, LoanApplicationUncheckedCreateWithoutIdDocumentInput>
  }

  export type LoanApplicationCreateWithoutPayslipInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    idDocument?: DocumentCreateNestedOneWithoutIdDocumentApplicationInput
    bankStatement?: DocumentCreateNestedOneWithoutBankStatementApplicationInput
    user?: UserCreateNestedOneWithoutLoanApplicationsInput
    auditLogs?: AuditLogCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationUncheckedCreateWithoutPayslipInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    idDocumentId?: string | null
    bankStatementId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationCreateOrConnectWithoutPayslipInput = {
    where: LoanApplicationWhereUniqueInput
    create: XOR<LoanApplicationCreateWithoutPayslipInput, LoanApplicationUncheckedCreateWithoutPayslipInput>
  }

  export type LoanApplicationCreateWithoutBankStatementInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    idDocument?: DocumentCreateNestedOneWithoutIdDocumentApplicationInput
    payslip?: DocumentCreateNestedOneWithoutPayslipApplicationInput
    user?: UserCreateNestedOneWithoutLoanApplicationsInput
    auditLogs?: AuditLogCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationUncheckedCreateWithoutBankStatementInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    idDocumentId?: string | null
    payslipId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutLoanApplicationInput
  }

  export type LoanApplicationCreateOrConnectWithoutBankStatementInput = {
    where: LoanApplicationWhereUniqueInput
    create: XOR<LoanApplicationCreateWithoutBankStatementInput, LoanApplicationUncheckedCreateWithoutBankStatementInput>
  }

  export type LoanApplicationUpsertWithoutIdDocumentInput = {
    update: XOR<LoanApplicationUpdateWithoutIdDocumentInput, LoanApplicationUncheckedUpdateWithoutIdDocumentInput>
    create: XOR<LoanApplicationCreateWithoutIdDocumentInput, LoanApplicationUncheckedCreateWithoutIdDocumentInput>
    where?: LoanApplicationWhereInput
  }

  export type LoanApplicationUpdateToOneWithWhereWithoutIdDocumentInput = {
    where?: LoanApplicationWhereInput
    data: XOR<LoanApplicationUpdateWithoutIdDocumentInput, LoanApplicationUncheckedUpdateWithoutIdDocumentInput>
  }

  export type LoanApplicationUpdateWithoutIdDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payslip?: DocumentUpdateOneWithoutPayslipApplicationNestedInput
    bankStatement?: DocumentUpdateOneWithoutBankStatementApplicationNestedInput
    user?: UserUpdateOneWithoutLoanApplicationsNestedInput
    auditLogs?: AuditLogUpdateManyWithoutLoanApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateWithoutIdDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    payslipId?: NullableStringFieldUpdateOperationsInput | string | null
    bankStatementId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutLoanApplicationNestedInput
  }

  export type LoanApplicationUpsertWithoutPayslipInput = {
    update: XOR<LoanApplicationUpdateWithoutPayslipInput, LoanApplicationUncheckedUpdateWithoutPayslipInput>
    create: XOR<LoanApplicationCreateWithoutPayslipInput, LoanApplicationUncheckedCreateWithoutPayslipInput>
    where?: LoanApplicationWhereInput
  }

  export type LoanApplicationUpdateToOneWithWhereWithoutPayslipInput = {
    where?: LoanApplicationWhereInput
    data: XOR<LoanApplicationUpdateWithoutPayslipInput, LoanApplicationUncheckedUpdateWithoutPayslipInput>
  }

  export type LoanApplicationUpdateWithoutPayslipInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idDocument?: DocumentUpdateOneWithoutIdDocumentApplicationNestedInput
    bankStatement?: DocumentUpdateOneWithoutBankStatementApplicationNestedInput
    user?: UserUpdateOneWithoutLoanApplicationsNestedInput
    auditLogs?: AuditLogUpdateManyWithoutLoanApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateWithoutPayslipInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentId?: NullableStringFieldUpdateOperationsInput | string | null
    bankStatementId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutLoanApplicationNestedInput
  }

  export type LoanApplicationUpsertWithoutBankStatementInput = {
    update: XOR<LoanApplicationUpdateWithoutBankStatementInput, LoanApplicationUncheckedUpdateWithoutBankStatementInput>
    create: XOR<LoanApplicationCreateWithoutBankStatementInput, LoanApplicationUncheckedCreateWithoutBankStatementInput>
    where?: LoanApplicationWhereInput
  }

  export type LoanApplicationUpdateToOneWithWhereWithoutBankStatementInput = {
    where?: LoanApplicationWhereInput
    data: XOR<LoanApplicationUpdateWithoutBankStatementInput, LoanApplicationUncheckedUpdateWithoutBankStatementInput>
  }

  export type LoanApplicationUpdateWithoutBankStatementInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idDocument?: DocumentUpdateOneWithoutIdDocumentApplicationNestedInput
    payslip?: DocumentUpdateOneWithoutPayslipApplicationNestedInput
    user?: UserUpdateOneWithoutLoanApplicationsNestedInput
    auditLogs?: AuditLogUpdateManyWithoutLoanApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateWithoutBankStatementInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentId?: NullableStringFieldUpdateOperationsInput | string | null
    payslipId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutLoanApplicationNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    loanApplications?: LoanApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    loanApplications?: LoanApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type LoanApplicationCreateWithoutAuditLogsInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
    idDocument?: DocumentCreateNestedOneWithoutIdDocumentApplicationInput
    payslip?: DocumentCreateNestedOneWithoutPayslipApplicationInput
    bankStatement?: DocumentCreateNestedOneWithoutBankStatementApplicationInput
    user?: UserCreateNestedOneWithoutLoanApplicationsInput
  }

  export type LoanApplicationUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    idDocumentId?: string | null
    payslipId?: string | null
    bankStatementId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
  }

  export type LoanApplicationCreateOrConnectWithoutAuditLogsInput = {
    where: LoanApplicationWhereUniqueInput
    create: XOR<LoanApplicationCreateWithoutAuditLogsInput, LoanApplicationUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    loanApplications?: LoanApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    loanApplications?: LoanApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LoanApplicationUpsertWithoutAuditLogsInput = {
    update: XOR<LoanApplicationUpdateWithoutAuditLogsInput, LoanApplicationUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<LoanApplicationCreateWithoutAuditLogsInput, LoanApplicationUncheckedCreateWithoutAuditLogsInput>
    where?: LoanApplicationWhereInput
  }

  export type LoanApplicationUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: LoanApplicationWhereInput
    data: XOR<LoanApplicationUpdateWithoutAuditLogsInput, LoanApplicationUncheckedUpdateWithoutAuditLogsInput>
  }

  export type LoanApplicationUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idDocument?: DocumentUpdateOneWithoutIdDocumentApplicationNestedInput
    payslip?: DocumentUpdateOneWithoutPayslipApplicationNestedInput
    bankStatement?: DocumentUpdateOneWithoutBankStatementApplicationNestedInput
    user?: UserUpdateOneWithoutLoanApplicationsNestedInput
  }

  export type LoanApplicationUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentId?: NullableStringFieldUpdateOperationsInput | string | null
    payslipId?: NullableStringFieldUpdateOperationsInput | string | null
    bankStatementId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanApplicationCreateManyUserInput = {
    id?: string
    loanType: $Enums.LoanType
    loanAmount: number
    loanTerm: number
    firstName: string
    lastName: string
    address: string
    idNumber: string
    maritalStatus: $Enums.MaritalStatus
    maritalProperty?: $Enums.MaritalProperty | null
    gender: $Enums.Gender
    cell: string
    whatsapp?: string | null
    email: string
    race: $Enums.Race
    employer: string
    employmentType: $Enums.EmploymentType
    lengthOfEmployment: number
    employeeNumber: string
    dependants: number
    salary: number
    employerTelephone: string
    employerEmail: string
    netIncome: number
    basicIncome: number
    livingExpenses: number
    monthlyLoanRepayments: number
    totalExpenses: number
    bankName: string
    accountNumber: string
    accountHolder: string
    branchCode: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    rejectionReason?: string | null
    idDocumentId?: string | null
    payslipId?: string | null
    bankStatementId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedAt?: Date | string | null
    approvedAt?: Date | string | null
    fundedAt?: Date | string | null
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    loanApplicationId?: string | null
    createdAt?: Date | string
  }

  export type LoanApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idDocument?: DocumentUpdateOneWithoutIdDocumentApplicationNestedInput
    payslip?: DocumentUpdateOneWithoutPayslipApplicationNestedInput
    bankStatement?: DocumentUpdateOneWithoutBankStatementApplicationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutLoanApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentId?: NullableStringFieldUpdateOperationsInput | string | null
    payslipId?: NullableStringFieldUpdateOperationsInput | string | null
    bankStatementId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutLoanApplicationNestedInput
  }

  export type LoanApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanType?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loanAmount?: FloatFieldUpdateOperationsInput | number
    loanTerm?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    maritalProperty?: NullableEnumMaritalPropertyFieldUpdateOperationsInput | $Enums.MaritalProperty | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    cell?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    race?: EnumRaceFieldUpdateOperationsInput | $Enums.Race
    employer?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    lengthOfEmployment?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    salary?: FloatFieldUpdateOperationsInput | number
    employerTelephone?: StringFieldUpdateOperationsInput | string
    employerEmail?: StringFieldUpdateOperationsInput | string
    netIncome?: FloatFieldUpdateOperationsInput | number
    basicIncome?: FloatFieldUpdateOperationsInput | number
    livingExpenses?: FloatFieldUpdateOperationsInput | number
    monthlyLoanRepayments?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentId?: NullableStringFieldUpdateOperationsInput | string | null
    payslipId?: NullableStringFieldUpdateOperationsInput | string | null
    bankStatementId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanApplication?: LoanApplicationUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    loanApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    loanApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyLoanApplicationInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateWithoutLoanApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutLoanApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutLoanApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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