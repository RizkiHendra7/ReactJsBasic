import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Link } from "react-router-dom";
import { faEdit, faInfo, faTrash,faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Button } from "reactstrap";
import "./TableComponent.css";


//Redux 
import {connect} from "react-redux";

//deklarasi kolom datatable
const columns = [
  {
    name: "Id",
    center: true,
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "nama",
    selector: (row) => row.nama,
    sortable: true,
  },
  {
    name: "alamat",
    selector: (row) => row.alamat,
    sortable: true,
  },
  {
    name: "Action",
    button: true,
    width: "20%",
    cell: (row) => (
      <div>
        <Link to={"Detail/" + row.id}>
          <Button color="primary" className="mr-2">
            <FontAwesomeIcon icon={faInfo} /> Detail
          </Button>
        </Link>

        <Link to={"Edit/" + row.id}>
          <Button color="warning" className="mr-2">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>
        </Link>

        <Link to={"detail/" + row.id}>
          <Button color="danger" className="mr-6">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </Link>
      </div>
    ),
  },
];


//deklarasi untuk mapping state dari redux 
const mapStateToProps = (state)=>{
  return {
    modelPegawaiParamReducer : state.usersReducers.modelPegawai
  }
}


const TableComponent = ( props) => {
  return (
    <Container> 
      <Link to={"Create"}>
          <Button color="primary" className="mr-2">
            <FontAwesomeIcon icon={faPlus} /> Create
          </Button>
        </Link> 
        <DataTableExtensions 
          columns={columns}
          data={props.modelPegawaiParamReducer}
          export={false}
          print={false}
          filterPlaceholder={"Search .."} 
        >
          <DataTable
            title="User DataTable"
            noHeader
            fixedHeader
            fixedHeaderScrollHeight="600px"
          // sortIcon={<SortIcon />}
            pagination
            highlightOnHover
          />
        </DataTableExtensions> 
    </Container>
  );
};


// connect selayaknya inject state ke property mapstateintoProps
export default connect(mapStateToProps,null )(TableComponent);
