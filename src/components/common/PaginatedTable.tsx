import { useContext, useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { StaticDataContext } from "../../context/StaticDataContext";
import { Dropdown, DropdownButton, Button, Row, Col } from "react-bootstrap";
import { EditIcon } from "../../assets/icons/EditIcon";
import { DeleteModal } from "./DeleteModal";

export const PaginatedTable = () => {
  const data2 = useContext(StaticDataContext);
  const data = data2.art;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); //TODO: move pagination to own component

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

  //TODO: move the actions to a view above the table that shows only when a row is selected
  return (
    <>
      <Table striped bordered hover className="m-0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Type</th>
            <th>Date Added</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.type}</td>
              <td>{item.datetime}</td>
              <td className="text-center">
                <Button
                  variant="primary"
                  className="me-2"
                  title="Edit"
                  aria-label="Edit"
                  aria-live="polite"
                >
                  <EditIcon />
                </Button>
                <DeleteModal id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row className="justify-content-center">
        <Col className="d-flex align-items-center justify-content-space">
          <DropdownButton
            id="dropdown-basic-button"
            className="m-1"
            title={itemsPerPage}
          >
            {renderDropdownItems()}
          </DropdownButton>
          <Pagination className="mt-3">{renderPaginationItems()}</Pagination>
        </Col>
      </Row>
    </>
  );
};
