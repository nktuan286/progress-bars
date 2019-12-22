import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Progress, Button, Select } from 'antd';
import './progressBarScreen.scss';

const { Option } = Select;

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bars: [],
			numbers: [],
			buttons: [],
			limit: 0,
			activeItem: null
		};
	}

	componentDidMount() {
		this.props._getData();
	}

	componentWillReceiveProps(nextProps) {
		const { progress } = nextProps;
		if (progress && progress.isSuccess) {
			let numbers = progress.dataSuccess.bars;
			let limit = progress.dataSuccess.limit;
			let buttons = progress.dataSuccess.buttons;
			let bars = this._getDataProgress(numbers, limit);
			//
			this.setState({
				numbers,
				bars,
				buttons,
				limit,
			})
		}
	}

	_getDataProgress(numbers, limit) {
		let result = [];
		numbers.forEach(number => {
			result.push(this._calculatePercent(number, limit))
		});
		return result;
	}

	_calculatePercent(number, total) {
		return Math.floor((number * 100)/total);
	}

	_onChange = (key) => {
		this.setState({
			activeItem: key
		})
	}

	_handleProgress(value) {
		const { activeItem, bars, limit, numbers } = this.state;
		if (activeItem === null) return;
		const newNumber = numbers[activeItem] + value;
		const calNumber = this._calculatePercent(newNumber, limit);
		bars[activeItem] = calNumber > 0 ? calNumber : 0;
		numbers[activeItem] = newNumber > 0 ? newNumber : 0;
		this.setState({
			bars,
			numbers
		})
	}

	render() {
		const { bars, buttons, activeItem } = this.state;
		return (
			<main role="main" className="page-content progress-bar-section box-shadow-primary-1">
				<div className="progress-bar-wrapper">
					<Row gutter={24}>
						{
							bars && bars.map((item, index) => {
								const progressStatus = (activeItem === index && item <= 100) ? "active" : "exception";
								return (
									<Col
										key={index}
										lg={8}
										sm={24}
										className="mgb-20"
										style={{background: '#fff'}}
									>
										<Progress 
											percent={bars[index]} 
											status={progressStatus}
											format={percent => `${item}%`}
										/>
									</Col>
								)
							})
						}
					</Row>
					<Row gutter={24}>
						<Col lg={8} className="mgb-20">
							<Select 
								placeholder="Select a process bar" 
								style={{ width: '100%' }}
								onChange={this._onChange}
							>
								{
									bars && bars.map((item, index) => {
										return (
											<Option key={index} value={index}>Progress Bar {index}</Option>
										)
									})
								}
							</Select>
						</Col>
						<Col lg={16}>
							<div className="d-flex">
							{
								buttons && buttons.map((item, index) => {
									return (
										<Button 
											key={index} 
											className="mgb-10"
											onClick={() => this._handleProgress(item)}
										>
											{item}
										</Button>
									)
								})
							}
							</div>
						</Col>
					</Row>
				</div>
				
			</main>
		);
	}
}

export default withRouter(ProgressBar);
