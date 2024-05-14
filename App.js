let Ipl_Data = [
  {
    Kkrimg:
      "https://img.jagranjosh.com/images/2023/March/3032023/ipl-2023-KKR-players-list.webp",
    Kkr_Tittle: "Kolkata Knight Riders",
    Kkr_Captain: "Shreyas Iyer",
  },
  {
    Rrimg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/300px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png",
    Rr_Tittle: "Rajasthan Royals",
    Rr_Captain: "Sanju Samson",
  },
  {
    Cskimg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1024px-Chennai_Super_Kings_Logo.svg.png",
    Csk_Tittle: "Chennai Super Kings",
    Csk_Captain: "Ruturaj Gaikwad",
  },
  {
    Srhimg:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png",
    Srh_Tittle: "Sunrises Hyderabad",
    Srh_Captain: "Pat Cummins",
  },
];

const Ipl = (props) => {
  return (
    <article>
      <img src={props.img} alt="Sunrises Hyderabad" />
      <h2>{props.tittle}</h2>
      <p>Captain: {props.captain}</p>
    </article>
  );
};

const App = () => {
  return (
    <section>
      <Ipl
        img={Ipl_Data[0].Kkrimg}
        tittle={Ipl_Data[0].Kkr_Tittle}
        captain={Ipl_Data[0].Kkr_Captain}
      />
      <Ipl
        img={Ipl_Data[1].Rrimg}
        tittle={Ipl_Data[1].Rr_Tittle}
        captain={Ipl_Data[1].Rr_Captain}
      />
      <Ipl
        img={Ipl_Data[2].Cskimg}
        tittle={Ipl_Data[2].Csk_Tittle}
        captain={Ipl_Data[2].Csk_Captain}
      />
      <Ipl
        img={Ipl_Data[3].Srhimg}
        tittle={Ipl_Data[3].Srh_Tittle}
        captain={Ipl_Data[3].Srh_Captain}
      />
    </section>
  );
};

export default App;
