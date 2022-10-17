import TermFilter from './TermFilter'
import SchedulePopup from './SchedulePopup';
import CourseList from './CourseList';
import FetchSchedule from './Schedule';

const SchedulePage = ({terms,selection,setTerm,
                        openModal,open,closeModal,
                        selectedCourses,toggleSelected}) => {
    const today = new Date();
    const day = today.toLocaleString([], { weekday: 'long' });
    const date = today.toLocaleDateString([], { dateStyle: 'long' })

    return (
        <div>
            <div>
                <p>Today is {day}, {date}.</p>
                <TermFilter terms={terms} selection={selection} setSelection={setTerm} />
                <button className='btn btn-outline-dark' onClick={openModal}><i className='bi bi-cart4'>Course Plan</i></button>
                <SchedulePopup open={open} close={closeModal}>
                    Course Plan
                    <CourseList selectedCourses={selectedCourses} />
                </SchedulePopup>
            </div>
            <div>
                <FetchSchedule selection={selection} selectedCourses={selectedCourses} toggleSelected={toggleSelected} />
            </div>
        </div>
    );
}


export default SchedulePage;