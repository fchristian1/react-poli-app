import RandomButton from "./components/RandomButton";
import DisplayProfile from "./components/DisplayProfile";
import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
async function getData() {
    // https://freetestapi.com/api/v1/politicians
    const result = await fetch("https://freetestapi.com/api/v1/politicians");
    const data = await result.json();
    return data;
}
function App() {
    const [profiles, setProfiles] = useState([]);

    return (
        <div>
            <RandomButton getData={getData} setProfiles={setProfiles} />
            <SearchInput getData={getData} setProfiles={setProfiles} />
            <DisplayProfile profiles={profiles} />
        </div>
    );
}

export default App;
