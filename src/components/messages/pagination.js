import React, { Component } from 'react'

class TablePagination extends Component {
    state = {
        showing : [],
        toShow : 5,
    }

    constructor(props) {
        super(props)

        // this.state = { ...this.state, initialSkip : props.skip, initialLimit : props.limit }

        this._createPages = this._createPages.bind(this)
        this._onPageChange = this._onPageChange.bind(this)
    }

    _createPages() {
        const { skip = 0, limit = 10, count = 0, onPageChange } = this.props

        const pages = Math.ceil(count / limit)

        const page = skip / limit
        const offset = Math.floor(toShow / 2)

        const pageLinks = [ ...new Array(pages) ].map((_,i) => (
            <div
                key={ i }
                className={ `table-pagination__page ${ page === i ? 'selected' : '' }` }
                onClick={ () => onPageChange(limit * i) }
            >
                { i + 1 }
            </div>
        ))

        if(page < toShow - offset) return pageLinks.slice(0, toShow)
        else if(page > offset && page < pages - offset) return pageLinks.slice(page - offset, page + offset + 1)
        else return pageLinks.slice(-toShow)
    }

    _onPageChange(skip) {
        const { count, limit } = this.props

        if(skip >= 0 && skip < count) return this.props.onPageChange(skip)
        else if(skip === count) return this.props.onPageChange(skip - limit)
    }

    render() {
        const { skip = 0, limit = 10, count = 0 } = this.props

        return (
            <div className="table-pagination">
                <div className="table-pagination__first" onClick={ () => this._onPageChange(0) }>{ '<<' }</div>
                <div className="table-pagination__previous" onClick={ () => this._onPageChange(skip - limit) }>{ '<' }</div>
                {
                    this._createPages()
                }
                <div className="table-pagination__next" onClick={ () => this._onPageChange(skip + limit) }>{ '>' }</div>
                <div className="table-pagination__last" onClick={ () => this._onPageChange(Math.floor(count/limit) * limit) }>{ '>>' }</div>
            </div>
        )
    }
}

export default TablePagination
