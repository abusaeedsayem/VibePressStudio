import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef(
  (props: any, ref: React.Ref<HTMLTableElement>) => {
    return (
      <table ref={ref} className={cn("w-full caption-bottom", props.className || "")} {...props} />
    )
  }
)
Table.displayName = "Table"

const TableHeader = React.forwardRef(
  (props: any, ref: React.Ref<HTMLTableSectionElement>) => {
    return <thead ref={ref} className={cn("bg-muted/30 border-b", props.className || "")} {...props} />
  }
)
TableHeader.displayName = "TableHeader"

const TableRow = React.forwardRef(
  (props: any, ref: React.Ref<HTMLTableRowElement>) => {
    return <tr ref={ref} className={cn("hover:bg-muted/30", props.className || "")} {...props} />
  }
)
TableRow.displayName = "TableRow"

const TableHeaderCell = React.forwardRef(
  (props: any, ref: React.Ref<HTMLTableCellElement>) => {
    return <th ref={ref} className={cn("p-3 text-left font-medium text-foreground", props.className || "")} {...props} />
  }
)
TableHeaderCell.displayName = "TableHeaderCell"

const TableCell = React.forwardRef(
  (props: any, ref: React.Ref<HTMLTableCellElement>) => {
    return <td ref={ref} className={cn("p-3 text-foreground", props.className || "")} {...props} />
  }
)
TableCell.displayName = "TableCell"

export { Table, TableHeader, TableRow, TableHeaderCell, TableCell }