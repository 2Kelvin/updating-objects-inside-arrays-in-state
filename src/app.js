let nextId = 3;
const startingTouristList = [
  { id: 0, title: "The Wall of China", seen: false },
  { id: 1, title: "Maasai Mara", seen: false },
  { id: 2, title: "Thompson Waterfalls", seen: true },
];

function BucketList() {
  const [myList, setMyList] = React.useState(startingTouristList);
  const [zoesList, setZoesList] = React.useState(startingTouristList);

  function handleToggleMyList(touristSiteId, nextSeen) {
    setMyList(
      myList.map((touristSite) => {
        if (touristSite.id === touristSiteId) {
          //creating a new object with new changes
          return { ...touristSite, seen: nextSeen };
        } else {
          //return the same old object with no changes
          return touristSite;
        }
      })
    );
  }

  function handleToggleZoesList(touristSiteId, nextSeen) {
    setZoesList(
      zoesList.map((touristSite) => {
        if (touristSite.id === touristSiteId) {
          //creating a new object with new changes
          return { ...touristSite, seen: nextSeen };
        } else {
          //return the same old object with no changes
          return touristSite;
        }
      })
    );
  }

  return (
    <div className="bucket_list">
      <h1>Tourist Site Bucket List</h1>
      <div className="my_list">
        <h2>My list of tourist sites to see:</h2>
        <PlacesList places={myList} onToggle={handleToggleMyList} />
      </div>
      <div className="zoes_list">
        <h2>Zoe's list of tourist sites to see:</h2>
        <PlacesList places={zoesList} onToggle={handleToggleZoesList} />
      </div>
    </div>
  );
}

function PlacesList({ places, onToggle }) {
  return (
    <ul className="places_list">
      {places.map((place) => (
        <li key={place.id}>
          <label>
            <input
              type="checkbox"
              checked={place.seen}
              onChange={(e) => {
                onToggle(place.id, e.target.checked);
              }}
            />
            {place.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return <BucketList />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
