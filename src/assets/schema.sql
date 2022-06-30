CREATE TABLE IF NOT EXISTS KEY_INDEX_STORAGE(
  ID_KEY_INDEX INTEGER PRIMARY KEY AUTOINCREMENT,
  DATECREATE TEXT
);

CREATE TABLE IF NOT EXISTS KEY_VALUE_STORAGE(
  ID_KEY_VALUE INTEGER PRIMARY KEY AUTOINCREMENT,
  CONTENT TEXT,
  DATECREATE TEXT
);

CREATE TABLE IF NOT EXISTS KEY_VALUE_HAS_KEY_INDEX(
  ID_KEY_INDEX INTEGER,
  ID_KEY_VALUE INTEGER,
  PRIMARY KEY(ID_KEY_INDEX, ID_KEY_VALUE),
  FOREIGN KEY(ID_KEY_INDEX) REFERENCES KEY_INDEX_STORAGE(ID_KEY_INDEX),
  FOREIGN KEY(ID_KEY_VALUE) REFERENCES KEY_VALUE_STORAGE(ID_KEY_VALUE)
);