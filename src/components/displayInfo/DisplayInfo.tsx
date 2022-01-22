import { ImageBaseUrl } from "../../constant/constant";

const DisplayInfo = (props: any) => {
  return (
    <div>
      <img src={`${ImageBaseUrl}${props.image}`} alt={props.name} />
      <h6>{props.name}</h6>
      <h6>{props.description}</h6>
      <h6>{props.id}</h6>
      <h6>{props.genere}</h6>
      <h6>{props.release}</h6>
    </div>
  );
};

export default DisplayInfo;
