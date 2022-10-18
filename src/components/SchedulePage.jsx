import TermFilter from './TermFilter'
import SchedulePopup from './SchedulePopup';
import CourseList from './CourseList';
import FetchSchedule from './Schedule';
import Banner from './Banner';

const SchedulePage = ({ setTitle, terms,selection,setTerm,
                        openModal,open,closeModal,
                        selectedCourses,toggleSelected,
                        editCourse, setEditCourse}) => {
    return (
        <div>
            <div>
                <TermFilter terms={terms} selection={selection} setSelection={setTerm} />
                <button className='btn btn-outline-dark' onClick={openModal}><i className='bi bi-cart4'>Course Plan</i></button>
                <SchedulePopup open={open} close={closeModal}>
                    Course Plan
                    <CourseList selectedCourses={selectedCourses} />
                </SchedulePopup>
            </div>
            <div>
                <FetchSchedule setTitle={setTitle} selection={selection} selectedCourses={selectedCourses} toggleSelected={toggleSelected} setEditCourse={setEditCourse}/>
            </div>
        </div>
    );
}


export default SchedulePage;