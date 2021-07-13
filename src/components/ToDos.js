import React from 'react'

export default function ToDos({ todo }) {
    return (
        <div>
            <ul className='m-5 list-group-item-primary'>
                <li>
                    {todo}
                </li>
            </ul>

        </div>
    )
}
