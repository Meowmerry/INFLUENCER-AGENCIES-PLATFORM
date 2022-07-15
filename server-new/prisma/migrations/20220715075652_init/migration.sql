-- CreateEnum
CREATE TYPE "Role" AS ENUM ('AGENCIE', 'INFLUENCER', 'ADMIN');

-- CreateTable
CREATE TABLE "users"
(
    "id"        SERIAL       NOT NULL,
    "email"     TEXT         NOT NULL,
    "password"  TEXT         NOT NULL,
    "callName"  TEXT,
    "firstName" TEXT,
    "lastName"  TEXT,
    "role"      "Role"       NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users" ("email");
