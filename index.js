// Remember to import the data and Dog class!
import {dogs} from './data.js';
import {Dog} from './Dog.js';

let dogsToRender = dogs;
let insideAcceptBlock = false;
let insideRejectBlock = false;

document.addEventListener('click', function(e) {
    if(e.target.id === 'reject' && !insideRejectBlock) {
        insideRejectBlock = true;
        getDisplayDog(dogsToRender).hasBeenSwiped = true;
        dislikeBadge();
        setTimeout(function() {
            render();
            insideRejectBlock = false;
        }, 1000);
    } else if(e.target.id === 'accept' && !insideAcceptBlock) {
        insideAcceptBlock = true;
        getDisplayDog(dogsToRender).hasBeenLiked = true;
        getDisplayDog(dogsToRender).hasBeenSwiped = true;
        likeBadge();
        setTimeout(function() {
            render();
            insideAcceptBlock = false;
        }, 1000);
    }
});

function render() {
    if(getDisplayDog(dogsToRender)){
        const displayDog = new Dog(getDisplayDog(dogsToRender));
        document.getElementById('profile-pic').innerHTML = displayDog.getProfileHtml();
    } else {
        document.getElementById('profile-container').innerHTML = '<h1>Here are the profiles you liked<h1>';
        document.getElementById('profile-container').innerHTML += getEndHtml();
    }
}

function dislikeBadge() {
    document.getElementById('badge').src = './images/badge-nope.png';
    document.getElementById('badge').classList.toggle('hide');
}

function likeBadge() {
    document.getElementById('badge').src = './images/badge-like.png';
    document.getElementById('badge').classList.toggle('hide');
}

function getLikedDogs() {
    return dogsToRender.filter(function(dog) {
        return dog.hasBeenLiked;
    });
}

function getEndHtml() {
    return getLikedDogs().map(function(likedDog) {
        return `
        <div class="liked-card">
            <img src = "${likedDog.avatar}" class="liked-img">
            <p class="liked-card-name">${likedDog.name}</p>
        </div>`;
    }).join('');
}

const getDisplayDog = (dogsToRender) => {
    return dogsToRender.filter(function(dog) {
        return dog.hasBeenSwiped === false;
    })[0];
}


render();

