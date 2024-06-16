import { Card, CardBody, Gallery } from "@patternfly/react-core";


export default function CardGallery({data}) {
  return (
    <>
      {/* A Gallery can be used to display cards https://www.patternfly.org/layouts/gallery */}

        {/* Cards go here https://www.patternfly.org/components/card */}
      <Gallery hasGutter>
        {data.map(() => <Card>
          <CardBody></CardBody>
        </Card>
          )}
      </Gallery>
    </>
  );
}
