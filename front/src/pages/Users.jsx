import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../store/userAsyncActions";
import {BaseTable} from "../components/common/BaseTable"

export function Users()
{
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (!users) {
        return (
            <div className="page-content mt-2">
                Loading...
            </div>
        )
    }

    return (
        <div className="page-content mt-2">
            <BaseTable headers={['username', 'email', 'lastName', 'firstName']}
                       items={users} transNS="user"  bodyKey="id" />
        </div>
    )
}