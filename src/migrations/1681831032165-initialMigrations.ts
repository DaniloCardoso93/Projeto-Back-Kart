import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrations1681831032165 implements MigrationInterface {
    name = 'initialMigrations1681831032165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "img" character varying NOT NULL, "announcementId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(50) NOT NULL, "model" character varying(50) NOT NULL, "year" integer NOT NULL, "fuel" character varying(100) NOT NULL, "odometer" integer NOT NULL, "color" character varying(50) NOT NULL, "fipe" character varying(50) NOT NULL, "price" integer NOT NULL, "description" character varying(500) NOT NULL, "isPublished" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(50) NOT NULL, "cpf" character varying(14) NOT NULL, "cellphone" character varying(20) NOT NULL, "birthdate" character varying(14) NOT NULL, "password" character varying(150) NOT NULL, "email" character varying(250) NOT NULL, "bio" character varying(250) NOT NULL, "isAdvertiser" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zipCode" character varying(10) NOT NULL, "street" character varying(250) NOT NULL, "city" character varying(250) NOT NULL, "state" character varying(250) NOT NULL, "number" character varying(50) NOT NULL, "complement" character varying(250), "userId" uuid, CONSTRAINT "REL_d25f1ea79e282cc8a42bd616aa" UNIQUE ("userId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(500) NOT NULL, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_fac6198a89ec23116ca0352104d" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_fac6198a89ec23116ca0352104d"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}
