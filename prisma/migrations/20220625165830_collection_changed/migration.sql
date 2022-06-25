/*
  Warnings:

  - You are about to drop the column `collectionName` on the `Collection` table. All the data in the column will be lost.
  - Added the required column `name` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Collection" ("id", "userId") SELECT "id", "userId" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
CREATE UNIQUE INDEX "Collection_id_key" ON "Collection"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
