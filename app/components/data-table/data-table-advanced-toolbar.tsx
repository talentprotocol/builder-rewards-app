"use client";

import { DataTableViewOptions } from "@/app/components/data-table/data-table-view-options";
import { cn } from "@/app/lib/utils";
import type { Table } from "@tanstack/react-table";
import type * as React from "react";

import { DataTableViewToggle } from "./data-table-view-toggle";

interface DataTableAdvancedToolbarProps<TData>
  extends React.ComponentProps<"div"> {
  table: Table<TData>;
}

export function DataTableAdvancedToolbar<TData>({
  table,
  children,
  className,
  ...props
}: DataTableAdvancedToolbarProps<TData>) {
  return (
    <div
      role="toolbar"
      aria-orientation="horizontal"
      className={cn("flex w-full items-start justify-between gap-2", className)}
      {...props}
    >
      <div className="flex flex-1 flex-wrap items-center gap-2">{children}</div>
      <div className="flex items-center gap-2">
        <DataTableViewOptions table={table} />
        <DataTableViewToggle />
      </div>
    </div>
  );
}
