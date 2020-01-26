import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "reactjs-places-autocomplete";
// import arr from './cities.json';

/****************************************** library ******************************/

// export default class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: "" };
//   }

//   handleChange = address => {
//     this.setState({ address });
//   };

//   handleSelect = address => {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => console.log("Success", latLng))
//       .catch(error => console.error("Error", error));
//   };

//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div className="w-100">
//             <input
//               {...getInputProps({
//                 placeholder: "Search Places ...",
//                 className: "location-search-input w-100"
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? "suggestion-item--active"
//                   : "suggestion-item";
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: "#fafafa", cursor: "pointer" }
//                   : { backgroundColor: "#ffffff", cursor: "pointer" };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }



/****************************************** custom ******************************/

/* global google */

// export default class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.autocompleteInput = React.createRef();
//     this.autocomplete = null;
//     this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
//   }

//   componentDidMount() {
//     this.autocomplete = new google.maps.places.Autocomplete(
//       this.autocompleteInput.current,
//       { types: ["geocode"] }
//     );

//     this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
//   }

//   handlePlaceChanged() {
//     const place = this.autocomplete.getPlace();
//     console.log(place.geometry.location)
//     this.props.setSelectedCity(place);
//   }

//   render() {
//     return (
//       <input
//         ref={this.autocompleteInput}
//         id="autocomplete"
//         placeholder="Enter city"
//         type="text"
//         className="w-75 p-1 mx-3"
//       />
//     );
//   }
// }

/****************************************** Shyam's ******************************/

export default function autoComplete(inp, arr) {
  var self = this;
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  if (inp !== null) {
    inp.addEventListener("input", function(e) {
      var a,
        b,
        i,
        val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (
          String(arr[i])
            .substr(0, val.length)
            .toUpperCase() === val.toUpperCase()
        ) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML =
            "<strong>" + String(arr[i]).substr(0, val.length) + "</strong>";
          b.innerHTML += String(arr[i]).substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            self.props.setOrderNo(
              String(this.getElementsByTagName("input")[0].value)
            );
            // inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode === 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode === 38) {
        //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode === 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
  }

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}
