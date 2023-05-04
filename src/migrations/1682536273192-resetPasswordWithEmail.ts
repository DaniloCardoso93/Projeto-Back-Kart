import { MigrationInterface, QueryRunner } from "typeorm";

export class resetPasswordWithEmail1682536273192 implements MigrationInterface {
    name = 'resetPasswordWithEmail1682536273192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "resetToken" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "resetToken"`);
    }

}
