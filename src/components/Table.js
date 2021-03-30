import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container,
    Button,
    ListGroup
} from "reactstrap";

export const Table = ({ teams }) => {
    console.log('Teams...', teams);
    return (
        <ListGroup className="mt-4">
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand href="/">Stransact Teams & Description</NavbarBrand>
                        <Nav>
                            <NavItem>
                                <Button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" 
                                    cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                    <span className="pl-2" const path="./AddTeam.js">Add Team</span>
                                </Button>
                            </NavItem>
                        </Nav>
                </Container>
            </Navbar>


            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table table-striped table-bordered">
                    { (teams.length > 0) ? teams.map ((team, index) => {
                        return (
                            <tr key={ index }>
                                <td>{ team?.id ?? '' }</td>
                                <td>{ team.name }</td>
                                <td>{ team.description }</td>
                                <td>
                                    <i className="far fa-edit action mr-2" id="edit-icon"></i>
                                    <i className="fas fa-trash action" id="delete-icon"></i>
                                </td>
                            </tr>
                        )
                    }) : <tr><td colSpan="5">Loading...</td></tr> }     
                </tbody>
            </table>
        </ListGroup>                       
    );
  }
  