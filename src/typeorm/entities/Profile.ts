import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "users_profile"})
export class Profile{
    @PrimaryGeneratedColumn()
    intId: number;

    @Column()
    firstName:string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    dob: string;
}