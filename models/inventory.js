export const inventory = {
  computers: [
    {
      brand: 'HP',
      count: 2,
      models: [
        { model: 'HP Pavilion', price: 600, specifications: { ram: '8GB', storage: '1TB HDD', processor: 'i5' } },
        { model: 'HP Envy', price: 900, specifications: { ram: '16GB', storage: '512GB SSD', processor: 'i7' } }
      ],
      totalValue: 1500
    },
    {
      brand: 'Dell',
      count: 1,
      models: [
        { model: 'Dell XPS 13', price: 1200, specifications: { ram: '16GB', storage: '1TB SSD', processor: 'i7' } }
      ],
      totalValue: 1200
    },
    {
      brand: 'Apple',
      count: 1,
      models: [
        { model: 'MacBook Pro', price: 2000, specifications: { ram: '16GB', storage: '1TB SSD', processor: 'M1' } }
      ],
      totalValue: 2000
    }
  ],
  totalComputers: function() {
    return this.computers.reduce((total, item) => total + item.count, 0);
  },
  totalInventoryValue: function() {
    return this.computers.reduce((total, item) => total + item.totalValue, 0);
  },
  totalBrands: function () {
    return this.computers.length;
  }
};

export const salesPerYear = [
  { year: 2021, totalSales: 15000 },
  { year: 2022, totalSales: 20000 },
  { year: 2023, totalSales: 25000 },
  { year: 2024, totalSales: 30000 }
];
