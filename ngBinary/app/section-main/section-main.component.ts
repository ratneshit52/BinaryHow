import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css']
})
export class SectionMainComponent implements OnInit {
  myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
 
    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
            'background': '#041221'
        };
 
    this.myParams = {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {
      "value": "#dddddd"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#eeeeee"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "bottom",
      "random": true,
      "straight": true,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 300,
        "rotateY": 100
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
    }

}
