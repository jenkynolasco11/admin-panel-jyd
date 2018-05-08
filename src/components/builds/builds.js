import React, { Component } from 'react'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getBuilds } from '../../actions/builds'

import './builds.scss';

const OptionList = (props) => {

    const date = new Date(props.info.createdBy);
    const createdBy = `${props.info.firstname} ${props.info.lastname} <${props.info.email}>`;
    return (
        <ul className="row w-100 other-details">
            <li className="col-12 o-detail">
                <div className="field-name">User</div>
                <div className="field-text">{createdBy}</div>
            </li>
            <li className="col-12 o-detail">
                <div className="field-name">Date</div>
                <div className="field-text">{`${date.toLocaleDateString('en-US')} ${date.toLocaleTimeString()}`}</div>
            </li>
            <li className="col-12 o-detail">
                <div className="field-name">TRIM</div>
                <div className="field-text">{props.info.options.trim}</div>
            </li>
            <li className="col-12 o-detail">
                <div className="field-name">Destination</div>
                <div className="field-text">{props.info.options.dest}</div>
            </li>
            <li className="col-12 o-detail">
                <div className="field-name">INVOICE</div>
                <div className="field-text">{props.info.options.invoice}</div>
            </li>
            <li className="col-12 o-detail">
                <div className="field-name">Downpayment</div>
                <div className="field-text">{props.info.downPayment}</div>
            </li>
        </ul>
    );
}

const TrimOptionsList = (props) => {

    return (
        <ul className="option-list">
            {
                props.trimOptions.map((trimOption, i) => { 
                    return (
                        <li key={ i } className="option-text">
                            <div className="field-name">{trimOption.match(/\{.*\}/)[0].replace(/\{|\}/g, '').replace(/_/g, ' ')}</div>
                            <div className="field-text">{trimOption.match(/\}(.*)/)[0].slice(1)}</div>
                        </li>
                    );
                })
            }
        </ul>
    );
}

class Build extends Component {
    constructor (props) {
        super(props);
        this.build = props.build;
        this.state = {
            expanded: false
        };
    }


    toggleCollapse (event) {

        event.persist();
        this.setState({ expanded : !this.state.expanded }, () => {
            event.target.innerHTML = this.state.expanded ? "-" : "+";
        });
    }


    render () {

        
        return (
            <li className="build-content">
                <div className={classNames('expandable-content', { expanded: this.state.expanded })}>
                    <div className="col-12 image-container">
                        <img alt="vehicle selected" src="/assets/images/car-not-available-placeholder.jpg" />
                    </div>
                    <div className="invoice-container col-12">
                        <span className="invoice-text">${this.build.options.msrp}</span>
                    </div>
                    <div className="car-detail-container col-12">
                        <div className="detail">{this.build.options.make}</div>
                        <div className="detail">{this.build.options.model}</div>
                        <div className="detail">{this.build.options.year}</div>
                    </div>
                    <div className="car-detail-container col-12">
                        <OptionList info={this.build} />
                    </div>
                    <div className="options-container col-12">
                        <TrimOptionsList trimOptions={this.build.options.selectedOptions} />
                    </div>
                </div>
                <div className="collapse-switcher-container">
                    <button onClick={this.toggleCollapse.bind(this)}>+</button>
                </div>

            </li> 
        );
    }
}

class BuildList extends Component {

    render() {
        return (
            <ul className="build-list-container row">
                {this.props.buildData.map((buildData, index) => <Build build={buildData} key={index} />)}
            </ul>
        );
    }
}

class Builds extends Component {
    componentDidMount() {
        this.props.getBuilds()
    }

    render() {
        return (
            <div className="builds-container">
                <BuildList buildData={this.props.builds} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    builds : state.builds.builds
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getBuilds
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Builds);
