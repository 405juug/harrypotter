import { useState, useMemo } from "react";
import "./App.css";

const CHARACTERS = [
  {
    id: 1,
    name: "Hermione Granger",
    actor: "Emma Watson",
    gender: "female",
    house: "Gryffindor",
    wandCore: "dragon heartstring",
    alive: true,
    image:
        "src/assets/hermione.jpg",
  },
  {
    id: 2,
    name: "Draco Malfoy",
    actor: "Tom Felton",
    gender: "male",
    house: "Slytherin",
    wandCore: "unicorn tail-hair",
    alive: true,
    image:
        "src/assets/Draco_Mal.jpg",
  },
  {
    id: 3,
    name: "Hermione Granger",
    actor: "Emma Watson",
    gender: "female",
    house: "Gryffindor",
    wandCore: "dragon heartstring",
    alive: true,
    image:
        "src/assets/hermione.jpg",
  },
];

const SCHOOLS = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

export default function HarryPotter() {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");

  const results = useMemo(() => {
    const q = name.trim().toLowerCase();
    return CHARACTERS.filter((c) => {
      const matchesName = !q || c.name.toLowerCase().includes(q);
      const matchesSchool = !school || c.house === school;
      return matchesName && matchesSchool;
    });
  }, [name, school]);

  return (
      <div className="hp">
        <div className="hp__header">
          <h1 className="hp__title">Harry Potter</h1>
          <p className="hp__subtitle">View all characters from the Harry Potter universe</p>

          <div className="hp__filters">
            <div className="hp__field">
              <label className="hp__label" htmlFor="hp-name">
                Name
              </label>
              <input
                  id="hp-name"
                  className="hp__input"
                  placeholder="Hermione"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="hp__field">
              <label className="hp__label" htmlFor="hp-school">
                School
              </label>
              <select
                  id="hp-school"
                  className="hp__select"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
              >
                <option value="">Choose one</option>
                {SCHOOLS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="hp__content">
          <div className="hp__grid">
            {results.length === 0 && (
                <p className="hp__empty">No characters match your search.</p>
            )}
            {results.map((c) => (
                <div className="character-card" key={c.id}>
                  <div className="character-card__image-wrap">
                    <img className="character-card__image" src={c.image} alt={c.name} />
                  </div>
                  <div className="character-card__body">
                    <h3 className="character-card__name">{c.name}</h3>
                    <p className="character-card__meta">
                      Actor: {c.actor}
                      <br />
                      Gender: {c.gender}
                      <br />
                      House: {c.house}
                      <br />
                      Wand core: {c.wandCore}
                      <br />
                      Alive: {c.alive ? "yes" : "no"}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}