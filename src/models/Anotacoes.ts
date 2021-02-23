import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm'

import Usuario from './Usuario';

@Entity('anotacoes')
class Anotacao {
    @PrimaryGeneratedColumn('increment')
    codigo: number;
    
    @Column()
    titulo: string;
    
    @Column()
    descricao: string;

    @CreateDateColumn()
    data_cadastro: Date;

    @UpdateDateColumn()
    ultima_atualizacao: Date;

    @Column()
    owner_user_apelido:string;

    @ManyToOne(() => Usuario)
    @JoinColumn({name:'owner_user_apelido'})
    provider: Usuario;
}

export default Anotacao;