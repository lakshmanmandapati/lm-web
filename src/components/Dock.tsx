import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import '../assets/styles/Dock.scss';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
  isThemeButton?: boolean;
}

interface DockProps {
  parentToChild?: { mode: string };
  modeChange?: () => void;
  magnification?: number;
  distance?: number;
}

interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  children?: React.ReactNode;
  item: DockItem;
  mode: string;
  modeChange?: () => void;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  children,
  item,
  mode,
  modeChange,
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (item.isThemeButton && modeChange) {
      modeChange();
      return;
    }
    
    if (item.href && item.href !== '#') {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="dock-icon"
      onClick={handleClick}
      title={item.label}
    >
      {item.isThemeButton ? (
        <div className="dock-item-inner">
          {children}
        </div>
      ) : (
        <a href={item.href || '#'} onClick={handleClick}>
          {children}
        </a>
      )}
    </motion.div>
  );
};

function Dock({ parentToChild, modeChange, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE }: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const mode = parentToChild?.mode || 'dark';

  const dockItems: DockItem[] = [
    {
      id: 'github',
      icon: <GitHubIcon />,
      label: 'GitHub',
      href: 'https://github.com/lakshmanmandapati',
    },
    {
      id: 'linkedin',
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lakshman-mandapati/',
    },
    {
      id: 'twitter',
      icon: <TwitterIcon />,
      label: 'Twitter/X',
      href: 'https://x.com/lakshmandotenv',
    },
    {
      id: 'resume',
      icon: <DescriptionIcon />,
      label: 'Resume',
      href: 'https://drive.google.com/drive/folders/1guOk_1hwsEIYM6bBjt_SpjOqZ7sci4Gz?usp=sharing',
    },
    {
      id: 'theme',
      icon: mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />,
      label: mode === 'dark' ? 'Light Mode' : 'Dark Mode',
      isThemeButton: true,
    },
  ];

  return (
    <div className="dock-container">
      <motion.div
        className="dock"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {dockItems.map((item) => (
          <DockIcon
            key={item.id}
            mouseX={mouseX}
            magnification={magnification}
            distance={distance}
            item={item}
            mode={mode}
            modeChange={modeChange}
          >
            {item.icon}
          </DockIcon>
        ))}
      </motion.div>
    </div>
  );
}

export default Dock;

