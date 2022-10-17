import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../utilities/useFormData';
import { useNavigate } from 'react-router-dom';

const validateCourseData = (key, val) => {
  var terms = ['Fall','Spring', 'Winter']
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'number':
      return /^\d+$/.test(val) ? '' : 'must contain only numbers';
    case 'meets':
      return /[a-zA-Z]+ \d\d:\d\d-\d\d:\d\d/i.test(val) || val===''? '' : 'Must be in valid meets format e.g. MWF 12:00-13:20';
    case 'term':
      return terms.contains(val) ? '' : 'Must be a valid term'
    default: return '';
  }
};

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({message, disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const CourseEditor = ({course, setEditCourse}) => {
  console.log(course)
  const [update, result] = useDbUpdate(`/courses/${course.term[0]+course.number}`);
  const [state, change] = useFormData(validateCourseData, course);
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="title" text="Title" state={state} change={change} />
      <InputField name="term" text="Term" state={state} change={change} />
      <InputField name="number" text="Number" state={state} change={change} />
      <InputField name="meets" text="Meets" state={state} change={change} />
      <ButtonBar message={result?.message} />
    </form>
  )
};

export default CourseEditor;