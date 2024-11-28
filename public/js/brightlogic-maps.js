HTMLElement.prototype._getBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
HTMLElement.prototype.getBoundingClientRect = function () {
    try {
        return this._getBoundingClientRect();
    } catch (e) {
        return { top: this.offsetTop, left: this.offsetLeft };
    }
};

var schoolmap;
var schoolMapBounds;
var schoolmarkers = [];
var stationmap;
var stationMapBounds;
var stations = [];
var stationMarkers = [];

var railwayStationIconLocation = "https://www.acquaintcrm.co.uk/images/mapfiles/uk-rail.png";
var subwayStationIconLocation = "https://www.acquaintcrm.co.uk/images/mapfiles/uk-london-metro.png";

function CreateMap(varMapDivID, varLat, varLng, varZoom, varTitle) {
    var locationmap = L.map(varMapDivID).setView([varLat, varLng], varZoom);

    L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://a.tile.openstreetmap.org/">OpenStreetMap Tiles</a>'
    }).addTo(locationmap);

    L.marker([varLat, varLng]).addTo(locationmap);
}

//******************** Start Stations map code ********************

function ClearStationTableRowSelections() {
    var stationsTable = document.getElementById('stations-table');

    if (stationsTable !== null) {
        for (var i = 0; i < stationsTable.rows.length; i++) {
            stationsTable.rows[i].className = 'selectable-row';
        }
    }
}

function CenterStationOnMap(row) {
    var latitude = row.cells[3].innerText;
    var longitude = row.cells[4].innerText;
    stationmap.panTo([latitude, longitude]);
    ClearStationTableRowSelections();
    row.className = 'selected-row';
}

function CreateStationMap(varStationMapDivID, varCenterLat, varCenterLong, varZoom, varTableExistsNow) {
    if (varTableExistsNow) {
        ClearStationTableRowSelections();
    }

    stationMarkers = [];

    stationMapBounds = L.latLngBounds();

    stationmap = L.map(varStationMapDivID, {
        center: [varCenterLat, varCenterLong],
        zoom: varZoom
    });

    L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://a.tile.openstreetmap.org/">OpenStreetMap Tiles</a>'
    }).addTo(stationmap);

    var marker = L.marker([varCenterLat, varCenterLong]).addTo(stationmap);

    stationMapBounds.extend(marker.getLatLng());
}

//this function doesn't really create markers anymore but keeping name for consistency
function CreateAllStationMarkers() {
    var stationsTable = document.getElementById("stations-table");

    if (stationsTable !== null) {
        for (var i = stationsTable.rows.length - 1; i > 0; i--) {
            //get type id
            var stationType = stationsTable.rows[i].cells[5].innerText.replace(/\s/g, '');
            //get table's first empty column to insert station icons into
            var cell0 = stationsTable.rows[i].cells[0];
            //allow station icon images to appear adjacent to each other in cell
            cell0.style.display = "flex";

            //if the station is either type railway or subway but not both
            if (stationType !== '-1') {
                var stationIconImage = document.createElement('img');
                stationIconImage.width = 15;
                stationIconImage.height = 15;
                if (stationType === '0' || stationType === '2') {
                    //change source to railway station icon
                    stationIconImage.src = railwayStationIconLocation;
                } else if (stationType === '1') {
                    //change source to subway station icon
                    stationIconImage.src = subwayStationIconLocation;
                }
                stationIconImage.style.marginBottom = "0px";
                stationIconImage.style.marginTop = "5px";
                stationIconImage.style.marginRight = "5px";
                //insert station icon image
                cell0.appendChild(stationIconImage);
            } else {
                //if station is type -1 it's both an underground and railway station
                var railwayStationIconImage = document.createElement('img');
                var subwayStationIconImage = document.createElement('img');

                railwayStationIconImage.width = 15;
                railwayStationIconImage.height = 15;
                railwayStationIconImage.src = railwayStationIconLocation;
                railwayStationIconImage.style.marginBottom = "0px";
                railwayStationIconImage.style.marginTop = "5px";
                railwayStationIconImage.style.marginRight = "5px";
                cell0.appendChild(railwayStationIconImage);

                subwayStationIconImage.width = 15;
                subwayStationIconImage.height = 15;
                subwayStationIconImage.src = subwayStationIconLocation;
                subwayStationIconImage.style.marginBottom = "0px";
                subwayStationIconImage.style.marginTop = "5px";
                subwayStationIconImage.style.marginRight = "5px";
                cell0.appendChild(subwayStationIconImage);
            }
        }
    }
}

//******************** End Stations map code ********************

//******************** Start Schools map code ********************

function ClearSchoolTableRowSelections() {
    var schoolsTable = document.getElementById("schools-table");

    for (var i = 0; i < schoolsTable.rows.length; i++) {
        schoolsTable.rows[i].className = 'selectable-row';
    }
}

function SelectFirstSchoolRow() {
    var schoolsTable = document.getElementById("schools-table");
    if (schoolsTable !== null) {
        CenterOnSchoolMap(schoolsTable.rows[1]);
    }
}

function FitSchoolsMapToBounds() {
    setTimeout(function () { if (schoolmap !== undefined) { schoolmap.fitBounds(schoolMapBounds); }});
}

function CreateSchoolMap(varSchoolMapDivID, varCenterLat, varCenterLong, varZoom, varTableExistsNow) {
    if (varTableExistsNow) {
        ClearSchoolTableRowSelections();
    }

    markers = [];

    schoolMapBounds = L.latLngBounds();

    schoolmap = L.map(varSchoolMapDivID, {
        center: [varCenterLat, varCenterLong],
        zoom: varZoom
    });

    L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://a.tile.openstreetmap.org/">OpenStreetMap Tiles</a>'
    }).addTo(schoolmap);

    var marker = L.marker([varCenterLat, varCenterLong]).addTo(schoolmap);

    schoolMapBounds.extend(marker.getLatLng());
}

function CreateAllSchoolMarkers() {
    var schoolsTable = document.getElementById("schools-table");

    if (schoolsTable !== null) {
        for (var i = schoolsTable.rows.length - 1; i > 0; i--) {
            var latitude = schoolsTable.rows[i].cells[8].innerText;
            var longitude = schoolsTable.rows[i].cells[9].innerText;
            CreateSchoolMarker(latitude, longitude, "https://www.acquaintcrm.co.uk/images/mapfiles/marker-" + i + ".png");
        }
    }

}

function CreateSchoolMarker(varLat, varLng, varIconURL) {
    var marker = L.marker([varLat, varLng], {
        icon: L.icon({
            iconUrl: varIconURL,
            iconAnchor: [16, 34]
        })
    }).addTo(schoolmap);

    if (varIconURL !== "") {
        marker.on('click', function () {
            var markerIconURI = marker._icon.src;
            var markerId = parseInt(markerIconURI.substring(markerIconURI.lastIndexOf("-") + 1, markerIconURI.lastIndexOf("."), 10));
            document.getElementById("marker-icon").src = markerIconURI;
            CenterOnSchoolMap(document.getElementById("schools-table").rows[markerId]);
        });
    }

    markers.unshift(marker);
    schoolMapBounds.extend(marker.getLatLng());
}

function CenterOnSchoolMap(row) {
    ClearSchoolTableRowSelections();

    row.className = 'selected-row';

    document.getElementById("marker-icon").src = "https://www.acquaintcrm.co.uk/images/mapfiles/marker-" + (row.rowIndex) + ".png";

    var establishmentNameLabel = document.getElementById("establishment-name");
    establishmentNameLabel.innerText = row.cells[1].innerHTML.trim();

    var schoolWebsiteURL = row.cells[11].innerHTML.trim();
    if (schoolWebsiteURL !== "null" && schoolWebsiteURL !== "") {
        establishmentNameLabel.setAttribute("href", schoolWebsiteURL);
        establishmentNameLabel.setAttribute("target", "_blank");
        establishmentNameLabel.setAttribute("style", "margin: 0em 0em !important;");
    } else {
        establishmentNameLabel.setAttribute("style", "margin: 0em 0em!important; text-decoration:none;");
        establishmentNameLabel.removeAttribute("href");
    }

    var strSchoolInfoList = "";

    var infoList = [{ name: "Gender", value: row.cells[2].innerHTML }, { name: "Ages", value: row.cells[3].innerHTML }, { name: "Phase Of Education", value: row.cells[6].innerHTML }, { name: "Ofsted", value: row.cells[4].innerHTML }, { name: "Religion", value: row.cells[7].innerHTML }, { name: "Oversubscribed", value: row.cells[10].innerHTML }];

    for (var i = 0; i < infoList.length; i++) {
        var info = infoList[i];

        info.name = info.name.trim();
        info.value = info.value.trim();

        if (info.name === "Gender") {
            if (info.value === "") {
                continue;
            }
        }

        if (info.name === "Ages") {
            if (info.value === "") {
                continue;
            }
        }

        if (info.name === "Phase Of Education") {
            if (info.value === "Not applicable") {
                continue;
            }
        }

        if (info.name === "Ofsted") {
            if (info.value === "" || info.value === "Not available") {
                continue;
            }
        }

        if (info.name === "Religion") {
            if (info.value === "" || info.value === "Does not apply" || info.value === "None") {
                continue;
            }
        }

        if (info.name === "Oversubscribed") {
            if (info.value === "") {
                continue;
            }
        }

        if (info.name === "Ofsted" || info.name === "Ages") {
            strSchoolInfoList += info.name + ": ";
        }

        strSchoolInfoList += info.value;

        if (i + 1 < infoList.length) {
            strSchoolInfoList += ", ";
        }

    }

    strSchoolInfoList = strSchoolInfoList.replace(/,\s*$/, "");
    strSchoolInfoList = strSchoolInfoList.replace(/\r?\n|\r/g, '');

    document.getElementById("school-info-list").innerText = "Info: " + strSchoolInfoList;

    schoolmap.panTo(markers[row.rowIndex - 1].getLatLng());
}

//******************** End Schools map code ********************

//******************** Start misc code ********************

function RefreshMap(varMapDivID, varLats, varLngs, varZoom, varTitle) {
    //var center = varMapDivID.getCenter();
    google.maps.event.trigger(varMapDivID, 'resize');

    //varMapDivID.setCenter(center);
}

//******************** End misc code ********************