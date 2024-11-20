import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "./ui/table.js";
interface TableProps {
  projectedRevenue: number[];
  highestGrowthYear: number;
}
const Tables = ({ projectedRevenue, highestGrowthYear }: TableProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg md:text-xl font-semibold">
        Project Revenue Output
      </h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">Year</TableHead>
              <TableHead className="w-1/2">Project Revenue </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectedRevenue.map((revenue, index) => (
              <TableRow
                key={index}
                className={
                  index + 1 === highestGrowthYear ? "bg-green-400" : ""
                }
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{revenue.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
