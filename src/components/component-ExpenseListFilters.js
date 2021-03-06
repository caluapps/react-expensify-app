import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/action-filters';

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }))
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
            // console.log(e.target.value);
        }} />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
        }}>
          <option value="date" >Date</option>
          <option value="amount" >Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="start"
          endDate={this.props.filters.endDate}
          endDateId="end"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

// setup value and onChange for select

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
