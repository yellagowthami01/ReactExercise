import React, {Component} from 'react';
import StudentList from '../StudentApp/StudentList.jsx';
import ResultSummary from '../StudentApp/ResultSummary.jsx';
import AddNewStudent from '../StudentApp/AddNewStudent.jsx'

class Index extends Component {

componentWillMount() {
    if (!localStorage.studentsMarksList) {
        // if no  studentsMarksList in localStorage then create the studentsMarksList
        this.setState({
            "studentsMarksList": [
                {
                    id: 0,
                    name: "Student",
                    marks: 30
                }
            ]
        })

    } else {
    	// if  studentsMarksList in localStorage then assign to state
        this.setState({
            "studentsMarksList": JSON.parse(localStorage.studentsMarksList)
        })
    }

    }

    removeStudent(id) {
        let records = this.state.studentsMarksList;
        records.splice(id, 1)
        this.setState({"studentsMarksList": records})
        this.storeInLocalStorage()
    }

    addNewRecord(value) {
        let records = this.state.studentsMarksList;
        records.push(value)
        this.setState({"studentsMarksList": records});
        this.storeInLocalStorage()
    }

    updateRecord(value) {
        let records = this.state.studentsMarksList;
        let index = parseInt(value.id)
        records[index] = value;
        this.setState({"studentsMarksList": records});
        this.storeInLocalStorage()
    }

    storeInLocalStorage() {
        localStorage.studentsMarksList = JSON.stringify(this.state.studentsMarksList)
    }

    render() {
        return (
            <div>
                <div className="root_div">
                    <AddNewStudent
                        addNewRecord={this.addNewRecord.bind(this)}
                        studentsMarksList={this.state.studentsMarksList}/>
                    <ResultSummary
                        studentsMarksList ={this.state.studentsMarksList}/>
                    <StudentList
                        updateRecord={this.updateRecord.bind(this)}
                        studentsMarksList={this.state.studentsMarksList}
                        removeStudent={this.removeStudent.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default Index;
