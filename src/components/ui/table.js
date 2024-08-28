import * as React from "react"

const Table = React.forwardRef((props, ref) => (
  <table ref={ref} {...props} />
))
Table.displayName = "Table"

const TableHeader = React.forwardRef((props, ref) => (
  <thead ref={ref} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef((props, ref) => (
  <tbody ref={ref} {...props} />
))
TableBody.displayName = "TableBody"

const TableRow = React.forwardRef((props, ref) => (
  <tr ref={ref} {...props} />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef((props, ref) => (
  <th ref={ref} {...props} />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef((props, ref) => (
  <td ref={ref} {...props} />
))
TableCell.displayName = "TableCell"

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
}