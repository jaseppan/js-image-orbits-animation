document.addEventListener("DOMContentLoaded", () => {

  const images = [
    'cPanel',
    'css',
    'Git',
    'html',
    'jQuery',
    'js',
    'mysql',
    'node-js',
    'php',
    'rest-api',
    'sass',
    'WordPress',
    'npm',
    'React'
  ];
  
  const clickEffects = [
    {
        'effect': 'pulse',
        'timeOut': 3000,
        'target': 'child',
    },
    {
        'effect': 'bounce',
        'timeOut': 2000,
        'target': 'child',
    },
    {
        'effect': 'bounce2',
        'timeOut': 1000,
        'target': 'child',
    },
    {
        'effect': 'shake',
        'timeOut': 1000,
        'target': 'child',
    },
    {
        'effect': 'swing',
        'timeOut': 1000,
        'target': 'child',
    },
    {
        'effect': 'wobble',
        'timeOut': 1000,
        'target': 'child',
    },
    {
        'effect': 'bounce-out',
        'timeOut': 1000,
        'target': 'child',
    },
    {
        'effect': 'grow',
        'timeOut': 2000,
        'target': 'child',
    },
    {
        'effect': 'hithere',
        'timeOut': 1000,
        'target': 'child',
    },
    {
        'effect': 'flash',
        'timeOut': 1000,
        'target': 'child',
    },
    {
        'effect': 'gelatine',
        'timeOut': 1000,
        'target': 'parent',
    },
  ];
  const orbit_container_id = "animated-images-container";
  const orbit_container = document.getElementById(orbit_container_id);
  const position_min = 20;
  const position_max = 80;
  const size_min = 2;
  const size_max = 4;
  const orbit_min = 15;
  const orbit_max = 40;

  const loadImages = () => {

    images.forEach(image => {

      setOrbit(image);

    });

  }

  const setOrbit = (image) => {

    if (orbit_container == null) { // Return if orbit container is not found.
      return; 
    }

    // Define position and size of orbit

    var top = Math.random() * (position_max - position_min) + (position_min * 1), 
      right = Math.random() * (position_max - position_min) + (position_min / 3), 
      size = Math.random() * (size_max - size_min) + size_min,
      orbit_size = Math.random() * (orbit_max - orbit_min) + orbit_min,
      class_number = Math.round(Math.random() * (4 - 1) + 1),
      orbit_elem = document.createElement('div'); // Create element object of orbit
 
    orbit_elem.id = image; // add id to orbit
    orbit_elem.className = 'orbit orbit-' + class_number; // Add classes to orbit
    orbit_elem.style.cssText = 'top: ' + top + '%; right: ' + right + '%; width: ' + orbit_size + '%; z-index: 1'; // add style to orbit
    orbit_elem.innerHTML = '<span class="img-container"><img class="' + image + '" src="assets/images/' + image + '.svg" style="height: ' + size + 'rem;" alt="' + image + '; z-index: 1;"></span>';

    if (orbit_elem != undefined) {
      orbit_container.appendChild(orbit_elem);
    }
  }

  /**
   * Add class to image to enable effect defined in css
   * 
   * @param string imgName 
   * @param string/object effect 
   */

  const imageEffect = (imgName, effect, classTarget = 'parent', timeOut = 1000) => {

    var elem = document.getElementById(imgName);

    // Choose effect ranbomly if it is object
    if(  typeof(effect) == 'object' ) {
        effectNum = getRandomInt( effect.length );
        currentEffect = effect[effectNum];
        classTarget = currentEffect.target;
        timeOut = currentEffect.timeOut;
        effect = currentEffect.effect;
    }
    
    if( classTarget == 'child' ) {
        nodeList = elem.childNodes;
        elem = nodeList[0];
    }

    elem.classList.add(effect);

    setTimeout(() => {
        elem.classList.remove(effect);
    }, timeOut);


  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  // Load images
  loadImages();

  // Event listeners for mouse enter and click events of images

  var el = document.getElementsByClassName("orbit");

  for (i in el) {

    if (typeof (el[i]) == 'object') {

      // Hover effects  
      el[i].addEventListener("mouseenter", function (e) {

        var imageName = e.target.id,
        effect = 'high-light';

        imageEffect(imageName, effect);

      }, false);

      // Click effects
      el[i].addEventListener("click", function (e) {

        var imageName = e.srcElement.className;

        imageEffect(imageName, clickEffects);

      }, false);
    }

  }

});
