-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "countrieId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "stateId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "neighborhoods" (
    "id" SERIAL NOT NULL,
    "citieId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "neighborhoods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phones" (
    "id" SERIAL NOT NULL,
    "phone" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "phones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profilePics" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profilePics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establishments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "neighborhoodId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "establishments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establishmentsPhones" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "establishmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "establishmentsPhones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professionals" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "establishmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "professionals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "backgroundPics" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "establishmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "backgroundPics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establishmentsPics" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "establishmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "establishmentsPics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "countries_country_key" ON "countries"("country");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "phones_phone_key" ON "phones"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "establishmentsPhones_number_key" ON "establishmentsPhones"("number");

-- CreateIndex
CREATE UNIQUE INDEX "services_service_key" ON "services"("service");

-- AddForeignKey
ALTER TABLE "states" ADD CONSTRAINT "states_countrieId_fkey" FOREIGN KEY ("countrieId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "neighborhoods" ADD CONSTRAINT "neighborhoods_citieId_fkey" FOREIGN KEY ("citieId") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profilePics" ADD CONSTRAINT "profilePics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishments" ADD CONSTRAINT "establishments_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "neighborhoods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishmentsPhones" ADD CONSTRAINT "establishmentsPhones_establishmentId_fkey" FOREIGN KEY ("establishmentId") REFERENCES "establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professionals" ADD CONSTRAINT "professionals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professionals" ADD CONSTRAINT "professionals_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professionals" ADD CONSTRAINT "professionals_establishmentId_fkey" FOREIGN KEY ("establishmentId") REFERENCES "establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "backgroundPics" ADD CONSTRAINT "backgroundPics_establishmentId_fkey" FOREIGN KEY ("establishmentId") REFERENCES "establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "establishmentsPics" ADD CONSTRAINT "establishmentsPics_establishmentId_fkey" FOREIGN KEY ("establishmentId") REFERENCES "establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
