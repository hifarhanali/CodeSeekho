/*
  Warnings:

  - Added the required column `name` to the `Snippet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Snippet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "programmingLanguage" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "postedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Snippet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Snippet_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Snippet" ("code", "collectionId", "id", "likes", "postedAt", "programmingLanguage", "userId") SELECT "code", "collectionId", "id", "likes", "postedAt", "programmingLanguage", "userId" FROM "Snippet";
DROP TABLE "Snippet";
ALTER TABLE "new_Snippet" RENAME TO "Snippet";
CREATE UNIQUE INDEX "Snippet_id_key" ON "Snippet"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
