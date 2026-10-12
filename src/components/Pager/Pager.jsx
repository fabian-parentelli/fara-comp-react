import './pager.css';

const Pager = ({
    docs, setQuery,
    backgroundColor = '#2c3e50',
    top = true,
    size = '16px',
    compColor = '#2c3e50',
    compBackground = '#ecf0f1',
    jump = 5
}) => {

    const handleChangePage = (page) => {
        if (!page) return;
        setQuery((preQuery) => ({ ...preQuery, page }));
        if (top) window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const hasPrev = docs?.page && docs.page > 1;
    const hasNext = docs?.page && docs?.totalPages && docs.page < docs.totalPages;
    const showFastBack = docs?.page > 2;
    const showFastForward = docs?.page && docs?.totalPages && docs.page < docs.totalPages - 1;

    return (
        <div
            className='paginator'
            style={{
                fontSize: size,
                '--compColor': compColor,
                '--compBackground': compBackground,
                '--mainBackground': backgroundColor
            }}
        >

            {showFastBack &&
                <span className='paginatorFastPage'
                    onClick={() => handleChangePage(Math.max(1, docs.page - jump))}
                >
                    {'«'}
                </span>
            }

            {docs && hasPrev === true &&
                <span className='paginatorNextPage'
                    onClick={() => handleChangePage(docs.prevPage)}
                >
                    {docs.prevPage}
                </span>
            }

            {docs && docs.page &&
                <span className='paginatorActualPage' style={{ backgroundColor }}>{docs.page}</span>
            }

            {docs && hasNext === true &&
                <span className='paginatorNextPage'
                    onClick={() => handleChangePage(docs.nextPage)}
                >
                    {docs.nextPage}
                </span>
            }

            {showFastForward &&
                <span className='paginatorFastPage'
                    onClick={() => handleChangePage(Math.min(docs.totalPages, docs.page + jump))}
                >
                    {'»'}
                </span>
            }

        </div>
    );
};

export { Pager };
