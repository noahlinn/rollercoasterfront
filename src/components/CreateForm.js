const CreateForm = (props) => {
    return(
        <div className="create-div">
        <h1 className="search-header">{props.header}</h1>
        <form className="create-form" onSubmit={props.onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input className="login-form-input" value={props.input.name} onChange={(e) => props.setInput({ ...props.input, name: e.target.value })} />
            </div>
            <label htmlFor="park_located_at">Park Located At</label>
            <input className="login-form-input" value={props.input.park_located_at} onChange={(e) => props.setInput({ ...props.input, park_located_at: e.target.value })} />
            <div>
                <label htmlFor="location">City Located In</label>
                <input className="login-form-input" value={props.input.location} onChange={(e) => props.setInput({ ...props.input, location: e.target.value })} />
            </div>
            <label htmlFor="year_built">Year Built</label>
            <input className="login-form-input" value={props.input.year_built} onChange={(e) => props.setInput({ ...props.input, year_built: e.target.value })} />
            <div>
                <label htmlFor="type_of">Type of Rollercoaster</label>
                <input className="login-form-input" value={props.input.type_of} onChange={(e) => props.setInput({ ...props.input, type_of: e.target.value })} />
            </div>
            <div>
                <label htmlFor="top_speed_in_mph">Top Speed (MPH)</label>
                <input className="login-form-input" value={props.input.top_speed_in_mph} onChange={(e) => props.setInput({ ...props.input, top_speed_in_mph: e.target.value })} />
            </div>
            <div>
                <label htmlFor="length_in_feet">Length (ft)</label>
                <input className="login-form-input" value={props.input.length_in_feet} onChange={(e) => props.setInput({ ...props.input, length_in_feet: e.target.value })} />
            </div>
            <div>
                <label htmlFor="height_in_feet">Height (ft)</label>
                <input className="login-form-input" value={props.input.height_in_feet} onChange={(e) => props.setInput({ ...props.input, height_in_feet: e.target.value })} />
            </div>
            <div>
                <label htmlFor="number_of_inversions">Number of Inversions</label>
                <input className="login-form-input" value={props.input.number_of_inversions} onChange={(e) => props.setInput({ ...props.input, number_of_inversions: e.target.value })} />
            </div>
            <div>
                <label htmlFor="manufacturer">Manufacturer</label>
                <input className="login-form-input" value={props.input.manufacturer} onChange={(e) => props.setInput({ ...props.input, manufacturer: e.target.value })} />
            </div>
            {props.photo ? 
            <div>
                <label htmlFor="image">Image</label>
                <input className="login-form-input" type="file"  onChange={(e) => props.setInput({ ...props.input, image: e.target.files[0] })} />
            </div>
            :null}
            <div>
                <label htmlFor="video">Youtube Link</label>
                <input className="login-form-input" value={props.input.video} onChange={(e) => props.setInput({ ...props.input, video: e.target.value })} />
            </div>
            <input className="submit-login" type="submit" value={props.submit} />

        </form >
    </div >

    )
}

export default CreateForm