-- CreateTable
CREATE TABLE "Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "rg" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_paciente" TEXT NOT NULL,
    "nome_dents" TEXT NOT NULL,
    "id_paciente" TEXT NOT NULL,
    "id_agenda" TEXT NOT NULL,
    "id_consulta" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Consulta_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_id_agenda_fkey" FOREIGN KEY ("id_agenda") REFERENCES "Agenda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "Secretaria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "nome_paciente" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_rg_key" ON "Secretaria"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_id_paciente_key" ON "Consulta"("id_paciente");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_id_agenda_key" ON "Consulta"("id_agenda");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_id_consulta_key" ON "Consulta"("id_consulta");
