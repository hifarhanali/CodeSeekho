/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL DEFAULT 'https://www.gravatar.com/avatar/{email}?s=200',
    "password" TEXT NOT NULL,
    "profession" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "name", "photo", "profession") SELECT "email", "name", "photo", "profession" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
