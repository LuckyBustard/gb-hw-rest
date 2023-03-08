import * as React from 'react'
import {Table} from "react-bootstrap"
import {TableItem} from "./TableItem"
import {useTranslation} from "react-i18next"

export function BaseTable({ headers, items, transNS })
{
    const { t } = useTranslation(transNS)

    return (
        <Table striped hover>
            <thead>
                <tr>
                    {headers.map((header) => (<td key={header}>{t(header)}</td>))}
                </tr>
            </thead>
            <tbody>
            {
                Object.values(items).map((item) => (<TableItem key={item.username} headers={headers} item={item} /> ))
            }
            </tbody>
        </Table>
    )
}