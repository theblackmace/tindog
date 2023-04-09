// Create the Dog class here

class Dog {
    constructor(dog) {
        Object.assign(this, dog);
    }
    getProfileHtml() {
        return `
            <div class="profile-pic" id="profile-pic" style="background-image: url('${this.avatar}');">
                <img src="" class="badge hide" id="badge">
                <h2 id="name-age">${this.name}, ${this.age}</h2>
                <p id="bio">${this.bio}</p>
            </div>
        `;
    }
}

export {Dog};

