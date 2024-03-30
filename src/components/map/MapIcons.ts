import L from "leaflet";

export const landMarkIcon = (icon?: string) => L.icon({
    iconUrl: icon ? icon : 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],

});

export const projectIcon = (name: string) =>  L.divIcon({
    className: '',
    html: `
        <div class="project-icon">
            ${name}
        </div>
    `,
    iconSize: [150, 20],
})


export const stateIcon = (name: string) => L.divIcon({
    className: '',
    html: `
        <div class="project-icon">
            ${name}
        </div>
    `,
    iconSize: [150, 20],
})