-- docker/init.sql
    CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      password TEXT NOT NULL
    );

    -- Quelques données d'exemple (idempotent)
    INSERT INTO users (username, password) VALUES
      ('test1', 'mot_de_passe1'),
      ('test2', 'mot_de_passe2')
    ON CONFLICT (username) DO NOTHING;