var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var nextId = 3;
var startingList = [{ id: 0, title: "The Wall of China", seen: false }, { id: 1, title: "Maasai Mara", seen: false }, { id: 2, title: "Thompson Waterfalls", seen: true }];

function BucketList() {
  var _React$useState = React.useState(startingList),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      myList = _React$useState2[0],
      setMyList = _React$useState2[1];

  var _React$useState3 = React.useState(startingList),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      zoesList = _React$useState4[0],
      setZoesList = _React$useState4[1];

  function handleToggleMyList(touristSiteId, nextSeen) {
    setMyList(myList.map(function (touristSite) {
      if (touristSite.id === touristSiteId) {
        //creating a new object with new changes
        return Object.assign({}, touristSite, { seen: nextSeen });
      } else {
        //return the same old object with no changes
        return touristSite;
      }
    }));
  }

  function handleToggleZoesList(touristSiteId, nextSeen) {
    setZoesList(zoesList.map(function (touristSite) {
      if (touristSite.id === touristSiteId) {
        //creating a new object with new changes
        return Object.assign({}, touristSite, { seen: nextSeen });
      } else {
        //return the same old object with no changes
        return touristSite;
      }
    }));
  }

  return React.createElement(
    "div",
    { className: "bucket_list" },
    React.createElement(
      "h1",
      null,
      "Tourist Site Bucket List"
    ),
    React.createElement(
      "div",
      { className: "my_list" },
      React.createElement(
        "h2",
        null,
        "My list of tourist sites to see:"
      ),
      React.createElement(PlacesList, { places: myList, onToggle: handleToggleMyList })
    ),
    React.createElement(
      "div",
      { className: "zoes_list" },
      React.createElement(
        "h2",
        null,
        "Zoe's list of tourist sites to see:"
      ),
      React.createElement(PlacesList, { places: zoesList, onToggle: handleToggleZoesList })
    )
  );
}

function PlacesList(_ref) {
  var places = _ref.places,
      onToggle = _ref.onToggle;

  return React.createElement(
    "ul",
    { className: "places_list" },
    places.map(function (place) {
      return React.createElement(
        "li",
        { key: place.id },
        React.createElement(
          "label",
          null,
          React.createElement("input", {
            type: "checkbox",
            checked: place.seen,
            onChange: function onChange(e) {
              onToggle(place.id, e.target.checked);
            }
          }),
          place.title
        )
      );
    })
  );
}

export default function App() {
  return React.createElement(BucketList, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));