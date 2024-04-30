import React, { useContext, useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { StaticDataContext } from "../../context/StaticDataContext";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const PaginatedTable = () => {
  //TODO replace this with the context data and move out of file
  // const data = [
  //   // Assuming each item is an object with properties like `id`, `name`, `views`, etc.
  //   { id: 1, name: 'Item 1', views: 100 },
  //   { id: 2, name: 'Item 2', views: 200 },
  //   // Add more items as needed
  // ];

  const data2 = useContext(StaticDataContext);
  console.log(data2);
  const data = data2.art;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); //TODO: add a dropdown to select items per page and move pagination to own component

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const onPaginationChange = (pageSize: number) => {
    setItemsPerPage(pageSize);
  };

  const renderDropdownItems = () => {
    const pageSizes = [5, 10, 25, 50, 100]; //TODO: bring this in via props?
    const items = [];
    for (let i = 0; i <= pageSizes.length; i++) {
      items.push(
        <Dropdown.Item key={i} onClick={() => onPaginationChange(pageSizes[i])}>
          {pageSizes[i]}
        </Dropdown.Item>
      );
    }
    return items;
  };

  const renderPaginationItems = () => {
    const items = [];
    for (
      let number = 1;
      number <= Math.ceil(data.length / itemsPerPage);
      number++
    ) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  //TODO: figure out how to make this a generic component by moving the data to a prop
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* can we map the keys in the prop object coming in and use them to generate the headings? */}
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Type</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.type}</td>
              <td>{item.datetime}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <DropdownButton id="dropdown-basic-button" title={itemsPerPage}>
        {renderDropdownItems()}
      </DropdownButton>
      <Pagination>{renderPaginationItems()}</Pagination>
    </>
  );
};
