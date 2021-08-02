import HomeSectionOne from "../../components/sections/HomeSectionOne";
import HomeSectionTwo from "../../components/sections/HomeSectionTwo";

let Home = {
  is_private: false,

  render: async () => {
    let view = `
          <div>
            <h1>Início</div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
          </div>
      `

    return view;
  },

  after_render: async () => {},
};

export default Home;
