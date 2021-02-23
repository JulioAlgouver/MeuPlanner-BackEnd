import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('usuarios')
class Usuario {
    @PrimaryGeneratedColumn('increment')
    codigo: number;
    
    @Column()
    nome: string;
    
    @Column()
    apelido: string;

    @Column()
    senha: string;

    @Column()
    email: string;

    @CreateDateColumn()
    data_cadastro: Date;

    @UpdateDateColumn()
    ultima_atualizacao: Date;
}

export default Usuario;