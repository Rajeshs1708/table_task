import './styles.css'

import { Table } from './Table'

export default function App() {
  const columns1 = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    { accessor: 'is_manager', label: 'Manager', format: (value) => (value ? '✔️' : '✖️') },
    { accessor: 'start_date', label: 'Start Date' },
    { accessor: 'end_date', label: 'End Date' },
    { accessor: 'nationality', label: 'Nationality' },
  ]
  const columns2 = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    { accessor: 'is_manager', label: 'Manager', format: (value) => (value ? '✔️' : '✖️') },
    { accessor: 'start_date', label: 'Start Date' },
  ]

  const rows = [
    { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999',end_date:"01-29-2000",nationality:"USA" },
    { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997',end_date:"02-10-2001",nationality:"USA" },
    { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002',end_date:"03-20-2004",nationality:"USA" },
    { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999',end_date:"01-25-2003",nationality:"USA" },
    { id: 5, name: 'Kenneth Parcell', age: 45, is_manager: false, start_date: '01-01-1970',end_date:"03-30-1980",nationality:"USA" },
    { id: 6, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000',end_date:"02-30-2005",nationality:"USA" },
    { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004',end_date:"01-09-2007",nationality:"USA" },
    { id: 8, name: 'Rossitano', age: 36, is_manager: false, start_date: '06-09-2004',end_date:"04-08-2006",nationality:"USA" },
    { id: 9, name: 'Frank', age: 36, is_manager: false, start_date: '06-09-2004',end_date:"04-05-2008",nationality:"USA" },
    { id: 10, name: null, age: null, is_manager: null, start_date: null,end_date:null,nationality:null },
  ]

  return (
    <div className="App">
      <div className='table1'>
        <h1 style={{textAlign:"center"}}>Table 1</h1>
        <Table rows={rows} columns={columns1} />
      </div>
      <div className='table2'>
        <h1 style={{textAlign:"center"}}>Table 2</h1>
        <Table rows={rows} columns={columns2} />
      </div>
    </div>
  )
}
