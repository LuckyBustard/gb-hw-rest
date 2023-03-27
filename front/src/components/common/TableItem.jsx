import * as React from 'react'
import Button from "react-bootstrap/Button"
import * as Icon from "react-bootstrap-icons"

export function TableItem({ headers, item, editForm, deleteItem })
{
    return (
        <tr>
            {headers.map((header) => (<td key={`${header}.${item[header]}`}>{item[header]}</td>))}
            {
                (editForm) && (<td>
                    <Button onClick={() => editForm(item)}><Icon.Pencil /></Button>
                </td>)
            }
            {
                (deleteItem) && (<td>
                    <Button onClick={() => deleteItem(item.id)}><Icon.Trash /></Button>
                </td>)
            }
        </tr>
    )
}