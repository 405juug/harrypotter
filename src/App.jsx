import { useState, useMemo } from "react";
import './App.css'

const CHARACTERS = [
  {
    id: 1,
    name: "Hermione Granger",
    actor: "Emma Watson",
    gender: "female",
    house: "Gryffindor",
    wandCore: "dragon heartstring",
    alive: true,
    image: "./assets/hermione.jpg"
  },
  {
    id: 2,
    name: "Draco Malfoy",
    actor: "Tom Felton",
    gender: "male",
    house: "Slytherin",
    wandCore: "unicorn tail-hair",
    alive: true,
    image: "./assets/Draco_Mal.jpg"
  },
  {
    id: 3,
    name: "Hermione Granger",
    actor: "Emma Watson",
    gender: "female",
    house: "Gryffindor",
    wandCore: "dragon heartstring",
    alive: true,
    image: "./assets/hermione.jpg"
  },
];

const SCHOOLS = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

export default function HarryPotter() {
  const [name, setName] = userState("");
  const [school, setSchool] = useState("");

  const results = useMemo(() => {
    const q = name.trim().toLowerCase();
    return CHARACTERS.filter((c) => {
      const matchesName = !q || c.name.toLowerCase().includes(q)
    })
  })
}