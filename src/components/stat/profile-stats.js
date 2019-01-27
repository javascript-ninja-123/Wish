import React, { Component } from 'react';
import Currency from 'react-currency-formatter';
import { Statistic, Icon } from 'semantic-ui-react';


class ProfileStats extends Component {
  

  render() {
    const { heartbeats, moneyRaised, donors } = this.props;

    return (<Statistic.Group>
      <Statistic>
        <Statistic.Value>{donors}</Statistic.Value>
        <Statistic.Label>Donors</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>{heartbeats} <Icon color="red" name="heartbeat" /></Statistic.Value>
        <Statistic.Label>Heartbeats</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value><Currency pattern="##,### !" quantity={moneyRaised} currency="USD" /></Statistic.Value>
        <Statistic.Label>Raised</Statistic.Label>
      </Statistic>
    </Statistic.Group>);
	}
}

export default ProfileStats;