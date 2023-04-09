// Create the Dog class here

class Dog {
    constructor(dog) {
        Object.assign(this, dog);
    }
    getProfileHtml() {
        return `
            <img src="" class="badge hide" id="badge">
            <style>
            .profile-pic {
                background-image: url("${this.avatar}");
            }
            </style>
            <h2 id="name-age">${this.name}, ${this.age}</h2>
            <p id="bio">${this.bio}</p>
        `;
    }
}

export {Dog};

