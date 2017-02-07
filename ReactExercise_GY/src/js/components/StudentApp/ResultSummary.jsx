import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';

/**
 * ResultSummary component
 */
class ResultSummary extends Component {

    static propTypes = {
        studentsMarksList: PropTypes.array
    };

    static defaultProps = {
        studentsMarksList: []
    };

    render() {
        let props = this.props
        let studentsMarksList = props.studentsMarksList;
        const calSummary = function (studentsMarksList) {
            let minValue = 0;
            let maxValue = 0;
            let avgValue = 0;
            let count = 0;

            if (studentsMarksList.length) {
                minValue = studentsMarksList[0].marks;
                maxValue = studentsMarksList[0].marks;

                studentsMarksList.map(function (value, index) {
                    value.marks = parseInt(value.marks);
                    minValue = minValue < value.marks
                        ? minValue
                        : value.marks;
                    maxValue = maxValue > value.marks
                        ? maxValue
                        : value.marks;
                    avgValue += value.marks;
                });
				
                avgValue = parseFloat(avgValue / studentsMarksList.length).toFixed(2);
            }
            return ([
                {
                    min: minValue,
                    max: maxValue,
                    avg: avgValue
                }
            ])

        }

        let summaryDetails = calSummary(studentsMarksList)
        let tableRows = summaryDetails.map(function (value, index) {
            let isFailing = value.avg < 65
                ? 'failing'
                : 'pass';

            return (
                <tr key={index}>
                    <td>
                        {value.min}
                    </td>
                    <td>
                        {value.max}
                    </td>
                    <td className={isFailing}>
                        {value.avg}
                    </td>
                </tr>
            );
        })

        return (

            <div className='summary-container'>

                <table>
                    <tbody>
                        <tr >
                            <th colSpan="3">
                                Results Summary
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Minimum
                            </th>
                            <th>
                                Maximum
                            </th>
                            <th>
                                Average
                            </th>
                        </tr>
                        {tableRows}
                    </tbody>
                </table>
            </div>

        )
    }

}

export default ResultSummary
