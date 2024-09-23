/*
{
    "id": 1,
    "name": "Angela Merkel",
    "dob": "July 17, 1954",
    "country": "Germany",
    "party": "Christian Democratic Union",
    "position": "Chancellor",
    "years_in_office": "2005 - 2021",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/220px-Angela_Merkel_2019_cropped.jpg",
    "biography": "Angela Dorothea Merkel is a German politician who served as the Chancellor of Germany from 2005 to 2021. She is a member of the Christian Democratic Union and is known for her leadership in the European Union and handling of various global issues."
  },


*/
function DisplayProfile({ profiles }) {
    return (
        <div
            style={{
                border: "2px solid green",
                width: "100%",
                marginBottom: "16px",
            }}
        >
            <h3>{profiles.length > 1 ? "Profiles" : "Profile"}</h3>
            {profiles.map((element, index) => (
                <>
                    <div
                        style={{ border: "1px solid lightgray" }}
                        key={element.id}
                    >
                        <div>
                            <p>{element?.name}</p>
                            <p>{element?.country}</p>
                            <p>{element?.position}</p>
                            <p>{element?.biography}</p>
                        </div>
                    </div>
                </>
            ))}
            {profiles.length === 0 && <p>No profiles found</p>}
        </div>
    );
}

export default DisplayProfile;
