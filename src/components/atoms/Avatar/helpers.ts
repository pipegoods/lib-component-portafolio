type TAvatarSize = {
  [key: string]: number;
};

const avatarSize: TAvatarSize = {
  sm: 22,
  md: 44,
  lg: 66
};

export const mapSize = (size: keyof typeof avatarSize) => avatarSize[size];
