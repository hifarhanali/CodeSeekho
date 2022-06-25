/*
  Warnings:

  - Added the required column `review` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "snippetId" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("id", "snippetId", "userId") SELECT "id", "snippetId", "userId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE UNIQUE INDEX "Review_id_key" ON "Review"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
