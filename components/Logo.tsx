"use client";

/**
 * 江河传记 Logo
 * 山峰+河流+卷轴，暖棕底色
 */
export function Logo({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/biography-prototype/images/logo.png"
      alt="江河传记"
      width={size}
      height={size}
      style={{ borderRadius: size * 0.25, objectFit: "cover" }}
    />
  );
}
