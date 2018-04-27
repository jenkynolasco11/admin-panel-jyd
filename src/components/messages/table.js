import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { reply } from 'react-icons-kit/ionicons'
import Icon from 'react-icons-kit'

import TablePagination from './pagination'

const formatPhone = s => {
    const s2 = ('' + s).replace(/\D/g, '');
    const m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3];
}

const TableHeader = () => {
    return (
        <thead className="text-success">
            <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                {/* <th>SUBJECT</th> */}
                <th>PHONE</th>
                <th>TYPE</th>
                <th>TIME</th>
                <th>REPLY</th>
                {/* <th>DELETE</th> */}
            </tr>
        </thead>
    )
}

const TableBody = props => {
    return (
        <tbody>
            {
                props.msgs.map((msg, i) => (
                    <tr
                        className={ `table-row__item ${ msg.reply.length ? 'replied' : '' } ${ msg.reviewed ? '' : 'not-read' } ${ props.selected ? props.selected._id === msg._id ? ' selected' : '' : '' }` }
                        key={ msg._id }
                        onClick={ () => props.onPreviewMessage(msg) }
                    >
                        <td>{ msg.name ? msg.name : `${msg.firstname} ${msg.lastname}` }</td>
                        <td>{ msg.email }</td>
                        {/* <td>{ msg.subject }</td> */}
                        <td>{ formatPhone(msg.phoneNumber) || '-' }</td>
                        <td>
                            <span className={ `badge ${msg.type}` }>
                            {
                                msg.type === 'credit'
                                ? 'Credit App'
                                : msg.type === 'sell'
                                ? 'Cash for Car'
                                : 'Message'
                            }
                            </span>
                        </td>
                        <td>{ new Date(msg.createdBy).toLocaleString() }</td>
                        <td>
                            <Icon icon={ reply } onClick={ props.onReplyClick }/>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
}

class MessagesTable extends Component {
    render() {
        return (
            <div className={`card border-primary mb-3 ${ this.props.extraClass || '' }` }>
                <div className="card-header text-white bg-primary">MESSAGES</div>
                <div className="card-body message-list">
                    <Table size="sm" hover>
                        <TableHeader />
                        <TableBody
                            msgs={ this.props.messages }
                            onPreviewMessage={ this.props.onRowClick }
                            selected={ this.props.selectedMessage ? this.props.selectedMessage : {} }
                            onReplyClick={ this.props.onReplyClick }
                        />
                    </Table>
                </div>
                <TablePagination
                    skip={ this.props.skip }
                    count={ this.props.count }
                    limit={ this.props.limit }
                    onPageChange={ this.props.onPageChange }
                />
            </div>
        )
    }
}

export default MessagesTable
