/* eslint-disable react/prop-types */
import DataTable from './DataTable';
const TableAdmin = (props) => {
    const columns = ['Name', 'Age', 'Country', 'Excute'];
  const data = [
    { Name: 'Alice', Age: 25, Country: 'USA' },
    { Name: 'Bob', Age: 30, Country: 'Canada' },
    { Name: 'Charlie', Age: 35, Country: 'UK' },
    { Name: 'Alice', Age: 25, Country: 'USA' },
    { Name: 'Bob', Age: 30, Country: 'Canada' },
    { Name: 'Charlie', Age: 35, Country: 'UK' },
    { Name: 'Alice', Age: 25, Country: 'USA' },
    { Name: 'Bob', Age: 30, Country: 'Canada' },
    { Name: 'Charlie', Age: 35, Country: 'UK' },
    { Name: 'Alice', Age: 25, Country: 'USA' },
    { Name: 'Bob', Age: 30, Country: 'Canada' },
    { Name: 'Charlie', Age: 35, Country: 'UK' },
    { Name: 'Alice', Age: 25, Country: 'USA' },
    { Name: 'Bob', Age: 30, Country: 'Canada' },
    { Name: 'Charlie', Age: 35, Country: 'UK' },
  ];
  const itemsPerPage = 4;

  return (
    <div>
      <h1>{props.title}</h1>
      <DataTable columns={columns} data={data} itemsPerPage={itemsPerPage} />
    </div>
  );
}

export default TableAdmin;
