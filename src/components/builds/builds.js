import React, { Component } from 'react'


import './builds.scss'

const buildData = [{
	"options" : {
		"selectedOptions" : [
			"{Wheels}WHEELS: 19\" CLASSIC PAINTED ALLOY",
			"{Wheels}WHEELS: 20\" 6 TRI-SPOKE PAINTED ALLOY",
			"{Wheels}WHEELS: 21\" 6 TWIN SPOKE PAINTED ALLOY",
			"{Additional_equipment}REAR PASSENGER SPECIFICATION Veneered Picnic Tables w/Vanity Mirrors, Full Length Center Console (4 Seat Configuration), electrically adjustable rear seats, 4 power adjustments, power recline, power fore/aft, power lumbar adjust and 2 12V power outlets, Refrigerated Bottle Cooler",
			"{Additional_equipment}INTERIOR STYLE SPECIFICATION W/CONTRAST STITCHING Carpet Overmats Contrast Binding, Contrast Stitching, Boot Carpet Contrast Binding, Front &amp; Rear Deep Pile Carpet Overmats, Steering Wheel in Contrasting Color w/Hand Stitching",
			"{Paint_scheme}MONOTONE PAINT APPLICATION",
			"{Paint_scheme}EXTENDED RANGE - SOLID &amp; METALLIC",
			"{Seat_trim}BELUGA, LEATHER SEAT TRIM",
			"{Seat_trim}LINEN, LEATHER SEAT TRIM",
			"{Color}red"
		],
		"year" : 2018,
		"make" : "Bentley",
		"model" : "Flying Spur",
		"invoice" : "214115",
		"dest" : "2,725",
		"msrp" : "189,000",
		"trim" : "V8 Sedan",
		"optionsPrice" : "25115"
	},
	"firstname" : "Jenky",
	"lastname" : "Nolasco",
	"phone" : "3479742990",
	"email" : "jenky_nolasco@hotmail.com",
	"hasLease" : "no",
	"hasTradeIn" : "yes",
	"isGraduate" : "yes",
	"isVeteran" : "no",
	"downPayment" : "12000",
}];

const OptionList = (props) => {
    return (
        <ul className="row w-100 other-details">
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
                props.trimOptions.map(trimOption => { 
                    return (
                        <li className="option-text">
                            <div className="field-name">{trimOption.match(/\{.*\}/)[0]}</div>
                            <div className="field-text">{trimOption.match(/\}(.*)/)[0].slice(1)}</div>
                        </li>
                    );

                })
            }
        </ul>
    );
}


class BuildList extends Component {

    render() {
        const getBuildComponent = function (data) {

            return (
                <li className="build-content col-md-6 col-12">

                    <div className="col-12 image-container">
                        <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Models/Hero/Flying%20Spur%20V8%20S/621_V8s_MY17_Profile_Rubino%201920%20x%20670.jpg/_jcr_content/renditions/original.image_file.1366.477.file/621_V8s_MY17_Profile_Rubino%201920%20x%20670.jpg" />
                    </div>
                    <div className="invoice-container col-12">
                        <span class="invoice-text">${data.options.msrp}</span>
                    </div>
                    <div className="car-detail-container col-12">
                        <div className="detail">{data.options.make}</div>
                        <div className="detail">{data.options.model}</div>
                        <div className="detail">{data.options.year}</div>
                    </div>
                    <div className="car-detail-container col-12">
                        <OptionList info={data} />
                    </div>
                    <div className="options-container col-12">
                        <TrimOptionsList trimOptions={data.options.selectedOptions} />
                    </div>
                </li>
            );
        };
        return (
            <ul className="build-list-container row">
                {this.props.buildData.map(buildData => getBuildComponent(buildData))}
            </ul>
        );
    }
}

class Builds extends Component {
    render() {
        return (
            <div className="builds-container">
                <BuildList buildData={buildData} />
            </div>
        );
    }
}


export default Builds;