import Status from './Status';

interface DescriptionProps {
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
}

const Description = ({
  status,
  species,
  gender,
  location,
  origin,
}: DescriptionProps) => (
  <>
    <p>
      <b>Status:</b> <Status status={status} />
    </p>
    <p>
      <b>Species:</b>{' '}
      {species === 'Alien' ? <span>Alien 👽</span> : <span>{species}</span>}
    </p>
    <p>
      <b>Gender:</b> <span>{gender}</span>
    </p>
    <p>
      <b>Origin:</b> <span>{origin}</span>
    </p>
    <p>
      <b>Last known location:</b> <span>{location}</span>
    </p>
  </>
);

export default Description;
