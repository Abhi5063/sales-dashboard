"use client";

import { Button } from "../atoms/Button";

interface ChartSwitcherProps {
  onSwitch: (type: "bar" | "line" | "pie") => void;
}

export const ChartSwitcher: React.FC<ChartSwitcherProps> = ({ onSwitch }) => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => onSwitch("bar")}>Bar</Button>
      <Button onClick={() => onSwitch("line")}>Line</Button>
      <Button onClick={() => onSwitch("pie")}>Pie</Button>
    </div>
  );
};
