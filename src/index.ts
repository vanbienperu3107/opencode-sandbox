import { Inventory } from './inventory.js';

const inventory = new Inventory();
inventory.add({ sku: 'A-1', name: 'Ban phim', quantity: 10, unitPrice: 450_000 });
inventory.add({ sku: 'A-2', name: 'Chuot', quantity: 3, unitPrice: 200_000 });

console.log('Tong gia tri ton kho:', inventory.totalValue());
console.log('Sap het hang:', inventory.lowStock(5).map((i) => i.name));
