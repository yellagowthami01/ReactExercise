import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';

/**
 * StudentList component
 */

class StudentList extends Component {

    static propTypes = {
        studentsMarksList: PropTypes.array
    };

    static defaultProps = {
        studentsMarksList: []
    };

    render() {
        let props = this.props
        let studentsMarksList = props.studentsMarksList;
        let SubmitValue = function (e) {
            e.preventDefault();
            let record = {
                id: e.target.id.value,
                name: e.target.name.value,
                marks: e.target.marks.value
            }
            props.updateRecord(record);
        }
        let submitForm = function (e) {
            ReactDom
                .findDOMNode(e.target.parentNode.parentNode.children[2].children[1])
                .click();
        }
        let tableRows = studentsMarksList.map(function (value, index) {
            value.marks = parseInt(value.marks);
            let isFailing = value.marks < 65
                ? 'failing'
                : 'pass';

            return (
                <tr key={index}>
                    <td colSpan="3">
                        <form onSubmit={SubmitValue.bind(this)} name={index} autoComplete="off">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" hidden defaultValue={index} name="id" required/>
                                            <input
                                                onBlur={submitForm}
                                                type="text"
												value ={value.name}
												onChange={submitForm}
                                                name="name"
                                                required/>
                                        </td>
                                        <td >
                                            <input
                                                onBlur={submitForm}
                                                className={isFailing}
                                                type="number"
												value ={value.marks}
												onChange={submitForm}
                                                name="marks"
                                                placeholder="Marks"
                                                min="0"
                                                max="100"
                                                required/>
                                        </td>
                                        <td>
                                            <span>
                                                <i className="material-icons" onClick= {() => props.removeStudent(index) }>delete
                                                </i>
                                            </span>
                                            <button type="submit" hidden>submit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </td>
                </tr>
            );
        })

        return (

            <div className='grid-container'>

                <table>
                    <tbody>
                        <tr >
                            <th colSpan="3">
                                Students List
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Marks
                            </th>
                            <th>
                                Remove
                            </th>
                        </tr>
                        {tableRows}
                    </tbody>
                </table>
            </div>

        )
    }

}

export default StudentList
