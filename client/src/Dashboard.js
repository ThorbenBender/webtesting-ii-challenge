import React, { Component } from 'react';
import Display from './component/Display';

class Dashboard extends Component {
	state = {
		count: 0,
		strike: 0,
		balls: 0
	};

	increase = (event) => {
		switch (event.target.name) {
			case 'strike':
				if (this.state.strike === 3) {
					console.log(this.state);
					this.setState({ strike: 0, balls: 0 });
				}
				if (this.state.strike < 3) {
					console.log('Hello');
					this.setState((st) => ({ strike: st.strike + 1 }));
				}
				break;
			case 'ball':
				if (this.state.balls === 4) {
					this.setState({ strike: 0, balls: 0 });
				} else {
					this.setState((st) => ({ balls: st.balls + 1 }));
				}

				break;
			case 'foul':
				if (this.state.strike === 0) {
					this.setState((st) => ({ strike: st.count + 1 }));
				} else if (this.state.strike === 1) {
					this.setState((st) => ({ strike: st.count + 2 }));
				} else if (this.state.strike) {
					console.log('I wont increase the strikes');
				}
				break;
			case 'hit':
				this.setState({ strike: 0, balls: 0 });
				break;
			default:
				console.log('Nothing happened');
		}
	};

	render() {
		return (
			<div>
				<Display strike={this.state.strike} balls={this.state.balls} />
				<button name='strike' onClick={this.increase}>
					Strike
				</button>
				<button name='ball' onClick={this.increase}>
					Ball
				</button>
				<button name='hit' onClick={this.increase}>
					Hit
				</button>
				<button name='foul' onClick={this.increase}>
					Foul
				</button>
			</div>
		);
	}
}

export default Dashboard;
