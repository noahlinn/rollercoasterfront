const CoasterButtons = () => {

    const addToCredits = () => {
        console.log("save")
    }
    const addToWants = () => {
        console.log('wish')
    }
    return (
        <span>
            <button onClick={addToCredits}>Add to Credits</button>
            <button onClick={addToWants}>Add to Wish List</button>
        </span>
    )
}

export default CoasterButtons