/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';

const DataTable = ({ columns, data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    const paginate = pageNumber => setCurrentPage(pageNumber);
    if(currentPage < 1){
        setCurrentPage(1);
    }else if(currentPage > totalPages){
        setCurrentPage(totalPages);
    }
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column} style={{ textAlign: 'center' }}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((value, j) => (
                  <td key={j} style={{ textAlign: 'center' }}>
                    {value}
                    
                  </td>
                  
                ))}
                <td className="btn-group" >
                    <button className='btn btn-primary'>Update</button>
                    <button className='btn btn-danger'>Delete</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </Table>
  
        <Pagination>
        <Pagination.First onClick={()=> setCurrentPage(1)}/>
        <Pagination.Prev onClick={() => setCurrentPage(currentPage-1)}/>
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item
              key={i}
              active={i + 1 === currentPage}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => setCurrentPage(currentPage+1)}/>
          <Pagination.Last onClick={()=> setCurrentPage(totalPages)}/>
        </Pagination>
      </div>
    );
  };
  

export default DataTable;
