import "./css/right-side.scss";
import avatar from "../assets/Picture1.jpg";
import { TextComponent } from "./TextComponent";
import { RatingLevel } from "./RatingLevel";

export const RightSide = function ({ data }) {
  const sections = ["educations", "personal_projects"];

  return (
    <section className="right-side">
      <header>
        <figure>
          <img src={avatar} alt="my profile pic" />
        </figure>
        <h1>
          {data.name}
          <br />
          <b>{data.surname}</b>{" "}
        </h1>
        <h2>{data.role}</h2>
      </header>

      <TextComponent index="01" title="SKILLS">
        {data?.skills?.map(({ name, rate }) => (
          <RatingLevel key={name} name={name} rate={rate} />
        ))}
      </TextComponent>

      {sections?.map((key, index) => (
        <TextComponent
          key={key}
          index={`0${index + 2}`}
          title={data[key]?.title}
          details={data[key]?.details}
        />
      ))}
    </section>
  );
};
