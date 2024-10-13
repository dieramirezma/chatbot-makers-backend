import {inventory, salesPerYear} from "../models/inventory.js"

export function metrics(req, res) {
  const metricsData = {
    totalComputers: inventory.totalComputers(),
    totalInventoryValue: inventory.totalInventoryValue(),
    totalBrands: inventory.totalBrands()
  }
  res.status(200).json({metricsData})
}

export function sales(req, res) {
  res.status(200).json({salesPerYear: salesPerYear})
}
