import './styles.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import { Table } from './Table'

export default function App () {
  const columns1 = [
    { accessor: 'id', label: 'ID' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    {
      accessor: 'is_manager',
      label: 'Manager',
      format: value => (value ? '✔️' : '✖️')
    },
    { accessor: 'start_date', label: 'Start Date' },
    { accessor: 'end_date', label: 'End Date' }
    // { accessor: 'nationality', label: 'Nationality' }
  ]
  const columns2 = [
    { accessor: 'id', label: 'ID' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    {
      accessor: 'is_manager',
      label: 'Manager',
      format: value => (value ? '✔️' : '✖️')
    },
    { accessor: 'start_date', label: 'Start Date' }
  ]

  const rows = [
    {
      id: 1,
      name: 'Liza ',
      age: 36,
      is_manager: true,
      start_date: '02-28-1999',
      end_date: '01-29-2000',
      nationality: 'USA'
    },
    {
      id: 2,
      name: 'Jack ',
      age: 40,
      is_manager: true,
      start_date: '03-05-1997',
      end_date: '02-10-2001',
      nationality: 'USA'
    },
    {
      id: 3,
      name: 'Tracy ',
      age: 39,
      is_manager: false,
      start_date: '07-12-2002',
      end_date: '03-20-2004',
      nationality: 'USA'
    },
    {
      id: 4,
      name: 'Jenna ',
      age: 40,
      is_manager: false,
      start_date: '02-28-1999',
      end_date: '01-25-2003',
      nationality: 'USA'
    },
    {
      id: 5,
      name: 'Kenneth',
      age: 45,
      is_manager: false,
      start_date: '01-01-1970',
      end_date: '03-30-1980',
      nationality: 'USA'
    },
    {
      id: 6,
      name: 'Peter ',
      age: 42,
      is_manager: true,
      start_date: '04-01-2000',
      end_date: '02-30-2005',
      nationality: 'USA'
    },
    {
      id: 7,
      name: 'Frank',
      age: 36,
      is_manager: false,
      start_date: '06-09-2004',
      end_date: '01-09-2007',
      nationality: 'USA'
    },
    {
      id: 8,
      name: 'Rossitano',
      age: 36,
      is_manager: false,
      start_date: '06-09-2004',
      end_date: '04-08-2006',
      nationality: 'USA'
    },
    {
      id: 9,
      name: 'Bruce',
      age: 36,
      is_manager: false,
      start_date: '06-09-2004',
      end_date: '04-05-2008',
      nationality: 'USA'
    },
    {
      id: 10,
      name: 'Wayne',
      age: 40,
      is_manager: true,
      start_date: '06-09-2004',
      end_date: '04-05-2008',
      nationality: 'UAE'
    },
    {
      id: 11,
      name: 'Steve',
      age: 40,
      is_manager: true,
      start_date: '08-10-2005',
      end_date: '04-05-2008',
      nationality: 'USA'
    },
    {
      id: 12,
      name: 'Rogers',
      age: 42,
      is_manager: true,
      start_date: '01-09-2004',
      end_date: '04-05-2009',
      nationality: 'Denmark'
    }
  ]

  return (
    <div className='App'>
      <div className='table1'>
        <h2 style={{ textAlign: 'center' }}>Table 1</h2>
        <Table rows={rows} columns={columns1} />
      </div>
      <div className='table2'>
        <h2 style={{ textAlign: 'center' }}>Table 2</h2>
        <Table rows={rows} columns={columns2} />
      </div>
    </div>
  )
}
