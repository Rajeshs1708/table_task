import { Button } from 'primereact/button'

export const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage
}) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1

  return (
    <>
      <div className='pagination'>
        <Button
          style={{ padding: '8px', fontWeight: 'bold' }}
          disabled={activePage === 1}
          onClick={() => setActivePage(1)}
        >
          ⏮️ First
        </Button>
        <Button
          style={{ padding: '8px', fontWeight: 'bold' }}
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          ⬅️ Previous
        </Button>
        <Button
          style={{ padding: '8px', fontWeight: 'bold' }}
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          Next ➡️
        </Button>
        <Button
          style={{ padding: '8px', fontWeight: 'bold' }}
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          Last ⏭️
        </Button>
      </div>
      <div
        style={{
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <h3>
          Page &lt;<span style={{ color: 'red' }}> {activePage}</span> of{' '}
          <span style={{ color: 'red' }}>{totalPages}</span> &gt;
        </h3>

        <h3>
          Rows:{' '}
          <span style={{ color: 'red' }}>
            {beginning === end ? end : `${beginning} - ${end}`}
          </span>{' '}
          of <span style={{ color: 'red' }}>{count}</span>
        </h3>
      </div>
    </>
  )
}
