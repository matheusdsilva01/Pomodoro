import FocusBadge from "./badges/focusBadge";
import PauseHighBadge from "./badges/pauseHighBadge";
import PauseLowBadge from "./badges/pauseLowBadge";

interface BadgeProps {
  index: number;
}

const Badge = ({ index }: BadgeProps) => {
  const badges = [
    <FocusBadge key={0} />,
    <PauseLowBadge key={1} />,
    <FocusBadge key={2} />,
    <PauseLowBadge key={3} />,
    <FocusBadge key={4} />,
    <PauseLowBadge key={5} />,
    <FocusBadge key={6} />,
    <PauseHighBadge key={7} />
  ];
  return <div>{badges[index]}</div>;
};
export default Badge;
