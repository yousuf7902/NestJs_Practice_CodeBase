import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  intId: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
