import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Variant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  sku: string;

  @ManyToOne(() => Product, product => product.variants)
  product: Product;
}