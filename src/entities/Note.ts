import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('Note')
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", length: 5000 })
    text: string;
}
