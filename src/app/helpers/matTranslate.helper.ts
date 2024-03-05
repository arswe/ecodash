import { MatPaginatorIntl } from '@angular/material/paginator'

export function getPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl()

  paginatorIntl.nextPageLabel = 'Next Page'
  paginatorIntl.previousPageLabel = 'Previous Page'
  paginatorIntl.lastPageLabel = 'Last Page'
  paginatorIntl.firstPageLabel = 'First Page'
  paginatorIntl.itemsPerPageLabel = 'Items per page'
  paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return `0 de ${length}`
    }
    length = Math.max(length, 0)
    const startIndex = page * pageSize
    const endIndex =
      startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize
    return `${startIndex + 1} - ${endIndex} de ${length}`
  }

  return paginatorIntl
}
