import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';

/**
 * AddStudent component
 */

class AddNewStudent extends Component {

    static propTypes = {
        addNewRecord: PropTypes.func
    };

    addNewRecord(event) {
        event.preventDefault();
        let refs = this.refs;
        let record = {
            id: this.props.studentsMarksList.length,
            name: refs.name.value,
            marks: refs.marks.value
        }
        refs.name.value = "";
        refs.marks.value = "";
        this.props.addNewRecord(record)
    };

    render() {

        return (
            <div className="insert-new-record">
                <form
                    onSubmit={this.addNewRecord.bind(this)} autoComplete="off">
                    <input type="text" name="name" ref="name" placeholder="Name" required/>
                    <input
                        type="number"
                        name="name"
                        ref="marks"
                        placeholder="Marks"
                        min="0"
                        max="100"
                        required/>
                    <button type="submit">Add New Record</button>
                </form>
            </div>
        )
    }

}

export default AddNewStudent;
