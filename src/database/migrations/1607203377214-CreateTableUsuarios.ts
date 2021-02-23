import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsuarios1607203377214 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name:'usuarios',

      columns:[
        {
          name: 'codigo',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name:'nome',
          type:'varchar',
          unsigned: true
        },
        {
          name: 'apelido',
          type: 'varchar',
          isUnique: true,
          unsigned: true
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
          unsigned: true,
        },
        {
          name: 'senha',
          type: 'varchar',
          unsigned: true,

        },
        {
          name: 'data_cadastro',
          type: 'timestamp',
          default: 'now()',
          unsigned: true,
          isNullable: false
        },
        {
          name: 'ultima_atualizacao',
          type: 'timestamp',
          default: 'now()',
          unsigned: true,
          isNullable: false
        }
      ]
    }))  
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');  
  }
}
