import './pager.css';

const Pager = ({ docs, setQuery, backgroundColor = '#2c3e50', top = true }) => {

    const handleChangePage = (page) => {
        setQuery((preQuery) => ({ ...preQuery, page }));
        if (top) window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    return (
        <div className='paginator'>
            {docs && docs.hasPrevPage === true &&
                <p className='paginatorNextPage'
                    onClick={() => handleChangePage(docs.prevPage)}
                >
                    {docs.prevPage}
                </p>
            }

            {docs && docs.page &&
                <p className='paginatorActualPage' style={{ backgroundColor }}>{docs.page}</p>
            }

            {docs && docs.hasNextPage === true &&
                <p className='paginatorNextPage'
                    onClick={() => handleChangePage(docs.nextPage)}
                >
                    {docs.nextPage}
                </p>
            }
        </div>
    );
};

export { Pager };