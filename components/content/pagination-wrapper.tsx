import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationWrapper = ({ page, lastPage }: PaginationProps) => {
  return (
    <Pagination className="not-prose mt-12">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={page > 2 ? `/?page=${page - 1}` : ""} />
          </PaginationItem>
        )}
        {page > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {Array.from({ length: lastPage }, (_, i) => i + 1)
          .slice(Math.max(0, page - 2), Math.min(lastPage, page + 1))
          .map((pageNum) => (
            <PaginationItem key={pageNum}>
              <PaginationLink
                href={`/?page=${pageNum}`}
                isActive={pageNum === page}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          ))}
        {page < lastPage && (
          <PaginationItem>
            <PaginationNext href={`/?page=${page + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationWrapper;
