import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../store/userAsyncActions";
import {Table} from "react-bootstrap";

export function Index()
{
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="page-content mt-2">
            <Table striped hover>
                <thead>
                    <tr>
                        <td>Username</td>
                        <td>email</td>
                        <td>first_name</td>
                        <td>last_name</td>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((item) => (
                        <tr>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    )
}