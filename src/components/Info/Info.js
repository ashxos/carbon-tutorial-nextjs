import { Grid, Column } from '@carbon/react';

const InfoSection = (props) => (
  <Grid className={`${props.className} info-section`}>
    <Column md={8} lg={16} xlg={3}>
      <h3 className="info-section__heading">{props.heading}</h3>
    </Column>
    {props.children}
  </Grid>
);

const InfoCard = (props) => {
  return (
    <Column sm={4} md={8} lg={5} xlg={4} className="info-card">
      <div>
        <h4 className="info-card__heading">
          {`${splitHeading[0]} `}
          <strong>{splitHeading[1]}</strong>
        </h4>
        <p className="info-card__body">{props.body}</p>
      </div>
      {props.icon()}
    </Column>
  );
};

export { InfoSection, InfoCard };
