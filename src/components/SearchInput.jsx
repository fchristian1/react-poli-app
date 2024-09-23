import React from "react";

function SearchInput({ getData, setProfiles }) {
    async function handleSearch(e) {
        let searchValue = e.target.value;
        if (searchValue === "") {
            setProfiles([]);
            return;
        }
        let data = await getData();
        const filteredProfiles = data.filter((profile) => {
            let str = JSON.stringify(profile);
            return str.includes(searchValue);
        });
        setProfiles(filteredProfiles);
    }
    return (
        <>
            <div
                style={{
                    border: "2px solid blue",
                    width: "100%",
                    marginBottom: "16px",
                }}
            >
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search for a politican..."
                />
            </div>
        </>
    );
}

export default SearchInput;
