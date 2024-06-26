import { useContext, useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { AnalogDataContext } from "../../context/StaticDataContext";
import { Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import { DeleteModal } from "./DeleteModal";
import { ArtCreateUpdateModal } from "./ArtCreateUpdateModal";

interface PaginatedTableProps {
  error: string | null;
  setError: (error: string | null) => void;
}

export const PaginatedTable = ({error, setError}: PaginatedTableProps) => {
  const data = useContext(AnalogDataContext);
  const sortedData = data.sort((a, b) => (a.datetime > b.datetime ? -1 : 1));
  //TODO: add sorting functionality to table headers

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); //TODO: move pagination to own component

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = sortedData.slice(firstIndex, lastIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const onPaginationChange = (pageSize: number) => {
    setItemsPerPage(pageSize);
  };

  const renderDropdownItems = () => {
    const pageSizes = [5, 10, 25, 50, 100];
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
      number <= Math.ceil(sortedData.length / itemsPerPage);
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
                <ArtCreateUpdateModal id={item.id} error={error} setError={setError}/>
                <DeleteModal id={item.id} title={item.title} />
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
