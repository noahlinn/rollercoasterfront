const SearchButtons = (props) => (
    <span className="buttons">
        <button onClick={props.nameOnClick}>Search By Name</button>
        <button onClick={props.parkOnClick}>{props.location}</button>
    </span>
    
)
export default SearchButtons