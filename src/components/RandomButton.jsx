function RandomButton({ setProfile }) {
    async function handleRandomizer() {
        console.log("click auf Randomizer")
        // https://freetestapi.com/api/v1/politicians
        const result = await fetch("https://freetestapi.com/api/v1/politicians")
        const data = await result.json()
        const randomNumber = Math.floor(Math.random() * (data.length))
        const randomProfile = data[randomNumber]
        setProfile(randomProfile)
    }
    return (
        <div style={{ border: "2px solid blue", width: "100%", height: "200px", marginBottom: "16px" }}>
            <button onClick={handleRandomizer}>Randomizer</button>
        </div>
    )
}

export default RandomButton