"use client";
import React from "react";
import { Pagination, PaginationProps } from "antd";
interface PaginationTableProps extends PaginationProps {}
const PaginationTable: React.FC<PaginationTableProps> = ({ ...rest }) => {
  return <Pagination {...rest} />;
};

export default PaginationTable;
