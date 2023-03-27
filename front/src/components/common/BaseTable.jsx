import * as React from 'react'
import {Table} from "react-bootstrap"
import {TableItem} from "./TableItem"
import {useTranslation} from "react-i18next"

export function BaseTable({ headers, items, transNS, bodyKey, editForm, deleteItem })
{
    const { t } = useTranslation(transNS)

    return (
        <Table striped hover>
            <thead key="head">
                <tr>
                    {headers.map((header) => (<td key={`head.${header}`}>{t(header)}</td>))}
                    {(deleteItem) && <td width="20px"></td>}
                    {(deleteItem) && <td width="20px"></td>}
                </tr>
            </thead>
            <tbody key="body">
            {
                Object.values(items).map((item) => (
                    <TableItem
                        key={`body.${item[bodyKey]}`} headers={headers}
                        item={item} editForm={editForm} deleteItem={deleteItem}
                    />
                ))
            }
            </tbody>
        </Table>
    )
}