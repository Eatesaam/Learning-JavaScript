export class Map{
    constructor(coords){
      //  this.coordinates = coords;
        this.render(coords);
    }


    render(){
        if(!google){
            alert('Could not load map library.');
        }

        const map = new google.maps.Map(document.getElementById('map'), {center: coordinates, zoom:16});

        new google.maps.Marker({position: coordinates, map:map});
    }
}