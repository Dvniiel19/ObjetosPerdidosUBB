
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model PuntoAcopio
 * 
 */
export type PuntoAcopio = $Result.DefaultSelection<Prisma.$PuntoAcopioPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Objeto
 * 
 */
export type Objeto = $Result.DefaultSelection<Prisma.$ObjetoPayload>
/**
 * Model Fotografia
 * 
 */
export type Fotografia = $Result.DefaultSelection<Prisma.$FotografiaPayload>
/**
 * Model ReportePerdida
 * 
 */
export type ReportePerdida = $Result.DefaultSelection<Prisma.$ReportePerdidaPayload>
/**
 * Model Reclamo
 * 
 */
export type Reclamo = $Result.DefaultSelection<Prisma.$ReclamoPayload>
/**
 * Model ActaDestruccion
 * 
 */
export type ActaDestruccion = $Result.DefaultSelection<Prisma.$ActaDestruccionPayload>
/**
 * Model Bitacora
 * 
 */
export type Bitacora = $Result.DefaultSelection<Prisma.$BitacoraPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.puntoAcopio`: Exposes CRUD operations for the **PuntoAcopio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PuntoAcopios
    * const puntoAcopios = await prisma.puntoAcopio.findMany()
    * ```
    */
  get puntoAcopio(): Prisma.PuntoAcopioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.objeto`: Exposes CRUD operations for the **Objeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Objetos
    * const objetos = await prisma.objeto.findMany()
    * ```
    */
  get objeto(): Prisma.ObjetoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fotografia`: Exposes CRUD operations for the **Fotografia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotografias
    * const fotografias = await prisma.fotografia.findMany()
    * ```
    */
  get fotografia(): Prisma.FotografiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportePerdida`: Exposes CRUD operations for the **ReportePerdida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportePerdidas
    * const reportePerdidas = await prisma.reportePerdida.findMany()
    * ```
    */
  get reportePerdida(): Prisma.ReportePerdidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reclamo`: Exposes CRUD operations for the **Reclamo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reclamos
    * const reclamos = await prisma.reclamo.findMany()
    * ```
    */
  get reclamo(): Prisma.ReclamoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actaDestruccion`: Exposes CRUD operations for the **ActaDestruccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActaDestruccions
    * const actaDestruccions = await prisma.actaDestruccion.findMany()
    * ```
    */
  get actaDestruccion(): Prisma.ActaDestruccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bitacora`: Exposes CRUD operations for the **Bitacora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bitacoras
    * const bitacoras = await prisma.bitacora.findMany()
    * ```
    */
  get bitacora(): Prisma.BitacoraDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Usuario: 'Usuario',
    PuntoAcopio: 'PuntoAcopio',
    Categoria: 'Categoria',
    Objeto: 'Objeto',
    Fotografia: 'Fotografia',
    ReportePerdida: 'ReportePerdida',
    Reclamo: 'Reclamo',
    ActaDestruccion: 'ActaDestruccion',
    Bitacora: 'Bitacora'
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
      modelProps: "usuario" | "puntoAcopio" | "categoria" | "objeto" | "fotografia" | "reportePerdida" | "reclamo" | "actaDestruccion" | "bitacora"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      PuntoAcopio: {
        payload: Prisma.$PuntoAcopioPayload<ExtArgs>
        fields: Prisma.PuntoAcopioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PuntoAcopioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PuntoAcopioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload>
          }
          findFirst: {
            args: Prisma.PuntoAcopioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PuntoAcopioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload>
          }
          findMany: {
            args: Prisma.PuntoAcopioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload>[]
          }
          create: {
            args: Prisma.PuntoAcopioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload>
          }
          createMany: {
            args: Prisma.PuntoAcopioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PuntoAcopioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload>[]
          }
          delete: {
            args: Prisma.PuntoAcopioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload>
          }
          update: {
            args: Prisma.PuntoAcopioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload>
          }
          deleteMany: {
            args: Prisma.PuntoAcopioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PuntoAcopioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PuntoAcopioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload>[]
          }
          upsert: {
            args: Prisma.PuntoAcopioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoAcopioPayload>
          }
          aggregate: {
            args: Prisma.PuntoAcopioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePuntoAcopio>
          }
          groupBy: {
            args: Prisma.PuntoAcopioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PuntoAcopioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PuntoAcopioCountArgs<ExtArgs>
            result: $Utils.Optional<PuntoAcopioCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Objeto: {
        payload: Prisma.$ObjetoPayload<ExtArgs>
        fields: Prisma.ObjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload>
          }
          findFirst: {
            args: Prisma.ObjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload>
          }
          findMany: {
            args: Prisma.ObjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload>[]
          }
          create: {
            args: Prisma.ObjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload>
          }
          createMany: {
            args: Prisma.ObjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload>[]
          }
          delete: {
            args: Prisma.ObjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload>
          }
          update: {
            args: Prisma.ObjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload>
          }
          deleteMany: {
            args: Prisma.ObjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload>[]
          }
          upsert: {
            args: Prisma.ObjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetoPayload>
          }
          aggregate: {
            args: Prisma.ObjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjeto>
          }
          groupBy: {
            args: Prisma.ObjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjetoCountArgs<ExtArgs>
            result: $Utils.Optional<ObjetoCountAggregateOutputType> | number
          }
        }
      }
      Fotografia: {
        payload: Prisma.$FotografiaPayload<ExtArgs>
        fields: Prisma.FotografiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotografiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotografiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload>
          }
          findFirst: {
            args: Prisma.FotografiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotografiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload>
          }
          findMany: {
            args: Prisma.FotografiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload>[]
          }
          create: {
            args: Prisma.FotografiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload>
          }
          createMany: {
            args: Prisma.FotografiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotografiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload>[]
          }
          delete: {
            args: Prisma.FotografiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload>
          }
          update: {
            args: Prisma.FotografiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload>
          }
          deleteMany: {
            args: Prisma.FotografiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotografiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotografiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload>[]
          }
          upsert: {
            args: Prisma.FotografiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografiaPayload>
          }
          aggregate: {
            args: Prisma.FotografiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotografia>
          }
          groupBy: {
            args: Prisma.FotografiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotografiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotografiaCountArgs<ExtArgs>
            result: $Utils.Optional<FotografiaCountAggregateOutputType> | number
          }
        }
      }
      ReportePerdida: {
        payload: Prisma.$ReportePerdidaPayload<ExtArgs>
        fields: Prisma.ReportePerdidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportePerdidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportePerdidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload>
          }
          findFirst: {
            args: Prisma.ReportePerdidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportePerdidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload>
          }
          findMany: {
            args: Prisma.ReportePerdidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload>[]
          }
          create: {
            args: Prisma.ReportePerdidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload>
          }
          createMany: {
            args: Prisma.ReportePerdidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportePerdidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload>[]
          }
          delete: {
            args: Prisma.ReportePerdidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload>
          }
          update: {
            args: Prisma.ReportePerdidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload>
          }
          deleteMany: {
            args: Prisma.ReportePerdidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportePerdidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportePerdidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload>[]
          }
          upsert: {
            args: Prisma.ReportePerdidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePerdidaPayload>
          }
          aggregate: {
            args: Prisma.ReportePerdidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportePerdida>
          }
          groupBy: {
            args: Prisma.ReportePerdidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportePerdidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportePerdidaCountArgs<ExtArgs>
            result: $Utils.Optional<ReportePerdidaCountAggregateOutputType> | number
          }
        }
      }
      Reclamo: {
        payload: Prisma.$ReclamoPayload<ExtArgs>
        fields: Prisma.ReclamoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReclamoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReclamoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload>
          }
          findFirst: {
            args: Prisma.ReclamoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReclamoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload>
          }
          findMany: {
            args: Prisma.ReclamoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload>[]
          }
          create: {
            args: Prisma.ReclamoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload>
          }
          createMany: {
            args: Prisma.ReclamoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReclamoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload>[]
          }
          delete: {
            args: Prisma.ReclamoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload>
          }
          update: {
            args: Prisma.ReclamoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload>
          }
          deleteMany: {
            args: Prisma.ReclamoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReclamoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReclamoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload>[]
          }
          upsert: {
            args: Prisma.ReclamoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReclamoPayload>
          }
          aggregate: {
            args: Prisma.ReclamoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReclamo>
          }
          groupBy: {
            args: Prisma.ReclamoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReclamoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReclamoCountArgs<ExtArgs>
            result: $Utils.Optional<ReclamoCountAggregateOutputType> | number
          }
        }
      }
      ActaDestruccion: {
        payload: Prisma.$ActaDestruccionPayload<ExtArgs>
        fields: Prisma.ActaDestruccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActaDestruccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActaDestruccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload>
          }
          findFirst: {
            args: Prisma.ActaDestruccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActaDestruccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload>
          }
          findMany: {
            args: Prisma.ActaDestruccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload>[]
          }
          create: {
            args: Prisma.ActaDestruccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload>
          }
          createMany: {
            args: Prisma.ActaDestruccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActaDestruccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload>[]
          }
          delete: {
            args: Prisma.ActaDestruccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload>
          }
          update: {
            args: Prisma.ActaDestruccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload>
          }
          deleteMany: {
            args: Prisma.ActaDestruccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActaDestruccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActaDestruccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload>[]
          }
          upsert: {
            args: Prisma.ActaDestruccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActaDestruccionPayload>
          }
          aggregate: {
            args: Prisma.ActaDestruccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActaDestruccion>
          }
          groupBy: {
            args: Prisma.ActaDestruccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActaDestruccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActaDestruccionCountArgs<ExtArgs>
            result: $Utils.Optional<ActaDestruccionCountAggregateOutputType> | number
          }
        }
      }
      Bitacora: {
        payload: Prisma.$BitacoraPayload<ExtArgs>
        fields: Prisma.BitacoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BitacoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BitacoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          findFirst: {
            args: Prisma.BitacoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BitacoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          findMany: {
            args: Prisma.BitacoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>[]
          }
          create: {
            args: Prisma.BitacoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          createMany: {
            args: Prisma.BitacoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BitacoraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>[]
          }
          delete: {
            args: Prisma.BitacoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          update: {
            args: Prisma.BitacoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          deleteMany: {
            args: Prisma.BitacoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BitacoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BitacoraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>[]
          }
          upsert: {
            args: Prisma.BitacoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          aggregate: {
            args: Prisma.BitacoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBitacora>
          }
          groupBy: {
            args: Prisma.BitacoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<BitacoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.BitacoraCountArgs<ExtArgs>
            result: $Utils.Optional<BitacoraCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: UsuarioOmit
    puntoAcopio?: PuntoAcopioOmit
    categoria?: CategoriaOmit
    objeto?: ObjetoOmit
    fotografia?: FotografiaOmit
    reportePerdida?: ReportePerdidaOmit
    reclamo?: ReclamoOmit
    actaDestruccion?: ActaDestruccionOmit
    bitacora?: BitacoraOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    objetosRegistrados: number
    reportes: number
    reclamosAtendidos: number
    actasFirmadas: number
    eventos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objetosRegistrados?: boolean | UsuarioCountOutputTypeCountObjetosRegistradosArgs
    reportes?: boolean | UsuarioCountOutputTypeCountReportesArgs
    reclamosAtendidos?: boolean | UsuarioCountOutputTypeCountReclamosAtendidosArgs
    actasFirmadas?: boolean | UsuarioCountOutputTypeCountActasFirmadasArgs
    eventos?: boolean | UsuarioCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountObjetosRegistradosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportePerdidaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReclamosAtendidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReclamoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountActasFirmadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActaDestruccionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitacoraWhereInput
  }


  /**
   * Count Type PuntoAcopioCountOutputType
   */

  export type PuntoAcopioCountOutputType = {
    encargados: number
    objetos: number
  }

  export type PuntoAcopioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encargados?: boolean | PuntoAcopioCountOutputTypeCountEncargadosArgs
    objetos?: boolean | PuntoAcopioCountOutputTypeCountObjetosArgs
  }

  // Custom InputTypes
  /**
   * PuntoAcopioCountOutputType without action
   */
  export type PuntoAcopioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopioCountOutputType
     */
    select?: PuntoAcopioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PuntoAcopioCountOutputType without action
   */
  export type PuntoAcopioCountOutputTypeCountEncargadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * PuntoAcopioCountOutputType without action
   */
  export type PuntoAcopioCountOutputTypeCountObjetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    objetos: number
    reportes: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objetos?: boolean | CategoriaCountOutputTypeCountObjetosArgs
    reportes?: boolean | CategoriaCountOutputTypeCountReportesArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountObjetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetoWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountReportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportePerdidaWhereInput
  }


  /**
   * Count Type ObjetoCountOutputType
   */

  export type ObjetoCountOutputType = {
    fotografias: number
    reclamos: number
  }

  export type ObjetoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotografias?: boolean | ObjetoCountOutputTypeCountFotografiasArgs
    reclamos?: boolean | ObjetoCountOutputTypeCountReclamosArgs
  }

  // Custom InputTypes
  /**
   * ObjetoCountOutputType without action
   */
  export type ObjetoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetoCountOutputType
     */
    select?: ObjetoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObjetoCountOutputType without action
   */
  export type ObjetoCountOutputTypeCountFotografiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotografiaWhereInput
  }

  /**
   * ObjetoCountOutputType without action
   */
  export type ObjetoCountOutputTypeCountReclamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReclamoWhereInput
  }


  /**
   * Count Type ActaDestruccionCountOutputType
   */

  export type ActaDestruccionCountOutputType = {
    objetos: number
  }

  export type ActaDestruccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objetos?: boolean | ActaDestruccionCountOutputTypeCountObjetosArgs
  }

  // Custom InputTypes
  /**
   * ActaDestruccionCountOutputType without action
   */
  export type ActaDestruccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccionCountOutputType
     */
    select?: ActaDestruccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActaDestruccionCountOutputType without action
   */
  export type ActaDestruccionCountOutputTypeCountObjetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    id_punto: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: bigint | null
    id_punto: bigint | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: bigint | null
    correo_institucional: string | null
    nombres: string | null
    apellidos: string | null
    rol: string | null
    id_punto: bigint | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: bigint | null
    correo_institucional: string | null
    nombres: string | null
    apellidos: string | null
    rol: string | null
    id_punto: bigint | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    correo_institucional: number
    nombres: number
    apellidos: number
    rol: number
    id_punto: number
    activo: number
    creado_en: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    id_punto?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    id_punto?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    correo_institucional?: true
    nombres?: true
    apellidos?: true
    rol?: true
    id_punto?: true
    activo?: true
    creado_en?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    correo_institucional?: true
    nombres?: true
    apellidos?: true
    rol?: true
    id_punto?: true
    activo?: true
    creado_en?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    correo_institucional?: true
    nombres?: true
    apellidos?: true
    rol?: true
    id_punto?: true
    activo?: true
    creado_en?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: bigint
    correo_institucional: string
    nombres: string
    apellidos: string
    rol: string
    id_punto: bigint | null
    activo: boolean
    creado_en: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    correo_institucional?: boolean
    nombres?: boolean
    apellidos?: boolean
    rol?: boolean
    id_punto?: boolean
    activo?: boolean
    creado_en?: boolean
    punto?: boolean | Usuario$puntoArgs<ExtArgs>
    objetosRegistrados?: boolean | Usuario$objetosRegistradosArgs<ExtArgs>
    reportes?: boolean | Usuario$reportesArgs<ExtArgs>
    reclamosAtendidos?: boolean | Usuario$reclamosAtendidosArgs<ExtArgs>
    actasFirmadas?: boolean | Usuario$actasFirmadasArgs<ExtArgs>
    eventos?: boolean | Usuario$eventosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    correo_institucional?: boolean
    nombres?: boolean
    apellidos?: boolean
    rol?: boolean
    id_punto?: boolean
    activo?: boolean
    creado_en?: boolean
    punto?: boolean | Usuario$puntoArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    correo_institucional?: boolean
    nombres?: boolean
    apellidos?: boolean
    rol?: boolean
    id_punto?: boolean
    activo?: boolean
    creado_en?: boolean
    punto?: boolean | Usuario$puntoArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    correo_institucional?: boolean
    nombres?: boolean
    apellidos?: boolean
    rol?: boolean
    id_punto?: boolean
    activo?: boolean
    creado_en?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "correo_institucional" | "nombres" | "apellidos" | "rol" | "id_punto" | "activo" | "creado_en", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    punto?: boolean | Usuario$puntoArgs<ExtArgs>
    objetosRegistrados?: boolean | Usuario$objetosRegistradosArgs<ExtArgs>
    reportes?: boolean | Usuario$reportesArgs<ExtArgs>
    reclamosAtendidos?: boolean | Usuario$reclamosAtendidosArgs<ExtArgs>
    actasFirmadas?: boolean | Usuario$actasFirmadasArgs<ExtArgs>
    eventos?: boolean | Usuario$eventosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    punto?: boolean | Usuario$puntoArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    punto?: boolean | Usuario$puntoArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      punto: Prisma.$PuntoAcopioPayload<ExtArgs> | null
      objetosRegistrados: Prisma.$ObjetoPayload<ExtArgs>[]
      reportes: Prisma.$ReportePerdidaPayload<ExtArgs>[]
      reclamosAtendidos: Prisma.$ReclamoPayload<ExtArgs>[]
      actasFirmadas: Prisma.$ActaDestruccionPayload<ExtArgs>[]
      eventos: Prisma.$BitacoraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: bigint
      correo_institucional: string
      nombres: string
      apellidos: string
      /**
       * usuario, encargado o administrador
       */
      rol: string
      /**
       * solo encargados
       */
      id_punto: bigint | null
      activo: boolean
      creado_en: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    punto<T extends Usuario$puntoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$puntoArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    objetosRegistrados<T extends Usuario$objetosRegistradosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$objetosRegistradosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportes<T extends Usuario$reportesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reclamosAtendidos<T extends Usuario$reclamosAtendidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reclamosAtendidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actasFirmadas<T extends Usuario$actasFirmadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$actasFirmadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventos<T extends Usuario$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'BigInt'>
    readonly correo_institucional: FieldRef<"Usuario", 'String'>
    readonly nombres: FieldRef<"Usuario", 'String'>
    readonly apellidos: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
    readonly id_punto: FieldRef<"Usuario", 'BigInt'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly creado_en: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.punto
   */
  export type Usuario$puntoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    where?: PuntoAcopioWhereInput
  }

  /**
   * Usuario.objetosRegistrados
   */
  export type Usuario$objetosRegistradosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    where?: ObjetoWhereInput
    orderBy?: ObjetoOrderByWithRelationInput | ObjetoOrderByWithRelationInput[]
    cursor?: ObjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjetoScalarFieldEnum | ObjetoScalarFieldEnum[]
  }

  /**
   * Usuario.reportes
   */
  export type Usuario$reportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    where?: ReportePerdidaWhereInput
    orderBy?: ReportePerdidaOrderByWithRelationInput | ReportePerdidaOrderByWithRelationInput[]
    cursor?: ReportePerdidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportePerdidaScalarFieldEnum | ReportePerdidaScalarFieldEnum[]
  }

  /**
   * Usuario.reclamosAtendidos
   */
  export type Usuario$reclamosAtendidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    where?: ReclamoWhereInput
    orderBy?: ReclamoOrderByWithRelationInput | ReclamoOrderByWithRelationInput[]
    cursor?: ReclamoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReclamoScalarFieldEnum | ReclamoScalarFieldEnum[]
  }

  /**
   * Usuario.actasFirmadas
   */
  export type Usuario$actasFirmadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    where?: ActaDestruccionWhereInput
    orderBy?: ActaDestruccionOrderByWithRelationInput | ActaDestruccionOrderByWithRelationInput[]
    cursor?: ActaDestruccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActaDestruccionScalarFieldEnum | ActaDestruccionScalarFieldEnum[]
  }

  /**
   * Usuario.eventos
   */
  export type Usuario$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    where?: BitacoraWhereInput
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    cursor?: BitacoraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model PuntoAcopio
   */

  export type AggregatePuntoAcopio = {
    _count: PuntoAcopioCountAggregateOutputType | null
    _avg: PuntoAcopioAvgAggregateOutputType | null
    _sum: PuntoAcopioSumAggregateOutputType | null
    _min: PuntoAcopioMinAggregateOutputType | null
    _max: PuntoAcopioMaxAggregateOutputType | null
  }

  export type PuntoAcopioAvgAggregateOutputType = {
    id_punto: number | null
  }

  export type PuntoAcopioSumAggregateOutputType = {
    id_punto: bigint | null
  }

  export type PuntoAcopioMinAggregateOutputType = {
    id_punto: bigint | null
    nombre: string | null
    ubicacion: string | null
    tipo: string | null
    publicado: boolean | null
    habilitado: boolean | null
  }

  export type PuntoAcopioMaxAggregateOutputType = {
    id_punto: bigint | null
    nombre: string | null
    ubicacion: string | null
    tipo: string | null
    publicado: boolean | null
    habilitado: boolean | null
  }

  export type PuntoAcopioCountAggregateOutputType = {
    id_punto: number
    nombre: number
    ubicacion: number
    tipo: number
    publicado: number
    habilitado: number
    _all: number
  }


  export type PuntoAcopioAvgAggregateInputType = {
    id_punto?: true
  }

  export type PuntoAcopioSumAggregateInputType = {
    id_punto?: true
  }

  export type PuntoAcopioMinAggregateInputType = {
    id_punto?: true
    nombre?: true
    ubicacion?: true
    tipo?: true
    publicado?: true
    habilitado?: true
  }

  export type PuntoAcopioMaxAggregateInputType = {
    id_punto?: true
    nombre?: true
    ubicacion?: true
    tipo?: true
    publicado?: true
    habilitado?: true
  }

  export type PuntoAcopioCountAggregateInputType = {
    id_punto?: true
    nombre?: true
    ubicacion?: true
    tipo?: true
    publicado?: true
    habilitado?: true
    _all?: true
  }

  export type PuntoAcopioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PuntoAcopio to aggregate.
     */
    where?: PuntoAcopioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoAcopios to fetch.
     */
    orderBy?: PuntoAcopioOrderByWithRelationInput | PuntoAcopioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PuntoAcopioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoAcopios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoAcopios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PuntoAcopios
    **/
    _count?: true | PuntoAcopioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PuntoAcopioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PuntoAcopioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PuntoAcopioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PuntoAcopioMaxAggregateInputType
  }

  export type GetPuntoAcopioAggregateType<T extends PuntoAcopioAggregateArgs> = {
        [P in keyof T & keyof AggregatePuntoAcopio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePuntoAcopio[P]>
      : GetScalarType<T[P], AggregatePuntoAcopio[P]>
  }




  export type PuntoAcopioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuntoAcopioWhereInput
    orderBy?: PuntoAcopioOrderByWithAggregationInput | PuntoAcopioOrderByWithAggregationInput[]
    by: PuntoAcopioScalarFieldEnum[] | PuntoAcopioScalarFieldEnum
    having?: PuntoAcopioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PuntoAcopioCountAggregateInputType | true
    _avg?: PuntoAcopioAvgAggregateInputType
    _sum?: PuntoAcopioSumAggregateInputType
    _min?: PuntoAcopioMinAggregateInputType
    _max?: PuntoAcopioMaxAggregateInputType
  }

  export type PuntoAcopioGroupByOutputType = {
    id_punto: bigint
    nombre: string
    ubicacion: string
    tipo: string
    publicado: boolean
    habilitado: boolean
    _count: PuntoAcopioCountAggregateOutputType | null
    _avg: PuntoAcopioAvgAggregateOutputType | null
    _sum: PuntoAcopioSumAggregateOutputType | null
    _min: PuntoAcopioMinAggregateOutputType | null
    _max: PuntoAcopioMaxAggregateOutputType | null
  }

  type GetPuntoAcopioGroupByPayload<T extends PuntoAcopioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PuntoAcopioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PuntoAcopioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PuntoAcopioGroupByOutputType[P]>
            : GetScalarType<T[P], PuntoAcopioGroupByOutputType[P]>
        }
      >
    >


  export type PuntoAcopioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_punto?: boolean
    nombre?: boolean
    ubicacion?: boolean
    tipo?: boolean
    publicado?: boolean
    habilitado?: boolean
    encargados?: boolean | PuntoAcopio$encargadosArgs<ExtArgs>
    objetos?: boolean | PuntoAcopio$objetosArgs<ExtArgs>
    _count?: boolean | PuntoAcopioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["puntoAcopio"]>

  export type PuntoAcopioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_punto?: boolean
    nombre?: boolean
    ubicacion?: boolean
    tipo?: boolean
    publicado?: boolean
    habilitado?: boolean
  }, ExtArgs["result"]["puntoAcopio"]>

  export type PuntoAcopioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_punto?: boolean
    nombre?: boolean
    ubicacion?: boolean
    tipo?: boolean
    publicado?: boolean
    habilitado?: boolean
  }, ExtArgs["result"]["puntoAcopio"]>

  export type PuntoAcopioSelectScalar = {
    id_punto?: boolean
    nombre?: boolean
    ubicacion?: boolean
    tipo?: boolean
    publicado?: boolean
    habilitado?: boolean
  }

  export type PuntoAcopioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_punto" | "nombre" | "ubicacion" | "tipo" | "publicado" | "habilitado", ExtArgs["result"]["puntoAcopio"]>
  export type PuntoAcopioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encargados?: boolean | PuntoAcopio$encargadosArgs<ExtArgs>
    objetos?: boolean | PuntoAcopio$objetosArgs<ExtArgs>
    _count?: boolean | PuntoAcopioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PuntoAcopioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PuntoAcopioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PuntoAcopioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PuntoAcopio"
    objects: {
      encargados: Prisma.$UsuarioPayload<ExtArgs>[]
      objetos: Prisma.$ObjetoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_punto: bigint
      nombre: string
      ubicacion: string
      tipo: string
      publicado: boolean
      habilitado: boolean
    }, ExtArgs["result"]["puntoAcopio"]>
    composites: {}
  }

  type PuntoAcopioGetPayload<S extends boolean | null | undefined | PuntoAcopioDefaultArgs> = $Result.GetResult<Prisma.$PuntoAcopioPayload, S>

  type PuntoAcopioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PuntoAcopioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PuntoAcopioCountAggregateInputType | true
    }

  export interface PuntoAcopioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PuntoAcopio'], meta: { name: 'PuntoAcopio' } }
    /**
     * Find zero or one PuntoAcopio that matches the filter.
     * @param {PuntoAcopioFindUniqueArgs} args - Arguments to find a PuntoAcopio
     * @example
     * // Get one PuntoAcopio
     * const puntoAcopio = await prisma.puntoAcopio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PuntoAcopioFindUniqueArgs>(args: SelectSubset<T, PuntoAcopioFindUniqueArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PuntoAcopio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PuntoAcopioFindUniqueOrThrowArgs} args - Arguments to find a PuntoAcopio
     * @example
     * // Get one PuntoAcopio
     * const puntoAcopio = await prisma.puntoAcopio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PuntoAcopioFindUniqueOrThrowArgs>(args: SelectSubset<T, PuntoAcopioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PuntoAcopio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoAcopioFindFirstArgs} args - Arguments to find a PuntoAcopio
     * @example
     * // Get one PuntoAcopio
     * const puntoAcopio = await prisma.puntoAcopio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PuntoAcopioFindFirstArgs>(args?: SelectSubset<T, PuntoAcopioFindFirstArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PuntoAcopio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoAcopioFindFirstOrThrowArgs} args - Arguments to find a PuntoAcopio
     * @example
     * // Get one PuntoAcopio
     * const puntoAcopio = await prisma.puntoAcopio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PuntoAcopioFindFirstOrThrowArgs>(args?: SelectSubset<T, PuntoAcopioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PuntoAcopios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoAcopioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PuntoAcopios
     * const puntoAcopios = await prisma.puntoAcopio.findMany()
     * 
     * // Get first 10 PuntoAcopios
     * const puntoAcopios = await prisma.puntoAcopio.findMany({ take: 10 })
     * 
     * // Only select the `id_punto`
     * const puntoAcopioWithId_puntoOnly = await prisma.puntoAcopio.findMany({ select: { id_punto: true } })
     * 
     */
    findMany<T extends PuntoAcopioFindManyArgs>(args?: SelectSubset<T, PuntoAcopioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PuntoAcopio.
     * @param {PuntoAcopioCreateArgs} args - Arguments to create a PuntoAcopio.
     * @example
     * // Create one PuntoAcopio
     * const PuntoAcopio = await prisma.puntoAcopio.create({
     *   data: {
     *     // ... data to create a PuntoAcopio
     *   }
     * })
     * 
     */
    create<T extends PuntoAcopioCreateArgs>(args: SelectSubset<T, PuntoAcopioCreateArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PuntoAcopios.
     * @param {PuntoAcopioCreateManyArgs} args - Arguments to create many PuntoAcopios.
     * @example
     * // Create many PuntoAcopios
     * const puntoAcopio = await prisma.puntoAcopio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PuntoAcopioCreateManyArgs>(args?: SelectSubset<T, PuntoAcopioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PuntoAcopios and returns the data saved in the database.
     * @param {PuntoAcopioCreateManyAndReturnArgs} args - Arguments to create many PuntoAcopios.
     * @example
     * // Create many PuntoAcopios
     * const puntoAcopio = await prisma.puntoAcopio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PuntoAcopios and only return the `id_punto`
     * const puntoAcopioWithId_puntoOnly = await prisma.puntoAcopio.createManyAndReturn({
     *   select: { id_punto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PuntoAcopioCreateManyAndReturnArgs>(args?: SelectSubset<T, PuntoAcopioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PuntoAcopio.
     * @param {PuntoAcopioDeleteArgs} args - Arguments to delete one PuntoAcopio.
     * @example
     * // Delete one PuntoAcopio
     * const PuntoAcopio = await prisma.puntoAcopio.delete({
     *   where: {
     *     // ... filter to delete one PuntoAcopio
     *   }
     * })
     * 
     */
    delete<T extends PuntoAcopioDeleteArgs>(args: SelectSubset<T, PuntoAcopioDeleteArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PuntoAcopio.
     * @param {PuntoAcopioUpdateArgs} args - Arguments to update one PuntoAcopio.
     * @example
     * // Update one PuntoAcopio
     * const puntoAcopio = await prisma.puntoAcopio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PuntoAcopioUpdateArgs>(args: SelectSubset<T, PuntoAcopioUpdateArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PuntoAcopios.
     * @param {PuntoAcopioDeleteManyArgs} args - Arguments to filter PuntoAcopios to delete.
     * @example
     * // Delete a few PuntoAcopios
     * const { count } = await prisma.puntoAcopio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PuntoAcopioDeleteManyArgs>(args?: SelectSubset<T, PuntoAcopioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PuntoAcopios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoAcopioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PuntoAcopios
     * const puntoAcopio = await prisma.puntoAcopio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PuntoAcopioUpdateManyArgs>(args: SelectSubset<T, PuntoAcopioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PuntoAcopios and returns the data updated in the database.
     * @param {PuntoAcopioUpdateManyAndReturnArgs} args - Arguments to update many PuntoAcopios.
     * @example
     * // Update many PuntoAcopios
     * const puntoAcopio = await prisma.puntoAcopio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PuntoAcopios and only return the `id_punto`
     * const puntoAcopioWithId_puntoOnly = await prisma.puntoAcopio.updateManyAndReturn({
     *   select: { id_punto: true },
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
    updateManyAndReturn<T extends PuntoAcopioUpdateManyAndReturnArgs>(args: SelectSubset<T, PuntoAcopioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PuntoAcopio.
     * @param {PuntoAcopioUpsertArgs} args - Arguments to update or create a PuntoAcopio.
     * @example
     * // Update or create a PuntoAcopio
     * const puntoAcopio = await prisma.puntoAcopio.upsert({
     *   create: {
     *     // ... data to create a PuntoAcopio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PuntoAcopio we want to update
     *   }
     * })
     */
    upsert<T extends PuntoAcopioUpsertArgs>(args: SelectSubset<T, PuntoAcopioUpsertArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PuntoAcopios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoAcopioCountArgs} args - Arguments to filter PuntoAcopios to count.
     * @example
     * // Count the number of PuntoAcopios
     * const count = await prisma.puntoAcopio.count({
     *   where: {
     *     // ... the filter for the PuntoAcopios we want to count
     *   }
     * })
    **/
    count<T extends PuntoAcopioCountArgs>(
      args?: Subset<T, PuntoAcopioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PuntoAcopioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PuntoAcopio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoAcopioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PuntoAcopioAggregateArgs>(args: Subset<T, PuntoAcopioAggregateArgs>): Prisma.PrismaPromise<GetPuntoAcopioAggregateType<T>>

    /**
     * Group by PuntoAcopio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoAcopioGroupByArgs} args - Group by arguments.
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
      T extends PuntoAcopioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PuntoAcopioGroupByArgs['orderBy'] }
        : { orderBy?: PuntoAcopioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PuntoAcopioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPuntoAcopioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PuntoAcopio model
   */
  readonly fields: PuntoAcopioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PuntoAcopio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PuntoAcopioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    encargados<T extends PuntoAcopio$encargadosArgs<ExtArgs> = {}>(args?: Subset<T, PuntoAcopio$encargadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    objetos<T extends PuntoAcopio$objetosArgs<ExtArgs> = {}>(args?: Subset<T, PuntoAcopio$objetosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PuntoAcopio model
   */
  interface PuntoAcopioFieldRefs {
    readonly id_punto: FieldRef<"PuntoAcopio", 'BigInt'>
    readonly nombre: FieldRef<"PuntoAcopio", 'String'>
    readonly ubicacion: FieldRef<"PuntoAcopio", 'String'>
    readonly tipo: FieldRef<"PuntoAcopio", 'String'>
    readonly publicado: FieldRef<"PuntoAcopio", 'Boolean'>
    readonly habilitado: FieldRef<"PuntoAcopio", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PuntoAcopio findUnique
   */
  export type PuntoAcopioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    /**
     * Filter, which PuntoAcopio to fetch.
     */
    where: PuntoAcopioWhereUniqueInput
  }

  /**
   * PuntoAcopio findUniqueOrThrow
   */
  export type PuntoAcopioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    /**
     * Filter, which PuntoAcopio to fetch.
     */
    where: PuntoAcopioWhereUniqueInput
  }

  /**
   * PuntoAcopio findFirst
   */
  export type PuntoAcopioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    /**
     * Filter, which PuntoAcopio to fetch.
     */
    where?: PuntoAcopioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoAcopios to fetch.
     */
    orderBy?: PuntoAcopioOrderByWithRelationInput | PuntoAcopioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PuntoAcopios.
     */
    cursor?: PuntoAcopioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoAcopios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoAcopios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PuntoAcopios.
     */
    distinct?: PuntoAcopioScalarFieldEnum | PuntoAcopioScalarFieldEnum[]
  }

  /**
   * PuntoAcopio findFirstOrThrow
   */
  export type PuntoAcopioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    /**
     * Filter, which PuntoAcopio to fetch.
     */
    where?: PuntoAcopioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoAcopios to fetch.
     */
    orderBy?: PuntoAcopioOrderByWithRelationInput | PuntoAcopioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PuntoAcopios.
     */
    cursor?: PuntoAcopioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoAcopios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoAcopios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PuntoAcopios.
     */
    distinct?: PuntoAcopioScalarFieldEnum | PuntoAcopioScalarFieldEnum[]
  }

  /**
   * PuntoAcopio findMany
   */
  export type PuntoAcopioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    /**
     * Filter, which PuntoAcopios to fetch.
     */
    where?: PuntoAcopioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoAcopios to fetch.
     */
    orderBy?: PuntoAcopioOrderByWithRelationInput | PuntoAcopioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PuntoAcopios.
     */
    cursor?: PuntoAcopioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoAcopios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoAcopios.
     */
    skip?: number
    distinct?: PuntoAcopioScalarFieldEnum | PuntoAcopioScalarFieldEnum[]
  }

  /**
   * PuntoAcopio create
   */
  export type PuntoAcopioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    /**
     * The data needed to create a PuntoAcopio.
     */
    data: XOR<PuntoAcopioCreateInput, PuntoAcopioUncheckedCreateInput>
  }

  /**
   * PuntoAcopio createMany
   */
  export type PuntoAcopioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PuntoAcopios.
     */
    data: PuntoAcopioCreateManyInput | PuntoAcopioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PuntoAcopio createManyAndReturn
   */
  export type PuntoAcopioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * The data used to create many PuntoAcopios.
     */
    data: PuntoAcopioCreateManyInput | PuntoAcopioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PuntoAcopio update
   */
  export type PuntoAcopioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    /**
     * The data needed to update a PuntoAcopio.
     */
    data: XOR<PuntoAcopioUpdateInput, PuntoAcopioUncheckedUpdateInput>
    /**
     * Choose, which PuntoAcopio to update.
     */
    where: PuntoAcopioWhereUniqueInput
  }

  /**
   * PuntoAcopio updateMany
   */
  export type PuntoAcopioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PuntoAcopios.
     */
    data: XOR<PuntoAcopioUpdateManyMutationInput, PuntoAcopioUncheckedUpdateManyInput>
    /**
     * Filter which PuntoAcopios to update
     */
    where?: PuntoAcopioWhereInput
    /**
     * Limit how many PuntoAcopios to update.
     */
    limit?: number
  }

  /**
   * PuntoAcopio updateManyAndReturn
   */
  export type PuntoAcopioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * The data used to update PuntoAcopios.
     */
    data: XOR<PuntoAcopioUpdateManyMutationInput, PuntoAcopioUncheckedUpdateManyInput>
    /**
     * Filter which PuntoAcopios to update
     */
    where?: PuntoAcopioWhereInput
    /**
     * Limit how many PuntoAcopios to update.
     */
    limit?: number
  }

  /**
   * PuntoAcopio upsert
   */
  export type PuntoAcopioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    /**
     * The filter to search for the PuntoAcopio to update in case it exists.
     */
    where: PuntoAcopioWhereUniqueInput
    /**
     * In case the PuntoAcopio found by the `where` argument doesn't exist, create a new PuntoAcopio with this data.
     */
    create: XOR<PuntoAcopioCreateInput, PuntoAcopioUncheckedCreateInput>
    /**
     * In case the PuntoAcopio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PuntoAcopioUpdateInput, PuntoAcopioUncheckedUpdateInput>
  }

  /**
   * PuntoAcopio delete
   */
  export type PuntoAcopioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
    /**
     * Filter which PuntoAcopio to delete.
     */
    where: PuntoAcopioWhereUniqueInput
  }

  /**
   * PuntoAcopio deleteMany
   */
  export type PuntoAcopioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PuntoAcopios to delete
     */
    where?: PuntoAcopioWhereInput
    /**
     * Limit how many PuntoAcopios to delete.
     */
    limit?: number
  }

  /**
   * PuntoAcopio.encargados
   */
  export type PuntoAcopio$encargadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * PuntoAcopio.objetos
   */
  export type PuntoAcopio$objetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    where?: ObjetoWhereInput
    orderBy?: ObjetoOrderByWithRelationInput | ObjetoOrderByWithRelationInput[]
    cursor?: ObjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjetoScalarFieldEnum | ObjetoScalarFieldEnum[]
  }

  /**
   * PuntoAcopio without action
   */
  export type PuntoAcopioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoAcopio
     */
    select?: PuntoAcopioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoAcopio
     */
    omit?: PuntoAcopioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoAcopioInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id_categoria: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaMinAggregateInputType = {
    id_categoria?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id_categoria?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id_categoria?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id_categoria: number
    nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    objetos?: boolean | Categoria$objetosArgs<ExtArgs>
    reportes?: boolean | Categoria$reportesArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id_categoria?: boolean
    nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objetos?: boolean | Categoria$objetosArgs<ExtArgs>
    reportes?: boolean | Categoria$reportesArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      objetos: Prisma.$ObjetoPayload<ExtArgs>[]
      reportes: Prisma.$ReportePerdidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id_categoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id_categoria: true },
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objetos<T extends Categoria$objetosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$objetosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportes<T extends Categoria$reportesArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id_categoria: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.objetos
   */
  export type Categoria$objetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    where?: ObjetoWhereInput
    orderBy?: ObjetoOrderByWithRelationInput | ObjetoOrderByWithRelationInput[]
    cursor?: ObjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjetoScalarFieldEnum | ObjetoScalarFieldEnum[]
  }

  /**
   * Categoria.reportes
   */
  export type Categoria$reportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    where?: ReportePerdidaWhereInput
    orderBy?: ReportePerdidaOrderByWithRelationInput | ReportePerdidaOrderByWithRelationInput[]
    cursor?: ReportePerdidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportePerdidaScalarFieldEnum | ReportePerdidaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Objeto
   */

  export type AggregateObjeto = {
    _count: ObjetoCountAggregateOutputType | null
    _avg: ObjetoAvgAggregateOutputType | null
    _sum: ObjetoSumAggregateOutputType | null
    _min: ObjetoMinAggregateOutputType | null
    _max: ObjetoMaxAggregateOutputType | null
  }

  export type ObjetoAvgAggregateOutputType = {
    id_objeto: number | null
    id_categoria: number | null
    id_punto: number | null
    registrado_por: number | null
    id_acta: number | null
  }

  export type ObjetoSumAggregateOutputType = {
    id_objeto: bigint | null
    id_categoria: number | null
    id_punto: bigint | null
    registrado_por: bigint | null
    id_acta: bigint | null
  }

  export type ObjetoMinAggregateOutputType = {
    id_objeto: bigint | null
    codigo: string | null
    id_categoria: number | null
    id_punto: bigint | null
    registrado_por: bigint | null
    id_acta: bigint | null
    descripcion: string | null
    hallado_en: Date | null
    lugar_hallazgo: string | null
    registrado_en: Date | null
    estado: string | null
    publicado: boolean | null
    alerta_enviada_en: Date | null
  }

  export type ObjetoMaxAggregateOutputType = {
    id_objeto: bigint | null
    codigo: string | null
    id_categoria: number | null
    id_punto: bigint | null
    registrado_por: bigint | null
    id_acta: bigint | null
    descripcion: string | null
    hallado_en: Date | null
    lugar_hallazgo: string | null
    registrado_en: Date | null
    estado: string | null
    publicado: boolean | null
    alerta_enviada_en: Date | null
  }

  export type ObjetoCountAggregateOutputType = {
    id_objeto: number
    codigo: number
    id_categoria: number
    id_punto: number
    registrado_por: number
    id_acta: number
    descripcion: number
    hallado_en: number
    lugar_hallazgo: number
    registrado_en: number
    estado: number
    publicado: number
    alerta_enviada_en: number
    _all: number
  }


  export type ObjetoAvgAggregateInputType = {
    id_objeto?: true
    id_categoria?: true
    id_punto?: true
    registrado_por?: true
    id_acta?: true
  }

  export type ObjetoSumAggregateInputType = {
    id_objeto?: true
    id_categoria?: true
    id_punto?: true
    registrado_por?: true
    id_acta?: true
  }

  export type ObjetoMinAggregateInputType = {
    id_objeto?: true
    codigo?: true
    id_categoria?: true
    id_punto?: true
    registrado_por?: true
    id_acta?: true
    descripcion?: true
    hallado_en?: true
    lugar_hallazgo?: true
    registrado_en?: true
    estado?: true
    publicado?: true
    alerta_enviada_en?: true
  }

  export type ObjetoMaxAggregateInputType = {
    id_objeto?: true
    codigo?: true
    id_categoria?: true
    id_punto?: true
    registrado_por?: true
    id_acta?: true
    descripcion?: true
    hallado_en?: true
    lugar_hallazgo?: true
    registrado_en?: true
    estado?: true
    publicado?: true
    alerta_enviada_en?: true
  }

  export type ObjetoCountAggregateInputType = {
    id_objeto?: true
    codigo?: true
    id_categoria?: true
    id_punto?: true
    registrado_por?: true
    id_acta?: true
    descripcion?: true
    hallado_en?: true
    lugar_hallazgo?: true
    registrado_en?: true
    estado?: true
    publicado?: true
    alerta_enviada_en?: true
    _all?: true
  }

  export type ObjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objeto to aggregate.
     */
    where?: ObjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objetos to fetch.
     */
    orderBy?: ObjetoOrderByWithRelationInput | ObjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Objetos
    **/
    _count?: true | ObjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObjetoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObjetoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjetoMaxAggregateInputType
  }

  export type GetObjetoAggregateType<T extends ObjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateObjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjeto[P]>
      : GetScalarType<T[P], AggregateObjeto[P]>
  }




  export type ObjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetoWhereInput
    orderBy?: ObjetoOrderByWithAggregationInput | ObjetoOrderByWithAggregationInput[]
    by: ObjetoScalarFieldEnum[] | ObjetoScalarFieldEnum
    having?: ObjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjetoCountAggregateInputType | true
    _avg?: ObjetoAvgAggregateInputType
    _sum?: ObjetoSumAggregateInputType
    _min?: ObjetoMinAggregateInputType
    _max?: ObjetoMaxAggregateInputType
  }

  export type ObjetoGroupByOutputType = {
    id_objeto: bigint
    codigo: string
    id_categoria: number
    id_punto: bigint
    registrado_por: bigint
    id_acta: bigint | null
    descripcion: string
    hallado_en: Date
    lugar_hallazgo: string
    registrado_en: Date
    estado: string
    publicado: boolean
    alerta_enviada_en: Date | null
    _count: ObjetoCountAggregateOutputType | null
    _avg: ObjetoAvgAggregateOutputType | null
    _sum: ObjetoSumAggregateOutputType | null
    _min: ObjetoMinAggregateOutputType | null
    _max: ObjetoMaxAggregateOutputType | null
  }

  type GetObjetoGroupByPayload<T extends ObjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjetoGroupByOutputType[P]>
            : GetScalarType<T[P], ObjetoGroupByOutputType[P]>
        }
      >
    >


  export type ObjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_objeto?: boolean
    codigo?: boolean
    id_categoria?: boolean
    id_punto?: boolean
    registrado_por?: boolean
    id_acta?: boolean
    descripcion?: boolean
    hallado_en?: boolean
    lugar_hallazgo?: boolean
    registrado_en?: boolean
    estado?: boolean
    publicado?: boolean
    alerta_enviada_en?: boolean
    punto?: boolean | PuntoAcopioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    registrador?: boolean | UsuarioDefaultArgs<ExtArgs>
    fotografias?: boolean | Objeto$fotografiasArgs<ExtArgs>
    reclamos?: boolean | Objeto$reclamosArgs<ExtArgs>
    acta?: boolean | Objeto$actaArgs<ExtArgs>
    _count?: boolean | ObjetoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objeto"]>

  export type ObjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_objeto?: boolean
    codigo?: boolean
    id_categoria?: boolean
    id_punto?: boolean
    registrado_por?: boolean
    id_acta?: boolean
    descripcion?: boolean
    hallado_en?: boolean
    lugar_hallazgo?: boolean
    registrado_en?: boolean
    estado?: boolean
    publicado?: boolean
    alerta_enviada_en?: boolean
    punto?: boolean | PuntoAcopioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    registrador?: boolean | UsuarioDefaultArgs<ExtArgs>
    acta?: boolean | Objeto$actaArgs<ExtArgs>
  }, ExtArgs["result"]["objeto"]>

  export type ObjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_objeto?: boolean
    codigo?: boolean
    id_categoria?: boolean
    id_punto?: boolean
    registrado_por?: boolean
    id_acta?: boolean
    descripcion?: boolean
    hallado_en?: boolean
    lugar_hallazgo?: boolean
    registrado_en?: boolean
    estado?: boolean
    publicado?: boolean
    alerta_enviada_en?: boolean
    punto?: boolean | PuntoAcopioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    registrador?: boolean | UsuarioDefaultArgs<ExtArgs>
    acta?: boolean | Objeto$actaArgs<ExtArgs>
  }, ExtArgs["result"]["objeto"]>

  export type ObjetoSelectScalar = {
    id_objeto?: boolean
    codigo?: boolean
    id_categoria?: boolean
    id_punto?: boolean
    registrado_por?: boolean
    id_acta?: boolean
    descripcion?: boolean
    hallado_en?: boolean
    lugar_hallazgo?: boolean
    registrado_en?: boolean
    estado?: boolean
    publicado?: boolean
    alerta_enviada_en?: boolean
  }

  export type ObjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_objeto" | "codigo" | "id_categoria" | "id_punto" | "registrado_por" | "id_acta" | "descripcion" | "hallado_en" | "lugar_hallazgo" | "registrado_en" | "estado" | "publicado" | "alerta_enviada_en", ExtArgs["result"]["objeto"]>
  export type ObjetoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    punto?: boolean | PuntoAcopioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    registrador?: boolean | UsuarioDefaultArgs<ExtArgs>
    fotografias?: boolean | Objeto$fotografiasArgs<ExtArgs>
    reclamos?: boolean | Objeto$reclamosArgs<ExtArgs>
    acta?: boolean | Objeto$actaArgs<ExtArgs>
    _count?: boolean | ObjetoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObjetoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    punto?: boolean | PuntoAcopioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    registrador?: boolean | UsuarioDefaultArgs<ExtArgs>
    acta?: boolean | Objeto$actaArgs<ExtArgs>
  }
  export type ObjetoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    punto?: boolean | PuntoAcopioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    registrador?: boolean | UsuarioDefaultArgs<ExtArgs>
    acta?: boolean | Objeto$actaArgs<ExtArgs>
  }

  export type $ObjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Objeto"
    objects: {
      punto: Prisma.$PuntoAcopioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      registrador: Prisma.$UsuarioPayload<ExtArgs>
      fotografias: Prisma.$FotografiaPayload<ExtArgs>[]
      reclamos: Prisma.$ReclamoPayload<ExtArgs>[]
      acta: Prisma.$ActaDestruccionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_objeto: bigint
      codigo: string
      id_categoria: number
      id_punto: bigint
      registrado_por: bigint
      /**
       * NULL salvo baja
       */
      id_acta: bigint | null
      descripcion: string
      hallado_en: Date
      lugar_hallazgo: string
      /**
       * inicio del plazo de 1 anio
       */
      registrado_en: Date
      /**
       * en_custodia, no_reclamado, entregado, dado_de_baja
       */
      estado: string
      publicado: boolean
      /**
       * NULL hasta avisar
       */
      alerta_enviada_en: Date | null
    }, ExtArgs["result"]["objeto"]>
    composites: {}
  }

  type ObjetoGetPayload<S extends boolean | null | undefined | ObjetoDefaultArgs> = $Result.GetResult<Prisma.$ObjetoPayload, S>

  type ObjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjetoCountAggregateInputType | true
    }

  export interface ObjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Objeto'], meta: { name: 'Objeto' } }
    /**
     * Find zero or one Objeto that matches the filter.
     * @param {ObjetoFindUniqueArgs} args - Arguments to find a Objeto
     * @example
     * // Get one Objeto
     * const objeto = await prisma.objeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjetoFindUniqueArgs>(args: SelectSubset<T, ObjetoFindUniqueArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Objeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjetoFindUniqueOrThrowArgs} args - Arguments to find a Objeto
     * @example
     * // Get one Objeto
     * const objeto = await prisma.objeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetoFindFirstArgs} args - Arguments to find a Objeto
     * @example
     * // Get one Objeto
     * const objeto = await prisma.objeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjetoFindFirstArgs>(args?: SelectSubset<T, ObjetoFindFirstArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetoFindFirstOrThrowArgs} args - Arguments to find a Objeto
     * @example
     * // Get one Objeto
     * const objeto = await prisma.objeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Objetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Objetos
     * const objetos = await prisma.objeto.findMany()
     * 
     * // Get first 10 Objetos
     * const objetos = await prisma.objeto.findMany({ take: 10 })
     * 
     * // Only select the `id_objeto`
     * const objetoWithId_objetoOnly = await prisma.objeto.findMany({ select: { id_objeto: true } })
     * 
     */
    findMany<T extends ObjetoFindManyArgs>(args?: SelectSubset<T, ObjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Objeto.
     * @param {ObjetoCreateArgs} args - Arguments to create a Objeto.
     * @example
     * // Create one Objeto
     * const Objeto = await prisma.objeto.create({
     *   data: {
     *     // ... data to create a Objeto
     *   }
     * })
     * 
     */
    create<T extends ObjetoCreateArgs>(args: SelectSubset<T, ObjetoCreateArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Objetos.
     * @param {ObjetoCreateManyArgs} args - Arguments to create many Objetos.
     * @example
     * // Create many Objetos
     * const objeto = await prisma.objeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjetoCreateManyArgs>(args?: SelectSubset<T, ObjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Objetos and returns the data saved in the database.
     * @param {ObjetoCreateManyAndReturnArgs} args - Arguments to create many Objetos.
     * @example
     * // Create many Objetos
     * const objeto = await prisma.objeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Objetos and only return the `id_objeto`
     * const objetoWithId_objetoOnly = await prisma.objeto.createManyAndReturn({
     *   select: { id_objeto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, ObjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Objeto.
     * @param {ObjetoDeleteArgs} args - Arguments to delete one Objeto.
     * @example
     * // Delete one Objeto
     * const Objeto = await prisma.objeto.delete({
     *   where: {
     *     // ... filter to delete one Objeto
     *   }
     * })
     * 
     */
    delete<T extends ObjetoDeleteArgs>(args: SelectSubset<T, ObjetoDeleteArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Objeto.
     * @param {ObjetoUpdateArgs} args - Arguments to update one Objeto.
     * @example
     * // Update one Objeto
     * const objeto = await prisma.objeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjetoUpdateArgs>(args: SelectSubset<T, ObjetoUpdateArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Objetos.
     * @param {ObjetoDeleteManyArgs} args - Arguments to filter Objetos to delete.
     * @example
     * // Delete a few Objetos
     * const { count } = await prisma.objeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjetoDeleteManyArgs>(args?: SelectSubset<T, ObjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Objetos
     * const objeto = await prisma.objeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjetoUpdateManyArgs>(args: SelectSubset<T, ObjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objetos and returns the data updated in the database.
     * @param {ObjetoUpdateManyAndReturnArgs} args - Arguments to update many Objetos.
     * @example
     * // Update many Objetos
     * const objeto = await prisma.objeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Objetos and only return the `id_objeto`
     * const objetoWithId_objetoOnly = await prisma.objeto.updateManyAndReturn({
     *   select: { id_objeto: true },
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
    updateManyAndReturn<T extends ObjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, ObjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Objeto.
     * @param {ObjetoUpsertArgs} args - Arguments to update or create a Objeto.
     * @example
     * // Update or create a Objeto
     * const objeto = await prisma.objeto.upsert({
     *   create: {
     *     // ... data to create a Objeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Objeto we want to update
     *   }
     * })
     */
    upsert<T extends ObjetoUpsertArgs>(args: SelectSubset<T, ObjetoUpsertArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Objetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetoCountArgs} args - Arguments to filter Objetos to count.
     * @example
     * // Count the number of Objetos
     * const count = await prisma.objeto.count({
     *   where: {
     *     // ... the filter for the Objetos we want to count
     *   }
     * })
    **/
    count<T extends ObjetoCountArgs>(
      args?: Subset<T, ObjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Objeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObjetoAggregateArgs>(args: Subset<T, ObjetoAggregateArgs>): Prisma.PrismaPromise<GetObjetoAggregateType<T>>

    /**
     * Group by Objeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetoGroupByArgs} args - Group by arguments.
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
      T extends ObjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjetoGroupByArgs['orderBy'] }
        : { orderBy?: ObjetoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Objeto model
   */
  readonly fields: ObjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Objeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    punto<T extends PuntoAcopioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PuntoAcopioDefaultArgs<ExtArgs>>): Prisma__PuntoAcopioClient<$Result.GetResult<Prisma.$PuntoAcopioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fotografias<T extends Objeto$fotografiasArgs<ExtArgs> = {}>(args?: Subset<T, Objeto$fotografiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reclamos<T extends Objeto$reclamosArgs<ExtArgs> = {}>(args?: Subset<T, Objeto$reclamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acta<T extends Objeto$actaArgs<ExtArgs> = {}>(args?: Subset<T, Objeto$actaArgs<ExtArgs>>): Prisma__ActaDestruccionClient<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Objeto model
   */
  interface ObjetoFieldRefs {
    readonly id_objeto: FieldRef<"Objeto", 'BigInt'>
    readonly codigo: FieldRef<"Objeto", 'String'>
    readonly id_categoria: FieldRef<"Objeto", 'Int'>
    readonly id_punto: FieldRef<"Objeto", 'BigInt'>
    readonly registrado_por: FieldRef<"Objeto", 'BigInt'>
    readonly id_acta: FieldRef<"Objeto", 'BigInt'>
    readonly descripcion: FieldRef<"Objeto", 'String'>
    readonly hallado_en: FieldRef<"Objeto", 'DateTime'>
    readonly lugar_hallazgo: FieldRef<"Objeto", 'String'>
    readonly registrado_en: FieldRef<"Objeto", 'DateTime'>
    readonly estado: FieldRef<"Objeto", 'String'>
    readonly publicado: FieldRef<"Objeto", 'Boolean'>
    readonly alerta_enviada_en: FieldRef<"Objeto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Objeto findUnique
   */
  export type ObjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    /**
     * Filter, which Objeto to fetch.
     */
    where: ObjetoWhereUniqueInput
  }

  /**
   * Objeto findUniqueOrThrow
   */
  export type ObjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    /**
     * Filter, which Objeto to fetch.
     */
    where: ObjetoWhereUniqueInput
  }

  /**
   * Objeto findFirst
   */
  export type ObjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    /**
     * Filter, which Objeto to fetch.
     */
    where?: ObjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objetos to fetch.
     */
    orderBy?: ObjetoOrderByWithRelationInput | ObjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objetos.
     */
    cursor?: ObjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objetos.
     */
    distinct?: ObjetoScalarFieldEnum | ObjetoScalarFieldEnum[]
  }

  /**
   * Objeto findFirstOrThrow
   */
  export type ObjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    /**
     * Filter, which Objeto to fetch.
     */
    where?: ObjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objetos to fetch.
     */
    orderBy?: ObjetoOrderByWithRelationInput | ObjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objetos.
     */
    cursor?: ObjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objetos.
     */
    distinct?: ObjetoScalarFieldEnum | ObjetoScalarFieldEnum[]
  }

  /**
   * Objeto findMany
   */
  export type ObjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    /**
     * Filter, which Objetos to fetch.
     */
    where?: ObjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objetos to fetch.
     */
    orderBy?: ObjetoOrderByWithRelationInput | ObjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Objetos.
     */
    cursor?: ObjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objetos.
     */
    skip?: number
    distinct?: ObjetoScalarFieldEnum | ObjetoScalarFieldEnum[]
  }

  /**
   * Objeto create
   */
  export type ObjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    /**
     * The data needed to create a Objeto.
     */
    data: XOR<ObjetoCreateInput, ObjetoUncheckedCreateInput>
  }

  /**
   * Objeto createMany
   */
  export type ObjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Objetos.
     */
    data: ObjetoCreateManyInput | ObjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Objeto createManyAndReturn
   */
  export type ObjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * The data used to create many Objetos.
     */
    data: ObjetoCreateManyInput | ObjetoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Objeto update
   */
  export type ObjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    /**
     * The data needed to update a Objeto.
     */
    data: XOR<ObjetoUpdateInput, ObjetoUncheckedUpdateInput>
    /**
     * Choose, which Objeto to update.
     */
    where: ObjetoWhereUniqueInput
  }

  /**
   * Objeto updateMany
   */
  export type ObjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Objetos.
     */
    data: XOR<ObjetoUpdateManyMutationInput, ObjetoUncheckedUpdateManyInput>
    /**
     * Filter which Objetos to update
     */
    where?: ObjetoWhereInput
    /**
     * Limit how many Objetos to update.
     */
    limit?: number
  }

  /**
   * Objeto updateManyAndReturn
   */
  export type ObjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * The data used to update Objetos.
     */
    data: XOR<ObjetoUpdateManyMutationInput, ObjetoUncheckedUpdateManyInput>
    /**
     * Filter which Objetos to update
     */
    where?: ObjetoWhereInput
    /**
     * Limit how many Objetos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Objeto upsert
   */
  export type ObjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    /**
     * The filter to search for the Objeto to update in case it exists.
     */
    where: ObjetoWhereUniqueInput
    /**
     * In case the Objeto found by the `where` argument doesn't exist, create a new Objeto with this data.
     */
    create: XOR<ObjetoCreateInput, ObjetoUncheckedCreateInput>
    /**
     * In case the Objeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjetoUpdateInput, ObjetoUncheckedUpdateInput>
  }

  /**
   * Objeto delete
   */
  export type ObjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    /**
     * Filter which Objeto to delete.
     */
    where: ObjetoWhereUniqueInput
  }

  /**
   * Objeto deleteMany
   */
  export type ObjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objetos to delete
     */
    where?: ObjetoWhereInput
    /**
     * Limit how many Objetos to delete.
     */
    limit?: number
  }

  /**
   * Objeto.fotografias
   */
  export type Objeto$fotografiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    where?: FotografiaWhereInput
    orderBy?: FotografiaOrderByWithRelationInput | FotografiaOrderByWithRelationInput[]
    cursor?: FotografiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotografiaScalarFieldEnum | FotografiaScalarFieldEnum[]
  }

  /**
   * Objeto.reclamos
   */
  export type Objeto$reclamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    where?: ReclamoWhereInput
    orderBy?: ReclamoOrderByWithRelationInput | ReclamoOrderByWithRelationInput[]
    cursor?: ReclamoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReclamoScalarFieldEnum | ReclamoScalarFieldEnum[]
  }

  /**
   * Objeto.acta
   */
  export type Objeto$actaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    where?: ActaDestruccionWhereInput
  }

  /**
   * Objeto without action
   */
  export type ObjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
  }


  /**
   * Model Fotografia
   */

  export type AggregateFotografia = {
    _count: FotografiaCountAggregateOutputType | null
    _avg: FotografiaAvgAggregateOutputType | null
    _sum: FotografiaSumAggregateOutputType | null
    _min: FotografiaMinAggregateOutputType | null
    _max: FotografiaMaxAggregateOutputType | null
  }

  export type FotografiaAvgAggregateOutputType = {
    id_objeto: number | null
    posicion: number | null
  }

  export type FotografiaSumAggregateOutputType = {
    id_objeto: bigint | null
    posicion: number | null
  }

  export type FotografiaMinAggregateOutputType = {
    id_objeto: bigint | null
    posicion: number | null
    archivo_url: string | null
  }

  export type FotografiaMaxAggregateOutputType = {
    id_objeto: bigint | null
    posicion: number | null
    archivo_url: string | null
  }

  export type FotografiaCountAggregateOutputType = {
    id_objeto: number
    posicion: number
    archivo_url: number
    _all: number
  }


  export type FotografiaAvgAggregateInputType = {
    id_objeto?: true
    posicion?: true
  }

  export type FotografiaSumAggregateInputType = {
    id_objeto?: true
    posicion?: true
  }

  export type FotografiaMinAggregateInputType = {
    id_objeto?: true
    posicion?: true
    archivo_url?: true
  }

  export type FotografiaMaxAggregateInputType = {
    id_objeto?: true
    posicion?: true
    archivo_url?: true
  }

  export type FotografiaCountAggregateInputType = {
    id_objeto?: true
    posicion?: true
    archivo_url?: true
    _all?: true
  }

  export type FotografiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotografia to aggregate.
     */
    where?: FotografiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotografias to fetch.
     */
    orderBy?: FotografiaOrderByWithRelationInput | FotografiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotografiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotografias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotografias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fotografias
    **/
    _count?: true | FotografiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotografiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotografiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotografiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotografiaMaxAggregateInputType
  }

  export type GetFotografiaAggregateType<T extends FotografiaAggregateArgs> = {
        [P in keyof T & keyof AggregateFotografia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotografia[P]>
      : GetScalarType<T[P], AggregateFotografia[P]>
  }




  export type FotografiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotografiaWhereInput
    orderBy?: FotografiaOrderByWithAggregationInput | FotografiaOrderByWithAggregationInput[]
    by: FotografiaScalarFieldEnum[] | FotografiaScalarFieldEnum
    having?: FotografiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotografiaCountAggregateInputType | true
    _avg?: FotografiaAvgAggregateInputType
    _sum?: FotografiaSumAggregateInputType
    _min?: FotografiaMinAggregateInputType
    _max?: FotografiaMaxAggregateInputType
  }

  export type FotografiaGroupByOutputType = {
    id_objeto: bigint
    posicion: number
    archivo_url: string
    _count: FotografiaCountAggregateOutputType | null
    _avg: FotografiaAvgAggregateOutputType | null
    _sum: FotografiaSumAggregateOutputType | null
    _min: FotografiaMinAggregateOutputType | null
    _max: FotografiaMaxAggregateOutputType | null
  }

  type GetFotografiaGroupByPayload<T extends FotografiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotografiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotografiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotografiaGroupByOutputType[P]>
            : GetScalarType<T[P], FotografiaGroupByOutputType[P]>
        }
      >
    >


  export type FotografiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_objeto?: boolean
    posicion?: boolean
    archivo_url?: boolean
    objeto?: boolean | ObjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotografia"]>

  export type FotografiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_objeto?: boolean
    posicion?: boolean
    archivo_url?: boolean
    objeto?: boolean | ObjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotografia"]>

  export type FotografiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_objeto?: boolean
    posicion?: boolean
    archivo_url?: boolean
    objeto?: boolean | ObjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotografia"]>

  export type FotografiaSelectScalar = {
    id_objeto?: boolean
    posicion?: boolean
    archivo_url?: boolean
  }

  export type FotografiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_objeto" | "posicion" | "archivo_url", ExtArgs["result"]["fotografia"]>
  export type FotografiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objeto?: boolean | ObjetoDefaultArgs<ExtArgs>
  }
  export type FotografiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objeto?: boolean | ObjetoDefaultArgs<ExtArgs>
  }
  export type FotografiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objeto?: boolean | ObjetoDefaultArgs<ExtArgs>
  }

  export type $FotografiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fotografia"
    objects: {
      objeto: Prisma.$ObjetoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_objeto: bigint
      /**
       * 1 a 3
       */
      posicion: number
      archivo_url: string
    }, ExtArgs["result"]["fotografia"]>
    composites: {}
  }

  type FotografiaGetPayload<S extends boolean | null | undefined | FotografiaDefaultArgs> = $Result.GetResult<Prisma.$FotografiaPayload, S>

  type FotografiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotografiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotografiaCountAggregateInputType | true
    }

  export interface FotografiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fotografia'], meta: { name: 'Fotografia' } }
    /**
     * Find zero or one Fotografia that matches the filter.
     * @param {FotografiaFindUniqueArgs} args - Arguments to find a Fotografia
     * @example
     * // Get one Fotografia
     * const fotografia = await prisma.fotografia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotografiaFindUniqueArgs>(args: SelectSubset<T, FotografiaFindUniqueArgs<ExtArgs>>): Prisma__FotografiaClient<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fotografia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotografiaFindUniqueOrThrowArgs} args - Arguments to find a Fotografia
     * @example
     * // Get one Fotografia
     * const fotografia = await prisma.fotografia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotografiaFindUniqueOrThrowArgs>(args: SelectSubset<T, FotografiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotografiaClient<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fotografia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografiaFindFirstArgs} args - Arguments to find a Fotografia
     * @example
     * // Get one Fotografia
     * const fotografia = await prisma.fotografia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotografiaFindFirstArgs>(args?: SelectSubset<T, FotografiaFindFirstArgs<ExtArgs>>): Prisma__FotografiaClient<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fotografia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografiaFindFirstOrThrowArgs} args - Arguments to find a Fotografia
     * @example
     * // Get one Fotografia
     * const fotografia = await prisma.fotografia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotografiaFindFirstOrThrowArgs>(args?: SelectSubset<T, FotografiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotografiaClient<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fotografias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotografias
     * const fotografias = await prisma.fotografia.findMany()
     * 
     * // Get first 10 Fotografias
     * const fotografias = await prisma.fotografia.findMany({ take: 10 })
     * 
     * // Only select the `id_objeto`
     * const fotografiaWithId_objetoOnly = await prisma.fotografia.findMany({ select: { id_objeto: true } })
     * 
     */
    findMany<T extends FotografiaFindManyArgs>(args?: SelectSubset<T, FotografiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fotografia.
     * @param {FotografiaCreateArgs} args - Arguments to create a Fotografia.
     * @example
     * // Create one Fotografia
     * const Fotografia = await prisma.fotografia.create({
     *   data: {
     *     // ... data to create a Fotografia
     *   }
     * })
     * 
     */
    create<T extends FotografiaCreateArgs>(args: SelectSubset<T, FotografiaCreateArgs<ExtArgs>>): Prisma__FotografiaClient<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fotografias.
     * @param {FotografiaCreateManyArgs} args - Arguments to create many Fotografias.
     * @example
     * // Create many Fotografias
     * const fotografia = await prisma.fotografia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotografiaCreateManyArgs>(args?: SelectSubset<T, FotografiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fotografias and returns the data saved in the database.
     * @param {FotografiaCreateManyAndReturnArgs} args - Arguments to create many Fotografias.
     * @example
     * // Create many Fotografias
     * const fotografia = await prisma.fotografia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fotografias and only return the `id_objeto`
     * const fotografiaWithId_objetoOnly = await prisma.fotografia.createManyAndReturn({
     *   select: { id_objeto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotografiaCreateManyAndReturnArgs>(args?: SelectSubset<T, FotografiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fotografia.
     * @param {FotografiaDeleteArgs} args - Arguments to delete one Fotografia.
     * @example
     * // Delete one Fotografia
     * const Fotografia = await prisma.fotografia.delete({
     *   where: {
     *     // ... filter to delete one Fotografia
     *   }
     * })
     * 
     */
    delete<T extends FotografiaDeleteArgs>(args: SelectSubset<T, FotografiaDeleteArgs<ExtArgs>>): Prisma__FotografiaClient<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fotografia.
     * @param {FotografiaUpdateArgs} args - Arguments to update one Fotografia.
     * @example
     * // Update one Fotografia
     * const fotografia = await prisma.fotografia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotografiaUpdateArgs>(args: SelectSubset<T, FotografiaUpdateArgs<ExtArgs>>): Prisma__FotografiaClient<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fotografias.
     * @param {FotografiaDeleteManyArgs} args - Arguments to filter Fotografias to delete.
     * @example
     * // Delete a few Fotografias
     * const { count } = await prisma.fotografia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotografiaDeleteManyArgs>(args?: SelectSubset<T, FotografiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotografias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotografias
     * const fotografia = await prisma.fotografia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotografiaUpdateManyArgs>(args: SelectSubset<T, FotografiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotografias and returns the data updated in the database.
     * @param {FotografiaUpdateManyAndReturnArgs} args - Arguments to update many Fotografias.
     * @example
     * // Update many Fotografias
     * const fotografia = await prisma.fotografia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fotografias and only return the `id_objeto`
     * const fotografiaWithId_objetoOnly = await prisma.fotografia.updateManyAndReturn({
     *   select: { id_objeto: true },
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
    updateManyAndReturn<T extends FotografiaUpdateManyAndReturnArgs>(args: SelectSubset<T, FotografiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fotografia.
     * @param {FotografiaUpsertArgs} args - Arguments to update or create a Fotografia.
     * @example
     * // Update or create a Fotografia
     * const fotografia = await prisma.fotografia.upsert({
     *   create: {
     *     // ... data to create a Fotografia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fotografia we want to update
     *   }
     * })
     */
    upsert<T extends FotografiaUpsertArgs>(args: SelectSubset<T, FotografiaUpsertArgs<ExtArgs>>): Prisma__FotografiaClient<$Result.GetResult<Prisma.$FotografiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fotografias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografiaCountArgs} args - Arguments to filter Fotografias to count.
     * @example
     * // Count the number of Fotografias
     * const count = await prisma.fotografia.count({
     *   where: {
     *     // ... the filter for the Fotografias we want to count
     *   }
     * })
    **/
    count<T extends FotografiaCountArgs>(
      args?: Subset<T, FotografiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotografiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fotografia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotografiaAggregateArgs>(args: Subset<T, FotografiaAggregateArgs>): Prisma.PrismaPromise<GetFotografiaAggregateType<T>>

    /**
     * Group by Fotografia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografiaGroupByArgs} args - Group by arguments.
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
      T extends FotografiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotografiaGroupByArgs['orderBy'] }
        : { orderBy?: FotografiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotografiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotografiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fotografia model
   */
  readonly fields: FotografiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fotografia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotografiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objeto<T extends ObjetoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjetoDefaultArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Fotografia model
   */
  interface FotografiaFieldRefs {
    readonly id_objeto: FieldRef<"Fotografia", 'BigInt'>
    readonly posicion: FieldRef<"Fotografia", 'Int'>
    readonly archivo_url: FieldRef<"Fotografia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fotografia findUnique
   */
  export type FotografiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    /**
     * Filter, which Fotografia to fetch.
     */
    where: FotografiaWhereUniqueInput
  }

  /**
   * Fotografia findUniqueOrThrow
   */
  export type FotografiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    /**
     * Filter, which Fotografia to fetch.
     */
    where: FotografiaWhereUniqueInput
  }

  /**
   * Fotografia findFirst
   */
  export type FotografiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    /**
     * Filter, which Fotografia to fetch.
     */
    where?: FotografiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotografias to fetch.
     */
    orderBy?: FotografiaOrderByWithRelationInput | FotografiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotografias.
     */
    cursor?: FotografiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotografias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotografias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotografias.
     */
    distinct?: FotografiaScalarFieldEnum | FotografiaScalarFieldEnum[]
  }

  /**
   * Fotografia findFirstOrThrow
   */
  export type FotografiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    /**
     * Filter, which Fotografia to fetch.
     */
    where?: FotografiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotografias to fetch.
     */
    orderBy?: FotografiaOrderByWithRelationInput | FotografiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotografias.
     */
    cursor?: FotografiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotografias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotografias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotografias.
     */
    distinct?: FotografiaScalarFieldEnum | FotografiaScalarFieldEnum[]
  }

  /**
   * Fotografia findMany
   */
  export type FotografiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    /**
     * Filter, which Fotografias to fetch.
     */
    where?: FotografiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotografias to fetch.
     */
    orderBy?: FotografiaOrderByWithRelationInput | FotografiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fotografias.
     */
    cursor?: FotografiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotografias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotografias.
     */
    skip?: number
    distinct?: FotografiaScalarFieldEnum | FotografiaScalarFieldEnum[]
  }

  /**
   * Fotografia create
   */
  export type FotografiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    /**
     * The data needed to create a Fotografia.
     */
    data: XOR<FotografiaCreateInput, FotografiaUncheckedCreateInput>
  }

  /**
   * Fotografia createMany
   */
  export type FotografiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fotografias.
     */
    data: FotografiaCreateManyInput | FotografiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fotografia createManyAndReturn
   */
  export type FotografiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * The data used to create many Fotografias.
     */
    data: FotografiaCreateManyInput | FotografiaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fotografia update
   */
  export type FotografiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    /**
     * The data needed to update a Fotografia.
     */
    data: XOR<FotografiaUpdateInput, FotografiaUncheckedUpdateInput>
    /**
     * Choose, which Fotografia to update.
     */
    where: FotografiaWhereUniqueInput
  }

  /**
   * Fotografia updateMany
   */
  export type FotografiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fotografias.
     */
    data: XOR<FotografiaUpdateManyMutationInput, FotografiaUncheckedUpdateManyInput>
    /**
     * Filter which Fotografias to update
     */
    where?: FotografiaWhereInput
    /**
     * Limit how many Fotografias to update.
     */
    limit?: number
  }

  /**
   * Fotografia updateManyAndReturn
   */
  export type FotografiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * The data used to update Fotografias.
     */
    data: XOR<FotografiaUpdateManyMutationInput, FotografiaUncheckedUpdateManyInput>
    /**
     * Filter which Fotografias to update
     */
    where?: FotografiaWhereInput
    /**
     * Limit how many Fotografias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fotografia upsert
   */
  export type FotografiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    /**
     * The filter to search for the Fotografia to update in case it exists.
     */
    where: FotografiaWhereUniqueInput
    /**
     * In case the Fotografia found by the `where` argument doesn't exist, create a new Fotografia with this data.
     */
    create: XOR<FotografiaCreateInput, FotografiaUncheckedCreateInput>
    /**
     * In case the Fotografia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotografiaUpdateInput, FotografiaUncheckedUpdateInput>
  }

  /**
   * Fotografia delete
   */
  export type FotografiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
    /**
     * Filter which Fotografia to delete.
     */
    where: FotografiaWhereUniqueInput
  }

  /**
   * Fotografia deleteMany
   */
  export type FotografiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotografias to delete
     */
    where?: FotografiaWhereInput
    /**
     * Limit how many Fotografias to delete.
     */
    limit?: number
  }

  /**
   * Fotografia without action
   */
  export type FotografiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografia
     */
    select?: FotografiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografia
     */
    omit?: FotografiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografiaInclude<ExtArgs> | null
  }


  /**
   * Model ReportePerdida
   */

  export type AggregateReportePerdida = {
    _count: ReportePerdidaCountAggregateOutputType | null
    _avg: ReportePerdidaAvgAggregateOutputType | null
    _sum: ReportePerdidaSumAggregateOutputType | null
    _min: ReportePerdidaMinAggregateOutputType | null
    _max: ReportePerdidaMaxAggregateOutputType | null
  }

  export type ReportePerdidaAvgAggregateOutputType = {
    id_reporte: number | null
    id_usuario: number | null
    id_categoria: number | null
  }

  export type ReportePerdidaSumAggregateOutputType = {
    id_reporte: bigint | null
    id_usuario: bigint | null
    id_categoria: number | null
  }

  export type ReportePerdidaMinAggregateOutputType = {
    id_reporte: bigint | null
    id_usuario: bigint | null
    id_categoria: number | null
    descripcion: string | null
    perdido_en: Date | null
    lugar_perdida: string | null
    estado: string | null
    creado_en: Date | null
  }

  export type ReportePerdidaMaxAggregateOutputType = {
    id_reporte: bigint | null
    id_usuario: bigint | null
    id_categoria: number | null
    descripcion: string | null
    perdido_en: Date | null
    lugar_perdida: string | null
    estado: string | null
    creado_en: Date | null
  }

  export type ReportePerdidaCountAggregateOutputType = {
    id_reporte: number
    id_usuario: number
    id_categoria: number
    descripcion: number
    perdido_en: number
    lugar_perdida: number
    estado: number
    creado_en: number
    _all: number
  }


  export type ReportePerdidaAvgAggregateInputType = {
    id_reporte?: true
    id_usuario?: true
    id_categoria?: true
  }

  export type ReportePerdidaSumAggregateInputType = {
    id_reporte?: true
    id_usuario?: true
    id_categoria?: true
  }

  export type ReportePerdidaMinAggregateInputType = {
    id_reporte?: true
    id_usuario?: true
    id_categoria?: true
    descripcion?: true
    perdido_en?: true
    lugar_perdida?: true
    estado?: true
    creado_en?: true
  }

  export type ReportePerdidaMaxAggregateInputType = {
    id_reporte?: true
    id_usuario?: true
    id_categoria?: true
    descripcion?: true
    perdido_en?: true
    lugar_perdida?: true
    estado?: true
    creado_en?: true
  }

  export type ReportePerdidaCountAggregateInputType = {
    id_reporte?: true
    id_usuario?: true
    id_categoria?: true
    descripcion?: true
    perdido_en?: true
    lugar_perdida?: true
    estado?: true
    creado_en?: true
    _all?: true
  }

  export type ReportePerdidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportePerdida to aggregate.
     */
    where?: ReportePerdidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportePerdidas to fetch.
     */
    orderBy?: ReportePerdidaOrderByWithRelationInput | ReportePerdidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportePerdidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportePerdidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportePerdidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportePerdidas
    **/
    _count?: true | ReportePerdidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportePerdidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportePerdidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportePerdidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportePerdidaMaxAggregateInputType
  }

  export type GetReportePerdidaAggregateType<T extends ReportePerdidaAggregateArgs> = {
        [P in keyof T & keyof AggregateReportePerdida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportePerdida[P]>
      : GetScalarType<T[P], AggregateReportePerdida[P]>
  }




  export type ReportePerdidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportePerdidaWhereInput
    orderBy?: ReportePerdidaOrderByWithAggregationInput | ReportePerdidaOrderByWithAggregationInput[]
    by: ReportePerdidaScalarFieldEnum[] | ReportePerdidaScalarFieldEnum
    having?: ReportePerdidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportePerdidaCountAggregateInputType | true
    _avg?: ReportePerdidaAvgAggregateInputType
    _sum?: ReportePerdidaSumAggregateInputType
    _min?: ReportePerdidaMinAggregateInputType
    _max?: ReportePerdidaMaxAggregateInputType
  }

  export type ReportePerdidaGroupByOutputType = {
    id_reporte: bigint
    id_usuario: bigint
    id_categoria: number | null
    descripcion: string
    perdido_en: Date
    lugar_perdida: string
    estado: string
    creado_en: Date
    _count: ReportePerdidaCountAggregateOutputType | null
    _avg: ReportePerdidaAvgAggregateOutputType | null
    _sum: ReportePerdidaSumAggregateOutputType | null
    _min: ReportePerdidaMinAggregateOutputType | null
    _max: ReportePerdidaMaxAggregateOutputType | null
  }

  type GetReportePerdidaGroupByPayload<T extends ReportePerdidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportePerdidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportePerdidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportePerdidaGroupByOutputType[P]>
            : GetScalarType<T[P], ReportePerdidaGroupByOutputType[P]>
        }
      >
    >


  export type ReportePerdidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reporte?: boolean
    id_usuario?: boolean
    id_categoria?: boolean
    descripcion?: boolean
    perdido_en?: boolean
    lugar_perdida?: boolean
    estado?: boolean
    creado_en?: boolean
    categoria?: boolean | ReportePerdida$categoriaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportePerdida"]>

  export type ReportePerdidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reporte?: boolean
    id_usuario?: boolean
    id_categoria?: boolean
    descripcion?: boolean
    perdido_en?: boolean
    lugar_perdida?: boolean
    estado?: boolean
    creado_en?: boolean
    categoria?: boolean | ReportePerdida$categoriaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportePerdida"]>

  export type ReportePerdidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reporte?: boolean
    id_usuario?: boolean
    id_categoria?: boolean
    descripcion?: boolean
    perdido_en?: boolean
    lugar_perdida?: boolean
    estado?: boolean
    creado_en?: boolean
    categoria?: boolean | ReportePerdida$categoriaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportePerdida"]>

  export type ReportePerdidaSelectScalar = {
    id_reporte?: boolean
    id_usuario?: boolean
    id_categoria?: boolean
    descripcion?: boolean
    perdido_en?: boolean
    lugar_perdida?: boolean
    estado?: boolean
    creado_en?: boolean
  }

  export type ReportePerdidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reporte" | "id_usuario" | "id_categoria" | "descripcion" | "perdido_en" | "lugar_perdida" | "estado" | "creado_en", ExtArgs["result"]["reportePerdida"]>
  export type ReportePerdidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | ReportePerdida$categoriaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReportePerdidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | ReportePerdida$categoriaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReportePerdidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | ReportePerdida$categoriaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ReportePerdidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportePerdida"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reporte: bigint
      id_usuario: bigint
      /**
       * NULL si no se sabe
       */
      id_categoria: number | null
      descripcion: string
      perdido_en: Date
      lugar_perdida: string
      /**
       * abierto o cerrado
       */
      estado: string
      creado_en: Date
    }, ExtArgs["result"]["reportePerdida"]>
    composites: {}
  }

  type ReportePerdidaGetPayload<S extends boolean | null | undefined | ReportePerdidaDefaultArgs> = $Result.GetResult<Prisma.$ReportePerdidaPayload, S>

  type ReportePerdidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportePerdidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportePerdidaCountAggregateInputType | true
    }

  export interface ReportePerdidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportePerdida'], meta: { name: 'ReportePerdida' } }
    /**
     * Find zero or one ReportePerdida that matches the filter.
     * @param {ReportePerdidaFindUniqueArgs} args - Arguments to find a ReportePerdida
     * @example
     * // Get one ReportePerdida
     * const reportePerdida = await prisma.reportePerdida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportePerdidaFindUniqueArgs>(args: SelectSubset<T, ReportePerdidaFindUniqueArgs<ExtArgs>>): Prisma__ReportePerdidaClient<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportePerdida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportePerdidaFindUniqueOrThrowArgs} args - Arguments to find a ReportePerdida
     * @example
     * // Get one ReportePerdida
     * const reportePerdida = await prisma.reportePerdida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportePerdidaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportePerdidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportePerdidaClient<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportePerdida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportePerdidaFindFirstArgs} args - Arguments to find a ReportePerdida
     * @example
     * // Get one ReportePerdida
     * const reportePerdida = await prisma.reportePerdida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportePerdidaFindFirstArgs>(args?: SelectSubset<T, ReportePerdidaFindFirstArgs<ExtArgs>>): Prisma__ReportePerdidaClient<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportePerdida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportePerdidaFindFirstOrThrowArgs} args - Arguments to find a ReportePerdida
     * @example
     * // Get one ReportePerdida
     * const reportePerdida = await prisma.reportePerdida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportePerdidaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportePerdidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportePerdidaClient<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportePerdidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportePerdidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportePerdidas
     * const reportePerdidas = await prisma.reportePerdida.findMany()
     * 
     * // Get first 10 ReportePerdidas
     * const reportePerdidas = await prisma.reportePerdida.findMany({ take: 10 })
     * 
     * // Only select the `id_reporte`
     * const reportePerdidaWithId_reporteOnly = await prisma.reportePerdida.findMany({ select: { id_reporte: true } })
     * 
     */
    findMany<T extends ReportePerdidaFindManyArgs>(args?: SelectSubset<T, ReportePerdidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportePerdida.
     * @param {ReportePerdidaCreateArgs} args - Arguments to create a ReportePerdida.
     * @example
     * // Create one ReportePerdida
     * const ReportePerdida = await prisma.reportePerdida.create({
     *   data: {
     *     // ... data to create a ReportePerdida
     *   }
     * })
     * 
     */
    create<T extends ReportePerdidaCreateArgs>(args: SelectSubset<T, ReportePerdidaCreateArgs<ExtArgs>>): Prisma__ReportePerdidaClient<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportePerdidas.
     * @param {ReportePerdidaCreateManyArgs} args - Arguments to create many ReportePerdidas.
     * @example
     * // Create many ReportePerdidas
     * const reportePerdida = await prisma.reportePerdida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportePerdidaCreateManyArgs>(args?: SelectSubset<T, ReportePerdidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportePerdidas and returns the data saved in the database.
     * @param {ReportePerdidaCreateManyAndReturnArgs} args - Arguments to create many ReportePerdidas.
     * @example
     * // Create many ReportePerdidas
     * const reportePerdida = await prisma.reportePerdida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportePerdidas and only return the `id_reporte`
     * const reportePerdidaWithId_reporteOnly = await prisma.reportePerdida.createManyAndReturn({
     *   select: { id_reporte: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportePerdidaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportePerdidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportePerdida.
     * @param {ReportePerdidaDeleteArgs} args - Arguments to delete one ReportePerdida.
     * @example
     * // Delete one ReportePerdida
     * const ReportePerdida = await prisma.reportePerdida.delete({
     *   where: {
     *     // ... filter to delete one ReportePerdida
     *   }
     * })
     * 
     */
    delete<T extends ReportePerdidaDeleteArgs>(args: SelectSubset<T, ReportePerdidaDeleteArgs<ExtArgs>>): Prisma__ReportePerdidaClient<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportePerdida.
     * @param {ReportePerdidaUpdateArgs} args - Arguments to update one ReportePerdida.
     * @example
     * // Update one ReportePerdida
     * const reportePerdida = await prisma.reportePerdida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportePerdidaUpdateArgs>(args: SelectSubset<T, ReportePerdidaUpdateArgs<ExtArgs>>): Prisma__ReportePerdidaClient<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportePerdidas.
     * @param {ReportePerdidaDeleteManyArgs} args - Arguments to filter ReportePerdidas to delete.
     * @example
     * // Delete a few ReportePerdidas
     * const { count } = await prisma.reportePerdida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportePerdidaDeleteManyArgs>(args?: SelectSubset<T, ReportePerdidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportePerdidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportePerdidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportePerdidas
     * const reportePerdida = await prisma.reportePerdida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportePerdidaUpdateManyArgs>(args: SelectSubset<T, ReportePerdidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportePerdidas and returns the data updated in the database.
     * @param {ReportePerdidaUpdateManyAndReturnArgs} args - Arguments to update many ReportePerdidas.
     * @example
     * // Update many ReportePerdidas
     * const reportePerdida = await prisma.reportePerdida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportePerdidas and only return the `id_reporte`
     * const reportePerdidaWithId_reporteOnly = await prisma.reportePerdida.updateManyAndReturn({
     *   select: { id_reporte: true },
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
    updateManyAndReturn<T extends ReportePerdidaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportePerdidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportePerdida.
     * @param {ReportePerdidaUpsertArgs} args - Arguments to update or create a ReportePerdida.
     * @example
     * // Update or create a ReportePerdida
     * const reportePerdida = await prisma.reportePerdida.upsert({
     *   create: {
     *     // ... data to create a ReportePerdida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportePerdida we want to update
     *   }
     * })
     */
    upsert<T extends ReportePerdidaUpsertArgs>(args: SelectSubset<T, ReportePerdidaUpsertArgs<ExtArgs>>): Prisma__ReportePerdidaClient<$Result.GetResult<Prisma.$ReportePerdidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportePerdidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportePerdidaCountArgs} args - Arguments to filter ReportePerdidas to count.
     * @example
     * // Count the number of ReportePerdidas
     * const count = await prisma.reportePerdida.count({
     *   where: {
     *     // ... the filter for the ReportePerdidas we want to count
     *   }
     * })
    **/
    count<T extends ReportePerdidaCountArgs>(
      args?: Subset<T, ReportePerdidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportePerdidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportePerdida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportePerdidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportePerdidaAggregateArgs>(args: Subset<T, ReportePerdidaAggregateArgs>): Prisma.PrismaPromise<GetReportePerdidaAggregateType<T>>

    /**
     * Group by ReportePerdida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportePerdidaGroupByArgs} args - Group by arguments.
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
      T extends ReportePerdidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportePerdidaGroupByArgs['orderBy'] }
        : { orderBy?: ReportePerdidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportePerdidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportePerdidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportePerdida model
   */
  readonly fields: ReportePerdidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportePerdida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportePerdidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends ReportePerdida$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, ReportePerdida$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReportePerdida model
   */
  interface ReportePerdidaFieldRefs {
    readonly id_reporte: FieldRef<"ReportePerdida", 'BigInt'>
    readonly id_usuario: FieldRef<"ReportePerdida", 'BigInt'>
    readonly id_categoria: FieldRef<"ReportePerdida", 'Int'>
    readonly descripcion: FieldRef<"ReportePerdida", 'String'>
    readonly perdido_en: FieldRef<"ReportePerdida", 'DateTime'>
    readonly lugar_perdida: FieldRef<"ReportePerdida", 'String'>
    readonly estado: FieldRef<"ReportePerdida", 'String'>
    readonly creado_en: FieldRef<"ReportePerdida", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportePerdida findUnique
   */
  export type ReportePerdidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    /**
     * Filter, which ReportePerdida to fetch.
     */
    where: ReportePerdidaWhereUniqueInput
  }

  /**
   * ReportePerdida findUniqueOrThrow
   */
  export type ReportePerdidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    /**
     * Filter, which ReportePerdida to fetch.
     */
    where: ReportePerdidaWhereUniqueInput
  }

  /**
   * ReportePerdida findFirst
   */
  export type ReportePerdidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    /**
     * Filter, which ReportePerdida to fetch.
     */
    where?: ReportePerdidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportePerdidas to fetch.
     */
    orderBy?: ReportePerdidaOrderByWithRelationInput | ReportePerdidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportePerdidas.
     */
    cursor?: ReportePerdidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportePerdidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportePerdidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportePerdidas.
     */
    distinct?: ReportePerdidaScalarFieldEnum | ReportePerdidaScalarFieldEnum[]
  }

  /**
   * ReportePerdida findFirstOrThrow
   */
  export type ReportePerdidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    /**
     * Filter, which ReportePerdida to fetch.
     */
    where?: ReportePerdidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportePerdidas to fetch.
     */
    orderBy?: ReportePerdidaOrderByWithRelationInput | ReportePerdidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportePerdidas.
     */
    cursor?: ReportePerdidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportePerdidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportePerdidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportePerdidas.
     */
    distinct?: ReportePerdidaScalarFieldEnum | ReportePerdidaScalarFieldEnum[]
  }

  /**
   * ReportePerdida findMany
   */
  export type ReportePerdidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    /**
     * Filter, which ReportePerdidas to fetch.
     */
    where?: ReportePerdidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportePerdidas to fetch.
     */
    orderBy?: ReportePerdidaOrderByWithRelationInput | ReportePerdidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportePerdidas.
     */
    cursor?: ReportePerdidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportePerdidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportePerdidas.
     */
    skip?: number
    distinct?: ReportePerdidaScalarFieldEnum | ReportePerdidaScalarFieldEnum[]
  }

  /**
   * ReportePerdida create
   */
  export type ReportePerdidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportePerdida.
     */
    data: XOR<ReportePerdidaCreateInput, ReportePerdidaUncheckedCreateInput>
  }

  /**
   * ReportePerdida createMany
   */
  export type ReportePerdidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportePerdidas.
     */
    data: ReportePerdidaCreateManyInput | ReportePerdidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportePerdida createManyAndReturn
   */
  export type ReportePerdidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * The data used to create many ReportePerdidas.
     */
    data: ReportePerdidaCreateManyInput | ReportePerdidaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportePerdida update
   */
  export type ReportePerdidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportePerdida.
     */
    data: XOR<ReportePerdidaUpdateInput, ReportePerdidaUncheckedUpdateInput>
    /**
     * Choose, which ReportePerdida to update.
     */
    where: ReportePerdidaWhereUniqueInput
  }

  /**
   * ReportePerdida updateMany
   */
  export type ReportePerdidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportePerdidas.
     */
    data: XOR<ReportePerdidaUpdateManyMutationInput, ReportePerdidaUncheckedUpdateManyInput>
    /**
     * Filter which ReportePerdidas to update
     */
    where?: ReportePerdidaWhereInput
    /**
     * Limit how many ReportePerdidas to update.
     */
    limit?: number
  }

  /**
   * ReportePerdida updateManyAndReturn
   */
  export type ReportePerdidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * The data used to update ReportePerdidas.
     */
    data: XOR<ReportePerdidaUpdateManyMutationInput, ReportePerdidaUncheckedUpdateManyInput>
    /**
     * Filter which ReportePerdidas to update
     */
    where?: ReportePerdidaWhereInput
    /**
     * Limit how many ReportePerdidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportePerdida upsert
   */
  export type ReportePerdidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportePerdida to update in case it exists.
     */
    where: ReportePerdidaWhereUniqueInput
    /**
     * In case the ReportePerdida found by the `where` argument doesn't exist, create a new ReportePerdida with this data.
     */
    create: XOR<ReportePerdidaCreateInput, ReportePerdidaUncheckedCreateInput>
    /**
     * In case the ReportePerdida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportePerdidaUpdateInput, ReportePerdidaUncheckedUpdateInput>
  }

  /**
   * ReportePerdida delete
   */
  export type ReportePerdidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
    /**
     * Filter which ReportePerdida to delete.
     */
    where: ReportePerdidaWhereUniqueInput
  }

  /**
   * ReportePerdida deleteMany
   */
  export type ReportePerdidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportePerdidas to delete
     */
    where?: ReportePerdidaWhereInput
    /**
     * Limit how many ReportePerdidas to delete.
     */
    limit?: number
  }

  /**
   * ReportePerdida.categoria
   */
  export type ReportePerdida$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * ReportePerdida without action
   */
  export type ReportePerdidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportePerdida
     */
    select?: ReportePerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportePerdida
     */
    omit?: ReportePerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportePerdidaInclude<ExtArgs> | null
  }


  /**
   * Model Reclamo
   */

  export type AggregateReclamo = {
    _count: ReclamoCountAggregateOutputType | null
    _avg: ReclamoAvgAggregateOutputType | null
    _sum: ReclamoSumAggregateOutputType | null
    _min: ReclamoMinAggregateOutputType | null
    _max: ReclamoMaxAggregateOutputType | null
  }

  export type ReclamoAvgAggregateOutputType = {
    id_reclamo: number | null
    id_objeto: number | null
    atendido_por: number | null
  }

  export type ReclamoSumAggregateOutputType = {
    id_reclamo: bigint | null
    id_objeto: bigint | null
    atendido_por: bigint | null
  }

  export type ReclamoMinAggregateOutputType = {
    id_reclamo: bigint | null
    id_objeto: bigint | null
    atendido_por: bigint | null
    rut_reclamante: string | null
    nombre_reclamante: string | null
    evidencia_identidad: string | null
    evidencia_propiedad: string | null
    estado: string | null
    motivo_decision: string | null
    creado_en: Date | null
    entregado_en: Date | null
    numero_comprobante: string | null
  }

  export type ReclamoMaxAggregateOutputType = {
    id_reclamo: bigint | null
    id_objeto: bigint | null
    atendido_por: bigint | null
    rut_reclamante: string | null
    nombre_reclamante: string | null
    evidencia_identidad: string | null
    evidencia_propiedad: string | null
    estado: string | null
    motivo_decision: string | null
    creado_en: Date | null
    entregado_en: Date | null
    numero_comprobante: string | null
  }

  export type ReclamoCountAggregateOutputType = {
    id_reclamo: number
    id_objeto: number
    atendido_por: number
    rut_reclamante: number
    nombre_reclamante: number
    evidencia_identidad: number
    evidencia_propiedad: number
    estado: number
    motivo_decision: number
    creado_en: number
    entregado_en: number
    numero_comprobante: number
    _all: number
  }


  export type ReclamoAvgAggregateInputType = {
    id_reclamo?: true
    id_objeto?: true
    atendido_por?: true
  }

  export type ReclamoSumAggregateInputType = {
    id_reclamo?: true
    id_objeto?: true
    atendido_por?: true
  }

  export type ReclamoMinAggregateInputType = {
    id_reclamo?: true
    id_objeto?: true
    atendido_por?: true
    rut_reclamante?: true
    nombre_reclamante?: true
    evidencia_identidad?: true
    evidencia_propiedad?: true
    estado?: true
    motivo_decision?: true
    creado_en?: true
    entregado_en?: true
    numero_comprobante?: true
  }

  export type ReclamoMaxAggregateInputType = {
    id_reclamo?: true
    id_objeto?: true
    atendido_por?: true
    rut_reclamante?: true
    nombre_reclamante?: true
    evidencia_identidad?: true
    evidencia_propiedad?: true
    estado?: true
    motivo_decision?: true
    creado_en?: true
    entregado_en?: true
    numero_comprobante?: true
  }

  export type ReclamoCountAggregateInputType = {
    id_reclamo?: true
    id_objeto?: true
    atendido_por?: true
    rut_reclamante?: true
    nombre_reclamante?: true
    evidencia_identidad?: true
    evidencia_propiedad?: true
    estado?: true
    motivo_decision?: true
    creado_en?: true
    entregado_en?: true
    numero_comprobante?: true
    _all?: true
  }

  export type ReclamoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reclamo to aggregate.
     */
    where?: ReclamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reclamos to fetch.
     */
    orderBy?: ReclamoOrderByWithRelationInput | ReclamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReclamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reclamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reclamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reclamos
    **/
    _count?: true | ReclamoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReclamoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReclamoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReclamoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReclamoMaxAggregateInputType
  }

  export type GetReclamoAggregateType<T extends ReclamoAggregateArgs> = {
        [P in keyof T & keyof AggregateReclamo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReclamo[P]>
      : GetScalarType<T[P], AggregateReclamo[P]>
  }




  export type ReclamoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReclamoWhereInput
    orderBy?: ReclamoOrderByWithAggregationInput | ReclamoOrderByWithAggregationInput[]
    by: ReclamoScalarFieldEnum[] | ReclamoScalarFieldEnum
    having?: ReclamoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReclamoCountAggregateInputType | true
    _avg?: ReclamoAvgAggregateInputType
    _sum?: ReclamoSumAggregateInputType
    _min?: ReclamoMinAggregateInputType
    _max?: ReclamoMaxAggregateInputType
  }

  export type ReclamoGroupByOutputType = {
    id_reclamo: bigint
    id_objeto: bigint | null
    atendido_por: bigint
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado: string
    motivo_decision: string | null
    creado_en: Date
    entregado_en: Date | null
    numero_comprobante: string | null
    _count: ReclamoCountAggregateOutputType | null
    _avg: ReclamoAvgAggregateOutputType | null
    _sum: ReclamoSumAggregateOutputType | null
    _min: ReclamoMinAggregateOutputType | null
    _max: ReclamoMaxAggregateOutputType | null
  }

  type GetReclamoGroupByPayload<T extends ReclamoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReclamoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReclamoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReclamoGroupByOutputType[P]>
            : GetScalarType<T[P], ReclamoGroupByOutputType[P]>
        }
      >
    >


  export type ReclamoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reclamo?: boolean
    id_objeto?: boolean
    atendido_por?: boolean
    rut_reclamante?: boolean
    nombre_reclamante?: boolean
    evidencia_identidad?: boolean
    evidencia_propiedad?: boolean
    estado?: boolean
    motivo_decision?: boolean
    creado_en?: boolean
    entregado_en?: boolean
    numero_comprobante?: boolean
    objeto?: boolean | Reclamo$objetoArgs<ExtArgs>
    encargado?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reclamo"]>

  export type ReclamoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reclamo?: boolean
    id_objeto?: boolean
    atendido_por?: boolean
    rut_reclamante?: boolean
    nombre_reclamante?: boolean
    evidencia_identidad?: boolean
    evidencia_propiedad?: boolean
    estado?: boolean
    motivo_decision?: boolean
    creado_en?: boolean
    entregado_en?: boolean
    numero_comprobante?: boolean
    objeto?: boolean | Reclamo$objetoArgs<ExtArgs>
    encargado?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reclamo"]>

  export type ReclamoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reclamo?: boolean
    id_objeto?: boolean
    atendido_por?: boolean
    rut_reclamante?: boolean
    nombre_reclamante?: boolean
    evidencia_identidad?: boolean
    evidencia_propiedad?: boolean
    estado?: boolean
    motivo_decision?: boolean
    creado_en?: boolean
    entregado_en?: boolean
    numero_comprobante?: boolean
    objeto?: boolean | Reclamo$objetoArgs<ExtArgs>
    encargado?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reclamo"]>

  export type ReclamoSelectScalar = {
    id_reclamo?: boolean
    id_objeto?: boolean
    atendido_por?: boolean
    rut_reclamante?: boolean
    nombre_reclamante?: boolean
    evidencia_identidad?: boolean
    evidencia_propiedad?: boolean
    estado?: boolean
    motivo_decision?: boolean
    creado_en?: boolean
    entregado_en?: boolean
    numero_comprobante?: boolean
  }

  export type ReclamoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reclamo" | "id_objeto" | "atendido_por" | "rut_reclamante" | "nombre_reclamante" | "evidencia_identidad" | "evidencia_propiedad" | "estado" | "motivo_decision" | "creado_en" | "entregado_en" | "numero_comprobante", ExtArgs["result"]["reclamo"]>
  export type ReclamoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objeto?: boolean | Reclamo$objetoArgs<ExtArgs>
    encargado?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReclamoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objeto?: boolean | Reclamo$objetoArgs<ExtArgs>
    encargado?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReclamoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objeto?: boolean | Reclamo$objetoArgs<ExtArgs>
    encargado?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ReclamoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reclamo"
    objects: {
      objeto: Prisma.$ObjetoPayload<ExtArgs> | null
      encargado: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reclamo: bigint
      /**
       * NULL si no hubo coincidencia
       */
      id_objeto: bigint | null
      atendido_por: bigint
      rut_reclamante: string
      nombre_reclamante: string
      evidencia_identidad: string
      evidencia_propiedad: string
      /**
       * en_revision, aprobado, rechazado, entregado
       */
      estado: string
      motivo_decision: string | null
      creado_en: Date
      /**
       * NULL hasta entregar
       */
      entregado_en: Date | null
      /**
       * NULL hasta entregar
       */
      numero_comprobante: string | null
    }, ExtArgs["result"]["reclamo"]>
    composites: {}
  }

  type ReclamoGetPayload<S extends boolean | null | undefined | ReclamoDefaultArgs> = $Result.GetResult<Prisma.$ReclamoPayload, S>

  type ReclamoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReclamoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReclamoCountAggregateInputType | true
    }

  export interface ReclamoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reclamo'], meta: { name: 'Reclamo' } }
    /**
     * Find zero or one Reclamo that matches the filter.
     * @param {ReclamoFindUniqueArgs} args - Arguments to find a Reclamo
     * @example
     * // Get one Reclamo
     * const reclamo = await prisma.reclamo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReclamoFindUniqueArgs>(args: SelectSubset<T, ReclamoFindUniqueArgs<ExtArgs>>): Prisma__ReclamoClient<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reclamo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReclamoFindUniqueOrThrowArgs} args - Arguments to find a Reclamo
     * @example
     * // Get one Reclamo
     * const reclamo = await prisma.reclamo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReclamoFindUniqueOrThrowArgs>(args: SelectSubset<T, ReclamoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReclamoClient<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reclamo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReclamoFindFirstArgs} args - Arguments to find a Reclamo
     * @example
     * // Get one Reclamo
     * const reclamo = await prisma.reclamo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReclamoFindFirstArgs>(args?: SelectSubset<T, ReclamoFindFirstArgs<ExtArgs>>): Prisma__ReclamoClient<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reclamo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReclamoFindFirstOrThrowArgs} args - Arguments to find a Reclamo
     * @example
     * // Get one Reclamo
     * const reclamo = await prisma.reclamo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReclamoFindFirstOrThrowArgs>(args?: SelectSubset<T, ReclamoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReclamoClient<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reclamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReclamoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reclamos
     * const reclamos = await prisma.reclamo.findMany()
     * 
     * // Get first 10 Reclamos
     * const reclamos = await prisma.reclamo.findMany({ take: 10 })
     * 
     * // Only select the `id_reclamo`
     * const reclamoWithId_reclamoOnly = await prisma.reclamo.findMany({ select: { id_reclamo: true } })
     * 
     */
    findMany<T extends ReclamoFindManyArgs>(args?: SelectSubset<T, ReclamoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reclamo.
     * @param {ReclamoCreateArgs} args - Arguments to create a Reclamo.
     * @example
     * // Create one Reclamo
     * const Reclamo = await prisma.reclamo.create({
     *   data: {
     *     // ... data to create a Reclamo
     *   }
     * })
     * 
     */
    create<T extends ReclamoCreateArgs>(args: SelectSubset<T, ReclamoCreateArgs<ExtArgs>>): Prisma__ReclamoClient<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reclamos.
     * @param {ReclamoCreateManyArgs} args - Arguments to create many Reclamos.
     * @example
     * // Create many Reclamos
     * const reclamo = await prisma.reclamo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReclamoCreateManyArgs>(args?: SelectSubset<T, ReclamoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reclamos and returns the data saved in the database.
     * @param {ReclamoCreateManyAndReturnArgs} args - Arguments to create many Reclamos.
     * @example
     * // Create many Reclamos
     * const reclamo = await prisma.reclamo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reclamos and only return the `id_reclamo`
     * const reclamoWithId_reclamoOnly = await prisma.reclamo.createManyAndReturn({
     *   select: { id_reclamo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReclamoCreateManyAndReturnArgs>(args?: SelectSubset<T, ReclamoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reclamo.
     * @param {ReclamoDeleteArgs} args - Arguments to delete one Reclamo.
     * @example
     * // Delete one Reclamo
     * const Reclamo = await prisma.reclamo.delete({
     *   where: {
     *     // ... filter to delete one Reclamo
     *   }
     * })
     * 
     */
    delete<T extends ReclamoDeleteArgs>(args: SelectSubset<T, ReclamoDeleteArgs<ExtArgs>>): Prisma__ReclamoClient<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reclamo.
     * @param {ReclamoUpdateArgs} args - Arguments to update one Reclamo.
     * @example
     * // Update one Reclamo
     * const reclamo = await prisma.reclamo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReclamoUpdateArgs>(args: SelectSubset<T, ReclamoUpdateArgs<ExtArgs>>): Prisma__ReclamoClient<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reclamos.
     * @param {ReclamoDeleteManyArgs} args - Arguments to filter Reclamos to delete.
     * @example
     * // Delete a few Reclamos
     * const { count } = await prisma.reclamo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReclamoDeleteManyArgs>(args?: SelectSubset<T, ReclamoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reclamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReclamoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reclamos
     * const reclamo = await prisma.reclamo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReclamoUpdateManyArgs>(args: SelectSubset<T, ReclamoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reclamos and returns the data updated in the database.
     * @param {ReclamoUpdateManyAndReturnArgs} args - Arguments to update many Reclamos.
     * @example
     * // Update many Reclamos
     * const reclamo = await prisma.reclamo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reclamos and only return the `id_reclamo`
     * const reclamoWithId_reclamoOnly = await prisma.reclamo.updateManyAndReturn({
     *   select: { id_reclamo: true },
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
    updateManyAndReturn<T extends ReclamoUpdateManyAndReturnArgs>(args: SelectSubset<T, ReclamoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reclamo.
     * @param {ReclamoUpsertArgs} args - Arguments to update or create a Reclamo.
     * @example
     * // Update or create a Reclamo
     * const reclamo = await prisma.reclamo.upsert({
     *   create: {
     *     // ... data to create a Reclamo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reclamo we want to update
     *   }
     * })
     */
    upsert<T extends ReclamoUpsertArgs>(args: SelectSubset<T, ReclamoUpsertArgs<ExtArgs>>): Prisma__ReclamoClient<$Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reclamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReclamoCountArgs} args - Arguments to filter Reclamos to count.
     * @example
     * // Count the number of Reclamos
     * const count = await prisma.reclamo.count({
     *   where: {
     *     // ... the filter for the Reclamos we want to count
     *   }
     * })
    **/
    count<T extends ReclamoCountArgs>(
      args?: Subset<T, ReclamoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReclamoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reclamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReclamoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReclamoAggregateArgs>(args: Subset<T, ReclamoAggregateArgs>): Prisma.PrismaPromise<GetReclamoAggregateType<T>>

    /**
     * Group by Reclamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReclamoGroupByArgs} args - Group by arguments.
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
      T extends ReclamoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReclamoGroupByArgs['orderBy'] }
        : { orderBy?: ReclamoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReclamoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReclamoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reclamo model
   */
  readonly fields: ReclamoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reclamo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReclamoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objeto<T extends Reclamo$objetoArgs<ExtArgs> = {}>(args?: Subset<T, Reclamo$objetoArgs<ExtArgs>>): Prisma__ObjetoClient<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    encargado<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reclamo model
   */
  interface ReclamoFieldRefs {
    readonly id_reclamo: FieldRef<"Reclamo", 'BigInt'>
    readonly id_objeto: FieldRef<"Reclamo", 'BigInt'>
    readonly atendido_por: FieldRef<"Reclamo", 'BigInt'>
    readonly rut_reclamante: FieldRef<"Reclamo", 'String'>
    readonly nombre_reclamante: FieldRef<"Reclamo", 'String'>
    readonly evidencia_identidad: FieldRef<"Reclamo", 'String'>
    readonly evidencia_propiedad: FieldRef<"Reclamo", 'String'>
    readonly estado: FieldRef<"Reclamo", 'String'>
    readonly motivo_decision: FieldRef<"Reclamo", 'String'>
    readonly creado_en: FieldRef<"Reclamo", 'DateTime'>
    readonly entregado_en: FieldRef<"Reclamo", 'DateTime'>
    readonly numero_comprobante: FieldRef<"Reclamo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reclamo findUnique
   */
  export type ReclamoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    /**
     * Filter, which Reclamo to fetch.
     */
    where: ReclamoWhereUniqueInput
  }

  /**
   * Reclamo findUniqueOrThrow
   */
  export type ReclamoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    /**
     * Filter, which Reclamo to fetch.
     */
    where: ReclamoWhereUniqueInput
  }

  /**
   * Reclamo findFirst
   */
  export type ReclamoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    /**
     * Filter, which Reclamo to fetch.
     */
    where?: ReclamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reclamos to fetch.
     */
    orderBy?: ReclamoOrderByWithRelationInput | ReclamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reclamos.
     */
    cursor?: ReclamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reclamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reclamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reclamos.
     */
    distinct?: ReclamoScalarFieldEnum | ReclamoScalarFieldEnum[]
  }

  /**
   * Reclamo findFirstOrThrow
   */
  export type ReclamoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    /**
     * Filter, which Reclamo to fetch.
     */
    where?: ReclamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reclamos to fetch.
     */
    orderBy?: ReclamoOrderByWithRelationInput | ReclamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reclamos.
     */
    cursor?: ReclamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reclamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reclamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reclamos.
     */
    distinct?: ReclamoScalarFieldEnum | ReclamoScalarFieldEnum[]
  }

  /**
   * Reclamo findMany
   */
  export type ReclamoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    /**
     * Filter, which Reclamos to fetch.
     */
    where?: ReclamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reclamos to fetch.
     */
    orderBy?: ReclamoOrderByWithRelationInput | ReclamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reclamos.
     */
    cursor?: ReclamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reclamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reclamos.
     */
    skip?: number
    distinct?: ReclamoScalarFieldEnum | ReclamoScalarFieldEnum[]
  }

  /**
   * Reclamo create
   */
  export type ReclamoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    /**
     * The data needed to create a Reclamo.
     */
    data: XOR<ReclamoCreateInput, ReclamoUncheckedCreateInput>
  }

  /**
   * Reclamo createMany
   */
  export type ReclamoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reclamos.
     */
    data: ReclamoCreateManyInput | ReclamoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reclamo createManyAndReturn
   */
  export type ReclamoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * The data used to create many Reclamos.
     */
    data: ReclamoCreateManyInput | ReclamoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reclamo update
   */
  export type ReclamoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    /**
     * The data needed to update a Reclamo.
     */
    data: XOR<ReclamoUpdateInput, ReclamoUncheckedUpdateInput>
    /**
     * Choose, which Reclamo to update.
     */
    where: ReclamoWhereUniqueInput
  }

  /**
   * Reclamo updateMany
   */
  export type ReclamoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reclamos.
     */
    data: XOR<ReclamoUpdateManyMutationInput, ReclamoUncheckedUpdateManyInput>
    /**
     * Filter which Reclamos to update
     */
    where?: ReclamoWhereInput
    /**
     * Limit how many Reclamos to update.
     */
    limit?: number
  }

  /**
   * Reclamo updateManyAndReturn
   */
  export type ReclamoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * The data used to update Reclamos.
     */
    data: XOR<ReclamoUpdateManyMutationInput, ReclamoUncheckedUpdateManyInput>
    /**
     * Filter which Reclamos to update
     */
    where?: ReclamoWhereInput
    /**
     * Limit how many Reclamos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reclamo upsert
   */
  export type ReclamoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    /**
     * The filter to search for the Reclamo to update in case it exists.
     */
    where: ReclamoWhereUniqueInput
    /**
     * In case the Reclamo found by the `where` argument doesn't exist, create a new Reclamo with this data.
     */
    create: XOR<ReclamoCreateInput, ReclamoUncheckedCreateInput>
    /**
     * In case the Reclamo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReclamoUpdateInput, ReclamoUncheckedUpdateInput>
  }

  /**
   * Reclamo delete
   */
  export type ReclamoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
    /**
     * Filter which Reclamo to delete.
     */
    where: ReclamoWhereUniqueInput
  }

  /**
   * Reclamo deleteMany
   */
  export type ReclamoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reclamos to delete
     */
    where?: ReclamoWhereInput
    /**
     * Limit how many Reclamos to delete.
     */
    limit?: number
  }

  /**
   * Reclamo.objeto
   */
  export type Reclamo$objetoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    where?: ObjetoWhereInput
  }

  /**
   * Reclamo without action
   */
  export type ReclamoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reclamo
     */
    select?: ReclamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reclamo
     */
    omit?: ReclamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReclamoInclude<ExtArgs> | null
  }


  /**
   * Model ActaDestruccion
   */

  export type AggregateActaDestruccion = {
    _count: ActaDestruccionCountAggregateOutputType | null
    _avg: ActaDestruccionAvgAggregateOutputType | null
    _sum: ActaDestruccionSumAggregateOutputType | null
    _min: ActaDestruccionMinAggregateOutputType | null
    _max: ActaDestruccionMaxAggregateOutputType | null
  }

  export type ActaDestruccionAvgAggregateOutputType = {
    id_acta: number | null
    responsable: number | null
  }

  export type ActaDestruccionSumAggregateOutputType = {
    id_acta: bigint | null
    responsable: bigint | null
  }

  export type ActaDestruccionMinAggregateOutputType = {
    id_acta: bigint | null
    numero_acta: string | null
    responsable: bigint | null
    ejecutada_en: Date | null
    archivo_url: string | null
  }

  export type ActaDestruccionMaxAggregateOutputType = {
    id_acta: bigint | null
    numero_acta: string | null
    responsable: bigint | null
    ejecutada_en: Date | null
    archivo_url: string | null
  }

  export type ActaDestruccionCountAggregateOutputType = {
    id_acta: number
    numero_acta: number
    responsable: number
    ejecutada_en: number
    archivo_url: number
    _all: number
  }


  export type ActaDestruccionAvgAggregateInputType = {
    id_acta?: true
    responsable?: true
  }

  export type ActaDestruccionSumAggregateInputType = {
    id_acta?: true
    responsable?: true
  }

  export type ActaDestruccionMinAggregateInputType = {
    id_acta?: true
    numero_acta?: true
    responsable?: true
    ejecutada_en?: true
    archivo_url?: true
  }

  export type ActaDestruccionMaxAggregateInputType = {
    id_acta?: true
    numero_acta?: true
    responsable?: true
    ejecutada_en?: true
    archivo_url?: true
  }

  export type ActaDestruccionCountAggregateInputType = {
    id_acta?: true
    numero_acta?: true
    responsable?: true
    ejecutada_en?: true
    archivo_url?: true
    _all?: true
  }

  export type ActaDestruccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActaDestruccion to aggregate.
     */
    where?: ActaDestruccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActaDestruccions to fetch.
     */
    orderBy?: ActaDestruccionOrderByWithRelationInput | ActaDestruccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActaDestruccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActaDestruccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActaDestruccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActaDestruccions
    **/
    _count?: true | ActaDestruccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActaDestruccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActaDestruccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActaDestruccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActaDestruccionMaxAggregateInputType
  }

  export type GetActaDestruccionAggregateType<T extends ActaDestruccionAggregateArgs> = {
        [P in keyof T & keyof AggregateActaDestruccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActaDestruccion[P]>
      : GetScalarType<T[P], AggregateActaDestruccion[P]>
  }




  export type ActaDestruccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActaDestruccionWhereInput
    orderBy?: ActaDestruccionOrderByWithAggregationInput | ActaDestruccionOrderByWithAggregationInput[]
    by: ActaDestruccionScalarFieldEnum[] | ActaDestruccionScalarFieldEnum
    having?: ActaDestruccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActaDestruccionCountAggregateInputType | true
    _avg?: ActaDestruccionAvgAggregateInputType
    _sum?: ActaDestruccionSumAggregateInputType
    _min?: ActaDestruccionMinAggregateInputType
    _max?: ActaDestruccionMaxAggregateInputType
  }

  export type ActaDestruccionGroupByOutputType = {
    id_acta: bigint
    numero_acta: string
    responsable: bigint
    ejecutada_en: Date
    archivo_url: string
    _count: ActaDestruccionCountAggregateOutputType | null
    _avg: ActaDestruccionAvgAggregateOutputType | null
    _sum: ActaDestruccionSumAggregateOutputType | null
    _min: ActaDestruccionMinAggregateOutputType | null
    _max: ActaDestruccionMaxAggregateOutputType | null
  }

  type GetActaDestruccionGroupByPayload<T extends ActaDestruccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActaDestruccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActaDestruccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActaDestruccionGroupByOutputType[P]>
            : GetScalarType<T[P], ActaDestruccionGroupByOutputType[P]>
        }
      >
    >


  export type ActaDestruccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_acta?: boolean
    numero_acta?: boolean
    responsable?: boolean
    ejecutada_en?: boolean
    archivo_url?: boolean
    objetos?: boolean | ActaDestruccion$objetosArgs<ExtArgs>
    firmante?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | ActaDestruccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actaDestruccion"]>

  export type ActaDestruccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_acta?: boolean
    numero_acta?: boolean
    responsable?: boolean
    ejecutada_en?: boolean
    archivo_url?: boolean
    firmante?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actaDestruccion"]>

  export type ActaDestruccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_acta?: boolean
    numero_acta?: boolean
    responsable?: boolean
    ejecutada_en?: boolean
    archivo_url?: boolean
    firmante?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actaDestruccion"]>

  export type ActaDestruccionSelectScalar = {
    id_acta?: boolean
    numero_acta?: boolean
    responsable?: boolean
    ejecutada_en?: boolean
    archivo_url?: boolean
  }

  export type ActaDestruccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_acta" | "numero_acta" | "responsable" | "ejecutada_en" | "archivo_url", ExtArgs["result"]["actaDestruccion"]>
  export type ActaDestruccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objetos?: boolean | ActaDestruccion$objetosArgs<ExtArgs>
    firmante?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | ActaDestruccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActaDestruccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    firmante?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ActaDestruccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    firmante?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ActaDestruccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActaDestruccion"
    objects: {
      objetos: Prisma.$ObjetoPayload<ExtArgs>[]
      firmante: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_acta: bigint
      numero_acta: string
      responsable: bigint
      ejecutada_en: Date
      archivo_url: string
    }, ExtArgs["result"]["actaDestruccion"]>
    composites: {}
  }

  type ActaDestruccionGetPayload<S extends boolean | null | undefined | ActaDestruccionDefaultArgs> = $Result.GetResult<Prisma.$ActaDestruccionPayload, S>

  type ActaDestruccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActaDestruccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActaDestruccionCountAggregateInputType | true
    }

  export interface ActaDestruccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActaDestruccion'], meta: { name: 'ActaDestruccion' } }
    /**
     * Find zero or one ActaDestruccion that matches the filter.
     * @param {ActaDestruccionFindUniqueArgs} args - Arguments to find a ActaDestruccion
     * @example
     * // Get one ActaDestruccion
     * const actaDestruccion = await prisma.actaDestruccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActaDestruccionFindUniqueArgs>(args: SelectSubset<T, ActaDestruccionFindUniqueArgs<ExtArgs>>): Prisma__ActaDestruccionClient<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActaDestruccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActaDestruccionFindUniqueOrThrowArgs} args - Arguments to find a ActaDestruccion
     * @example
     * // Get one ActaDestruccion
     * const actaDestruccion = await prisma.actaDestruccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActaDestruccionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActaDestruccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActaDestruccionClient<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActaDestruccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaDestruccionFindFirstArgs} args - Arguments to find a ActaDestruccion
     * @example
     * // Get one ActaDestruccion
     * const actaDestruccion = await prisma.actaDestruccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActaDestruccionFindFirstArgs>(args?: SelectSubset<T, ActaDestruccionFindFirstArgs<ExtArgs>>): Prisma__ActaDestruccionClient<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActaDestruccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaDestruccionFindFirstOrThrowArgs} args - Arguments to find a ActaDestruccion
     * @example
     * // Get one ActaDestruccion
     * const actaDestruccion = await prisma.actaDestruccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActaDestruccionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActaDestruccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActaDestruccionClient<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActaDestruccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaDestruccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActaDestruccions
     * const actaDestruccions = await prisma.actaDestruccion.findMany()
     * 
     * // Get first 10 ActaDestruccions
     * const actaDestruccions = await prisma.actaDestruccion.findMany({ take: 10 })
     * 
     * // Only select the `id_acta`
     * const actaDestruccionWithId_actaOnly = await prisma.actaDestruccion.findMany({ select: { id_acta: true } })
     * 
     */
    findMany<T extends ActaDestruccionFindManyArgs>(args?: SelectSubset<T, ActaDestruccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActaDestruccion.
     * @param {ActaDestruccionCreateArgs} args - Arguments to create a ActaDestruccion.
     * @example
     * // Create one ActaDestruccion
     * const ActaDestruccion = await prisma.actaDestruccion.create({
     *   data: {
     *     // ... data to create a ActaDestruccion
     *   }
     * })
     * 
     */
    create<T extends ActaDestruccionCreateArgs>(args: SelectSubset<T, ActaDestruccionCreateArgs<ExtArgs>>): Prisma__ActaDestruccionClient<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActaDestruccions.
     * @param {ActaDestruccionCreateManyArgs} args - Arguments to create many ActaDestruccions.
     * @example
     * // Create many ActaDestruccions
     * const actaDestruccion = await prisma.actaDestruccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActaDestruccionCreateManyArgs>(args?: SelectSubset<T, ActaDestruccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActaDestruccions and returns the data saved in the database.
     * @param {ActaDestruccionCreateManyAndReturnArgs} args - Arguments to create many ActaDestruccions.
     * @example
     * // Create many ActaDestruccions
     * const actaDestruccion = await prisma.actaDestruccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActaDestruccions and only return the `id_acta`
     * const actaDestruccionWithId_actaOnly = await prisma.actaDestruccion.createManyAndReturn({
     *   select: { id_acta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActaDestruccionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActaDestruccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActaDestruccion.
     * @param {ActaDestruccionDeleteArgs} args - Arguments to delete one ActaDestruccion.
     * @example
     * // Delete one ActaDestruccion
     * const ActaDestruccion = await prisma.actaDestruccion.delete({
     *   where: {
     *     // ... filter to delete one ActaDestruccion
     *   }
     * })
     * 
     */
    delete<T extends ActaDestruccionDeleteArgs>(args: SelectSubset<T, ActaDestruccionDeleteArgs<ExtArgs>>): Prisma__ActaDestruccionClient<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActaDestruccion.
     * @param {ActaDestruccionUpdateArgs} args - Arguments to update one ActaDestruccion.
     * @example
     * // Update one ActaDestruccion
     * const actaDestruccion = await prisma.actaDestruccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActaDestruccionUpdateArgs>(args: SelectSubset<T, ActaDestruccionUpdateArgs<ExtArgs>>): Prisma__ActaDestruccionClient<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActaDestruccions.
     * @param {ActaDestruccionDeleteManyArgs} args - Arguments to filter ActaDestruccions to delete.
     * @example
     * // Delete a few ActaDestruccions
     * const { count } = await prisma.actaDestruccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActaDestruccionDeleteManyArgs>(args?: SelectSubset<T, ActaDestruccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActaDestruccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaDestruccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActaDestruccions
     * const actaDestruccion = await prisma.actaDestruccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActaDestruccionUpdateManyArgs>(args: SelectSubset<T, ActaDestruccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActaDestruccions and returns the data updated in the database.
     * @param {ActaDestruccionUpdateManyAndReturnArgs} args - Arguments to update many ActaDestruccions.
     * @example
     * // Update many ActaDestruccions
     * const actaDestruccion = await prisma.actaDestruccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActaDestruccions and only return the `id_acta`
     * const actaDestruccionWithId_actaOnly = await prisma.actaDestruccion.updateManyAndReturn({
     *   select: { id_acta: true },
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
    updateManyAndReturn<T extends ActaDestruccionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActaDestruccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActaDestruccion.
     * @param {ActaDestruccionUpsertArgs} args - Arguments to update or create a ActaDestruccion.
     * @example
     * // Update or create a ActaDestruccion
     * const actaDestruccion = await prisma.actaDestruccion.upsert({
     *   create: {
     *     // ... data to create a ActaDestruccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActaDestruccion we want to update
     *   }
     * })
     */
    upsert<T extends ActaDestruccionUpsertArgs>(args: SelectSubset<T, ActaDestruccionUpsertArgs<ExtArgs>>): Prisma__ActaDestruccionClient<$Result.GetResult<Prisma.$ActaDestruccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActaDestruccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaDestruccionCountArgs} args - Arguments to filter ActaDestruccions to count.
     * @example
     * // Count the number of ActaDestruccions
     * const count = await prisma.actaDestruccion.count({
     *   where: {
     *     // ... the filter for the ActaDestruccions we want to count
     *   }
     * })
    **/
    count<T extends ActaDestruccionCountArgs>(
      args?: Subset<T, ActaDestruccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActaDestruccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActaDestruccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaDestruccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActaDestruccionAggregateArgs>(args: Subset<T, ActaDestruccionAggregateArgs>): Prisma.PrismaPromise<GetActaDestruccionAggregateType<T>>

    /**
     * Group by ActaDestruccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActaDestruccionGroupByArgs} args - Group by arguments.
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
      T extends ActaDestruccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActaDestruccionGroupByArgs['orderBy'] }
        : { orderBy?: ActaDestruccionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActaDestruccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActaDestruccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActaDestruccion model
   */
  readonly fields: ActaDestruccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActaDestruccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActaDestruccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objetos<T extends ActaDestruccion$objetosArgs<ExtArgs> = {}>(args?: Subset<T, ActaDestruccion$objetosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    firmante<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActaDestruccion model
   */
  interface ActaDestruccionFieldRefs {
    readonly id_acta: FieldRef<"ActaDestruccion", 'BigInt'>
    readonly numero_acta: FieldRef<"ActaDestruccion", 'String'>
    readonly responsable: FieldRef<"ActaDestruccion", 'BigInt'>
    readonly ejecutada_en: FieldRef<"ActaDestruccion", 'DateTime'>
    readonly archivo_url: FieldRef<"ActaDestruccion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActaDestruccion findUnique
   */
  export type ActaDestruccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    /**
     * Filter, which ActaDestruccion to fetch.
     */
    where: ActaDestruccionWhereUniqueInput
  }

  /**
   * ActaDestruccion findUniqueOrThrow
   */
  export type ActaDestruccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    /**
     * Filter, which ActaDestruccion to fetch.
     */
    where: ActaDestruccionWhereUniqueInput
  }

  /**
   * ActaDestruccion findFirst
   */
  export type ActaDestruccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    /**
     * Filter, which ActaDestruccion to fetch.
     */
    where?: ActaDestruccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActaDestruccions to fetch.
     */
    orderBy?: ActaDestruccionOrderByWithRelationInput | ActaDestruccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActaDestruccions.
     */
    cursor?: ActaDestruccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActaDestruccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActaDestruccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActaDestruccions.
     */
    distinct?: ActaDestruccionScalarFieldEnum | ActaDestruccionScalarFieldEnum[]
  }

  /**
   * ActaDestruccion findFirstOrThrow
   */
  export type ActaDestruccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    /**
     * Filter, which ActaDestruccion to fetch.
     */
    where?: ActaDestruccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActaDestruccions to fetch.
     */
    orderBy?: ActaDestruccionOrderByWithRelationInput | ActaDestruccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActaDestruccions.
     */
    cursor?: ActaDestruccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActaDestruccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActaDestruccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActaDestruccions.
     */
    distinct?: ActaDestruccionScalarFieldEnum | ActaDestruccionScalarFieldEnum[]
  }

  /**
   * ActaDestruccion findMany
   */
  export type ActaDestruccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    /**
     * Filter, which ActaDestruccions to fetch.
     */
    where?: ActaDestruccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActaDestruccions to fetch.
     */
    orderBy?: ActaDestruccionOrderByWithRelationInput | ActaDestruccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActaDestruccions.
     */
    cursor?: ActaDestruccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActaDestruccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActaDestruccions.
     */
    skip?: number
    distinct?: ActaDestruccionScalarFieldEnum | ActaDestruccionScalarFieldEnum[]
  }

  /**
   * ActaDestruccion create
   */
  export type ActaDestruccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    /**
     * The data needed to create a ActaDestruccion.
     */
    data: XOR<ActaDestruccionCreateInput, ActaDestruccionUncheckedCreateInput>
  }

  /**
   * ActaDestruccion createMany
   */
  export type ActaDestruccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActaDestruccions.
     */
    data: ActaDestruccionCreateManyInput | ActaDestruccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActaDestruccion createManyAndReturn
   */
  export type ActaDestruccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * The data used to create many ActaDestruccions.
     */
    data: ActaDestruccionCreateManyInput | ActaDestruccionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActaDestruccion update
   */
  export type ActaDestruccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    /**
     * The data needed to update a ActaDestruccion.
     */
    data: XOR<ActaDestruccionUpdateInput, ActaDestruccionUncheckedUpdateInput>
    /**
     * Choose, which ActaDestruccion to update.
     */
    where: ActaDestruccionWhereUniqueInput
  }

  /**
   * ActaDestruccion updateMany
   */
  export type ActaDestruccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActaDestruccions.
     */
    data: XOR<ActaDestruccionUpdateManyMutationInput, ActaDestruccionUncheckedUpdateManyInput>
    /**
     * Filter which ActaDestruccions to update
     */
    where?: ActaDestruccionWhereInput
    /**
     * Limit how many ActaDestruccions to update.
     */
    limit?: number
  }

  /**
   * ActaDestruccion updateManyAndReturn
   */
  export type ActaDestruccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * The data used to update ActaDestruccions.
     */
    data: XOR<ActaDestruccionUpdateManyMutationInput, ActaDestruccionUncheckedUpdateManyInput>
    /**
     * Filter which ActaDestruccions to update
     */
    where?: ActaDestruccionWhereInput
    /**
     * Limit how many ActaDestruccions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActaDestruccion upsert
   */
  export type ActaDestruccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    /**
     * The filter to search for the ActaDestruccion to update in case it exists.
     */
    where: ActaDestruccionWhereUniqueInput
    /**
     * In case the ActaDestruccion found by the `where` argument doesn't exist, create a new ActaDestruccion with this data.
     */
    create: XOR<ActaDestruccionCreateInput, ActaDestruccionUncheckedCreateInput>
    /**
     * In case the ActaDestruccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActaDestruccionUpdateInput, ActaDestruccionUncheckedUpdateInput>
  }

  /**
   * ActaDestruccion delete
   */
  export type ActaDestruccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
    /**
     * Filter which ActaDestruccion to delete.
     */
    where: ActaDestruccionWhereUniqueInput
  }

  /**
   * ActaDestruccion deleteMany
   */
  export type ActaDestruccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActaDestruccions to delete
     */
    where?: ActaDestruccionWhereInput
    /**
     * Limit how many ActaDestruccions to delete.
     */
    limit?: number
  }

  /**
   * ActaDestruccion.objetos
   */
  export type ActaDestruccion$objetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objeto
     */
    select?: ObjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objeto
     */
    omit?: ObjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetoInclude<ExtArgs> | null
    where?: ObjetoWhereInput
    orderBy?: ObjetoOrderByWithRelationInput | ObjetoOrderByWithRelationInput[]
    cursor?: ObjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjetoScalarFieldEnum | ObjetoScalarFieldEnum[]
  }

  /**
   * ActaDestruccion without action
   */
  export type ActaDestruccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActaDestruccion
     */
    select?: ActaDestruccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActaDestruccion
     */
    omit?: ActaDestruccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActaDestruccionInclude<ExtArgs> | null
  }


  /**
   * Model Bitacora
   */

  export type AggregateBitacora = {
    _count: BitacoraCountAggregateOutputType | null
    _avg: BitacoraAvgAggregateOutputType | null
    _sum: BitacoraSumAggregateOutputType | null
    _min: BitacoraMinAggregateOutputType | null
    _max: BitacoraMaxAggregateOutputType | null
  }

  export type BitacoraAvgAggregateOutputType = {
    id_evento: number | null
    id_usuario: number | null
  }

  export type BitacoraSumAggregateOutputType = {
    id_evento: bigint | null
    id_usuario: bigint | null
  }

  export type BitacoraMinAggregateOutputType = {
    id_evento: bigint | null
    id_usuario: bigint | null
    accion: string | null
    recurso: string | null
    resultado: string | null
    registrado_en: Date | null
  }

  export type BitacoraMaxAggregateOutputType = {
    id_evento: bigint | null
    id_usuario: bigint | null
    accion: string | null
    recurso: string | null
    resultado: string | null
    registrado_en: Date | null
  }

  export type BitacoraCountAggregateOutputType = {
    id_evento: number
    id_usuario: number
    accion: number
    recurso: number
    resultado: number
    registrado_en: number
    _all: number
  }


  export type BitacoraAvgAggregateInputType = {
    id_evento?: true
    id_usuario?: true
  }

  export type BitacoraSumAggregateInputType = {
    id_evento?: true
    id_usuario?: true
  }

  export type BitacoraMinAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    accion?: true
    recurso?: true
    resultado?: true
    registrado_en?: true
  }

  export type BitacoraMaxAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    accion?: true
    recurso?: true
    resultado?: true
    registrado_en?: true
  }

  export type BitacoraCountAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    accion?: true
    recurso?: true
    resultado?: true
    registrado_en?: true
    _all?: true
  }

  export type BitacoraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bitacora to aggregate.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bitacoras
    **/
    _count?: true | BitacoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BitacoraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BitacoraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BitacoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BitacoraMaxAggregateInputType
  }

  export type GetBitacoraAggregateType<T extends BitacoraAggregateArgs> = {
        [P in keyof T & keyof AggregateBitacora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBitacora[P]>
      : GetScalarType<T[P], AggregateBitacora[P]>
  }




  export type BitacoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitacoraWhereInput
    orderBy?: BitacoraOrderByWithAggregationInput | BitacoraOrderByWithAggregationInput[]
    by: BitacoraScalarFieldEnum[] | BitacoraScalarFieldEnum
    having?: BitacoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BitacoraCountAggregateInputType | true
    _avg?: BitacoraAvgAggregateInputType
    _sum?: BitacoraSumAggregateInputType
    _min?: BitacoraMinAggregateInputType
    _max?: BitacoraMaxAggregateInputType
  }

  export type BitacoraGroupByOutputType = {
    id_evento: bigint
    id_usuario: bigint | null
    accion: string
    recurso: string
    resultado: string
    registrado_en: Date
    _count: BitacoraCountAggregateOutputType | null
    _avg: BitacoraAvgAggregateOutputType | null
    _sum: BitacoraSumAggregateOutputType | null
    _min: BitacoraMinAggregateOutputType | null
    _max: BitacoraMaxAggregateOutputType | null
  }

  type GetBitacoraGroupByPayload<T extends BitacoraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BitacoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BitacoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BitacoraGroupByOutputType[P]>
            : GetScalarType<T[P], BitacoraGroupByOutputType[P]>
        }
      >
    >


  export type BitacoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    accion?: boolean
    recurso?: boolean
    resultado?: boolean
    registrado_en?: boolean
    usuario?: boolean | Bitacora$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type BitacoraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    accion?: boolean
    recurso?: boolean
    resultado?: boolean
    registrado_en?: boolean
    usuario?: boolean | Bitacora$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type BitacoraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    accion?: boolean
    recurso?: boolean
    resultado?: boolean
    registrado_en?: boolean
    usuario?: boolean | Bitacora$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type BitacoraSelectScalar = {
    id_evento?: boolean
    id_usuario?: boolean
    accion?: boolean
    recurso?: boolean
    resultado?: boolean
    registrado_en?: boolean
  }

  export type BitacoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "id_usuario" | "accion" | "recurso" | "resultado" | "registrado_en", ExtArgs["result"]["bitacora"]>
  export type BitacoraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Bitacora$usuarioArgs<ExtArgs>
  }
  export type BitacoraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Bitacora$usuarioArgs<ExtArgs>
  }
  export type BitacoraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Bitacora$usuarioArgs<ExtArgs>
  }

  export type $BitacoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bitacora"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: bigint
      /**
       * NULL si no se identifico
       */
      id_usuario: bigint | null
      accion: string
      recurso: string
      /**
       * permitido, denegado o error
       */
      resultado: string
      registrado_en: Date
    }, ExtArgs["result"]["bitacora"]>
    composites: {}
  }

  type BitacoraGetPayload<S extends boolean | null | undefined | BitacoraDefaultArgs> = $Result.GetResult<Prisma.$BitacoraPayload, S>

  type BitacoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BitacoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BitacoraCountAggregateInputType | true
    }

  export interface BitacoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bitacora'], meta: { name: 'Bitacora' } }
    /**
     * Find zero or one Bitacora that matches the filter.
     * @param {BitacoraFindUniqueArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BitacoraFindUniqueArgs>(args: SelectSubset<T, BitacoraFindUniqueArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bitacora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BitacoraFindUniqueOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BitacoraFindUniqueOrThrowArgs>(args: SelectSubset<T, BitacoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bitacora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindFirstArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BitacoraFindFirstArgs>(args?: SelectSubset<T, BitacoraFindFirstArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bitacora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindFirstOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BitacoraFindFirstOrThrowArgs>(args?: SelectSubset<T, BitacoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bitacoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bitacoras
     * const bitacoras = await prisma.bitacora.findMany()
     * 
     * // Get first 10 Bitacoras
     * const bitacoras = await prisma.bitacora.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const bitacoraWithId_eventoOnly = await prisma.bitacora.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends BitacoraFindManyArgs>(args?: SelectSubset<T, BitacoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bitacora.
     * @param {BitacoraCreateArgs} args - Arguments to create a Bitacora.
     * @example
     * // Create one Bitacora
     * const Bitacora = await prisma.bitacora.create({
     *   data: {
     *     // ... data to create a Bitacora
     *   }
     * })
     * 
     */
    create<T extends BitacoraCreateArgs>(args: SelectSubset<T, BitacoraCreateArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bitacoras.
     * @param {BitacoraCreateManyArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BitacoraCreateManyArgs>(args?: SelectSubset<T, BitacoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bitacoras and returns the data saved in the database.
     * @param {BitacoraCreateManyAndReturnArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bitacoras and only return the `id_evento`
     * const bitacoraWithId_eventoOnly = await prisma.bitacora.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BitacoraCreateManyAndReturnArgs>(args?: SelectSubset<T, BitacoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bitacora.
     * @param {BitacoraDeleteArgs} args - Arguments to delete one Bitacora.
     * @example
     * // Delete one Bitacora
     * const Bitacora = await prisma.bitacora.delete({
     *   where: {
     *     // ... filter to delete one Bitacora
     *   }
     * })
     * 
     */
    delete<T extends BitacoraDeleteArgs>(args: SelectSubset<T, BitacoraDeleteArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bitacora.
     * @param {BitacoraUpdateArgs} args - Arguments to update one Bitacora.
     * @example
     * // Update one Bitacora
     * const bitacora = await prisma.bitacora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BitacoraUpdateArgs>(args: SelectSubset<T, BitacoraUpdateArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bitacoras.
     * @param {BitacoraDeleteManyArgs} args - Arguments to filter Bitacoras to delete.
     * @example
     * // Delete a few Bitacoras
     * const { count } = await prisma.bitacora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BitacoraDeleteManyArgs>(args?: SelectSubset<T, BitacoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BitacoraUpdateManyArgs>(args: SelectSubset<T, BitacoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacoras and returns the data updated in the database.
     * @param {BitacoraUpdateManyAndReturnArgs} args - Arguments to update many Bitacoras.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bitacoras and only return the `id_evento`
     * const bitacoraWithId_eventoOnly = await prisma.bitacora.updateManyAndReturn({
     *   select: { id_evento: true },
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
    updateManyAndReturn<T extends BitacoraUpdateManyAndReturnArgs>(args: SelectSubset<T, BitacoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bitacora.
     * @param {BitacoraUpsertArgs} args - Arguments to update or create a Bitacora.
     * @example
     * // Update or create a Bitacora
     * const bitacora = await prisma.bitacora.upsert({
     *   create: {
     *     // ... data to create a Bitacora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bitacora we want to update
     *   }
     * })
     */
    upsert<T extends BitacoraUpsertArgs>(args: SelectSubset<T, BitacoraUpsertArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraCountArgs} args - Arguments to filter Bitacoras to count.
     * @example
     * // Count the number of Bitacoras
     * const count = await prisma.bitacora.count({
     *   where: {
     *     // ... the filter for the Bitacoras we want to count
     *   }
     * })
    **/
    count<T extends BitacoraCountArgs>(
      args?: Subset<T, BitacoraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BitacoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BitacoraAggregateArgs>(args: Subset<T, BitacoraAggregateArgs>): Prisma.PrismaPromise<GetBitacoraAggregateType<T>>

    /**
     * Group by Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraGroupByArgs} args - Group by arguments.
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
      T extends BitacoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BitacoraGroupByArgs['orderBy'] }
        : { orderBy?: BitacoraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BitacoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBitacoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bitacora model
   */
  readonly fields: BitacoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bitacora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BitacoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Bitacora$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Bitacora$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bitacora model
   */
  interface BitacoraFieldRefs {
    readonly id_evento: FieldRef<"Bitacora", 'BigInt'>
    readonly id_usuario: FieldRef<"Bitacora", 'BigInt'>
    readonly accion: FieldRef<"Bitacora", 'String'>
    readonly recurso: FieldRef<"Bitacora", 'String'>
    readonly resultado: FieldRef<"Bitacora", 'String'>
    readonly registrado_en: FieldRef<"Bitacora", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bitacora findUnique
   */
  export type BitacoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora findUniqueOrThrow
   */
  export type BitacoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora findFirst
   */
  export type BitacoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bitacoras.
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bitacoras.
     */
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Bitacora findFirstOrThrow
   */
  export type BitacoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bitacoras.
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bitacoras.
     */
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Bitacora findMany
   */
  export type BitacoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacoras to fetch.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bitacoras.
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Bitacora create
   */
  export type BitacoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * The data needed to create a Bitacora.
     */
    data: XOR<BitacoraCreateInput, BitacoraUncheckedCreateInput>
  }

  /**
   * Bitacora createMany
   */
  export type BitacoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bitacoras.
     */
    data: BitacoraCreateManyInput | BitacoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bitacora createManyAndReturn
   */
  export type BitacoraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * The data used to create many Bitacoras.
     */
    data: BitacoraCreateManyInput | BitacoraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bitacora update
   */
  export type BitacoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * The data needed to update a Bitacora.
     */
    data: XOR<BitacoraUpdateInput, BitacoraUncheckedUpdateInput>
    /**
     * Choose, which Bitacora to update.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora updateMany
   */
  export type BitacoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bitacoras.
     */
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyInput>
    /**
     * Filter which Bitacoras to update
     */
    where?: BitacoraWhereInput
    /**
     * Limit how many Bitacoras to update.
     */
    limit?: number
  }

  /**
   * Bitacora updateManyAndReturn
   */
  export type BitacoraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * The data used to update Bitacoras.
     */
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyInput>
    /**
     * Filter which Bitacoras to update
     */
    where?: BitacoraWhereInput
    /**
     * Limit how many Bitacoras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bitacora upsert
   */
  export type BitacoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * The filter to search for the Bitacora to update in case it exists.
     */
    where: BitacoraWhereUniqueInput
    /**
     * In case the Bitacora found by the `where` argument doesn't exist, create a new Bitacora with this data.
     */
    create: XOR<BitacoraCreateInput, BitacoraUncheckedCreateInput>
    /**
     * In case the Bitacora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BitacoraUpdateInput, BitacoraUncheckedUpdateInput>
  }

  /**
   * Bitacora delete
   */
  export type BitacoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter which Bitacora to delete.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora deleteMany
   */
  export type BitacoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bitacoras to delete
     */
    where?: BitacoraWhereInput
    /**
     * Limit how many Bitacoras to delete.
     */
    limit?: number
  }

  /**
   * Bitacora.usuario
   */
  export type Bitacora$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Bitacora without action
   */
  export type BitacoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    correo_institucional: 'correo_institucional',
    nombres: 'nombres',
    apellidos: 'apellidos',
    rol: 'rol',
    id_punto: 'id_punto',
    activo: 'activo',
    creado_en: 'creado_en'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PuntoAcopioScalarFieldEnum: {
    id_punto: 'id_punto',
    nombre: 'nombre',
    ubicacion: 'ubicacion',
    tipo: 'tipo',
    publicado: 'publicado',
    habilitado: 'habilitado'
  };

  export type PuntoAcopioScalarFieldEnum = (typeof PuntoAcopioScalarFieldEnum)[keyof typeof PuntoAcopioScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ObjetoScalarFieldEnum: {
    id_objeto: 'id_objeto',
    codigo: 'codigo',
    id_categoria: 'id_categoria',
    id_punto: 'id_punto',
    registrado_por: 'registrado_por',
    id_acta: 'id_acta',
    descripcion: 'descripcion',
    hallado_en: 'hallado_en',
    lugar_hallazgo: 'lugar_hallazgo',
    registrado_en: 'registrado_en',
    estado: 'estado',
    publicado: 'publicado',
    alerta_enviada_en: 'alerta_enviada_en'
  };

  export type ObjetoScalarFieldEnum = (typeof ObjetoScalarFieldEnum)[keyof typeof ObjetoScalarFieldEnum]


  export const FotografiaScalarFieldEnum: {
    id_objeto: 'id_objeto',
    posicion: 'posicion',
    archivo_url: 'archivo_url'
  };

  export type FotografiaScalarFieldEnum = (typeof FotografiaScalarFieldEnum)[keyof typeof FotografiaScalarFieldEnum]


  export const ReportePerdidaScalarFieldEnum: {
    id_reporte: 'id_reporte',
    id_usuario: 'id_usuario',
    id_categoria: 'id_categoria',
    descripcion: 'descripcion',
    perdido_en: 'perdido_en',
    lugar_perdida: 'lugar_perdida',
    estado: 'estado',
    creado_en: 'creado_en'
  };

  export type ReportePerdidaScalarFieldEnum = (typeof ReportePerdidaScalarFieldEnum)[keyof typeof ReportePerdidaScalarFieldEnum]


  export const ReclamoScalarFieldEnum: {
    id_reclamo: 'id_reclamo',
    id_objeto: 'id_objeto',
    atendido_por: 'atendido_por',
    rut_reclamante: 'rut_reclamante',
    nombre_reclamante: 'nombre_reclamante',
    evidencia_identidad: 'evidencia_identidad',
    evidencia_propiedad: 'evidencia_propiedad',
    estado: 'estado',
    motivo_decision: 'motivo_decision',
    creado_en: 'creado_en',
    entregado_en: 'entregado_en',
    numero_comprobante: 'numero_comprobante'
  };

  export type ReclamoScalarFieldEnum = (typeof ReclamoScalarFieldEnum)[keyof typeof ReclamoScalarFieldEnum]


  export const ActaDestruccionScalarFieldEnum: {
    id_acta: 'id_acta',
    numero_acta: 'numero_acta',
    responsable: 'responsable',
    ejecutada_en: 'ejecutada_en',
    archivo_url: 'archivo_url'
  };

  export type ActaDestruccionScalarFieldEnum = (typeof ActaDestruccionScalarFieldEnum)[keyof typeof ActaDestruccionScalarFieldEnum]


  export const BitacoraScalarFieldEnum: {
    id_evento: 'id_evento',
    id_usuario: 'id_usuario',
    accion: 'accion',
    recurso: 'recurso',
    resultado: 'resultado',
    registrado_en: 'registrado_en'
  };

  export type BitacoraScalarFieldEnum = (typeof BitacoraScalarFieldEnum)[keyof typeof BitacoraScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: BigIntFilter<"Usuario"> | bigint | number
    correo_institucional?: StringFilter<"Usuario"> | string
    nombres?: StringFilter<"Usuario"> | string
    apellidos?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    id_punto?: BigIntNullableFilter<"Usuario"> | bigint | number | null
    activo?: BoolFilter<"Usuario"> | boolean
    creado_en?: DateTimeFilter<"Usuario"> | Date | string
    punto?: XOR<PuntoAcopioNullableScalarRelationFilter, PuntoAcopioWhereInput> | null
    objetosRegistrados?: ObjetoListRelationFilter
    reportes?: ReportePerdidaListRelationFilter
    reclamosAtendidos?: ReclamoListRelationFilter
    actasFirmadas?: ActaDestruccionListRelationFilter
    eventos?: BitacoraListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    correo_institucional?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    id_punto?: SortOrderInput | SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    punto?: PuntoAcopioOrderByWithRelationInput
    objetosRegistrados?: ObjetoOrderByRelationAggregateInput
    reportes?: ReportePerdidaOrderByRelationAggregateInput
    reclamosAtendidos?: ReclamoOrderByRelationAggregateInput
    actasFirmadas?: ActaDestruccionOrderByRelationAggregateInput
    eventos?: BitacoraOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: bigint | number
    correo_institucional?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombres?: StringFilter<"Usuario"> | string
    apellidos?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    id_punto?: BigIntNullableFilter<"Usuario"> | bigint | number | null
    activo?: BoolFilter<"Usuario"> | boolean
    creado_en?: DateTimeFilter<"Usuario"> | Date | string
    punto?: XOR<PuntoAcopioNullableScalarRelationFilter, PuntoAcopioWhereInput> | null
    objetosRegistrados?: ObjetoListRelationFilter
    reportes?: ReportePerdidaListRelationFilter
    reclamosAtendidos?: ReclamoListRelationFilter
    actasFirmadas?: ActaDestruccionListRelationFilter
    eventos?: BitacoraListRelationFilter
  }, "id_usuario" | "correo_institucional">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    correo_institucional?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    id_punto?: SortOrderInput | SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: BigIntWithAggregatesFilter<"Usuario"> | bigint | number
    correo_institucional?: StringWithAggregatesFilter<"Usuario"> | string
    nombres?: StringWithAggregatesFilter<"Usuario"> | string
    apellidos?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: StringWithAggregatesFilter<"Usuario"> | string
    id_punto?: BigIntNullableWithAggregatesFilter<"Usuario"> | bigint | number | null
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    creado_en?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PuntoAcopioWhereInput = {
    AND?: PuntoAcopioWhereInput | PuntoAcopioWhereInput[]
    OR?: PuntoAcopioWhereInput[]
    NOT?: PuntoAcopioWhereInput | PuntoAcopioWhereInput[]
    id_punto?: BigIntFilter<"PuntoAcopio"> | bigint | number
    nombre?: StringFilter<"PuntoAcopio"> | string
    ubicacion?: StringFilter<"PuntoAcopio"> | string
    tipo?: StringFilter<"PuntoAcopio"> | string
    publicado?: BoolFilter<"PuntoAcopio"> | boolean
    habilitado?: BoolFilter<"PuntoAcopio"> | boolean
    encargados?: UsuarioListRelationFilter
    objetos?: ObjetoListRelationFilter
  }

  export type PuntoAcopioOrderByWithRelationInput = {
    id_punto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    tipo?: SortOrder
    publicado?: SortOrder
    habilitado?: SortOrder
    encargados?: UsuarioOrderByRelationAggregateInput
    objetos?: ObjetoOrderByRelationAggregateInput
  }

  export type PuntoAcopioWhereUniqueInput = Prisma.AtLeast<{
    id_punto?: bigint | number
    AND?: PuntoAcopioWhereInput | PuntoAcopioWhereInput[]
    OR?: PuntoAcopioWhereInput[]
    NOT?: PuntoAcopioWhereInput | PuntoAcopioWhereInput[]
    nombre?: StringFilter<"PuntoAcopio"> | string
    ubicacion?: StringFilter<"PuntoAcopio"> | string
    tipo?: StringFilter<"PuntoAcopio"> | string
    publicado?: BoolFilter<"PuntoAcopio"> | boolean
    habilitado?: BoolFilter<"PuntoAcopio"> | boolean
    encargados?: UsuarioListRelationFilter
    objetos?: ObjetoListRelationFilter
  }, "id_punto">

  export type PuntoAcopioOrderByWithAggregationInput = {
    id_punto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    tipo?: SortOrder
    publicado?: SortOrder
    habilitado?: SortOrder
    _count?: PuntoAcopioCountOrderByAggregateInput
    _avg?: PuntoAcopioAvgOrderByAggregateInput
    _max?: PuntoAcopioMaxOrderByAggregateInput
    _min?: PuntoAcopioMinOrderByAggregateInput
    _sum?: PuntoAcopioSumOrderByAggregateInput
  }

  export type PuntoAcopioScalarWhereWithAggregatesInput = {
    AND?: PuntoAcopioScalarWhereWithAggregatesInput | PuntoAcopioScalarWhereWithAggregatesInput[]
    OR?: PuntoAcopioScalarWhereWithAggregatesInput[]
    NOT?: PuntoAcopioScalarWhereWithAggregatesInput | PuntoAcopioScalarWhereWithAggregatesInput[]
    id_punto?: BigIntWithAggregatesFilter<"PuntoAcopio"> | bigint | number
    nombre?: StringWithAggregatesFilter<"PuntoAcopio"> | string
    ubicacion?: StringWithAggregatesFilter<"PuntoAcopio"> | string
    tipo?: StringWithAggregatesFilter<"PuntoAcopio"> | string
    publicado?: BoolWithAggregatesFilter<"PuntoAcopio"> | boolean
    habilitado?: BoolWithAggregatesFilter<"PuntoAcopio"> | boolean
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id_categoria?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    objetos?: ObjetoListRelationFilter
    reportes?: ReportePerdidaListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    objetos?: ObjetoOrderByRelationAggregateInput
    reportes?: ReportePerdidaOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    nombre?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    objetos?: ObjetoListRelationFilter
    reportes?: ReportePerdidaListRelationFilter
  }, "id_categoria" | "nombre">

  export type CategoriaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type ObjetoWhereInput = {
    AND?: ObjetoWhereInput | ObjetoWhereInput[]
    OR?: ObjetoWhereInput[]
    NOT?: ObjetoWhereInput | ObjetoWhereInput[]
    id_objeto?: BigIntFilter<"Objeto"> | bigint | number
    codigo?: StringFilter<"Objeto"> | string
    id_categoria?: IntFilter<"Objeto"> | number
    id_punto?: BigIntFilter<"Objeto"> | bigint | number
    registrado_por?: BigIntFilter<"Objeto"> | bigint | number
    id_acta?: BigIntNullableFilter<"Objeto"> | bigint | number | null
    descripcion?: StringFilter<"Objeto"> | string
    hallado_en?: DateTimeFilter<"Objeto"> | Date | string
    lugar_hallazgo?: StringFilter<"Objeto"> | string
    registrado_en?: DateTimeFilter<"Objeto"> | Date | string
    estado?: StringFilter<"Objeto"> | string
    publicado?: BoolFilter<"Objeto"> | boolean
    alerta_enviada_en?: DateTimeNullableFilter<"Objeto"> | Date | string | null
    punto?: XOR<PuntoAcopioScalarRelationFilter, PuntoAcopioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    registrador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    fotografias?: FotografiaListRelationFilter
    reclamos?: ReclamoListRelationFilter
    acta?: XOR<ActaDestruccionNullableScalarRelationFilter, ActaDestruccionWhereInput> | null
  }

  export type ObjetoOrderByWithRelationInput = {
    id_objeto?: SortOrder
    codigo?: SortOrder
    id_categoria?: SortOrder
    id_punto?: SortOrder
    registrado_por?: SortOrder
    id_acta?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    hallado_en?: SortOrder
    lugar_hallazgo?: SortOrder
    registrado_en?: SortOrder
    estado?: SortOrder
    publicado?: SortOrder
    alerta_enviada_en?: SortOrderInput | SortOrder
    punto?: PuntoAcopioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    registrador?: UsuarioOrderByWithRelationInput
    fotografias?: FotografiaOrderByRelationAggregateInput
    reclamos?: ReclamoOrderByRelationAggregateInput
    acta?: ActaDestruccionOrderByWithRelationInput
  }

  export type ObjetoWhereUniqueInput = Prisma.AtLeast<{
    id_objeto?: bigint | number
    codigo?: string
    AND?: ObjetoWhereInput | ObjetoWhereInput[]
    OR?: ObjetoWhereInput[]
    NOT?: ObjetoWhereInput | ObjetoWhereInput[]
    id_categoria?: IntFilter<"Objeto"> | number
    id_punto?: BigIntFilter<"Objeto"> | bigint | number
    registrado_por?: BigIntFilter<"Objeto"> | bigint | number
    id_acta?: BigIntNullableFilter<"Objeto"> | bigint | number | null
    descripcion?: StringFilter<"Objeto"> | string
    hallado_en?: DateTimeFilter<"Objeto"> | Date | string
    lugar_hallazgo?: StringFilter<"Objeto"> | string
    registrado_en?: DateTimeFilter<"Objeto"> | Date | string
    estado?: StringFilter<"Objeto"> | string
    publicado?: BoolFilter<"Objeto"> | boolean
    alerta_enviada_en?: DateTimeNullableFilter<"Objeto"> | Date | string | null
    punto?: XOR<PuntoAcopioScalarRelationFilter, PuntoAcopioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    registrador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    fotografias?: FotografiaListRelationFilter
    reclamos?: ReclamoListRelationFilter
    acta?: XOR<ActaDestruccionNullableScalarRelationFilter, ActaDestruccionWhereInput> | null
  }, "id_objeto" | "codigo">

  export type ObjetoOrderByWithAggregationInput = {
    id_objeto?: SortOrder
    codigo?: SortOrder
    id_categoria?: SortOrder
    id_punto?: SortOrder
    registrado_por?: SortOrder
    id_acta?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    hallado_en?: SortOrder
    lugar_hallazgo?: SortOrder
    registrado_en?: SortOrder
    estado?: SortOrder
    publicado?: SortOrder
    alerta_enviada_en?: SortOrderInput | SortOrder
    _count?: ObjetoCountOrderByAggregateInput
    _avg?: ObjetoAvgOrderByAggregateInput
    _max?: ObjetoMaxOrderByAggregateInput
    _min?: ObjetoMinOrderByAggregateInput
    _sum?: ObjetoSumOrderByAggregateInput
  }

  export type ObjetoScalarWhereWithAggregatesInput = {
    AND?: ObjetoScalarWhereWithAggregatesInput | ObjetoScalarWhereWithAggregatesInput[]
    OR?: ObjetoScalarWhereWithAggregatesInput[]
    NOT?: ObjetoScalarWhereWithAggregatesInput | ObjetoScalarWhereWithAggregatesInput[]
    id_objeto?: BigIntWithAggregatesFilter<"Objeto"> | bigint | number
    codigo?: StringWithAggregatesFilter<"Objeto"> | string
    id_categoria?: IntWithAggregatesFilter<"Objeto"> | number
    id_punto?: BigIntWithAggregatesFilter<"Objeto"> | bigint | number
    registrado_por?: BigIntWithAggregatesFilter<"Objeto"> | bigint | number
    id_acta?: BigIntNullableWithAggregatesFilter<"Objeto"> | bigint | number | null
    descripcion?: StringWithAggregatesFilter<"Objeto"> | string
    hallado_en?: DateTimeWithAggregatesFilter<"Objeto"> | Date | string
    lugar_hallazgo?: StringWithAggregatesFilter<"Objeto"> | string
    registrado_en?: DateTimeWithAggregatesFilter<"Objeto"> | Date | string
    estado?: StringWithAggregatesFilter<"Objeto"> | string
    publicado?: BoolWithAggregatesFilter<"Objeto"> | boolean
    alerta_enviada_en?: DateTimeNullableWithAggregatesFilter<"Objeto"> | Date | string | null
  }

  export type FotografiaWhereInput = {
    AND?: FotografiaWhereInput | FotografiaWhereInput[]
    OR?: FotografiaWhereInput[]
    NOT?: FotografiaWhereInput | FotografiaWhereInput[]
    id_objeto?: BigIntFilter<"Fotografia"> | bigint | number
    posicion?: IntFilter<"Fotografia"> | number
    archivo_url?: StringFilter<"Fotografia"> | string
    objeto?: XOR<ObjetoScalarRelationFilter, ObjetoWhereInput>
  }

  export type FotografiaOrderByWithRelationInput = {
    id_objeto?: SortOrder
    posicion?: SortOrder
    archivo_url?: SortOrder
    objeto?: ObjetoOrderByWithRelationInput
  }

  export type FotografiaWhereUniqueInput = Prisma.AtLeast<{
    id_objeto_posicion?: FotografiaId_objetoPosicionCompoundUniqueInput
    AND?: FotografiaWhereInput | FotografiaWhereInput[]
    OR?: FotografiaWhereInput[]
    NOT?: FotografiaWhereInput | FotografiaWhereInput[]
    id_objeto?: BigIntFilter<"Fotografia"> | bigint | number
    posicion?: IntFilter<"Fotografia"> | number
    archivo_url?: StringFilter<"Fotografia"> | string
    objeto?: XOR<ObjetoScalarRelationFilter, ObjetoWhereInput>
  }, "id_objeto_posicion">

  export type FotografiaOrderByWithAggregationInput = {
    id_objeto?: SortOrder
    posicion?: SortOrder
    archivo_url?: SortOrder
    _count?: FotografiaCountOrderByAggregateInput
    _avg?: FotografiaAvgOrderByAggregateInput
    _max?: FotografiaMaxOrderByAggregateInput
    _min?: FotografiaMinOrderByAggregateInput
    _sum?: FotografiaSumOrderByAggregateInput
  }

  export type FotografiaScalarWhereWithAggregatesInput = {
    AND?: FotografiaScalarWhereWithAggregatesInput | FotografiaScalarWhereWithAggregatesInput[]
    OR?: FotografiaScalarWhereWithAggregatesInput[]
    NOT?: FotografiaScalarWhereWithAggregatesInput | FotografiaScalarWhereWithAggregatesInput[]
    id_objeto?: BigIntWithAggregatesFilter<"Fotografia"> | bigint | number
    posicion?: IntWithAggregatesFilter<"Fotografia"> | number
    archivo_url?: StringWithAggregatesFilter<"Fotografia"> | string
  }

  export type ReportePerdidaWhereInput = {
    AND?: ReportePerdidaWhereInput | ReportePerdidaWhereInput[]
    OR?: ReportePerdidaWhereInput[]
    NOT?: ReportePerdidaWhereInput | ReportePerdidaWhereInput[]
    id_reporte?: BigIntFilter<"ReportePerdida"> | bigint | number
    id_usuario?: BigIntFilter<"ReportePerdida"> | bigint | number
    id_categoria?: IntNullableFilter<"ReportePerdida"> | number | null
    descripcion?: StringFilter<"ReportePerdida"> | string
    perdido_en?: DateTimeFilter<"ReportePerdida"> | Date | string
    lugar_perdida?: StringFilter<"ReportePerdida"> | string
    estado?: StringFilter<"ReportePerdida"> | string
    creado_en?: DateTimeFilter<"ReportePerdida"> | Date | string
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ReportePerdidaOrderByWithRelationInput = {
    id_reporte?: SortOrder
    id_usuario?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    perdido_en?: SortOrder
    lugar_perdida?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ReportePerdidaWhereUniqueInput = Prisma.AtLeast<{
    id_reporte?: bigint | number
    AND?: ReportePerdidaWhereInput | ReportePerdidaWhereInput[]
    OR?: ReportePerdidaWhereInput[]
    NOT?: ReportePerdidaWhereInput | ReportePerdidaWhereInput[]
    id_usuario?: BigIntFilter<"ReportePerdida"> | bigint | number
    id_categoria?: IntNullableFilter<"ReportePerdida"> | number | null
    descripcion?: StringFilter<"ReportePerdida"> | string
    perdido_en?: DateTimeFilter<"ReportePerdida"> | Date | string
    lugar_perdida?: StringFilter<"ReportePerdida"> | string
    estado?: StringFilter<"ReportePerdida"> | string
    creado_en?: DateTimeFilter<"ReportePerdida"> | Date | string
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_reporte">

  export type ReportePerdidaOrderByWithAggregationInput = {
    id_reporte?: SortOrder
    id_usuario?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    perdido_en?: SortOrder
    lugar_perdida?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    _count?: ReportePerdidaCountOrderByAggregateInput
    _avg?: ReportePerdidaAvgOrderByAggregateInput
    _max?: ReportePerdidaMaxOrderByAggregateInput
    _min?: ReportePerdidaMinOrderByAggregateInput
    _sum?: ReportePerdidaSumOrderByAggregateInput
  }

  export type ReportePerdidaScalarWhereWithAggregatesInput = {
    AND?: ReportePerdidaScalarWhereWithAggregatesInput | ReportePerdidaScalarWhereWithAggregatesInput[]
    OR?: ReportePerdidaScalarWhereWithAggregatesInput[]
    NOT?: ReportePerdidaScalarWhereWithAggregatesInput | ReportePerdidaScalarWhereWithAggregatesInput[]
    id_reporte?: BigIntWithAggregatesFilter<"ReportePerdida"> | bigint | number
    id_usuario?: BigIntWithAggregatesFilter<"ReportePerdida"> | bigint | number
    id_categoria?: IntNullableWithAggregatesFilter<"ReportePerdida"> | number | null
    descripcion?: StringWithAggregatesFilter<"ReportePerdida"> | string
    perdido_en?: DateTimeWithAggregatesFilter<"ReportePerdida"> | Date | string
    lugar_perdida?: StringWithAggregatesFilter<"ReportePerdida"> | string
    estado?: StringWithAggregatesFilter<"ReportePerdida"> | string
    creado_en?: DateTimeWithAggregatesFilter<"ReportePerdida"> | Date | string
  }

  export type ReclamoWhereInput = {
    AND?: ReclamoWhereInput | ReclamoWhereInput[]
    OR?: ReclamoWhereInput[]
    NOT?: ReclamoWhereInput | ReclamoWhereInput[]
    id_reclamo?: BigIntFilter<"Reclamo"> | bigint | number
    id_objeto?: BigIntNullableFilter<"Reclamo"> | bigint | number | null
    atendido_por?: BigIntFilter<"Reclamo"> | bigint | number
    rut_reclamante?: StringFilter<"Reclamo"> | string
    nombre_reclamante?: StringFilter<"Reclamo"> | string
    evidencia_identidad?: StringFilter<"Reclamo"> | string
    evidencia_propiedad?: StringFilter<"Reclamo"> | string
    estado?: StringFilter<"Reclamo"> | string
    motivo_decision?: StringNullableFilter<"Reclamo"> | string | null
    creado_en?: DateTimeFilter<"Reclamo"> | Date | string
    entregado_en?: DateTimeNullableFilter<"Reclamo"> | Date | string | null
    numero_comprobante?: StringNullableFilter<"Reclamo"> | string | null
    objeto?: XOR<ObjetoNullableScalarRelationFilter, ObjetoWhereInput> | null
    encargado?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ReclamoOrderByWithRelationInput = {
    id_reclamo?: SortOrder
    id_objeto?: SortOrderInput | SortOrder
    atendido_por?: SortOrder
    rut_reclamante?: SortOrder
    nombre_reclamante?: SortOrder
    evidencia_identidad?: SortOrder
    evidencia_propiedad?: SortOrder
    estado?: SortOrder
    motivo_decision?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    entregado_en?: SortOrderInput | SortOrder
    numero_comprobante?: SortOrderInput | SortOrder
    objeto?: ObjetoOrderByWithRelationInput
    encargado?: UsuarioOrderByWithRelationInput
  }

  export type ReclamoWhereUniqueInput = Prisma.AtLeast<{
    id_reclamo?: bigint | number
    numero_comprobante?: string
    AND?: ReclamoWhereInput | ReclamoWhereInput[]
    OR?: ReclamoWhereInput[]
    NOT?: ReclamoWhereInput | ReclamoWhereInput[]
    id_objeto?: BigIntNullableFilter<"Reclamo"> | bigint | number | null
    atendido_por?: BigIntFilter<"Reclamo"> | bigint | number
    rut_reclamante?: StringFilter<"Reclamo"> | string
    nombre_reclamante?: StringFilter<"Reclamo"> | string
    evidencia_identidad?: StringFilter<"Reclamo"> | string
    evidencia_propiedad?: StringFilter<"Reclamo"> | string
    estado?: StringFilter<"Reclamo"> | string
    motivo_decision?: StringNullableFilter<"Reclamo"> | string | null
    creado_en?: DateTimeFilter<"Reclamo"> | Date | string
    entregado_en?: DateTimeNullableFilter<"Reclamo"> | Date | string | null
    objeto?: XOR<ObjetoNullableScalarRelationFilter, ObjetoWhereInput> | null
    encargado?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_reclamo" | "numero_comprobante">

  export type ReclamoOrderByWithAggregationInput = {
    id_reclamo?: SortOrder
    id_objeto?: SortOrderInput | SortOrder
    atendido_por?: SortOrder
    rut_reclamante?: SortOrder
    nombre_reclamante?: SortOrder
    evidencia_identidad?: SortOrder
    evidencia_propiedad?: SortOrder
    estado?: SortOrder
    motivo_decision?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    entregado_en?: SortOrderInput | SortOrder
    numero_comprobante?: SortOrderInput | SortOrder
    _count?: ReclamoCountOrderByAggregateInput
    _avg?: ReclamoAvgOrderByAggregateInput
    _max?: ReclamoMaxOrderByAggregateInput
    _min?: ReclamoMinOrderByAggregateInput
    _sum?: ReclamoSumOrderByAggregateInput
  }

  export type ReclamoScalarWhereWithAggregatesInput = {
    AND?: ReclamoScalarWhereWithAggregatesInput | ReclamoScalarWhereWithAggregatesInput[]
    OR?: ReclamoScalarWhereWithAggregatesInput[]
    NOT?: ReclamoScalarWhereWithAggregatesInput | ReclamoScalarWhereWithAggregatesInput[]
    id_reclamo?: BigIntWithAggregatesFilter<"Reclamo"> | bigint | number
    id_objeto?: BigIntNullableWithAggregatesFilter<"Reclamo"> | bigint | number | null
    atendido_por?: BigIntWithAggregatesFilter<"Reclamo"> | bigint | number
    rut_reclamante?: StringWithAggregatesFilter<"Reclamo"> | string
    nombre_reclamante?: StringWithAggregatesFilter<"Reclamo"> | string
    evidencia_identidad?: StringWithAggregatesFilter<"Reclamo"> | string
    evidencia_propiedad?: StringWithAggregatesFilter<"Reclamo"> | string
    estado?: StringWithAggregatesFilter<"Reclamo"> | string
    motivo_decision?: StringNullableWithAggregatesFilter<"Reclamo"> | string | null
    creado_en?: DateTimeWithAggregatesFilter<"Reclamo"> | Date | string
    entregado_en?: DateTimeNullableWithAggregatesFilter<"Reclamo"> | Date | string | null
    numero_comprobante?: StringNullableWithAggregatesFilter<"Reclamo"> | string | null
  }

  export type ActaDestruccionWhereInput = {
    AND?: ActaDestruccionWhereInput | ActaDestruccionWhereInput[]
    OR?: ActaDestruccionWhereInput[]
    NOT?: ActaDestruccionWhereInput | ActaDestruccionWhereInput[]
    id_acta?: BigIntFilter<"ActaDestruccion"> | bigint | number
    numero_acta?: StringFilter<"ActaDestruccion"> | string
    responsable?: BigIntFilter<"ActaDestruccion"> | bigint | number
    ejecutada_en?: DateTimeFilter<"ActaDestruccion"> | Date | string
    archivo_url?: StringFilter<"ActaDestruccion"> | string
    objetos?: ObjetoListRelationFilter
    firmante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ActaDestruccionOrderByWithRelationInput = {
    id_acta?: SortOrder
    numero_acta?: SortOrder
    responsable?: SortOrder
    ejecutada_en?: SortOrder
    archivo_url?: SortOrder
    objetos?: ObjetoOrderByRelationAggregateInput
    firmante?: UsuarioOrderByWithRelationInput
  }

  export type ActaDestruccionWhereUniqueInput = Prisma.AtLeast<{
    id_acta?: bigint | number
    numero_acta?: string
    AND?: ActaDestruccionWhereInput | ActaDestruccionWhereInput[]
    OR?: ActaDestruccionWhereInput[]
    NOT?: ActaDestruccionWhereInput | ActaDestruccionWhereInput[]
    responsable?: BigIntFilter<"ActaDestruccion"> | bigint | number
    ejecutada_en?: DateTimeFilter<"ActaDestruccion"> | Date | string
    archivo_url?: StringFilter<"ActaDestruccion"> | string
    objetos?: ObjetoListRelationFilter
    firmante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_acta" | "numero_acta">

  export type ActaDestruccionOrderByWithAggregationInput = {
    id_acta?: SortOrder
    numero_acta?: SortOrder
    responsable?: SortOrder
    ejecutada_en?: SortOrder
    archivo_url?: SortOrder
    _count?: ActaDestruccionCountOrderByAggregateInput
    _avg?: ActaDestruccionAvgOrderByAggregateInput
    _max?: ActaDestruccionMaxOrderByAggregateInput
    _min?: ActaDestruccionMinOrderByAggregateInput
    _sum?: ActaDestruccionSumOrderByAggregateInput
  }

  export type ActaDestruccionScalarWhereWithAggregatesInput = {
    AND?: ActaDestruccionScalarWhereWithAggregatesInput | ActaDestruccionScalarWhereWithAggregatesInput[]
    OR?: ActaDestruccionScalarWhereWithAggregatesInput[]
    NOT?: ActaDestruccionScalarWhereWithAggregatesInput | ActaDestruccionScalarWhereWithAggregatesInput[]
    id_acta?: BigIntWithAggregatesFilter<"ActaDestruccion"> | bigint | number
    numero_acta?: StringWithAggregatesFilter<"ActaDestruccion"> | string
    responsable?: BigIntWithAggregatesFilter<"ActaDestruccion"> | bigint | number
    ejecutada_en?: DateTimeWithAggregatesFilter<"ActaDestruccion"> | Date | string
    archivo_url?: StringWithAggregatesFilter<"ActaDestruccion"> | string
  }

  export type BitacoraWhereInput = {
    AND?: BitacoraWhereInput | BitacoraWhereInput[]
    OR?: BitacoraWhereInput[]
    NOT?: BitacoraWhereInput | BitacoraWhereInput[]
    id_evento?: BigIntFilter<"Bitacora"> | bigint | number
    id_usuario?: BigIntNullableFilter<"Bitacora"> | bigint | number | null
    accion?: StringFilter<"Bitacora"> | string
    recurso?: StringFilter<"Bitacora"> | string
    resultado?: StringFilter<"Bitacora"> | string
    registrado_en?: DateTimeFilter<"Bitacora"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type BitacoraOrderByWithRelationInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    accion?: SortOrder
    recurso?: SortOrder
    resultado?: SortOrder
    registrado_en?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type BitacoraWhereUniqueInput = Prisma.AtLeast<{
    id_evento?: bigint | number
    AND?: BitacoraWhereInput | BitacoraWhereInput[]
    OR?: BitacoraWhereInput[]
    NOT?: BitacoraWhereInput | BitacoraWhereInput[]
    id_usuario?: BigIntNullableFilter<"Bitacora"> | bigint | number | null
    accion?: StringFilter<"Bitacora"> | string
    recurso?: StringFilter<"Bitacora"> | string
    resultado?: StringFilter<"Bitacora"> | string
    registrado_en?: DateTimeFilter<"Bitacora"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id_evento">

  export type BitacoraOrderByWithAggregationInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    accion?: SortOrder
    recurso?: SortOrder
    resultado?: SortOrder
    registrado_en?: SortOrder
    _count?: BitacoraCountOrderByAggregateInput
    _avg?: BitacoraAvgOrderByAggregateInput
    _max?: BitacoraMaxOrderByAggregateInput
    _min?: BitacoraMinOrderByAggregateInput
    _sum?: BitacoraSumOrderByAggregateInput
  }

  export type BitacoraScalarWhereWithAggregatesInput = {
    AND?: BitacoraScalarWhereWithAggregatesInput | BitacoraScalarWhereWithAggregatesInput[]
    OR?: BitacoraScalarWhereWithAggregatesInput[]
    NOT?: BitacoraScalarWhereWithAggregatesInput | BitacoraScalarWhereWithAggregatesInput[]
    id_evento?: BigIntWithAggregatesFilter<"Bitacora"> | bigint | number
    id_usuario?: BigIntNullableWithAggregatesFilter<"Bitacora"> | bigint | number | null
    accion?: StringWithAggregatesFilter<"Bitacora"> | string
    recurso?: StringWithAggregatesFilter<"Bitacora"> | string
    resultado?: StringWithAggregatesFilter<"Bitacora"> | string
    registrado_en?: DateTimeWithAggregatesFilter<"Bitacora"> | Date | string
  }

  export type UsuarioCreateInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    activo?: boolean
    creado_en?: Date | string
    punto?: PuntoAcopioCreateNestedOneWithoutEncargadosInput
    objetosRegistrados?: ObjetoCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    id_punto?: bigint | number | null
    activo?: boolean
    creado_en?: Date | string
    objetosRegistrados?: ObjetoUncheckedCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaUncheckedCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoUncheckedCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionUncheckedCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    punto?: PuntoAcopioUpdateOneWithoutEncargadosNestedInput
    objetosRegistrados?: ObjetoUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    id_punto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    objetosRegistrados?: ObjetoUncheckedUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUncheckedUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUncheckedUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUncheckedUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    id_punto?: bigint | number | null
    activo?: boolean
    creado_en?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    id_punto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoAcopioCreateInput = {
    id_punto?: bigint | number
    nombre: string
    ubicacion: string
    tipo: string
    publicado?: boolean
    habilitado?: boolean
    encargados?: UsuarioCreateNestedManyWithoutPuntoInput
    objetos?: ObjetoCreateNestedManyWithoutPuntoInput
  }

  export type PuntoAcopioUncheckedCreateInput = {
    id_punto?: bigint | number
    nombre: string
    ubicacion: string
    tipo: string
    publicado?: boolean
    habilitado?: boolean
    encargados?: UsuarioUncheckedCreateNestedManyWithoutPuntoInput
    objetos?: ObjetoUncheckedCreateNestedManyWithoutPuntoInput
  }

  export type PuntoAcopioUpdateInput = {
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    encargados?: UsuarioUpdateManyWithoutPuntoNestedInput
    objetos?: ObjetoUpdateManyWithoutPuntoNestedInput
  }

  export type PuntoAcopioUncheckedUpdateInput = {
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    encargados?: UsuarioUncheckedUpdateManyWithoutPuntoNestedInput
    objetos?: ObjetoUncheckedUpdateManyWithoutPuntoNestedInput
  }

  export type PuntoAcopioCreateManyInput = {
    id_punto?: bigint | number
    nombre: string
    ubicacion: string
    tipo: string
    publicado?: boolean
    habilitado?: boolean
  }

  export type PuntoAcopioUpdateManyMutationInput = {
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    habilitado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PuntoAcopioUncheckedUpdateManyInput = {
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    habilitado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriaCreateInput = {
    nombre: string
    objetos?: ObjetoCreateNestedManyWithoutCategoriaInput
    reportes?: ReportePerdidaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id_categoria?: number
    nombre: string
    objetos?: ObjetoUncheckedCreateNestedManyWithoutCategoriaInput
    reportes?: ReportePerdidaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    objetos?: ObjetoUpdateManyWithoutCategoriaNestedInput
    reportes?: ReportePerdidaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetos?: ObjetoUncheckedUpdateManyWithoutCategoriaNestedInput
    reportes?: ReportePerdidaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id_categoria?: number
    nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ObjetoCreateInput = {
    id_objeto?: bigint | number
    codigo: string
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    punto: PuntoAcopioCreateNestedOneWithoutObjetosInput
    categoria: CategoriaCreateNestedOneWithoutObjetosInput
    registrador: UsuarioCreateNestedOneWithoutObjetosRegistradosInput
    fotografias?: FotografiaCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoCreateNestedManyWithoutObjetoInput
    acta?: ActaDestruccionCreateNestedOneWithoutObjetosInput
  }

  export type ObjetoUncheckedCreateInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    id_punto: bigint | number
    registrado_por: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    fotografias?: FotografiaUncheckedCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoUncheckedCreateNestedManyWithoutObjetoInput
  }

  export type ObjetoUpdateInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    punto?: PuntoAcopioUpdateOneRequiredWithoutObjetosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutObjetosNestedInput
    registrador?: UsuarioUpdateOneRequiredWithoutObjetosRegistradosNestedInput
    fotografias?: FotografiaUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUpdateManyWithoutObjetoNestedInput
    acta?: ActaDestruccionUpdateOneWithoutObjetosNestedInput
  }

  export type ObjetoUncheckedUpdateInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotografias?: FotografiaUncheckedUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUncheckedUpdateManyWithoutObjetoNestedInput
  }

  export type ObjetoCreateManyInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    id_punto: bigint | number
    registrado_por: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
  }

  export type ObjetoUpdateManyMutationInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObjetoUncheckedUpdateManyInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FotografiaCreateInput = {
    posicion: number
    archivo_url: string
    objeto: ObjetoCreateNestedOneWithoutFotografiasInput
  }

  export type FotografiaUncheckedCreateInput = {
    id_objeto: bigint | number
    posicion: number
    archivo_url: string
  }

  export type FotografiaUpdateInput = {
    posicion?: IntFieldUpdateOperationsInput | number
    archivo_url?: StringFieldUpdateOperationsInput | string
    objeto?: ObjetoUpdateOneRequiredWithoutFotografiasNestedInput
  }

  export type FotografiaUncheckedUpdateInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    posicion?: IntFieldUpdateOperationsInput | number
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type FotografiaCreateManyInput = {
    id_objeto: bigint | number
    posicion: number
    archivo_url: string
  }

  export type FotografiaUpdateManyMutationInput = {
    posicion?: IntFieldUpdateOperationsInput | number
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type FotografiaUncheckedUpdateManyInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    posicion?: IntFieldUpdateOperationsInput | number
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type ReportePerdidaCreateInput = {
    id_reporte?: bigint | number
    descripcion: string
    perdido_en: Date | string
    lugar_perdida: string
    estado?: string
    creado_en?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutReportesInput
    usuario: UsuarioCreateNestedOneWithoutReportesInput
  }

  export type ReportePerdidaUncheckedCreateInput = {
    id_reporte?: bigint | number
    id_usuario: bigint | number
    id_categoria?: number | null
    descripcion: string
    perdido_en: Date | string
    lugar_perdida: string
    estado?: string
    creado_en?: Date | string
  }

  export type ReportePerdidaUpdateInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutReportesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutReportesNestedInput
  }

  export type ReportePerdidaUncheckedUpdateInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportePerdidaCreateManyInput = {
    id_reporte?: bigint | number
    id_usuario: bigint | number
    id_categoria?: number | null
    descripcion: string
    perdido_en: Date | string
    lugar_perdida: string
    estado?: string
    creado_en?: Date | string
  }

  export type ReportePerdidaUpdateManyMutationInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportePerdidaUncheckedUpdateManyInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReclamoCreateInput = {
    id_reclamo?: bigint | number
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado?: string
    motivo_decision?: string | null
    creado_en?: Date | string
    entregado_en?: Date | string | null
    numero_comprobante?: string | null
    objeto?: ObjetoCreateNestedOneWithoutReclamosInput
    encargado: UsuarioCreateNestedOneWithoutReclamosAtendidosInput
  }

  export type ReclamoUncheckedCreateInput = {
    id_reclamo?: bigint | number
    id_objeto?: bigint | number | null
    atendido_por: bigint | number
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado?: string
    motivo_decision?: string | null
    creado_en?: Date | string
    entregado_en?: Date | string | null
    numero_comprobante?: string | null
  }

  export type ReclamoUpdateInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
    objeto?: ObjetoUpdateOneWithoutReclamosNestedInput
    encargado?: UsuarioUpdateOneRequiredWithoutReclamosAtendidosNestedInput
  }

  export type ReclamoUncheckedUpdateInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    id_objeto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    atendido_por?: BigIntFieldUpdateOperationsInput | bigint | number
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReclamoCreateManyInput = {
    id_reclamo?: bigint | number
    id_objeto?: bigint | number | null
    atendido_por: bigint | number
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado?: string
    motivo_decision?: string | null
    creado_en?: Date | string
    entregado_en?: Date | string | null
    numero_comprobante?: string | null
  }

  export type ReclamoUpdateManyMutationInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReclamoUncheckedUpdateManyInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    id_objeto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    atendido_por?: BigIntFieldUpdateOperationsInput | bigint | number
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActaDestruccionCreateInput = {
    id_acta?: bigint | number
    numero_acta: string
    ejecutada_en: Date | string
    archivo_url: string
    objetos?: ObjetoCreateNestedManyWithoutActaInput
    firmante: UsuarioCreateNestedOneWithoutActasFirmadasInput
  }

  export type ActaDestruccionUncheckedCreateInput = {
    id_acta?: bigint | number
    numero_acta: string
    responsable: bigint | number
    ejecutada_en: Date | string
    archivo_url: string
    objetos?: ObjetoUncheckedCreateNestedManyWithoutActaInput
  }

  export type ActaDestruccionUpdateInput = {
    id_acta?: BigIntFieldUpdateOperationsInput | bigint | number
    numero_acta?: StringFieldUpdateOperationsInput | string
    ejecutada_en?: DateTimeFieldUpdateOperationsInput | Date | string
    archivo_url?: StringFieldUpdateOperationsInput | string
    objetos?: ObjetoUpdateManyWithoutActaNestedInput
    firmante?: UsuarioUpdateOneRequiredWithoutActasFirmadasNestedInput
  }

  export type ActaDestruccionUncheckedUpdateInput = {
    id_acta?: BigIntFieldUpdateOperationsInput | bigint | number
    numero_acta?: StringFieldUpdateOperationsInput | string
    responsable?: BigIntFieldUpdateOperationsInput | bigint | number
    ejecutada_en?: DateTimeFieldUpdateOperationsInput | Date | string
    archivo_url?: StringFieldUpdateOperationsInput | string
    objetos?: ObjetoUncheckedUpdateManyWithoutActaNestedInput
  }

  export type ActaDestruccionCreateManyInput = {
    id_acta?: bigint | number
    numero_acta: string
    responsable: bigint | number
    ejecutada_en: Date | string
    archivo_url: string
  }

  export type ActaDestruccionUpdateManyMutationInput = {
    id_acta?: BigIntFieldUpdateOperationsInput | bigint | number
    numero_acta?: StringFieldUpdateOperationsInput | string
    ejecutada_en?: DateTimeFieldUpdateOperationsInput | Date | string
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type ActaDestruccionUncheckedUpdateManyInput = {
    id_acta?: BigIntFieldUpdateOperationsInput | bigint | number
    numero_acta?: StringFieldUpdateOperationsInput | string
    responsable?: BigIntFieldUpdateOperationsInput | bigint | number
    ejecutada_en?: DateTimeFieldUpdateOperationsInput | Date | string
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type BitacoraCreateInput = {
    id_evento?: bigint | number
    accion: string
    recurso: string
    resultado: string
    registrado_en?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutEventosInput
  }

  export type BitacoraUncheckedCreateInput = {
    id_evento?: bigint | number
    id_usuario?: bigint | number | null
    accion: string
    recurso: string
    resultado: string
    registrado_en?: Date | string
  }

  export type BitacoraUpdateInput = {
    id_evento?: BigIntFieldUpdateOperationsInput | bigint | number
    accion?: StringFieldUpdateOperationsInput | string
    recurso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutEventosNestedInput
  }

  export type BitacoraUncheckedUpdateInput = {
    id_evento?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    accion?: StringFieldUpdateOperationsInput | string
    recurso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BitacoraCreateManyInput = {
    id_evento?: bigint | number
    id_usuario?: bigint | number | null
    accion: string
    recurso: string
    resultado: string
    registrado_en?: Date | string
  }

  export type BitacoraUpdateManyMutationInput = {
    id_evento?: BigIntFieldUpdateOperationsInput | bigint | number
    accion?: StringFieldUpdateOperationsInput | string
    recurso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BitacoraUncheckedUpdateManyInput = {
    id_evento?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    accion?: StringFieldUpdateOperationsInput | string
    recurso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PuntoAcopioNullableScalarRelationFilter = {
    is?: PuntoAcopioWhereInput | null
    isNot?: PuntoAcopioWhereInput | null
  }

  export type ObjetoListRelationFilter = {
    every?: ObjetoWhereInput
    some?: ObjetoWhereInput
    none?: ObjetoWhereInput
  }

  export type ReportePerdidaListRelationFilter = {
    every?: ReportePerdidaWhereInput
    some?: ReportePerdidaWhereInput
    none?: ReportePerdidaWhereInput
  }

  export type ReclamoListRelationFilter = {
    every?: ReclamoWhereInput
    some?: ReclamoWhereInput
    none?: ReclamoWhereInput
  }

  export type ActaDestruccionListRelationFilter = {
    every?: ActaDestruccionWhereInput
    some?: ActaDestruccionWhereInput
    none?: ActaDestruccionWhereInput
  }

  export type BitacoraListRelationFilter = {
    every?: BitacoraWhereInput
    some?: BitacoraWhereInput
    none?: BitacoraWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ObjetoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportePerdidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReclamoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActaDestruccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BitacoraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    correo_institucional?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    id_punto?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_punto?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    correo_institucional?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    id_punto?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    correo_institucional?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    id_punto?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_punto?: SortOrder
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PuntoAcopioCountOrderByAggregateInput = {
    id_punto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    tipo?: SortOrder
    publicado?: SortOrder
    habilitado?: SortOrder
  }

  export type PuntoAcopioAvgOrderByAggregateInput = {
    id_punto?: SortOrder
  }

  export type PuntoAcopioMaxOrderByAggregateInput = {
    id_punto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    tipo?: SortOrder
    publicado?: SortOrder
    habilitado?: SortOrder
  }

  export type PuntoAcopioMinOrderByAggregateInput = {
    id_punto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    tipo?: SortOrder
    publicado?: SortOrder
    habilitado?: SortOrder
  }

  export type PuntoAcopioSumOrderByAggregateInput = {
    id_punto?: SortOrder
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

  export type CategoriaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
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

  export type PuntoAcopioScalarRelationFilter = {
    is?: PuntoAcopioWhereInput
    isNot?: PuntoAcopioWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type FotografiaListRelationFilter = {
    every?: FotografiaWhereInput
    some?: FotografiaWhereInput
    none?: FotografiaWhereInput
  }

  export type ActaDestruccionNullableScalarRelationFilter = {
    is?: ActaDestruccionWhereInput | null
    isNot?: ActaDestruccionWhereInput | null
  }

  export type FotografiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObjetoCountOrderByAggregateInput = {
    id_objeto?: SortOrder
    codigo?: SortOrder
    id_categoria?: SortOrder
    id_punto?: SortOrder
    registrado_por?: SortOrder
    id_acta?: SortOrder
    descripcion?: SortOrder
    hallado_en?: SortOrder
    lugar_hallazgo?: SortOrder
    registrado_en?: SortOrder
    estado?: SortOrder
    publicado?: SortOrder
    alerta_enviada_en?: SortOrder
  }

  export type ObjetoAvgOrderByAggregateInput = {
    id_objeto?: SortOrder
    id_categoria?: SortOrder
    id_punto?: SortOrder
    registrado_por?: SortOrder
    id_acta?: SortOrder
  }

  export type ObjetoMaxOrderByAggregateInput = {
    id_objeto?: SortOrder
    codigo?: SortOrder
    id_categoria?: SortOrder
    id_punto?: SortOrder
    registrado_por?: SortOrder
    id_acta?: SortOrder
    descripcion?: SortOrder
    hallado_en?: SortOrder
    lugar_hallazgo?: SortOrder
    registrado_en?: SortOrder
    estado?: SortOrder
    publicado?: SortOrder
    alerta_enviada_en?: SortOrder
  }

  export type ObjetoMinOrderByAggregateInput = {
    id_objeto?: SortOrder
    codigo?: SortOrder
    id_categoria?: SortOrder
    id_punto?: SortOrder
    registrado_por?: SortOrder
    id_acta?: SortOrder
    descripcion?: SortOrder
    hallado_en?: SortOrder
    lugar_hallazgo?: SortOrder
    registrado_en?: SortOrder
    estado?: SortOrder
    publicado?: SortOrder
    alerta_enviada_en?: SortOrder
  }

  export type ObjetoSumOrderByAggregateInput = {
    id_objeto?: SortOrder
    id_categoria?: SortOrder
    id_punto?: SortOrder
    registrado_por?: SortOrder
    id_acta?: SortOrder
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

  export type ObjetoScalarRelationFilter = {
    is?: ObjetoWhereInput
    isNot?: ObjetoWhereInput
  }

  export type FotografiaId_objetoPosicionCompoundUniqueInput = {
    id_objeto: bigint | number
    posicion: number
  }

  export type FotografiaCountOrderByAggregateInput = {
    id_objeto?: SortOrder
    posicion?: SortOrder
    archivo_url?: SortOrder
  }

  export type FotografiaAvgOrderByAggregateInput = {
    id_objeto?: SortOrder
    posicion?: SortOrder
  }

  export type FotografiaMaxOrderByAggregateInput = {
    id_objeto?: SortOrder
    posicion?: SortOrder
    archivo_url?: SortOrder
  }

  export type FotografiaMinOrderByAggregateInput = {
    id_objeto?: SortOrder
    posicion?: SortOrder
    archivo_url?: SortOrder
  }

  export type FotografiaSumOrderByAggregateInput = {
    id_objeto?: SortOrder
    posicion?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type ReportePerdidaCountOrderByAggregateInput = {
    id_reporte?: SortOrder
    id_usuario?: SortOrder
    id_categoria?: SortOrder
    descripcion?: SortOrder
    perdido_en?: SortOrder
    lugar_perdida?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
  }

  export type ReportePerdidaAvgOrderByAggregateInput = {
    id_reporte?: SortOrder
    id_usuario?: SortOrder
    id_categoria?: SortOrder
  }

  export type ReportePerdidaMaxOrderByAggregateInput = {
    id_reporte?: SortOrder
    id_usuario?: SortOrder
    id_categoria?: SortOrder
    descripcion?: SortOrder
    perdido_en?: SortOrder
    lugar_perdida?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
  }

  export type ReportePerdidaMinOrderByAggregateInput = {
    id_reporte?: SortOrder
    id_usuario?: SortOrder
    id_categoria?: SortOrder
    descripcion?: SortOrder
    perdido_en?: SortOrder
    lugar_perdida?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
  }

  export type ReportePerdidaSumOrderByAggregateInput = {
    id_reporte?: SortOrder
    id_usuario?: SortOrder
    id_categoria?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type ObjetoNullableScalarRelationFilter = {
    is?: ObjetoWhereInput | null
    isNot?: ObjetoWhereInput | null
  }

  export type ReclamoCountOrderByAggregateInput = {
    id_reclamo?: SortOrder
    id_objeto?: SortOrder
    atendido_por?: SortOrder
    rut_reclamante?: SortOrder
    nombre_reclamante?: SortOrder
    evidencia_identidad?: SortOrder
    evidencia_propiedad?: SortOrder
    estado?: SortOrder
    motivo_decision?: SortOrder
    creado_en?: SortOrder
    entregado_en?: SortOrder
    numero_comprobante?: SortOrder
  }

  export type ReclamoAvgOrderByAggregateInput = {
    id_reclamo?: SortOrder
    id_objeto?: SortOrder
    atendido_por?: SortOrder
  }

  export type ReclamoMaxOrderByAggregateInput = {
    id_reclamo?: SortOrder
    id_objeto?: SortOrder
    atendido_por?: SortOrder
    rut_reclamante?: SortOrder
    nombre_reclamante?: SortOrder
    evidencia_identidad?: SortOrder
    evidencia_propiedad?: SortOrder
    estado?: SortOrder
    motivo_decision?: SortOrder
    creado_en?: SortOrder
    entregado_en?: SortOrder
    numero_comprobante?: SortOrder
  }

  export type ReclamoMinOrderByAggregateInput = {
    id_reclamo?: SortOrder
    id_objeto?: SortOrder
    atendido_por?: SortOrder
    rut_reclamante?: SortOrder
    nombre_reclamante?: SortOrder
    evidencia_identidad?: SortOrder
    evidencia_propiedad?: SortOrder
    estado?: SortOrder
    motivo_decision?: SortOrder
    creado_en?: SortOrder
    entregado_en?: SortOrder
    numero_comprobante?: SortOrder
  }

  export type ReclamoSumOrderByAggregateInput = {
    id_reclamo?: SortOrder
    id_objeto?: SortOrder
    atendido_por?: SortOrder
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

  export type ActaDestruccionCountOrderByAggregateInput = {
    id_acta?: SortOrder
    numero_acta?: SortOrder
    responsable?: SortOrder
    ejecutada_en?: SortOrder
    archivo_url?: SortOrder
  }

  export type ActaDestruccionAvgOrderByAggregateInput = {
    id_acta?: SortOrder
    responsable?: SortOrder
  }

  export type ActaDestruccionMaxOrderByAggregateInput = {
    id_acta?: SortOrder
    numero_acta?: SortOrder
    responsable?: SortOrder
    ejecutada_en?: SortOrder
    archivo_url?: SortOrder
  }

  export type ActaDestruccionMinOrderByAggregateInput = {
    id_acta?: SortOrder
    numero_acta?: SortOrder
    responsable?: SortOrder
    ejecutada_en?: SortOrder
    archivo_url?: SortOrder
  }

  export type ActaDestruccionSumOrderByAggregateInput = {
    id_acta?: SortOrder
    responsable?: SortOrder
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type BitacoraCountOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    recurso?: SortOrder
    resultado?: SortOrder
    registrado_en?: SortOrder
  }

  export type BitacoraAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
  }

  export type BitacoraMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    recurso?: SortOrder
    resultado?: SortOrder
    registrado_en?: SortOrder
  }

  export type BitacoraMinOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    recurso?: SortOrder
    resultado?: SortOrder
    registrado_en?: SortOrder
  }

  export type BitacoraSumOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
  }

  export type PuntoAcopioCreateNestedOneWithoutEncargadosInput = {
    create?: XOR<PuntoAcopioCreateWithoutEncargadosInput, PuntoAcopioUncheckedCreateWithoutEncargadosInput>
    connectOrCreate?: PuntoAcopioCreateOrConnectWithoutEncargadosInput
    connect?: PuntoAcopioWhereUniqueInput
  }

  export type ObjetoCreateNestedManyWithoutRegistradorInput = {
    create?: XOR<ObjetoCreateWithoutRegistradorInput, ObjetoUncheckedCreateWithoutRegistradorInput> | ObjetoCreateWithoutRegistradorInput[] | ObjetoUncheckedCreateWithoutRegistradorInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutRegistradorInput | ObjetoCreateOrConnectWithoutRegistradorInput[]
    createMany?: ObjetoCreateManyRegistradorInputEnvelope
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
  }

  export type ReportePerdidaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReportePerdidaCreateWithoutUsuarioInput, ReportePerdidaUncheckedCreateWithoutUsuarioInput> | ReportePerdidaCreateWithoutUsuarioInput[] | ReportePerdidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReportePerdidaCreateOrConnectWithoutUsuarioInput | ReportePerdidaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReportePerdidaCreateManyUsuarioInputEnvelope
    connect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
  }

  export type ReclamoCreateNestedManyWithoutEncargadoInput = {
    create?: XOR<ReclamoCreateWithoutEncargadoInput, ReclamoUncheckedCreateWithoutEncargadoInput> | ReclamoCreateWithoutEncargadoInput[] | ReclamoUncheckedCreateWithoutEncargadoInput[]
    connectOrCreate?: ReclamoCreateOrConnectWithoutEncargadoInput | ReclamoCreateOrConnectWithoutEncargadoInput[]
    createMany?: ReclamoCreateManyEncargadoInputEnvelope
    connect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
  }

  export type ActaDestruccionCreateNestedManyWithoutFirmanteInput = {
    create?: XOR<ActaDestruccionCreateWithoutFirmanteInput, ActaDestruccionUncheckedCreateWithoutFirmanteInput> | ActaDestruccionCreateWithoutFirmanteInput[] | ActaDestruccionUncheckedCreateWithoutFirmanteInput[]
    connectOrCreate?: ActaDestruccionCreateOrConnectWithoutFirmanteInput | ActaDestruccionCreateOrConnectWithoutFirmanteInput[]
    createMany?: ActaDestruccionCreateManyFirmanteInputEnvelope
    connect?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
  }

  export type BitacoraCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput> | BitacoraCreateWithoutUsuarioInput[] | BitacoraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutUsuarioInput | BitacoraCreateOrConnectWithoutUsuarioInput[]
    createMany?: BitacoraCreateManyUsuarioInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type ObjetoUncheckedCreateNestedManyWithoutRegistradorInput = {
    create?: XOR<ObjetoCreateWithoutRegistradorInput, ObjetoUncheckedCreateWithoutRegistradorInput> | ObjetoCreateWithoutRegistradorInput[] | ObjetoUncheckedCreateWithoutRegistradorInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutRegistradorInput | ObjetoCreateOrConnectWithoutRegistradorInput[]
    createMany?: ObjetoCreateManyRegistradorInputEnvelope
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
  }

  export type ReportePerdidaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReportePerdidaCreateWithoutUsuarioInput, ReportePerdidaUncheckedCreateWithoutUsuarioInput> | ReportePerdidaCreateWithoutUsuarioInput[] | ReportePerdidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReportePerdidaCreateOrConnectWithoutUsuarioInput | ReportePerdidaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReportePerdidaCreateManyUsuarioInputEnvelope
    connect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
  }

  export type ReclamoUncheckedCreateNestedManyWithoutEncargadoInput = {
    create?: XOR<ReclamoCreateWithoutEncargadoInput, ReclamoUncheckedCreateWithoutEncargadoInput> | ReclamoCreateWithoutEncargadoInput[] | ReclamoUncheckedCreateWithoutEncargadoInput[]
    connectOrCreate?: ReclamoCreateOrConnectWithoutEncargadoInput | ReclamoCreateOrConnectWithoutEncargadoInput[]
    createMany?: ReclamoCreateManyEncargadoInputEnvelope
    connect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
  }

  export type ActaDestruccionUncheckedCreateNestedManyWithoutFirmanteInput = {
    create?: XOR<ActaDestruccionCreateWithoutFirmanteInput, ActaDestruccionUncheckedCreateWithoutFirmanteInput> | ActaDestruccionCreateWithoutFirmanteInput[] | ActaDestruccionUncheckedCreateWithoutFirmanteInput[]
    connectOrCreate?: ActaDestruccionCreateOrConnectWithoutFirmanteInput | ActaDestruccionCreateOrConnectWithoutFirmanteInput[]
    createMany?: ActaDestruccionCreateManyFirmanteInputEnvelope
    connect?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
  }

  export type BitacoraUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput> | BitacoraCreateWithoutUsuarioInput[] | BitacoraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutUsuarioInput | BitacoraCreateOrConnectWithoutUsuarioInput[]
    createMany?: BitacoraCreateManyUsuarioInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PuntoAcopioUpdateOneWithoutEncargadosNestedInput = {
    create?: XOR<PuntoAcopioCreateWithoutEncargadosInput, PuntoAcopioUncheckedCreateWithoutEncargadosInput>
    connectOrCreate?: PuntoAcopioCreateOrConnectWithoutEncargadosInput
    upsert?: PuntoAcopioUpsertWithoutEncargadosInput
    disconnect?: PuntoAcopioWhereInput | boolean
    delete?: PuntoAcopioWhereInput | boolean
    connect?: PuntoAcopioWhereUniqueInput
    update?: XOR<XOR<PuntoAcopioUpdateToOneWithWhereWithoutEncargadosInput, PuntoAcopioUpdateWithoutEncargadosInput>, PuntoAcopioUncheckedUpdateWithoutEncargadosInput>
  }

  export type ObjetoUpdateManyWithoutRegistradorNestedInput = {
    create?: XOR<ObjetoCreateWithoutRegistradorInput, ObjetoUncheckedCreateWithoutRegistradorInput> | ObjetoCreateWithoutRegistradorInput[] | ObjetoUncheckedCreateWithoutRegistradorInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutRegistradorInput | ObjetoCreateOrConnectWithoutRegistradorInput[]
    upsert?: ObjetoUpsertWithWhereUniqueWithoutRegistradorInput | ObjetoUpsertWithWhereUniqueWithoutRegistradorInput[]
    createMany?: ObjetoCreateManyRegistradorInputEnvelope
    set?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    disconnect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    delete?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    update?: ObjetoUpdateWithWhereUniqueWithoutRegistradorInput | ObjetoUpdateWithWhereUniqueWithoutRegistradorInput[]
    updateMany?: ObjetoUpdateManyWithWhereWithoutRegistradorInput | ObjetoUpdateManyWithWhereWithoutRegistradorInput[]
    deleteMany?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
  }

  export type ReportePerdidaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReportePerdidaCreateWithoutUsuarioInput, ReportePerdidaUncheckedCreateWithoutUsuarioInput> | ReportePerdidaCreateWithoutUsuarioInput[] | ReportePerdidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReportePerdidaCreateOrConnectWithoutUsuarioInput | ReportePerdidaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReportePerdidaUpsertWithWhereUniqueWithoutUsuarioInput | ReportePerdidaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReportePerdidaCreateManyUsuarioInputEnvelope
    set?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    disconnect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    delete?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    connect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    update?: ReportePerdidaUpdateWithWhereUniqueWithoutUsuarioInput | ReportePerdidaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReportePerdidaUpdateManyWithWhereWithoutUsuarioInput | ReportePerdidaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReportePerdidaScalarWhereInput | ReportePerdidaScalarWhereInput[]
  }

  export type ReclamoUpdateManyWithoutEncargadoNestedInput = {
    create?: XOR<ReclamoCreateWithoutEncargadoInput, ReclamoUncheckedCreateWithoutEncargadoInput> | ReclamoCreateWithoutEncargadoInput[] | ReclamoUncheckedCreateWithoutEncargadoInput[]
    connectOrCreate?: ReclamoCreateOrConnectWithoutEncargadoInput | ReclamoCreateOrConnectWithoutEncargadoInput[]
    upsert?: ReclamoUpsertWithWhereUniqueWithoutEncargadoInput | ReclamoUpsertWithWhereUniqueWithoutEncargadoInput[]
    createMany?: ReclamoCreateManyEncargadoInputEnvelope
    set?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    disconnect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    delete?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    connect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    update?: ReclamoUpdateWithWhereUniqueWithoutEncargadoInput | ReclamoUpdateWithWhereUniqueWithoutEncargadoInput[]
    updateMany?: ReclamoUpdateManyWithWhereWithoutEncargadoInput | ReclamoUpdateManyWithWhereWithoutEncargadoInput[]
    deleteMany?: ReclamoScalarWhereInput | ReclamoScalarWhereInput[]
  }

  export type ActaDestruccionUpdateManyWithoutFirmanteNestedInput = {
    create?: XOR<ActaDestruccionCreateWithoutFirmanteInput, ActaDestruccionUncheckedCreateWithoutFirmanteInput> | ActaDestruccionCreateWithoutFirmanteInput[] | ActaDestruccionUncheckedCreateWithoutFirmanteInput[]
    connectOrCreate?: ActaDestruccionCreateOrConnectWithoutFirmanteInput | ActaDestruccionCreateOrConnectWithoutFirmanteInput[]
    upsert?: ActaDestruccionUpsertWithWhereUniqueWithoutFirmanteInput | ActaDestruccionUpsertWithWhereUniqueWithoutFirmanteInput[]
    createMany?: ActaDestruccionCreateManyFirmanteInputEnvelope
    set?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
    disconnect?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
    delete?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
    connect?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
    update?: ActaDestruccionUpdateWithWhereUniqueWithoutFirmanteInput | ActaDestruccionUpdateWithWhereUniqueWithoutFirmanteInput[]
    updateMany?: ActaDestruccionUpdateManyWithWhereWithoutFirmanteInput | ActaDestruccionUpdateManyWithWhereWithoutFirmanteInput[]
    deleteMany?: ActaDestruccionScalarWhereInput | ActaDestruccionScalarWhereInput[]
  }

  export type BitacoraUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput> | BitacoraCreateWithoutUsuarioInput[] | BitacoraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutUsuarioInput | BitacoraCreateOrConnectWithoutUsuarioInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutUsuarioInput | BitacoraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: BitacoraCreateManyUsuarioInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutUsuarioInput | BitacoraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutUsuarioInput | BitacoraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ObjetoUncheckedUpdateManyWithoutRegistradorNestedInput = {
    create?: XOR<ObjetoCreateWithoutRegistradorInput, ObjetoUncheckedCreateWithoutRegistradorInput> | ObjetoCreateWithoutRegistradorInput[] | ObjetoUncheckedCreateWithoutRegistradorInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutRegistradorInput | ObjetoCreateOrConnectWithoutRegistradorInput[]
    upsert?: ObjetoUpsertWithWhereUniqueWithoutRegistradorInput | ObjetoUpsertWithWhereUniqueWithoutRegistradorInput[]
    createMany?: ObjetoCreateManyRegistradorInputEnvelope
    set?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    disconnect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    delete?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    update?: ObjetoUpdateWithWhereUniqueWithoutRegistradorInput | ObjetoUpdateWithWhereUniqueWithoutRegistradorInput[]
    updateMany?: ObjetoUpdateManyWithWhereWithoutRegistradorInput | ObjetoUpdateManyWithWhereWithoutRegistradorInput[]
    deleteMany?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
  }

  export type ReportePerdidaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReportePerdidaCreateWithoutUsuarioInput, ReportePerdidaUncheckedCreateWithoutUsuarioInput> | ReportePerdidaCreateWithoutUsuarioInput[] | ReportePerdidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReportePerdidaCreateOrConnectWithoutUsuarioInput | ReportePerdidaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReportePerdidaUpsertWithWhereUniqueWithoutUsuarioInput | ReportePerdidaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReportePerdidaCreateManyUsuarioInputEnvelope
    set?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    disconnect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    delete?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    connect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    update?: ReportePerdidaUpdateWithWhereUniqueWithoutUsuarioInput | ReportePerdidaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReportePerdidaUpdateManyWithWhereWithoutUsuarioInput | ReportePerdidaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReportePerdidaScalarWhereInput | ReportePerdidaScalarWhereInput[]
  }

  export type ReclamoUncheckedUpdateManyWithoutEncargadoNestedInput = {
    create?: XOR<ReclamoCreateWithoutEncargadoInput, ReclamoUncheckedCreateWithoutEncargadoInput> | ReclamoCreateWithoutEncargadoInput[] | ReclamoUncheckedCreateWithoutEncargadoInput[]
    connectOrCreate?: ReclamoCreateOrConnectWithoutEncargadoInput | ReclamoCreateOrConnectWithoutEncargadoInput[]
    upsert?: ReclamoUpsertWithWhereUniqueWithoutEncargadoInput | ReclamoUpsertWithWhereUniqueWithoutEncargadoInput[]
    createMany?: ReclamoCreateManyEncargadoInputEnvelope
    set?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    disconnect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    delete?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    connect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    update?: ReclamoUpdateWithWhereUniqueWithoutEncargadoInput | ReclamoUpdateWithWhereUniqueWithoutEncargadoInput[]
    updateMany?: ReclamoUpdateManyWithWhereWithoutEncargadoInput | ReclamoUpdateManyWithWhereWithoutEncargadoInput[]
    deleteMany?: ReclamoScalarWhereInput | ReclamoScalarWhereInput[]
  }

  export type ActaDestruccionUncheckedUpdateManyWithoutFirmanteNestedInput = {
    create?: XOR<ActaDestruccionCreateWithoutFirmanteInput, ActaDestruccionUncheckedCreateWithoutFirmanteInput> | ActaDestruccionCreateWithoutFirmanteInput[] | ActaDestruccionUncheckedCreateWithoutFirmanteInput[]
    connectOrCreate?: ActaDestruccionCreateOrConnectWithoutFirmanteInput | ActaDestruccionCreateOrConnectWithoutFirmanteInput[]
    upsert?: ActaDestruccionUpsertWithWhereUniqueWithoutFirmanteInput | ActaDestruccionUpsertWithWhereUniqueWithoutFirmanteInput[]
    createMany?: ActaDestruccionCreateManyFirmanteInputEnvelope
    set?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
    disconnect?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
    delete?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
    connect?: ActaDestruccionWhereUniqueInput | ActaDestruccionWhereUniqueInput[]
    update?: ActaDestruccionUpdateWithWhereUniqueWithoutFirmanteInput | ActaDestruccionUpdateWithWhereUniqueWithoutFirmanteInput[]
    updateMany?: ActaDestruccionUpdateManyWithWhereWithoutFirmanteInput | ActaDestruccionUpdateManyWithWhereWithoutFirmanteInput[]
    deleteMany?: ActaDestruccionScalarWhereInput | ActaDestruccionScalarWhereInput[]
  }

  export type BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput> | BitacoraCreateWithoutUsuarioInput[] | BitacoraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutUsuarioInput | BitacoraCreateOrConnectWithoutUsuarioInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutUsuarioInput | BitacoraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: BitacoraCreateManyUsuarioInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutUsuarioInput | BitacoraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutUsuarioInput | BitacoraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutPuntoInput = {
    create?: XOR<UsuarioCreateWithoutPuntoInput, UsuarioUncheckedCreateWithoutPuntoInput> | UsuarioCreateWithoutPuntoInput[] | UsuarioUncheckedCreateWithoutPuntoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPuntoInput | UsuarioCreateOrConnectWithoutPuntoInput[]
    createMany?: UsuarioCreateManyPuntoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ObjetoCreateNestedManyWithoutPuntoInput = {
    create?: XOR<ObjetoCreateWithoutPuntoInput, ObjetoUncheckedCreateWithoutPuntoInput> | ObjetoCreateWithoutPuntoInput[] | ObjetoUncheckedCreateWithoutPuntoInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutPuntoInput | ObjetoCreateOrConnectWithoutPuntoInput[]
    createMany?: ObjetoCreateManyPuntoInputEnvelope
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutPuntoInput = {
    create?: XOR<UsuarioCreateWithoutPuntoInput, UsuarioUncheckedCreateWithoutPuntoInput> | UsuarioCreateWithoutPuntoInput[] | UsuarioUncheckedCreateWithoutPuntoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPuntoInput | UsuarioCreateOrConnectWithoutPuntoInput[]
    createMany?: UsuarioCreateManyPuntoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ObjetoUncheckedCreateNestedManyWithoutPuntoInput = {
    create?: XOR<ObjetoCreateWithoutPuntoInput, ObjetoUncheckedCreateWithoutPuntoInput> | ObjetoCreateWithoutPuntoInput[] | ObjetoUncheckedCreateWithoutPuntoInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutPuntoInput | ObjetoCreateOrConnectWithoutPuntoInput[]
    createMany?: ObjetoCreateManyPuntoInputEnvelope
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutPuntoNestedInput = {
    create?: XOR<UsuarioCreateWithoutPuntoInput, UsuarioUncheckedCreateWithoutPuntoInput> | UsuarioCreateWithoutPuntoInput[] | UsuarioUncheckedCreateWithoutPuntoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPuntoInput | UsuarioCreateOrConnectWithoutPuntoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPuntoInput | UsuarioUpsertWithWhereUniqueWithoutPuntoInput[]
    createMany?: UsuarioCreateManyPuntoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPuntoInput | UsuarioUpdateWithWhereUniqueWithoutPuntoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPuntoInput | UsuarioUpdateManyWithWhereWithoutPuntoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ObjetoUpdateManyWithoutPuntoNestedInput = {
    create?: XOR<ObjetoCreateWithoutPuntoInput, ObjetoUncheckedCreateWithoutPuntoInput> | ObjetoCreateWithoutPuntoInput[] | ObjetoUncheckedCreateWithoutPuntoInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutPuntoInput | ObjetoCreateOrConnectWithoutPuntoInput[]
    upsert?: ObjetoUpsertWithWhereUniqueWithoutPuntoInput | ObjetoUpsertWithWhereUniqueWithoutPuntoInput[]
    createMany?: ObjetoCreateManyPuntoInputEnvelope
    set?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    disconnect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    delete?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    update?: ObjetoUpdateWithWhereUniqueWithoutPuntoInput | ObjetoUpdateWithWhereUniqueWithoutPuntoInput[]
    updateMany?: ObjetoUpdateManyWithWhereWithoutPuntoInput | ObjetoUpdateManyWithWhereWithoutPuntoInput[]
    deleteMany?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutPuntoNestedInput = {
    create?: XOR<UsuarioCreateWithoutPuntoInput, UsuarioUncheckedCreateWithoutPuntoInput> | UsuarioCreateWithoutPuntoInput[] | UsuarioUncheckedCreateWithoutPuntoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPuntoInput | UsuarioCreateOrConnectWithoutPuntoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPuntoInput | UsuarioUpsertWithWhereUniqueWithoutPuntoInput[]
    createMany?: UsuarioCreateManyPuntoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPuntoInput | UsuarioUpdateWithWhereUniqueWithoutPuntoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPuntoInput | UsuarioUpdateManyWithWhereWithoutPuntoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ObjetoUncheckedUpdateManyWithoutPuntoNestedInput = {
    create?: XOR<ObjetoCreateWithoutPuntoInput, ObjetoUncheckedCreateWithoutPuntoInput> | ObjetoCreateWithoutPuntoInput[] | ObjetoUncheckedCreateWithoutPuntoInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutPuntoInput | ObjetoCreateOrConnectWithoutPuntoInput[]
    upsert?: ObjetoUpsertWithWhereUniqueWithoutPuntoInput | ObjetoUpsertWithWhereUniqueWithoutPuntoInput[]
    createMany?: ObjetoCreateManyPuntoInputEnvelope
    set?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    disconnect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    delete?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    update?: ObjetoUpdateWithWhereUniqueWithoutPuntoInput | ObjetoUpdateWithWhereUniqueWithoutPuntoInput[]
    updateMany?: ObjetoUpdateManyWithWhereWithoutPuntoInput | ObjetoUpdateManyWithWhereWithoutPuntoInput[]
    deleteMany?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
  }

  export type ObjetoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ObjetoCreateWithoutCategoriaInput, ObjetoUncheckedCreateWithoutCategoriaInput> | ObjetoCreateWithoutCategoriaInput[] | ObjetoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutCategoriaInput | ObjetoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ObjetoCreateManyCategoriaInputEnvelope
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
  }

  export type ReportePerdidaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ReportePerdidaCreateWithoutCategoriaInput, ReportePerdidaUncheckedCreateWithoutCategoriaInput> | ReportePerdidaCreateWithoutCategoriaInput[] | ReportePerdidaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ReportePerdidaCreateOrConnectWithoutCategoriaInput | ReportePerdidaCreateOrConnectWithoutCategoriaInput[]
    createMany?: ReportePerdidaCreateManyCategoriaInputEnvelope
    connect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
  }

  export type ObjetoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ObjetoCreateWithoutCategoriaInput, ObjetoUncheckedCreateWithoutCategoriaInput> | ObjetoCreateWithoutCategoriaInput[] | ObjetoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutCategoriaInput | ObjetoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ObjetoCreateManyCategoriaInputEnvelope
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
  }

  export type ReportePerdidaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ReportePerdidaCreateWithoutCategoriaInput, ReportePerdidaUncheckedCreateWithoutCategoriaInput> | ReportePerdidaCreateWithoutCategoriaInput[] | ReportePerdidaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ReportePerdidaCreateOrConnectWithoutCategoriaInput | ReportePerdidaCreateOrConnectWithoutCategoriaInput[]
    createMany?: ReportePerdidaCreateManyCategoriaInputEnvelope
    connect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
  }

  export type ObjetoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ObjetoCreateWithoutCategoriaInput, ObjetoUncheckedCreateWithoutCategoriaInput> | ObjetoCreateWithoutCategoriaInput[] | ObjetoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutCategoriaInput | ObjetoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ObjetoUpsertWithWhereUniqueWithoutCategoriaInput | ObjetoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ObjetoCreateManyCategoriaInputEnvelope
    set?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    disconnect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    delete?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    update?: ObjetoUpdateWithWhereUniqueWithoutCategoriaInput | ObjetoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ObjetoUpdateManyWithWhereWithoutCategoriaInput | ObjetoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
  }

  export type ReportePerdidaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ReportePerdidaCreateWithoutCategoriaInput, ReportePerdidaUncheckedCreateWithoutCategoriaInput> | ReportePerdidaCreateWithoutCategoriaInput[] | ReportePerdidaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ReportePerdidaCreateOrConnectWithoutCategoriaInput | ReportePerdidaCreateOrConnectWithoutCategoriaInput[]
    upsert?: ReportePerdidaUpsertWithWhereUniqueWithoutCategoriaInput | ReportePerdidaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ReportePerdidaCreateManyCategoriaInputEnvelope
    set?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    disconnect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    delete?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    connect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    update?: ReportePerdidaUpdateWithWhereUniqueWithoutCategoriaInput | ReportePerdidaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ReportePerdidaUpdateManyWithWhereWithoutCategoriaInput | ReportePerdidaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ReportePerdidaScalarWhereInput | ReportePerdidaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ObjetoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ObjetoCreateWithoutCategoriaInput, ObjetoUncheckedCreateWithoutCategoriaInput> | ObjetoCreateWithoutCategoriaInput[] | ObjetoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutCategoriaInput | ObjetoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ObjetoUpsertWithWhereUniqueWithoutCategoriaInput | ObjetoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ObjetoCreateManyCategoriaInputEnvelope
    set?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    disconnect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    delete?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    update?: ObjetoUpdateWithWhereUniqueWithoutCategoriaInput | ObjetoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ObjetoUpdateManyWithWhereWithoutCategoriaInput | ObjetoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
  }

  export type ReportePerdidaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ReportePerdidaCreateWithoutCategoriaInput, ReportePerdidaUncheckedCreateWithoutCategoriaInput> | ReportePerdidaCreateWithoutCategoriaInput[] | ReportePerdidaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ReportePerdidaCreateOrConnectWithoutCategoriaInput | ReportePerdidaCreateOrConnectWithoutCategoriaInput[]
    upsert?: ReportePerdidaUpsertWithWhereUniqueWithoutCategoriaInput | ReportePerdidaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ReportePerdidaCreateManyCategoriaInputEnvelope
    set?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    disconnect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    delete?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    connect?: ReportePerdidaWhereUniqueInput | ReportePerdidaWhereUniqueInput[]
    update?: ReportePerdidaUpdateWithWhereUniqueWithoutCategoriaInput | ReportePerdidaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ReportePerdidaUpdateManyWithWhereWithoutCategoriaInput | ReportePerdidaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ReportePerdidaScalarWhereInput | ReportePerdidaScalarWhereInput[]
  }

  export type PuntoAcopioCreateNestedOneWithoutObjetosInput = {
    create?: XOR<PuntoAcopioCreateWithoutObjetosInput, PuntoAcopioUncheckedCreateWithoutObjetosInput>
    connectOrCreate?: PuntoAcopioCreateOrConnectWithoutObjetosInput
    connect?: PuntoAcopioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutObjetosInput = {
    create?: XOR<CategoriaCreateWithoutObjetosInput, CategoriaUncheckedCreateWithoutObjetosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutObjetosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutObjetosRegistradosInput = {
    create?: XOR<UsuarioCreateWithoutObjetosRegistradosInput, UsuarioUncheckedCreateWithoutObjetosRegistradosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutObjetosRegistradosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type FotografiaCreateNestedManyWithoutObjetoInput = {
    create?: XOR<FotografiaCreateWithoutObjetoInput, FotografiaUncheckedCreateWithoutObjetoInput> | FotografiaCreateWithoutObjetoInput[] | FotografiaUncheckedCreateWithoutObjetoInput[]
    connectOrCreate?: FotografiaCreateOrConnectWithoutObjetoInput | FotografiaCreateOrConnectWithoutObjetoInput[]
    createMany?: FotografiaCreateManyObjetoInputEnvelope
    connect?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
  }

  export type ReclamoCreateNestedManyWithoutObjetoInput = {
    create?: XOR<ReclamoCreateWithoutObjetoInput, ReclamoUncheckedCreateWithoutObjetoInput> | ReclamoCreateWithoutObjetoInput[] | ReclamoUncheckedCreateWithoutObjetoInput[]
    connectOrCreate?: ReclamoCreateOrConnectWithoutObjetoInput | ReclamoCreateOrConnectWithoutObjetoInput[]
    createMany?: ReclamoCreateManyObjetoInputEnvelope
    connect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
  }

  export type ActaDestruccionCreateNestedOneWithoutObjetosInput = {
    create?: XOR<ActaDestruccionCreateWithoutObjetosInput, ActaDestruccionUncheckedCreateWithoutObjetosInput>
    connectOrCreate?: ActaDestruccionCreateOrConnectWithoutObjetosInput
    connect?: ActaDestruccionWhereUniqueInput
  }

  export type FotografiaUncheckedCreateNestedManyWithoutObjetoInput = {
    create?: XOR<FotografiaCreateWithoutObjetoInput, FotografiaUncheckedCreateWithoutObjetoInput> | FotografiaCreateWithoutObjetoInput[] | FotografiaUncheckedCreateWithoutObjetoInput[]
    connectOrCreate?: FotografiaCreateOrConnectWithoutObjetoInput | FotografiaCreateOrConnectWithoutObjetoInput[]
    createMany?: FotografiaCreateManyObjetoInputEnvelope
    connect?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
  }

  export type ReclamoUncheckedCreateNestedManyWithoutObjetoInput = {
    create?: XOR<ReclamoCreateWithoutObjetoInput, ReclamoUncheckedCreateWithoutObjetoInput> | ReclamoCreateWithoutObjetoInput[] | ReclamoUncheckedCreateWithoutObjetoInput[]
    connectOrCreate?: ReclamoCreateOrConnectWithoutObjetoInput | ReclamoCreateOrConnectWithoutObjetoInput[]
    createMany?: ReclamoCreateManyObjetoInputEnvelope
    connect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PuntoAcopioUpdateOneRequiredWithoutObjetosNestedInput = {
    create?: XOR<PuntoAcopioCreateWithoutObjetosInput, PuntoAcopioUncheckedCreateWithoutObjetosInput>
    connectOrCreate?: PuntoAcopioCreateOrConnectWithoutObjetosInput
    upsert?: PuntoAcopioUpsertWithoutObjetosInput
    connect?: PuntoAcopioWhereUniqueInput
    update?: XOR<XOR<PuntoAcopioUpdateToOneWithWhereWithoutObjetosInput, PuntoAcopioUpdateWithoutObjetosInput>, PuntoAcopioUncheckedUpdateWithoutObjetosInput>
  }

  export type CategoriaUpdateOneRequiredWithoutObjetosNestedInput = {
    create?: XOR<CategoriaCreateWithoutObjetosInput, CategoriaUncheckedCreateWithoutObjetosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutObjetosInput
    upsert?: CategoriaUpsertWithoutObjetosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutObjetosInput, CategoriaUpdateWithoutObjetosInput>, CategoriaUncheckedUpdateWithoutObjetosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutObjetosRegistradosNestedInput = {
    create?: XOR<UsuarioCreateWithoutObjetosRegistradosInput, UsuarioUncheckedCreateWithoutObjetosRegistradosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutObjetosRegistradosInput
    upsert?: UsuarioUpsertWithoutObjetosRegistradosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutObjetosRegistradosInput, UsuarioUpdateWithoutObjetosRegistradosInput>, UsuarioUncheckedUpdateWithoutObjetosRegistradosInput>
  }

  export type FotografiaUpdateManyWithoutObjetoNestedInput = {
    create?: XOR<FotografiaCreateWithoutObjetoInput, FotografiaUncheckedCreateWithoutObjetoInput> | FotografiaCreateWithoutObjetoInput[] | FotografiaUncheckedCreateWithoutObjetoInput[]
    connectOrCreate?: FotografiaCreateOrConnectWithoutObjetoInput | FotografiaCreateOrConnectWithoutObjetoInput[]
    upsert?: FotografiaUpsertWithWhereUniqueWithoutObjetoInput | FotografiaUpsertWithWhereUniqueWithoutObjetoInput[]
    createMany?: FotografiaCreateManyObjetoInputEnvelope
    set?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
    disconnect?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
    delete?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
    connect?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
    update?: FotografiaUpdateWithWhereUniqueWithoutObjetoInput | FotografiaUpdateWithWhereUniqueWithoutObjetoInput[]
    updateMany?: FotografiaUpdateManyWithWhereWithoutObjetoInput | FotografiaUpdateManyWithWhereWithoutObjetoInput[]
    deleteMany?: FotografiaScalarWhereInput | FotografiaScalarWhereInput[]
  }

  export type ReclamoUpdateManyWithoutObjetoNestedInput = {
    create?: XOR<ReclamoCreateWithoutObjetoInput, ReclamoUncheckedCreateWithoutObjetoInput> | ReclamoCreateWithoutObjetoInput[] | ReclamoUncheckedCreateWithoutObjetoInput[]
    connectOrCreate?: ReclamoCreateOrConnectWithoutObjetoInput | ReclamoCreateOrConnectWithoutObjetoInput[]
    upsert?: ReclamoUpsertWithWhereUniqueWithoutObjetoInput | ReclamoUpsertWithWhereUniqueWithoutObjetoInput[]
    createMany?: ReclamoCreateManyObjetoInputEnvelope
    set?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    disconnect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    delete?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    connect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    update?: ReclamoUpdateWithWhereUniqueWithoutObjetoInput | ReclamoUpdateWithWhereUniqueWithoutObjetoInput[]
    updateMany?: ReclamoUpdateManyWithWhereWithoutObjetoInput | ReclamoUpdateManyWithWhereWithoutObjetoInput[]
    deleteMany?: ReclamoScalarWhereInput | ReclamoScalarWhereInput[]
  }

  export type ActaDestruccionUpdateOneWithoutObjetosNestedInput = {
    create?: XOR<ActaDestruccionCreateWithoutObjetosInput, ActaDestruccionUncheckedCreateWithoutObjetosInput>
    connectOrCreate?: ActaDestruccionCreateOrConnectWithoutObjetosInput
    upsert?: ActaDestruccionUpsertWithoutObjetosInput
    disconnect?: ActaDestruccionWhereInput | boolean
    delete?: ActaDestruccionWhereInput | boolean
    connect?: ActaDestruccionWhereUniqueInput
    update?: XOR<XOR<ActaDestruccionUpdateToOneWithWhereWithoutObjetosInput, ActaDestruccionUpdateWithoutObjetosInput>, ActaDestruccionUncheckedUpdateWithoutObjetosInput>
  }

  export type FotografiaUncheckedUpdateManyWithoutObjetoNestedInput = {
    create?: XOR<FotografiaCreateWithoutObjetoInput, FotografiaUncheckedCreateWithoutObjetoInput> | FotografiaCreateWithoutObjetoInput[] | FotografiaUncheckedCreateWithoutObjetoInput[]
    connectOrCreate?: FotografiaCreateOrConnectWithoutObjetoInput | FotografiaCreateOrConnectWithoutObjetoInput[]
    upsert?: FotografiaUpsertWithWhereUniqueWithoutObjetoInput | FotografiaUpsertWithWhereUniqueWithoutObjetoInput[]
    createMany?: FotografiaCreateManyObjetoInputEnvelope
    set?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
    disconnect?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
    delete?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
    connect?: FotografiaWhereUniqueInput | FotografiaWhereUniqueInput[]
    update?: FotografiaUpdateWithWhereUniqueWithoutObjetoInput | FotografiaUpdateWithWhereUniqueWithoutObjetoInput[]
    updateMany?: FotografiaUpdateManyWithWhereWithoutObjetoInput | FotografiaUpdateManyWithWhereWithoutObjetoInput[]
    deleteMany?: FotografiaScalarWhereInput | FotografiaScalarWhereInput[]
  }

  export type ReclamoUncheckedUpdateManyWithoutObjetoNestedInput = {
    create?: XOR<ReclamoCreateWithoutObjetoInput, ReclamoUncheckedCreateWithoutObjetoInput> | ReclamoCreateWithoutObjetoInput[] | ReclamoUncheckedCreateWithoutObjetoInput[]
    connectOrCreate?: ReclamoCreateOrConnectWithoutObjetoInput | ReclamoCreateOrConnectWithoutObjetoInput[]
    upsert?: ReclamoUpsertWithWhereUniqueWithoutObjetoInput | ReclamoUpsertWithWhereUniqueWithoutObjetoInput[]
    createMany?: ReclamoCreateManyObjetoInputEnvelope
    set?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    disconnect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    delete?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    connect?: ReclamoWhereUniqueInput | ReclamoWhereUniqueInput[]
    update?: ReclamoUpdateWithWhereUniqueWithoutObjetoInput | ReclamoUpdateWithWhereUniqueWithoutObjetoInput[]
    updateMany?: ReclamoUpdateManyWithWhereWithoutObjetoInput | ReclamoUpdateManyWithWhereWithoutObjetoInput[]
    deleteMany?: ReclamoScalarWhereInput | ReclamoScalarWhereInput[]
  }

  export type ObjetoCreateNestedOneWithoutFotografiasInput = {
    create?: XOR<ObjetoCreateWithoutFotografiasInput, ObjetoUncheckedCreateWithoutFotografiasInput>
    connectOrCreate?: ObjetoCreateOrConnectWithoutFotografiasInput
    connect?: ObjetoWhereUniqueInput
  }

  export type ObjetoUpdateOneRequiredWithoutFotografiasNestedInput = {
    create?: XOR<ObjetoCreateWithoutFotografiasInput, ObjetoUncheckedCreateWithoutFotografiasInput>
    connectOrCreate?: ObjetoCreateOrConnectWithoutFotografiasInput
    upsert?: ObjetoUpsertWithoutFotografiasInput
    connect?: ObjetoWhereUniqueInput
    update?: XOR<XOR<ObjetoUpdateToOneWithWhereWithoutFotografiasInput, ObjetoUpdateWithoutFotografiasInput>, ObjetoUncheckedUpdateWithoutFotografiasInput>
  }

  export type CategoriaCreateNestedOneWithoutReportesInput = {
    create?: XOR<CategoriaCreateWithoutReportesInput, CategoriaUncheckedCreateWithoutReportesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutReportesInput
    connect?: CategoriaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutReportesInput = {
    create?: XOR<UsuarioCreateWithoutReportesInput, UsuarioUncheckedCreateWithoutReportesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReportesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaUpdateOneWithoutReportesNestedInput = {
    create?: XOR<CategoriaCreateWithoutReportesInput, CategoriaUncheckedCreateWithoutReportesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutReportesInput
    upsert?: CategoriaUpsertWithoutReportesInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutReportesInput, CategoriaUpdateWithoutReportesInput>, CategoriaUncheckedUpdateWithoutReportesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutReportesNestedInput = {
    create?: XOR<UsuarioCreateWithoutReportesInput, UsuarioUncheckedCreateWithoutReportesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReportesInput
    upsert?: UsuarioUpsertWithoutReportesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReportesInput, UsuarioUpdateWithoutReportesInput>, UsuarioUncheckedUpdateWithoutReportesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ObjetoCreateNestedOneWithoutReclamosInput = {
    create?: XOR<ObjetoCreateWithoutReclamosInput, ObjetoUncheckedCreateWithoutReclamosInput>
    connectOrCreate?: ObjetoCreateOrConnectWithoutReclamosInput
    connect?: ObjetoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutReclamosAtendidosInput = {
    create?: XOR<UsuarioCreateWithoutReclamosAtendidosInput, UsuarioUncheckedCreateWithoutReclamosAtendidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReclamosAtendidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ObjetoUpdateOneWithoutReclamosNestedInput = {
    create?: XOR<ObjetoCreateWithoutReclamosInput, ObjetoUncheckedCreateWithoutReclamosInput>
    connectOrCreate?: ObjetoCreateOrConnectWithoutReclamosInput
    upsert?: ObjetoUpsertWithoutReclamosInput
    disconnect?: ObjetoWhereInput | boolean
    delete?: ObjetoWhereInput | boolean
    connect?: ObjetoWhereUniqueInput
    update?: XOR<XOR<ObjetoUpdateToOneWithWhereWithoutReclamosInput, ObjetoUpdateWithoutReclamosInput>, ObjetoUncheckedUpdateWithoutReclamosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutReclamosAtendidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutReclamosAtendidosInput, UsuarioUncheckedCreateWithoutReclamosAtendidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReclamosAtendidosInput
    upsert?: UsuarioUpsertWithoutReclamosAtendidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReclamosAtendidosInput, UsuarioUpdateWithoutReclamosAtendidosInput>, UsuarioUncheckedUpdateWithoutReclamosAtendidosInput>
  }

  export type ObjetoCreateNestedManyWithoutActaInput = {
    create?: XOR<ObjetoCreateWithoutActaInput, ObjetoUncheckedCreateWithoutActaInput> | ObjetoCreateWithoutActaInput[] | ObjetoUncheckedCreateWithoutActaInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutActaInput | ObjetoCreateOrConnectWithoutActaInput[]
    createMany?: ObjetoCreateManyActaInputEnvelope
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutActasFirmadasInput = {
    create?: XOR<UsuarioCreateWithoutActasFirmadasInput, UsuarioUncheckedCreateWithoutActasFirmadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutActasFirmadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ObjetoUncheckedCreateNestedManyWithoutActaInput = {
    create?: XOR<ObjetoCreateWithoutActaInput, ObjetoUncheckedCreateWithoutActaInput> | ObjetoCreateWithoutActaInput[] | ObjetoUncheckedCreateWithoutActaInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutActaInput | ObjetoCreateOrConnectWithoutActaInput[]
    createMany?: ObjetoCreateManyActaInputEnvelope
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
  }

  export type ObjetoUpdateManyWithoutActaNestedInput = {
    create?: XOR<ObjetoCreateWithoutActaInput, ObjetoUncheckedCreateWithoutActaInput> | ObjetoCreateWithoutActaInput[] | ObjetoUncheckedCreateWithoutActaInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutActaInput | ObjetoCreateOrConnectWithoutActaInput[]
    upsert?: ObjetoUpsertWithWhereUniqueWithoutActaInput | ObjetoUpsertWithWhereUniqueWithoutActaInput[]
    createMany?: ObjetoCreateManyActaInputEnvelope
    set?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    disconnect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    delete?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    update?: ObjetoUpdateWithWhereUniqueWithoutActaInput | ObjetoUpdateWithWhereUniqueWithoutActaInput[]
    updateMany?: ObjetoUpdateManyWithWhereWithoutActaInput | ObjetoUpdateManyWithWhereWithoutActaInput[]
    deleteMany?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutActasFirmadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutActasFirmadasInput, UsuarioUncheckedCreateWithoutActasFirmadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutActasFirmadasInput
    upsert?: UsuarioUpsertWithoutActasFirmadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutActasFirmadasInput, UsuarioUpdateWithoutActasFirmadasInput>, UsuarioUncheckedUpdateWithoutActasFirmadasInput>
  }

  export type ObjetoUncheckedUpdateManyWithoutActaNestedInput = {
    create?: XOR<ObjetoCreateWithoutActaInput, ObjetoUncheckedCreateWithoutActaInput> | ObjetoCreateWithoutActaInput[] | ObjetoUncheckedCreateWithoutActaInput[]
    connectOrCreate?: ObjetoCreateOrConnectWithoutActaInput | ObjetoCreateOrConnectWithoutActaInput[]
    upsert?: ObjetoUpsertWithWhereUniqueWithoutActaInput | ObjetoUpsertWithWhereUniqueWithoutActaInput[]
    createMany?: ObjetoCreateManyActaInputEnvelope
    set?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    disconnect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    delete?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    connect?: ObjetoWhereUniqueInput | ObjetoWhereUniqueInput[]
    update?: ObjetoUpdateWithWhereUniqueWithoutActaInput | ObjetoUpdateWithWhereUniqueWithoutActaInput[]
    updateMany?: ObjetoUpdateManyWithWhereWithoutActaInput | ObjetoUpdateManyWithWhereWithoutActaInput[]
    deleteMany?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEventosInput = {
    create?: XOR<UsuarioCreateWithoutEventosInput, UsuarioUncheckedCreateWithoutEventosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEventosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneWithoutEventosNestedInput = {
    create?: XOR<UsuarioCreateWithoutEventosInput, UsuarioUncheckedCreateWithoutEventosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEventosInput
    upsert?: UsuarioUpsertWithoutEventosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEventosInput, UsuarioUpdateWithoutEventosInput>, UsuarioUncheckedUpdateWithoutEventosInput>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type PuntoAcopioCreateWithoutEncargadosInput = {
    id_punto?: bigint | number
    nombre: string
    ubicacion: string
    tipo: string
    publicado?: boolean
    habilitado?: boolean
    objetos?: ObjetoCreateNestedManyWithoutPuntoInput
  }

  export type PuntoAcopioUncheckedCreateWithoutEncargadosInput = {
    id_punto?: bigint | number
    nombre: string
    ubicacion: string
    tipo: string
    publicado?: boolean
    habilitado?: boolean
    objetos?: ObjetoUncheckedCreateNestedManyWithoutPuntoInput
  }

  export type PuntoAcopioCreateOrConnectWithoutEncargadosInput = {
    where: PuntoAcopioWhereUniqueInput
    create: XOR<PuntoAcopioCreateWithoutEncargadosInput, PuntoAcopioUncheckedCreateWithoutEncargadosInput>
  }

  export type ObjetoCreateWithoutRegistradorInput = {
    id_objeto?: bigint | number
    codigo: string
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    punto: PuntoAcopioCreateNestedOneWithoutObjetosInput
    categoria: CategoriaCreateNestedOneWithoutObjetosInput
    fotografias?: FotografiaCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoCreateNestedManyWithoutObjetoInput
    acta?: ActaDestruccionCreateNestedOneWithoutObjetosInput
  }

  export type ObjetoUncheckedCreateWithoutRegistradorInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    id_punto: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    fotografias?: FotografiaUncheckedCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoUncheckedCreateNestedManyWithoutObjetoInput
  }

  export type ObjetoCreateOrConnectWithoutRegistradorInput = {
    where: ObjetoWhereUniqueInput
    create: XOR<ObjetoCreateWithoutRegistradorInput, ObjetoUncheckedCreateWithoutRegistradorInput>
  }

  export type ObjetoCreateManyRegistradorInputEnvelope = {
    data: ObjetoCreateManyRegistradorInput | ObjetoCreateManyRegistradorInput[]
    skipDuplicates?: boolean
  }

  export type ReportePerdidaCreateWithoutUsuarioInput = {
    id_reporte?: bigint | number
    descripcion: string
    perdido_en: Date | string
    lugar_perdida: string
    estado?: string
    creado_en?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutReportesInput
  }

  export type ReportePerdidaUncheckedCreateWithoutUsuarioInput = {
    id_reporte?: bigint | number
    id_categoria?: number | null
    descripcion: string
    perdido_en: Date | string
    lugar_perdida: string
    estado?: string
    creado_en?: Date | string
  }

  export type ReportePerdidaCreateOrConnectWithoutUsuarioInput = {
    where: ReportePerdidaWhereUniqueInput
    create: XOR<ReportePerdidaCreateWithoutUsuarioInput, ReportePerdidaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReportePerdidaCreateManyUsuarioInputEnvelope = {
    data: ReportePerdidaCreateManyUsuarioInput | ReportePerdidaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReclamoCreateWithoutEncargadoInput = {
    id_reclamo?: bigint | number
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado?: string
    motivo_decision?: string | null
    creado_en?: Date | string
    entregado_en?: Date | string | null
    numero_comprobante?: string | null
    objeto?: ObjetoCreateNestedOneWithoutReclamosInput
  }

  export type ReclamoUncheckedCreateWithoutEncargadoInput = {
    id_reclamo?: bigint | number
    id_objeto?: bigint | number | null
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado?: string
    motivo_decision?: string | null
    creado_en?: Date | string
    entregado_en?: Date | string | null
    numero_comprobante?: string | null
  }

  export type ReclamoCreateOrConnectWithoutEncargadoInput = {
    where: ReclamoWhereUniqueInput
    create: XOR<ReclamoCreateWithoutEncargadoInput, ReclamoUncheckedCreateWithoutEncargadoInput>
  }

  export type ReclamoCreateManyEncargadoInputEnvelope = {
    data: ReclamoCreateManyEncargadoInput | ReclamoCreateManyEncargadoInput[]
    skipDuplicates?: boolean
  }

  export type ActaDestruccionCreateWithoutFirmanteInput = {
    id_acta?: bigint | number
    numero_acta: string
    ejecutada_en: Date | string
    archivo_url: string
    objetos?: ObjetoCreateNestedManyWithoutActaInput
  }

  export type ActaDestruccionUncheckedCreateWithoutFirmanteInput = {
    id_acta?: bigint | number
    numero_acta: string
    ejecutada_en: Date | string
    archivo_url: string
    objetos?: ObjetoUncheckedCreateNestedManyWithoutActaInput
  }

  export type ActaDestruccionCreateOrConnectWithoutFirmanteInput = {
    where: ActaDestruccionWhereUniqueInput
    create: XOR<ActaDestruccionCreateWithoutFirmanteInput, ActaDestruccionUncheckedCreateWithoutFirmanteInput>
  }

  export type ActaDestruccionCreateManyFirmanteInputEnvelope = {
    data: ActaDestruccionCreateManyFirmanteInput | ActaDestruccionCreateManyFirmanteInput[]
    skipDuplicates?: boolean
  }

  export type BitacoraCreateWithoutUsuarioInput = {
    id_evento?: bigint | number
    accion: string
    recurso: string
    resultado: string
    registrado_en?: Date | string
  }

  export type BitacoraUncheckedCreateWithoutUsuarioInput = {
    id_evento?: bigint | number
    accion: string
    recurso: string
    resultado: string
    registrado_en?: Date | string
  }

  export type BitacoraCreateOrConnectWithoutUsuarioInput = {
    where: BitacoraWhereUniqueInput
    create: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput>
  }

  export type BitacoraCreateManyUsuarioInputEnvelope = {
    data: BitacoraCreateManyUsuarioInput | BitacoraCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PuntoAcopioUpsertWithoutEncargadosInput = {
    update: XOR<PuntoAcopioUpdateWithoutEncargadosInput, PuntoAcopioUncheckedUpdateWithoutEncargadosInput>
    create: XOR<PuntoAcopioCreateWithoutEncargadosInput, PuntoAcopioUncheckedCreateWithoutEncargadosInput>
    where?: PuntoAcopioWhereInput
  }

  export type PuntoAcopioUpdateToOneWithWhereWithoutEncargadosInput = {
    where?: PuntoAcopioWhereInput
    data: XOR<PuntoAcopioUpdateWithoutEncargadosInput, PuntoAcopioUncheckedUpdateWithoutEncargadosInput>
  }

  export type PuntoAcopioUpdateWithoutEncargadosInput = {
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    objetos?: ObjetoUpdateManyWithoutPuntoNestedInput
  }

  export type PuntoAcopioUncheckedUpdateWithoutEncargadosInput = {
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    objetos?: ObjetoUncheckedUpdateManyWithoutPuntoNestedInput
  }

  export type ObjetoUpsertWithWhereUniqueWithoutRegistradorInput = {
    where: ObjetoWhereUniqueInput
    update: XOR<ObjetoUpdateWithoutRegistradorInput, ObjetoUncheckedUpdateWithoutRegistradorInput>
    create: XOR<ObjetoCreateWithoutRegistradorInput, ObjetoUncheckedCreateWithoutRegistradorInput>
  }

  export type ObjetoUpdateWithWhereUniqueWithoutRegistradorInput = {
    where: ObjetoWhereUniqueInput
    data: XOR<ObjetoUpdateWithoutRegistradorInput, ObjetoUncheckedUpdateWithoutRegistradorInput>
  }

  export type ObjetoUpdateManyWithWhereWithoutRegistradorInput = {
    where: ObjetoScalarWhereInput
    data: XOR<ObjetoUpdateManyMutationInput, ObjetoUncheckedUpdateManyWithoutRegistradorInput>
  }

  export type ObjetoScalarWhereInput = {
    AND?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
    OR?: ObjetoScalarWhereInput[]
    NOT?: ObjetoScalarWhereInput | ObjetoScalarWhereInput[]
    id_objeto?: BigIntFilter<"Objeto"> | bigint | number
    codigo?: StringFilter<"Objeto"> | string
    id_categoria?: IntFilter<"Objeto"> | number
    id_punto?: BigIntFilter<"Objeto"> | bigint | number
    registrado_por?: BigIntFilter<"Objeto"> | bigint | number
    id_acta?: BigIntNullableFilter<"Objeto"> | bigint | number | null
    descripcion?: StringFilter<"Objeto"> | string
    hallado_en?: DateTimeFilter<"Objeto"> | Date | string
    lugar_hallazgo?: StringFilter<"Objeto"> | string
    registrado_en?: DateTimeFilter<"Objeto"> | Date | string
    estado?: StringFilter<"Objeto"> | string
    publicado?: BoolFilter<"Objeto"> | boolean
    alerta_enviada_en?: DateTimeNullableFilter<"Objeto"> | Date | string | null
  }

  export type ReportePerdidaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReportePerdidaWhereUniqueInput
    update: XOR<ReportePerdidaUpdateWithoutUsuarioInput, ReportePerdidaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReportePerdidaCreateWithoutUsuarioInput, ReportePerdidaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReportePerdidaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReportePerdidaWhereUniqueInput
    data: XOR<ReportePerdidaUpdateWithoutUsuarioInput, ReportePerdidaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReportePerdidaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReportePerdidaScalarWhereInput
    data: XOR<ReportePerdidaUpdateManyMutationInput, ReportePerdidaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReportePerdidaScalarWhereInput = {
    AND?: ReportePerdidaScalarWhereInput | ReportePerdidaScalarWhereInput[]
    OR?: ReportePerdidaScalarWhereInput[]
    NOT?: ReportePerdidaScalarWhereInput | ReportePerdidaScalarWhereInput[]
    id_reporte?: BigIntFilter<"ReportePerdida"> | bigint | number
    id_usuario?: BigIntFilter<"ReportePerdida"> | bigint | number
    id_categoria?: IntNullableFilter<"ReportePerdida"> | number | null
    descripcion?: StringFilter<"ReportePerdida"> | string
    perdido_en?: DateTimeFilter<"ReportePerdida"> | Date | string
    lugar_perdida?: StringFilter<"ReportePerdida"> | string
    estado?: StringFilter<"ReportePerdida"> | string
    creado_en?: DateTimeFilter<"ReportePerdida"> | Date | string
  }

  export type ReclamoUpsertWithWhereUniqueWithoutEncargadoInput = {
    where: ReclamoWhereUniqueInput
    update: XOR<ReclamoUpdateWithoutEncargadoInput, ReclamoUncheckedUpdateWithoutEncargadoInput>
    create: XOR<ReclamoCreateWithoutEncargadoInput, ReclamoUncheckedCreateWithoutEncargadoInput>
  }

  export type ReclamoUpdateWithWhereUniqueWithoutEncargadoInput = {
    where: ReclamoWhereUniqueInput
    data: XOR<ReclamoUpdateWithoutEncargadoInput, ReclamoUncheckedUpdateWithoutEncargadoInput>
  }

  export type ReclamoUpdateManyWithWhereWithoutEncargadoInput = {
    where: ReclamoScalarWhereInput
    data: XOR<ReclamoUpdateManyMutationInput, ReclamoUncheckedUpdateManyWithoutEncargadoInput>
  }

  export type ReclamoScalarWhereInput = {
    AND?: ReclamoScalarWhereInput | ReclamoScalarWhereInput[]
    OR?: ReclamoScalarWhereInput[]
    NOT?: ReclamoScalarWhereInput | ReclamoScalarWhereInput[]
    id_reclamo?: BigIntFilter<"Reclamo"> | bigint | number
    id_objeto?: BigIntNullableFilter<"Reclamo"> | bigint | number | null
    atendido_por?: BigIntFilter<"Reclamo"> | bigint | number
    rut_reclamante?: StringFilter<"Reclamo"> | string
    nombre_reclamante?: StringFilter<"Reclamo"> | string
    evidencia_identidad?: StringFilter<"Reclamo"> | string
    evidencia_propiedad?: StringFilter<"Reclamo"> | string
    estado?: StringFilter<"Reclamo"> | string
    motivo_decision?: StringNullableFilter<"Reclamo"> | string | null
    creado_en?: DateTimeFilter<"Reclamo"> | Date | string
    entregado_en?: DateTimeNullableFilter<"Reclamo"> | Date | string | null
    numero_comprobante?: StringNullableFilter<"Reclamo"> | string | null
  }

  export type ActaDestruccionUpsertWithWhereUniqueWithoutFirmanteInput = {
    where: ActaDestruccionWhereUniqueInput
    update: XOR<ActaDestruccionUpdateWithoutFirmanteInput, ActaDestruccionUncheckedUpdateWithoutFirmanteInput>
    create: XOR<ActaDestruccionCreateWithoutFirmanteInput, ActaDestruccionUncheckedCreateWithoutFirmanteInput>
  }

  export type ActaDestruccionUpdateWithWhereUniqueWithoutFirmanteInput = {
    where: ActaDestruccionWhereUniqueInput
    data: XOR<ActaDestruccionUpdateWithoutFirmanteInput, ActaDestruccionUncheckedUpdateWithoutFirmanteInput>
  }

  export type ActaDestruccionUpdateManyWithWhereWithoutFirmanteInput = {
    where: ActaDestruccionScalarWhereInput
    data: XOR<ActaDestruccionUpdateManyMutationInput, ActaDestruccionUncheckedUpdateManyWithoutFirmanteInput>
  }

  export type ActaDestruccionScalarWhereInput = {
    AND?: ActaDestruccionScalarWhereInput | ActaDestruccionScalarWhereInput[]
    OR?: ActaDestruccionScalarWhereInput[]
    NOT?: ActaDestruccionScalarWhereInput | ActaDestruccionScalarWhereInput[]
    id_acta?: BigIntFilter<"ActaDestruccion"> | bigint | number
    numero_acta?: StringFilter<"ActaDestruccion"> | string
    responsable?: BigIntFilter<"ActaDestruccion"> | bigint | number
    ejecutada_en?: DateTimeFilter<"ActaDestruccion"> | Date | string
    archivo_url?: StringFilter<"ActaDestruccion"> | string
  }

  export type BitacoraUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: BitacoraWhereUniqueInput
    update: XOR<BitacoraUpdateWithoutUsuarioInput, BitacoraUncheckedUpdateWithoutUsuarioInput>
    create: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput>
  }

  export type BitacoraUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: BitacoraWhereUniqueInput
    data: XOR<BitacoraUpdateWithoutUsuarioInput, BitacoraUncheckedUpdateWithoutUsuarioInput>
  }

  export type BitacoraUpdateManyWithWhereWithoutUsuarioInput = {
    where: BitacoraScalarWhereInput
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type BitacoraScalarWhereInput = {
    AND?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
    OR?: BitacoraScalarWhereInput[]
    NOT?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
    id_evento?: BigIntFilter<"Bitacora"> | bigint | number
    id_usuario?: BigIntNullableFilter<"Bitacora"> | bigint | number | null
    accion?: StringFilter<"Bitacora"> | string
    recurso?: StringFilter<"Bitacora"> | string
    resultado?: StringFilter<"Bitacora"> | string
    registrado_en?: DateTimeFilter<"Bitacora"> | Date | string
  }

  export type UsuarioCreateWithoutPuntoInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    activo?: boolean
    creado_en?: Date | string
    objetosRegistrados?: ObjetoCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPuntoInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    activo?: boolean
    creado_en?: Date | string
    objetosRegistrados?: ObjetoUncheckedCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaUncheckedCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoUncheckedCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionUncheckedCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPuntoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPuntoInput, UsuarioUncheckedCreateWithoutPuntoInput>
  }

  export type UsuarioCreateManyPuntoInputEnvelope = {
    data: UsuarioCreateManyPuntoInput | UsuarioCreateManyPuntoInput[]
    skipDuplicates?: boolean
  }

  export type ObjetoCreateWithoutPuntoInput = {
    id_objeto?: bigint | number
    codigo: string
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    categoria: CategoriaCreateNestedOneWithoutObjetosInput
    registrador: UsuarioCreateNestedOneWithoutObjetosRegistradosInput
    fotografias?: FotografiaCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoCreateNestedManyWithoutObjetoInput
    acta?: ActaDestruccionCreateNestedOneWithoutObjetosInput
  }

  export type ObjetoUncheckedCreateWithoutPuntoInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    registrado_por: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    fotografias?: FotografiaUncheckedCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoUncheckedCreateNestedManyWithoutObjetoInput
  }

  export type ObjetoCreateOrConnectWithoutPuntoInput = {
    where: ObjetoWhereUniqueInput
    create: XOR<ObjetoCreateWithoutPuntoInput, ObjetoUncheckedCreateWithoutPuntoInput>
  }

  export type ObjetoCreateManyPuntoInputEnvelope = {
    data: ObjetoCreateManyPuntoInput | ObjetoCreateManyPuntoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutPuntoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutPuntoInput, UsuarioUncheckedUpdateWithoutPuntoInput>
    create: XOR<UsuarioCreateWithoutPuntoInput, UsuarioUncheckedCreateWithoutPuntoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutPuntoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutPuntoInput, UsuarioUncheckedUpdateWithoutPuntoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutPuntoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutPuntoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id_usuario?: BigIntFilter<"Usuario"> | bigint | number
    correo_institucional?: StringFilter<"Usuario"> | string
    nombres?: StringFilter<"Usuario"> | string
    apellidos?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    id_punto?: BigIntNullableFilter<"Usuario"> | bigint | number | null
    activo?: BoolFilter<"Usuario"> | boolean
    creado_en?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type ObjetoUpsertWithWhereUniqueWithoutPuntoInput = {
    where: ObjetoWhereUniqueInput
    update: XOR<ObjetoUpdateWithoutPuntoInput, ObjetoUncheckedUpdateWithoutPuntoInput>
    create: XOR<ObjetoCreateWithoutPuntoInput, ObjetoUncheckedCreateWithoutPuntoInput>
  }

  export type ObjetoUpdateWithWhereUniqueWithoutPuntoInput = {
    where: ObjetoWhereUniqueInput
    data: XOR<ObjetoUpdateWithoutPuntoInput, ObjetoUncheckedUpdateWithoutPuntoInput>
  }

  export type ObjetoUpdateManyWithWhereWithoutPuntoInput = {
    where: ObjetoScalarWhereInput
    data: XOR<ObjetoUpdateManyMutationInput, ObjetoUncheckedUpdateManyWithoutPuntoInput>
  }

  export type ObjetoCreateWithoutCategoriaInput = {
    id_objeto?: bigint | number
    codigo: string
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    punto: PuntoAcopioCreateNestedOneWithoutObjetosInput
    registrador: UsuarioCreateNestedOneWithoutObjetosRegistradosInput
    fotografias?: FotografiaCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoCreateNestedManyWithoutObjetoInput
    acta?: ActaDestruccionCreateNestedOneWithoutObjetosInput
  }

  export type ObjetoUncheckedCreateWithoutCategoriaInput = {
    id_objeto?: bigint | number
    codigo: string
    id_punto: bigint | number
    registrado_por: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    fotografias?: FotografiaUncheckedCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoUncheckedCreateNestedManyWithoutObjetoInput
  }

  export type ObjetoCreateOrConnectWithoutCategoriaInput = {
    where: ObjetoWhereUniqueInput
    create: XOR<ObjetoCreateWithoutCategoriaInput, ObjetoUncheckedCreateWithoutCategoriaInput>
  }

  export type ObjetoCreateManyCategoriaInputEnvelope = {
    data: ObjetoCreateManyCategoriaInput | ObjetoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ReportePerdidaCreateWithoutCategoriaInput = {
    id_reporte?: bigint | number
    descripcion: string
    perdido_en: Date | string
    lugar_perdida: string
    estado?: string
    creado_en?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReportesInput
  }

  export type ReportePerdidaUncheckedCreateWithoutCategoriaInput = {
    id_reporte?: bigint | number
    id_usuario: bigint | number
    descripcion: string
    perdido_en: Date | string
    lugar_perdida: string
    estado?: string
    creado_en?: Date | string
  }

  export type ReportePerdidaCreateOrConnectWithoutCategoriaInput = {
    where: ReportePerdidaWhereUniqueInput
    create: XOR<ReportePerdidaCreateWithoutCategoriaInput, ReportePerdidaUncheckedCreateWithoutCategoriaInput>
  }

  export type ReportePerdidaCreateManyCategoriaInputEnvelope = {
    data: ReportePerdidaCreateManyCategoriaInput | ReportePerdidaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ObjetoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ObjetoWhereUniqueInput
    update: XOR<ObjetoUpdateWithoutCategoriaInput, ObjetoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ObjetoCreateWithoutCategoriaInput, ObjetoUncheckedCreateWithoutCategoriaInput>
  }

  export type ObjetoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ObjetoWhereUniqueInput
    data: XOR<ObjetoUpdateWithoutCategoriaInput, ObjetoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ObjetoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ObjetoScalarWhereInput
    data: XOR<ObjetoUpdateManyMutationInput, ObjetoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ReportePerdidaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ReportePerdidaWhereUniqueInput
    update: XOR<ReportePerdidaUpdateWithoutCategoriaInput, ReportePerdidaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ReportePerdidaCreateWithoutCategoriaInput, ReportePerdidaUncheckedCreateWithoutCategoriaInput>
  }

  export type ReportePerdidaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ReportePerdidaWhereUniqueInput
    data: XOR<ReportePerdidaUpdateWithoutCategoriaInput, ReportePerdidaUncheckedUpdateWithoutCategoriaInput>
  }

  export type ReportePerdidaUpdateManyWithWhereWithoutCategoriaInput = {
    where: ReportePerdidaScalarWhereInput
    data: XOR<ReportePerdidaUpdateManyMutationInput, ReportePerdidaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type PuntoAcopioCreateWithoutObjetosInput = {
    id_punto?: bigint | number
    nombre: string
    ubicacion: string
    tipo: string
    publicado?: boolean
    habilitado?: boolean
    encargados?: UsuarioCreateNestedManyWithoutPuntoInput
  }

  export type PuntoAcopioUncheckedCreateWithoutObjetosInput = {
    id_punto?: bigint | number
    nombre: string
    ubicacion: string
    tipo: string
    publicado?: boolean
    habilitado?: boolean
    encargados?: UsuarioUncheckedCreateNestedManyWithoutPuntoInput
  }

  export type PuntoAcopioCreateOrConnectWithoutObjetosInput = {
    where: PuntoAcopioWhereUniqueInput
    create: XOR<PuntoAcopioCreateWithoutObjetosInput, PuntoAcopioUncheckedCreateWithoutObjetosInput>
  }

  export type CategoriaCreateWithoutObjetosInput = {
    nombre: string
    reportes?: ReportePerdidaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutObjetosInput = {
    id_categoria?: number
    nombre: string
    reportes?: ReportePerdidaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutObjetosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutObjetosInput, CategoriaUncheckedCreateWithoutObjetosInput>
  }

  export type UsuarioCreateWithoutObjetosRegistradosInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    activo?: boolean
    creado_en?: Date | string
    punto?: PuntoAcopioCreateNestedOneWithoutEncargadosInput
    reportes?: ReportePerdidaCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutObjetosRegistradosInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    id_punto?: bigint | number | null
    activo?: boolean
    creado_en?: Date | string
    reportes?: ReportePerdidaUncheckedCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoUncheckedCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionUncheckedCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutObjetosRegistradosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutObjetosRegistradosInput, UsuarioUncheckedCreateWithoutObjetosRegistradosInput>
  }

  export type FotografiaCreateWithoutObjetoInput = {
    posicion: number
    archivo_url: string
  }

  export type FotografiaUncheckedCreateWithoutObjetoInput = {
    posicion: number
    archivo_url: string
  }

  export type FotografiaCreateOrConnectWithoutObjetoInput = {
    where: FotografiaWhereUniqueInput
    create: XOR<FotografiaCreateWithoutObjetoInput, FotografiaUncheckedCreateWithoutObjetoInput>
  }

  export type FotografiaCreateManyObjetoInputEnvelope = {
    data: FotografiaCreateManyObjetoInput | FotografiaCreateManyObjetoInput[]
    skipDuplicates?: boolean
  }

  export type ReclamoCreateWithoutObjetoInput = {
    id_reclamo?: bigint | number
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado?: string
    motivo_decision?: string | null
    creado_en?: Date | string
    entregado_en?: Date | string | null
    numero_comprobante?: string | null
    encargado: UsuarioCreateNestedOneWithoutReclamosAtendidosInput
  }

  export type ReclamoUncheckedCreateWithoutObjetoInput = {
    id_reclamo?: bigint | number
    atendido_por: bigint | number
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado?: string
    motivo_decision?: string | null
    creado_en?: Date | string
    entregado_en?: Date | string | null
    numero_comprobante?: string | null
  }

  export type ReclamoCreateOrConnectWithoutObjetoInput = {
    where: ReclamoWhereUniqueInput
    create: XOR<ReclamoCreateWithoutObjetoInput, ReclamoUncheckedCreateWithoutObjetoInput>
  }

  export type ReclamoCreateManyObjetoInputEnvelope = {
    data: ReclamoCreateManyObjetoInput | ReclamoCreateManyObjetoInput[]
    skipDuplicates?: boolean
  }

  export type ActaDestruccionCreateWithoutObjetosInput = {
    id_acta?: bigint | number
    numero_acta: string
    ejecutada_en: Date | string
    archivo_url: string
    firmante: UsuarioCreateNestedOneWithoutActasFirmadasInput
  }

  export type ActaDestruccionUncheckedCreateWithoutObjetosInput = {
    id_acta?: bigint | number
    numero_acta: string
    responsable: bigint | number
    ejecutada_en: Date | string
    archivo_url: string
  }

  export type ActaDestruccionCreateOrConnectWithoutObjetosInput = {
    where: ActaDestruccionWhereUniqueInput
    create: XOR<ActaDestruccionCreateWithoutObjetosInput, ActaDestruccionUncheckedCreateWithoutObjetosInput>
  }

  export type PuntoAcopioUpsertWithoutObjetosInput = {
    update: XOR<PuntoAcopioUpdateWithoutObjetosInput, PuntoAcopioUncheckedUpdateWithoutObjetosInput>
    create: XOR<PuntoAcopioCreateWithoutObjetosInput, PuntoAcopioUncheckedCreateWithoutObjetosInput>
    where?: PuntoAcopioWhereInput
  }

  export type PuntoAcopioUpdateToOneWithWhereWithoutObjetosInput = {
    where?: PuntoAcopioWhereInput
    data: XOR<PuntoAcopioUpdateWithoutObjetosInput, PuntoAcopioUncheckedUpdateWithoutObjetosInput>
  }

  export type PuntoAcopioUpdateWithoutObjetosInput = {
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    encargados?: UsuarioUpdateManyWithoutPuntoNestedInput
  }

  export type PuntoAcopioUncheckedUpdateWithoutObjetosInput = {
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    encargados?: UsuarioUncheckedUpdateManyWithoutPuntoNestedInput
  }

  export type CategoriaUpsertWithoutObjetosInput = {
    update: XOR<CategoriaUpdateWithoutObjetosInput, CategoriaUncheckedUpdateWithoutObjetosInput>
    create: XOR<CategoriaCreateWithoutObjetosInput, CategoriaUncheckedCreateWithoutObjetosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutObjetosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutObjetosInput, CategoriaUncheckedUpdateWithoutObjetosInput>
  }

  export type CategoriaUpdateWithoutObjetosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    reportes?: ReportePerdidaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutObjetosInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    reportes?: ReportePerdidaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type UsuarioUpsertWithoutObjetosRegistradosInput = {
    update: XOR<UsuarioUpdateWithoutObjetosRegistradosInput, UsuarioUncheckedUpdateWithoutObjetosRegistradosInput>
    create: XOR<UsuarioCreateWithoutObjetosRegistradosInput, UsuarioUncheckedCreateWithoutObjetosRegistradosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutObjetosRegistradosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutObjetosRegistradosInput, UsuarioUncheckedUpdateWithoutObjetosRegistradosInput>
  }

  export type UsuarioUpdateWithoutObjetosRegistradosInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    punto?: PuntoAcopioUpdateOneWithoutEncargadosNestedInput
    reportes?: ReportePerdidaUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutObjetosRegistradosInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    id_punto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    reportes?: ReportePerdidaUncheckedUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUncheckedUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUncheckedUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type FotografiaUpsertWithWhereUniqueWithoutObjetoInput = {
    where: FotografiaWhereUniqueInput
    update: XOR<FotografiaUpdateWithoutObjetoInput, FotografiaUncheckedUpdateWithoutObjetoInput>
    create: XOR<FotografiaCreateWithoutObjetoInput, FotografiaUncheckedCreateWithoutObjetoInput>
  }

  export type FotografiaUpdateWithWhereUniqueWithoutObjetoInput = {
    where: FotografiaWhereUniqueInput
    data: XOR<FotografiaUpdateWithoutObjetoInput, FotografiaUncheckedUpdateWithoutObjetoInput>
  }

  export type FotografiaUpdateManyWithWhereWithoutObjetoInput = {
    where: FotografiaScalarWhereInput
    data: XOR<FotografiaUpdateManyMutationInput, FotografiaUncheckedUpdateManyWithoutObjetoInput>
  }

  export type FotografiaScalarWhereInput = {
    AND?: FotografiaScalarWhereInput | FotografiaScalarWhereInput[]
    OR?: FotografiaScalarWhereInput[]
    NOT?: FotografiaScalarWhereInput | FotografiaScalarWhereInput[]
    id_objeto?: BigIntFilter<"Fotografia"> | bigint | number
    posicion?: IntFilter<"Fotografia"> | number
    archivo_url?: StringFilter<"Fotografia"> | string
  }

  export type ReclamoUpsertWithWhereUniqueWithoutObjetoInput = {
    where: ReclamoWhereUniqueInput
    update: XOR<ReclamoUpdateWithoutObjetoInput, ReclamoUncheckedUpdateWithoutObjetoInput>
    create: XOR<ReclamoCreateWithoutObjetoInput, ReclamoUncheckedCreateWithoutObjetoInput>
  }

  export type ReclamoUpdateWithWhereUniqueWithoutObjetoInput = {
    where: ReclamoWhereUniqueInput
    data: XOR<ReclamoUpdateWithoutObjetoInput, ReclamoUncheckedUpdateWithoutObjetoInput>
  }

  export type ReclamoUpdateManyWithWhereWithoutObjetoInput = {
    where: ReclamoScalarWhereInput
    data: XOR<ReclamoUpdateManyMutationInput, ReclamoUncheckedUpdateManyWithoutObjetoInput>
  }

  export type ActaDestruccionUpsertWithoutObjetosInput = {
    update: XOR<ActaDestruccionUpdateWithoutObjetosInput, ActaDestruccionUncheckedUpdateWithoutObjetosInput>
    create: XOR<ActaDestruccionCreateWithoutObjetosInput, ActaDestruccionUncheckedCreateWithoutObjetosInput>
    where?: ActaDestruccionWhereInput
  }

  export type ActaDestruccionUpdateToOneWithWhereWithoutObjetosInput = {
    where?: ActaDestruccionWhereInput
    data: XOR<ActaDestruccionUpdateWithoutObjetosInput, ActaDestruccionUncheckedUpdateWithoutObjetosInput>
  }

  export type ActaDestruccionUpdateWithoutObjetosInput = {
    id_acta?: BigIntFieldUpdateOperationsInput | bigint | number
    numero_acta?: StringFieldUpdateOperationsInput | string
    ejecutada_en?: DateTimeFieldUpdateOperationsInput | Date | string
    archivo_url?: StringFieldUpdateOperationsInput | string
    firmante?: UsuarioUpdateOneRequiredWithoutActasFirmadasNestedInput
  }

  export type ActaDestruccionUncheckedUpdateWithoutObjetosInput = {
    id_acta?: BigIntFieldUpdateOperationsInput | bigint | number
    numero_acta?: StringFieldUpdateOperationsInput | string
    responsable?: BigIntFieldUpdateOperationsInput | bigint | number
    ejecutada_en?: DateTimeFieldUpdateOperationsInput | Date | string
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type ObjetoCreateWithoutFotografiasInput = {
    id_objeto?: bigint | number
    codigo: string
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    punto: PuntoAcopioCreateNestedOneWithoutObjetosInput
    categoria: CategoriaCreateNestedOneWithoutObjetosInput
    registrador: UsuarioCreateNestedOneWithoutObjetosRegistradosInput
    reclamos?: ReclamoCreateNestedManyWithoutObjetoInput
    acta?: ActaDestruccionCreateNestedOneWithoutObjetosInput
  }

  export type ObjetoUncheckedCreateWithoutFotografiasInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    id_punto: bigint | number
    registrado_por: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    reclamos?: ReclamoUncheckedCreateNestedManyWithoutObjetoInput
  }

  export type ObjetoCreateOrConnectWithoutFotografiasInput = {
    where: ObjetoWhereUniqueInput
    create: XOR<ObjetoCreateWithoutFotografiasInput, ObjetoUncheckedCreateWithoutFotografiasInput>
  }

  export type ObjetoUpsertWithoutFotografiasInput = {
    update: XOR<ObjetoUpdateWithoutFotografiasInput, ObjetoUncheckedUpdateWithoutFotografiasInput>
    create: XOR<ObjetoCreateWithoutFotografiasInput, ObjetoUncheckedCreateWithoutFotografiasInput>
    where?: ObjetoWhereInput
  }

  export type ObjetoUpdateToOneWithWhereWithoutFotografiasInput = {
    where?: ObjetoWhereInput
    data: XOR<ObjetoUpdateWithoutFotografiasInput, ObjetoUncheckedUpdateWithoutFotografiasInput>
  }

  export type ObjetoUpdateWithoutFotografiasInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    punto?: PuntoAcopioUpdateOneRequiredWithoutObjetosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutObjetosNestedInput
    registrador?: UsuarioUpdateOneRequiredWithoutObjetosRegistradosNestedInput
    reclamos?: ReclamoUpdateManyWithoutObjetoNestedInput
    acta?: ActaDestruccionUpdateOneWithoutObjetosNestedInput
  }

  export type ObjetoUncheckedUpdateWithoutFotografiasInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reclamos?: ReclamoUncheckedUpdateManyWithoutObjetoNestedInput
  }

  export type CategoriaCreateWithoutReportesInput = {
    nombre: string
    objetos?: ObjetoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutReportesInput = {
    id_categoria?: number
    nombre: string
    objetos?: ObjetoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutReportesInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutReportesInput, CategoriaUncheckedCreateWithoutReportesInput>
  }

  export type UsuarioCreateWithoutReportesInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    activo?: boolean
    creado_en?: Date | string
    punto?: PuntoAcopioCreateNestedOneWithoutEncargadosInput
    objetosRegistrados?: ObjetoCreateNestedManyWithoutRegistradorInput
    reclamosAtendidos?: ReclamoCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReportesInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    id_punto?: bigint | number | null
    activo?: boolean
    creado_en?: Date | string
    objetosRegistrados?: ObjetoUncheckedCreateNestedManyWithoutRegistradorInput
    reclamosAtendidos?: ReclamoUncheckedCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionUncheckedCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReportesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReportesInput, UsuarioUncheckedCreateWithoutReportesInput>
  }

  export type CategoriaUpsertWithoutReportesInput = {
    update: XOR<CategoriaUpdateWithoutReportesInput, CategoriaUncheckedUpdateWithoutReportesInput>
    create: XOR<CategoriaCreateWithoutReportesInput, CategoriaUncheckedCreateWithoutReportesInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutReportesInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutReportesInput, CategoriaUncheckedUpdateWithoutReportesInput>
  }

  export type CategoriaUpdateWithoutReportesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    objetos?: ObjetoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutReportesInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetos?: ObjetoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type UsuarioUpsertWithoutReportesInput = {
    update: XOR<UsuarioUpdateWithoutReportesInput, UsuarioUncheckedUpdateWithoutReportesInput>
    create: XOR<UsuarioCreateWithoutReportesInput, UsuarioUncheckedCreateWithoutReportesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReportesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReportesInput, UsuarioUncheckedUpdateWithoutReportesInput>
  }

  export type UsuarioUpdateWithoutReportesInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    punto?: PuntoAcopioUpdateOneWithoutEncargadosNestedInput
    objetosRegistrados?: ObjetoUpdateManyWithoutRegistradorNestedInput
    reclamosAtendidos?: ReclamoUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReportesInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    id_punto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    objetosRegistrados?: ObjetoUncheckedUpdateManyWithoutRegistradorNestedInput
    reclamosAtendidos?: ReclamoUncheckedUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUncheckedUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ObjetoCreateWithoutReclamosInput = {
    id_objeto?: bigint | number
    codigo: string
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    punto: PuntoAcopioCreateNestedOneWithoutObjetosInput
    categoria: CategoriaCreateNestedOneWithoutObjetosInput
    registrador: UsuarioCreateNestedOneWithoutObjetosRegistradosInput
    fotografias?: FotografiaCreateNestedManyWithoutObjetoInput
    acta?: ActaDestruccionCreateNestedOneWithoutObjetosInput
  }

  export type ObjetoUncheckedCreateWithoutReclamosInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    id_punto: bigint | number
    registrado_por: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    fotografias?: FotografiaUncheckedCreateNestedManyWithoutObjetoInput
  }

  export type ObjetoCreateOrConnectWithoutReclamosInput = {
    where: ObjetoWhereUniqueInput
    create: XOR<ObjetoCreateWithoutReclamosInput, ObjetoUncheckedCreateWithoutReclamosInput>
  }

  export type UsuarioCreateWithoutReclamosAtendidosInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    activo?: boolean
    creado_en?: Date | string
    punto?: PuntoAcopioCreateNestedOneWithoutEncargadosInput
    objetosRegistrados?: ObjetoCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaCreateNestedManyWithoutUsuarioInput
    actasFirmadas?: ActaDestruccionCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReclamosAtendidosInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    id_punto?: bigint | number | null
    activo?: boolean
    creado_en?: Date | string
    objetosRegistrados?: ObjetoUncheckedCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaUncheckedCreateNestedManyWithoutUsuarioInput
    actasFirmadas?: ActaDestruccionUncheckedCreateNestedManyWithoutFirmanteInput
    eventos?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReclamosAtendidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReclamosAtendidosInput, UsuarioUncheckedCreateWithoutReclamosAtendidosInput>
  }

  export type ObjetoUpsertWithoutReclamosInput = {
    update: XOR<ObjetoUpdateWithoutReclamosInput, ObjetoUncheckedUpdateWithoutReclamosInput>
    create: XOR<ObjetoCreateWithoutReclamosInput, ObjetoUncheckedCreateWithoutReclamosInput>
    where?: ObjetoWhereInput
  }

  export type ObjetoUpdateToOneWithWhereWithoutReclamosInput = {
    where?: ObjetoWhereInput
    data: XOR<ObjetoUpdateWithoutReclamosInput, ObjetoUncheckedUpdateWithoutReclamosInput>
  }

  export type ObjetoUpdateWithoutReclamosInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    punto?: PuntoAcopioUpdateOneRequiredWithoutObjetosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutObjetosNestedInput
    registrador?: UsuarioUpdateOneRequiredWithoutObjetosRegistradosNestedInput
    fotografias?: FotografiaUpdateManyWithoutObjetoNestedInput
    acta?: ActaDestruccionUpdateOneWithoutObjetosNestedInput
  }

  export type ObjetoUncheckedUpdateWithoutReclamosInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotografias?: FotografiaUncheckedUpdateManyWithoutObjetoNestedInput
  }

  export type UsuarioUpsertWithoutReclamosAtendidosInput = {
    update: XOR<UsuarioUpdateWithoutReclamosAtendidosInput, UsuarioUncheckedUpdateWithoutReclamosAtendidosInput>
    create: XOR<UsuarioCreateWithoutReclamosAtendidosInput, UsuarioUncheckedCreateWithoutReclamosAtendidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReclamosAtendidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReclamosAtendidosInput, UsuarioUncheckedUpdateWithoutReclamosAtendidosInput>
  }

  export type UsuarioUpdateWithoutReclamosAtendidosInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    punto?: PuntoAcopioUpdateOneWithoutEncargadosNestedInput
    objetosRegistrados?: ObjetoUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUpdateManyWithoutUsuarioNestedInput
    actasFirmadas?: ActaDestruccionUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReclamosAtendidosInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    id_punto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    objetosRegistrados?: ObjetoUncheckedUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUncheckedUpdateManyWithoutUsuarioNestedInput
    actasFirmadas?: ActaDestruccionUncheckedUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ObjetoCreateWithoutActaInput = {
    id_objeto?: bigint | number
    codigo: string
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    punto: PuntoAcopioCreateNestedOneWithoutObjetosInput
    categoria: CategoriaCreateNestedOneWithoutObjetosInput
    registrador: UsuarioCreateNestedOneWithoutObjetosRegistradosInput
    fotografias?: FotografiaCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoCreateNestedManyWithoutObjetoInput
  }

  export type ObjetoUncheckedCreateWithoutActaInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    id_punto: bigint | number
    registrado_por: bigint | number
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
    fotografias?: FotografiaUncheckedCreateNestedManyWithoutObjetoInput
    reclamos?: ReclamoUncheckedCreateNestedManyWithoutObjetoInput
  }

  export type ObjetoCreateOrConnectWithoutActaInput = {
    where: ObjetoWhereUniqueInput
    create: XOR<ObjetoCreateWithoutActaInput, ObjetoUncheckedCreateWithoutActaInput>
  }

  export type ObjetoCreateManyActaInputEnvelope = {
    data: ObjetoCreateManyActaInput | ObjetoCreateManyActaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutActasFirmadasInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    activo?: boolean
    creado_en?: Date | string
    punto?: PuntoAcopioCreateNestedOneWithoutEncargadosInput
    objetosRegistrados?: ObjetoCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoCreateNestedManyWithoutEncargadoInput
    eventos?: BitacoraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutActasFirmadasInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    id_punto?: bigint | number | null
    activo?: boolean
    creado_en?: Date | string
    objetosRegistrados?: ObjetoUncheckedCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaUncheckedCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoUncheckedCreateNestedManyWithoutEncargadoInput
    eventos?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutActasFirmadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutActasFirmadasInput, UsuarioUncheckedCreateWithoutActasFirmadasInput>
  }

  export type ObjetoUpsertWithWhereUniqueWithoutActaInput = {
    where: ObjetoWhereUniqueInput
    update: XOR<ObjetoUpdateWithoutActaInput, ObjetoUncheckedUpdateWithoutActaInput>
    create: XOR<ObjetoCreateWithoutActaInput, ObjetoUncheckedCreateWithoutActaInput>
  }

  export type ObjetoUpdateWithWhereUniqueWithoutActaInput = {
    where: ObjetoWhereUniqueInput
    data: XOR<ObjetoUpdateWithoutActaInput, ObjetoUncheckedUpdateWithoutActaInput>
  }

  export type ObjetoUpdateManyWithWhereWithoutActaInput = {
    where: ObjetoScalarWhereInput
    data: XOR<ObjetoUpdateManyMutationInput, ObjetoUncheckedUpdateManyWithoutActaInput>
  }

  export type UsuarioUpsertWithoutActasFirmadasInput = {
    update: XOR<UsuarioUpdateWithoutActasFirmadasInput, UsuarioUncheckedUpdateWithoutActasFirmadasInput>
    create: XOR<UsuarioCreateWithoutActasFirmadasInput, UsuarioUncheckedCreateWithoutActasFirmadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutActasFirmadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutActasFirmadasInput, UsuarioUncheckedUpdateWithoutActasFirmadasInput>
  }

  export type UsuarioUpdateWithoutActasFirmadasInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    punto?: PuntoAcopioUpdateOneWithoutEncargadosNestedInput
    objetosRegistrados?: ObjetoUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUpdateManyWithoutEncargadoNestedInput
    eventos?: BitacoraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutActasFirmadasInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    id_punto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    objetosRegistrados?: ObjetoUncheckedUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUncheckedUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUncheckedUpdateManyWithoutEncargadoNestedInput
    eventos?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutEventosInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    activo?: boolean
    creado_en?: Date | string
    punto?: PuntoAcopioCreateNestedOneWithoutEncargadosInput
    objetosRegistrados?: ObjetoCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionCreateNestedManyWithoutFirmanteInput
  }

  export type UsuarioUncheckedCreateWithoutEventosInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    id_punto?: bigint | number | null
    activo?: boolean
    creado_en?: Date | string
    objetosRegistrados?: ObjetoUncheckedCreateNestedManyWithoutRegistradorInput
    reportes?: ReportePerdidaUncheckedCreateNestedManyWithoutUsuarioInput
    reclamosAtendidos?: ReclamoUncheckedCreateNestedManyWithoutEncargadoInput
    actasFirmadas?: ActaDestruccionUncheckedCreateNestedManyWithoutFirmanteInput
  }

  export type UsuarioCreateOrConnectWithoutEventosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEventosInput, UsuarioUncheckedCreateWithoutEventosInput>
  }

  export type UsuarioUpsertWithoutEventosInput = {
    update: XOR<UsuarioUpdateWithoutEventosInput, UsuarioUncheckedUpdateWithoutEventosInput>
    create: XOR<UsuarioCreateWithoutEventosInput, UsuarioUncheckedCreateWithoutEventosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEventosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEventosInput, UsuarioUncheckedUpdateWithoutEventosInput>
  }

  export type UsuarioUpdateWithoutEventosInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    punto?: PuntoAcopioUpdateOneWithoutEncargadosNestedInput
    objetosRegistrados?: ObjetoUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUpdateManyWithoutFirmanteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEventosInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    id_punto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    objetosRegistrados?: ObjetoUncheckedUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUncheckedUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUncheckedUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUncheckedUpdateManyWithoutFirmanteNestedInput
  }

  export type ObjetoCreateManyRegistradorInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    id_punto: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
  }

  export type ReportePerdidaCreateManyUsuarioInput = {
    id_reporte?: bigint | number
    id_categoria?: number | null
    descripcion: string
    perdido_en: Date | string
    lugar_perdida: string
    estado?: string
    creado_en?: Date | string
  }

  export type ReclamoCreateManyEncargadoInput = {
    id_reclamo?: bigint | number
    id_objeto?: bigint | number | null
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado?: string
    motivo_decision?: string | null
    creado_en?: Date | string
    entregado_en?: Date | string | null
    numero_comprobante?: string | null
  }

  export type ActaDestruccionCreateManyFirmanteInput = {
    id_acta?: bigint | number
    numero_acta: string
    ejecutada_en: Date | string
    archivo_url: string
  }

  export type BitacoraCreateManyUsuarioInput = {
    id_evento?: bigint | number
    accion: string
    recurso: string
    resultado: string
    registrado_en?: Date | string
  }

  export type ObjetoUpdateWithoutRegistradorInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    punto?: PuntoAcopioUpdateOneRequiredWithoutObjetosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutObjetosNestedInput
    fotografias?: FotografiaUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUpdateManyWithoutObjetoNestedInput
    acta?: ActaDestruccionUpdateOneWithoutObjetosNestedInput
  }

  export type ObjetoUncheckedUpdateWithoutRegistradorInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotografias?: FotografiaUncheckedUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUncheckedUpdateManyWithoutObjetoNestedInput
  }

  export type ObjetoUncheckedUpdateManyWithoutRegistradorInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportePerdidaUpdateWithoutUsuarioInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutReportesNestedInput
  }

  export type ReportePerdidaUncheckedUpdateWithoutUsuarioInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportePerdidaUncheckedUpdateManyWithoutUsuarioInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReclamoUpdateWithoutEncargadoInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
    objeto?: ObjetoUpdateOneWithoutReclamosNestedInput
  }

  export type ReclamoUncheckedUpdateWithoutEncargadoInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    id_objeto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReclamoUncheckedUpdateManyWithoutEncargadoInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    id_objeto?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActaDestruccionUpdateWithoutFirmanteInput = {
    id_acta?: BigIntFieldUpdateOperationsInput | bigint | number
    numero_acta?: StringFieldUpdateOperationsInput | string
    ejecutada_en?: DateTimeFieldUpdateOperationsInput | Date | string
    archivo_url?: StringFieldUpdateOperationsInput | string
    objetos?: ObjetoUpdateManyWithoutActaNestedInput
  }

  export type ActaDestruccionUncheckedUpdateWithoutFirmanteInput = {
    id_acta?: BigIntFieldUpdateOperationsInput | bigint | number
    numero_acta?: StringFieldUpdateOperationsInput | string
    ejecutada_en?: DateTimeFieldUpdateOperationsInput | Date | string
    archivo_url?: StringFieldUpdateOperationsInput | string
    objetos?: ObjetoUncheckedUpdateManyWithoutActaNestedInput
  }

  export type ActaDestruccionUncheckedUpdateManyWithoutFirmanteInput = {
    id_acta?: BigIntFieldUpdateOperationsInput | bigint | number
    numero_acta?: StringFieldUpdateOperationsInput | string
    ejecutada_en?: DateTimeFieldUpdateOperationsInput | Date | string
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type BitacoraUpdateWithoutUsuarioInput = {
    id_evento?: BigIntFieldUpdateOperationsInput | bigint | number
    accion?: StringFieldUpdateOperationsInput | string
    recurso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BitacoraUncheckedUpdateWithoutUsuarioInput = {
    id_evento?: BigIntFieldUpdateOperationsInput | bigint | number
    accion?: StringFieldUpdateOperationsInput | string
    recurso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BitacoraUncheckedUpdateManyWithoutUsuarioInput = {
    id_evento?: BigIntFieldUpdateOperationsInput | bigint | number
    accion?: StringFieldUpdateOperationsInput | string
    recurso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyPuntoInput = {
    id_usuario?: bigint | number
    correo_institucional: string
    nombres: string
    apellidos: string
    rol?: string
    activo?: boolean
    creado_en?: Date | string
  }

  export type ObjetoCreateManyPuntoInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    registrado_por: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
  }

  export type UsuarioUpdateWithoutPuntoInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    objetosRegistrados?: ObjetoUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPuntoInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    objetosRegistrados?: ObjetoUncheckedUpdateManyWithoutRegistradorNestedInput
    reportes?: ReportePerdidaUncheckedUpdateManyWithoutUsuarioNestedInput
    reclamosAtendidos?: ReclamoUncheckedUpdateManyWithoutEncargadoNestedInput
    actasFirmadas?: ActaDestruccionUncheckedUpdateManyWithoutFirmanteNestedInput
    eventos?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutPuntoInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_institucional?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjetoUpdateWithoutPuntoInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutObjetosNestedInput
    registrador?: UsuarioUpdateOneRequiredWithoutObjetosRegistradosNestedInput
    fotografias?: FotografiaUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUpdateManyWithoutObjetoNestedInput
    acta?: ActaDestruccionUpdateOneWithoutObjetosNestedInput
  }

  export type ObjetoUncheckedUpdateWithoutPuntoInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotografias?: FotografiaUncheckedUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUncheckedUpdateManyWithoutObjetoNestedInput
  }

  export type ObjetoUncheckedUpdateManyWithoutPuntoInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObjetoCreateManyCategoriaInput = {
    id_objeto?: bigint | number
    codigo: string
    id_punto: bigint | number
    registrado_por: bigint | number
    id_acta?: bigint | number | null
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
  }

  export type ReportePerdidaCreateManyCategoriaInput = {
    id_reporte?: bigint | number
    id_usuario: bigint | number
    descripcion: string
    perdido_en: Date | string
    lugar_perdida: string
    estado?: string
    creado_en?: Date | string
  }

  export type ObjetoUpdateWithoutCategoriaInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    punto?: PuntoAcopioUpdateOneRequiredWithoutObjetosNestedInput
    registrador?: UsuarioUpdateOneRequiredWithoutObjetosRegistradosNestedInput
    fotografias?: FotografiaUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUpdateManyWithoutObjetoNestedInput
    acta?: ActaDestruccionUpdateOneWithoutObjetosNestedInput
  }

  export type ObjetoUncheckedUpdateWithoutCategoriaInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotografias?: FotografiaUncheckedUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUncheckedUpdateManyWithoutObjetoNestedInput
  }

  export type ObjetoUncheckedUpdateManyWithoutCategoriaInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    id_acta?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportePerdidaUpdateWithoutCategoriaInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReportesNestedInput
  }

  export type ReportePerdidaUncheckedUpdateWithoutCategoriaInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportePerdidaUncheckedUpdateManyWithoutCategoriaInput = {
    id_reporte?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    perdido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_perdida?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotografiaCreateManyObjetoInput = {
    posicion: number
    archivo_url: string
  }

  export type ReclamoCreateManyObjetoInput = {
    id_reclamo?: bigint | number
    atendido_por: bigint | number
    rut_reclamante: string
    nombre_reclamante: string
    evidencia_identidad: string
    evidencia_propiedad: string
    estado?: string
    motivo_decision?: string | null
    creado_en?: Date | string
    entregado_en?: Date | string | null
    numero_comprobante?: string | null
  }

  export type FotografiaUpdateWithoutObjetoInput = {
    posicion?: IntFieldUpdateOperationsInput | number
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type FotografiaUncheckedUpdateWithoutObjetoInput = {
    posicion?: IntFieldUpdateOperationsInput | number
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type FotografiaUncheckedUpdateManyWithoutObjetoInput = {
    posicion?: IntFieldUpdateOperationsInput | number
    archivo_url?: StringFieldUpdateOperationsInput | string
  }

  export type ReclamoUpdateWithoutObjetoInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
    encargado?: UsuarioUpdateOneRequiredWithoutReclamosAtendidosNestedInput
  }

  export type ReclamoUncheckedUpdateWithoutObjetoInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    atendido_por?: BigIntFieldUpdateOperationsInput | bigint | number
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReclamoUncheckedUpdateManyWithoutObjetoInput = {
    id_reclamo?: BigIntFieldUpdateOperationsInput | bigint | number
    atendido_por?: BigIntFieldUpdateOperationsInput | bigint | number
    rut_reclamante?: StringFieldUpdateOperationsInput | string
    nombre_reclamante?: StringFieldUpdateOperationsInput | string
    evidencia_identidad?: StringFieldUpdateOperationsInput | string
    evidencia_propiedad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo_decision?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numero_comprobante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObjetoCreateManyActaInput = {
    id_objeto?: bigint | number
    codigo: string
    id_categoria: number
    id_punto: bigint | number
    registrado_por: bigint | number
    descripcion: string
    hallado_en: Date | string
    lugar_hallazgo: string
    registrado_en?: Date | string
    estado?: string
    publicado?: boolean
    alerta_enviada_en?: Date | string | null
  }

  export type ObjetoUpdateWithoutActaInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    punto?: PuntoAcopioUpdateOneRequiredWithoutObjetosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutObjetosNestedInput
    registrador?: UsuarioUpdateOneRequiredWithoutObjetosRegistradosNestedInput
    fotografias?: FotografiaUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUpdateManyWithoutObjetoNestedInput
  }

  export type ObjetoUncheckedUpdateWithoutActaInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotografias?: FotografiaUncheckedUpdateManyWithoutObjetoNestedInput
    reclamos?: ReclamoUncheckedUpdateManyWithoutObjetoNestedInput
  }

  export type ObjetoUncheckedUpdateManyWithoutActaInput = {
    id_objeto?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_punto?: BigIntFieldUpdateOperationsInput | bigint | number
    registrado_por?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    hallado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_hallazgo?: StringFieldUpdateOperationsInput | string
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    publicado?: BoolFieldUpdateOperationsInput | boolean
    alerta_enviada_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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