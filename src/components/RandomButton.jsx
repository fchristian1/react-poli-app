function RandomButton({ getData, setProfiles }) {
    async function handleRandomizer() {
        console.log("click auf Randomizer");
        const data = await getData();
        const randomNumber = Math.floor(Math.random() * data.length);
        const randomProfile = data[randomNumber];
        setProfiles([randomProfile]);
    }
    return (
        <div
            style={{
                border: "2px solid blue",
                width: "100%",
                marginBottom: "16px",
            }}
        >
            <button onClick={handleRandomizer}>
                Give me a random politican
            </button>
        </div>
    );
}

export default RandomButton;
