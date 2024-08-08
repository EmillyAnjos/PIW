import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id

    @Column()
    fullName

    @Column()
    username

    @Column()
    email

    @Column()
    password

    @Column({ default: false})
    isActive
}