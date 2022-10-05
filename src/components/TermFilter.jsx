const TermButton = ({ term, selection, setSelection }) => (
    //console.log(term);
    //console.log(selection);
    //console.log(setSelection);

    <div>
        <input type="radio" id={term} className="btn-check" checked={term == selection} autoComplete="off"
            onChange={() => setSelection(term)} />
        <label className="btn btn-success mb-1 p-2" htmlFor={term}>
            {term}
        </label>
    </div>
);

const TermSelector = ({terms, selection, setSelection} ) => (
    //{console.log(terms)}
    <div className="btn-group">
        {
            terms.map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
        }
    </div>
);


const TermFilter = ( {terms, selection,setSelection} ) => {
    return (
        <div>
            <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
        </div>
    );
}

export default TermFilter;