import { PropertyDefaultWrapper } from ".";

export default {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    rectangle: "/img/rectangle-23.png",
    img: "/img/rectangle-17.png",
    groupClassName: {},
    clipPathGroup: "/img/clip-path-group-3.png",
    group: "/img/group-7.png",
  },
};
