const character = {
    name: "Swamp Beast Diplomat",
    class: "Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.webp",

    attacked: function () {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            renderCharacter();

            setTimeout(function () {
                alert("Character Died");
            }, 10);

            return;
        }

        renderCharacter();
    },

    levelUp: function () {
        this.level++;
        renderCharacter();
    }
};

function renderCharacter() {
    document.querySelector("#characterName").textContent =
        character.name;

    document.querySelector("#characterClass").textContent =
        character.class;

    document.querySelector("#characterLevel").textContent =
        character.level;

    document.querySelector("#characterHealth").textContent =
        character.health;

    document.querySelector("#characterImage").setAttribute(
        "src",
        character.image
    );

    document.querySelector("#characterImage").setAttribute(
        "alt",
        character.name
    );
}

renderCharacter();

document.querySelector("#attackButton")
    .addEventListener("click", function () {
        character.attacked();
    });

document.querySelector("#levelButton")
    .addEventListener("click", function () {
        character.levelUp();
    });