const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "mysql");

  const connections = {
    mysql: {
      connection: {
        connectionString: env(
          "C:Program FilesMySQLMySQL Server 8.3\binmysqld.exe (mysqld 8.3.0) starting as process 191900"
        ),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    mysql2: {
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres", // Specifies PostgreSQL as the database client
//     connection: {
//       host: env(
//         "DATABASE_HOST",
//         "dpg-cok7jnv79t8c73c4dg60-a.oregon-postgres.render.com"
//       ), // PostgreSQL host (defaults to localhost)
//       port: env.int("DATABASE_PORT", 5432), // PostgreSQL port (defaults to 5432)
//       database: env("DATABASE_NAME", "strapi_obpj"), // Name of the PostgreSQL database
//       user: env("DATABASE_USERNAME", "strapi_obpj_user"), // PostgreSQL database user
//       password: env("DATABASE_PASSWORD", "pv3JNB3WfFfSndnDfJnbzmESn2gkmGka"), // Password for the database user
//       schema: env("DATABASE_SCHEMA", "public"), // Optional: PostgreSQL schema (defaults to 'public')
//       ssl: env.bool("DATABASE_SSL_SELF", false) // Enable SSL for PostgreSQL connection (defaults to false)
//         ? { rejectUnauthorized: false } // SSL options (for self-signed certificates)
//         : false,
//     },
//     debug: false, // Set debug mode for the database connection (false by default)
//   },
// });
