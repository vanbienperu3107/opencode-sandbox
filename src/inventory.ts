/** Kho hang don gian — du de agent co thu that de doc, sua va chay tool. */

export interface Item {
  readonly sku: string;
  readonly name: string;
  quantity: number;
  readonly unitPrice: number;
}

export class Inventory {
  private readonly items = new Map<string, Item>();

  add(item: Item): void {
    const existing = this.items.get(item.sku);
    if (existing) {
      existing.quantity += item.quantity;
      return;
    }
    this.items.set(item.sku, { ...item });
  }

  remove(sku: string, quantity: number): void {
    const item = this.items.get(sku);
    if (!item) throw new Error(`khong co sku ${sku}`);
    if (item.quantity < quantity) {
      throw new Error(`ton kho ${sku} chi con ${item.quantity}, khong du ${quantity}`);
    }
    item.quantity -= quantity;
  }

  totalValue(): number {
    let total = 0;
    for (const item of this.items.values()) total += item.quantity * item.unitPrice;
    return total;
  }

  lowStock(threshold: number): Item[] {
    return [...this.items.values()].filter((i) => i.quantity < threshold);
  }
}
