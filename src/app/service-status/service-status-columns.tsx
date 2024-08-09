'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { DataTableColumnHeader } from '@/components/reusable/DataTableColumnHeader'
import {
  TServiceRegions,
  TServiceStatusTypes,
  dummyServiceStatusData,
  serviceKeyName,
} from '@/utils/dummyDataForTable'
import { getChipForStatus } from '@/utils/iconUtils'
import { useState } from 'react'

const ServiceRegionKeys = Object.keys(dummyServiceStatusData[0]) as Array<
  keyof TServiceRegions
>

const preColumns: ColumnDef<TServiceRegions>[] = ServiceRegionKeys.map(
  (key) => {
    return {
      name: key,
      accessorKey: key,
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title={key} />
      },
      cell: ({ row }) => {
        const status: TServiceStatusTypes = row.getValue(key)

        return <div>{getChipForStatus(status)}</div>
      },
    }
  }
)

export const columns: ColumnDef<TServiceRegions>[] = [
  ...preColumns,
  {
    id: 'actions',
    cell: ({ row }) => {
      const service = row.original
      const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
      const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)
      return (
        <>
          {/*Dont mind, just a dialog box */}
          <Dialog
            open={isDialogOpen}
            onOpenChange={(val) => setIsDialogOpen(val)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {/* Dont mind, just a side panel */}
          <Sheet open={isSheetOpen} onOpenChange={(val) => setIsSheetOpen(val)}>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          {/**********************************************/}
          <div className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() =>
                    navigator.clipboard.writeText(service[serviceKeyName])
                  }
                >
                  Copy service name
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsSheetOpen(true)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )
    },
  },
]
