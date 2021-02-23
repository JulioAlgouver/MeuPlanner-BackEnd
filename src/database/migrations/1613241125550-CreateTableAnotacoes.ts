import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableAnotacoes1613241125550 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name:'anotacoes',

            columns: [
                {
                    name:'codigo',
                    type:'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy:'increment'
                },
                {
                    name:'titulo',
                    type:'varchar',
                    unsigned:true,
                    isNullable:false
                },
                {
                    name:'descricao',
                    type:'varchar',
                    unsigned:true,
                    isNullable:false
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
                },
                {
                    name:'owner_user_apelido',
                    type:'varchar',
                    isNullable:false,
                    unsigned:true,
                }
            ],
            foreignKeys: [
                {
                    name:'owner_user',
                    columnNames:['owner_user_apelido'],
                    referencedTableName: 'usuarios',
                    referencedColumnNames:['apelido'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('anotacoes');
    }

}
