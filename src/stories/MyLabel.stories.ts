import { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel } from "../componentes/MyLabel";

const meta = {
  title: "Example/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
    fontColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color",
    fontColor: "pink",
  },
};

export const BackgroundColor: Story = {
  args: {
    label: "Background Color",
    fontColor: "pink",
    backgroundColor: "black",
  },
};
