let nextId = 3;
const startingList = [
  { id: 0, title: "The Wall of China", seen: false },
  { id: 1, title: "Maasai Mara", seen: false },
  { id: 2, title: "Thompson Waterfalls", seen: true },
];

function BucketList() {
  const [myList, setMyList] = React.useState(startingList);
  const [zoesList, setZoesList] = React.useState(startingList);

  function handleToggleMyList(touristSiteId, nextSeen) {
    const myNextList = [...myList];
    const touristSite = myNextList.find((ts) => ts.id === touristSiteId);
    touristSite.seen === nextSeen;
    setMyList(myNextList);
  }

  function handleToggleZoesList(touristSiteId, nextSeen) {
    const zoesNextList = [...zoesList];
    const touristSite = zoesNextList.find((ts) => ts.id === touristSiteId);
    touristSite.seen === nextSeen;
    setZoesList(zoesNextList);
  }

  return (
    <div className="bucket_list">
      <h1>Tourist Site Bucket List</h1>
      <h2>My list of tourist sites to see:</h2>
      <PlacesList places={myList} onToggle={handleToggleMyList} />
      <h2>Zoe's list of tourist sites to see:</h2>
      <PlacesList places={zoesList} onToggle={handleToggleZoesList} />
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
