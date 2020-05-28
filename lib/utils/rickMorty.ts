// Packages
import { titleCase } from 'title-case';

// Utils
import pathFriendly from '@helpers/pathFriendly';

export async function getSlugRickMorty() {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await res.json();
    return data.results.map((item) => {
      const urlFriendly = pathFriendly(item.name);
      return {
        params: {
          slug: urlFriendly,
        },
      };
    });
  } catch (err) {
    console.error(err);
  }
}

export async function getID(character: string) {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await res.json();
    return data.results.filter((item) => titleCase(item.name) === character);
  } catch (err) {
    console.error(err);
  }
}

export async function getCharacter(id: number) {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('A problem occurred with obtaining the character');
    console.error(err);
  }
}
