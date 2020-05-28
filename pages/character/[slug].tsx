// Packages
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { titleCase } from 'title-case';
import { Collapse, Card, Row, Col } from 'antd';

const { Panel } = Collapse;

// Utils
import {
  getSlugRickMorty,
  getID,
  getCharacter,
} from '../../lib/utils/rickMorty';

import Layout from '@components/Layout';
import Description from '@components/Description';

type Origin = {
  name: string;
};

type Location = {
  name: string;
};

type Rick = {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: Origin;
  location: Location;
};

interface ChProps {
  rickyData: Rick;
}

const Character = (props: ChProps) => {
  const { rickyData } = props;
  const {
    name,
    id,
    image,
    status,
    species,
    gender,
    origin,
    location,
  } = rickyData;
  const payloadDescription = {
    status,
    species,
    gender,
    origin: origin.name,
    location: location.name,
  };
  return (
    <Layout select={id.toString()}>
      <Row justify="center">
        <Col>
          <Card
            title={rickyData.name}
            style={{
              width: 300,
              borderRadius: 10,
              boxShadow: '0 4px 4px rgba(0, 0, 0, 0.12)',
            }}
            cover={<img alt={name} src={image} />}
          >
            <Collapse bordered={true}>
              <Panel header="More info" key={id}>
                <Description {...payloadDescription} />
              </Panel>
            </Collapse>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugRickMorty();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const reversingFriendlyPath = params?.slug.replace(/-/g, ' ');
  const normalName = titleCase(reversingFriendlyPath);
  const item = await getID(normalName);
  const rickyData = await getCharacter(item[0].id);
  console.log(rickyData);
  return {
    props: {
      rickyData,
    },
  };
};

export default Character;
