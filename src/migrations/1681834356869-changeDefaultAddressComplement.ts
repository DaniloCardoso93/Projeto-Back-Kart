import { MigrationInterface, QueryRunner } from "typeorm";

export class changeDefaultAddressComplement1681834356869 implements MigrationInterface {
    name = 'changeDefaultAddressComplement1681834356869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "complement" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "complement" DROP DEFAULT`);
    }

}
